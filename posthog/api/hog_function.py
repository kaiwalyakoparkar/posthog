import structlog
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import serializers, viewsets
from rest_framework.serializers import BaseSerializer

from posthog.api.forbid_destroy_model import ForbidDestroyModel
from posthog.api.log_entries import LogEntryMixin
from posthog.api.routing import TeamAndOrgViewSetMixin
from posthog.api.shared import UserBasicSerializer

from posthog.cdp.validation import compile_hog, validate_inputs, validate_inputs_schema
from posthog.models.hog_functions.hog_function import HogFunction
from posthog.permissions import PostHogFeatureFlagPermission


logger = structlog.get_logger(__name__)


class HogFunctionMinimalSerializer(serializers.ModelSerializer):
    created_by = UserBasicSerializer(read_only=True)

    class Meta:
        model = HogFunction
        fields = [
            "id",
            "name",
            "description",
            "created_at",
            "created_by",
            "updated_at",
            "enabled",
            "hog",
            "filters",
        ]
        read_only_fields = fields


class HogFunctionSerializer(HogFunctionMinimalSerializer):
    class Meta:
        model = HogFunction
        fields = [
            "id",
            "name",
            "description",
            "created_at",
            "created_by",
            "updated_at",
            "enabled",
            "hog",
            "bytecode",
            "inputs_schema",
            "inputs",
            "filters",
        ]
        read_only_fields = [
            "id",
            "created_at",
            "created_by",
            "updated_at",
            "bytecode",
        ]

    def validate_inputs_schema(self, value):
        return validate_inputs_schema(value)

    def validate(self, attrs):
        team = self.context["get_team"]()
        attrs["team"] = team
        attrs["inputs_schema"] = attrs.get("inputs_schema", [])
        attrs["filters"] = attrs.get("filters", {})
        attrs["inputs"] = validate_inputs(attrs["inputs_schema"], attrs.get("inputs", {}))
        attrs["bytecode"] = compile_hog(attrs["hog"])

        return attrs

    def create(self, validated_data: dict, *args, **kwargs) -> HogFunction:
        request = self.context["request"]
        validated_data["created_by"] = request.user
        return super().create(validated_data=validated_data)


class HogFunctionViewSet(TeamAndOrgViewSetMixin, LogEntryMixin, ForbidDestroyModel, viewsets.ModelViewSet):
    scope_object = "INTERNAL"  # Keep internal until we are happy to release this GA
    queryset = HogFunction.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ["id", "team", "created_by", "enabled"]

    permission_classes = [PostHogFeatureFlagPermission]
    posthog_feature_flag = {"hog-functions": ["create", "partial_update", "update"]}
    log_source = "hog_function"

    def get_serializer_class(self) -> type[BaseSerializer]:
        return HogFunctionMinimalSerializer if self.action == "list" else HogFunctionSerializer
