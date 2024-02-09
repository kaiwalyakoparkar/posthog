from django.db import models
from django.db.models import Q

from .utils import UUIDModel


class UserScenePersonalisation(UUIDModel):
    scene: models.CharField = models.CharField(max_length=200)
    dashboard: models.ForeignKey = models.ForeignKey("Dashboard", on_delete=models.CASCADE, null=True, blank=True)
    # an alternative scene to swap in e.g. show replay or a notebook on the homepage
    # accepts a long string as the scene might need config
    alternate_scene: models.CharField = models.CharField(max_length=8000, null=True, blank=True)
    team: models.ForeignKey = models.ForeignKey("Team", on_delete=models.CASCADE, null=True, blank=True)
    user: models.ForeignKey = models.ForeignKey(
        "User",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="scene_personalisation",
    )

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["team", "user", "scene"],
                name="posthog_unique_scene_personalisation",
            ),
            models.CheckConstraint(
                check=~Q(dashboard__isnull=False, alternate_scene__isnull=False),
                name="cannot_set_dashboard_and_alternate_scene",
            ),
        ]
