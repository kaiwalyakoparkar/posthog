import { IconCheckCircle, IconInfo, IconTarget, IconTrash } from '@posthog/icons'
import { LemonBanner, LemonButton, LemonCollapse, LemonInput, LemonLabel } from '@posthog/lemon-ui'
import { useActions, useValues } from 'kea'
import { iframedToolbarBrowserLogic } from 'lib/components/IframedToolbarBrowser/iframedToolbarBrowserLogic'
import { useEffect, useState } from 'react'
import { dashboardTemplateVariablesLogic } from 'scenes/dashboard/dashboardTemplateVariablesLogic'
import { newDashboardLogic } from 'scenes/dashboard/newDashboardLogic'

import { DashboardTemplateVariableType } from '~/types'

function VariableSelector({
    variableName,
    hasSelectedSite,
    iframeRef,
}: {
    variableName: string
    hasSelectedSite: boolean
    iframeRef: React.RefObject<HTMLIFrameElement>
}): JSX.Element {
    const { activeDashboardTemplate } = useValues(newDashboardLogic)
    const theDashboardTemplateVariablesLogic = dashboardTemplateVariablesLogic({
        variables: activeDashboardTemplate?.variables || [],
    })
    const { setVariable, resetVariable, goToNextUntouchedActiveVariableIndex, incrementActiveVariableIndex } =
        useActions(theDashboardTemplateVariablesLogic)
    const { allVariablesAreTouched, variables, activeVariableIndex } = useValues(theDashboardTemplateVariablesLogic)
    const [customEventName, setCustomEventName] = useState<string | null>(null)
    const [showCustomEventField, setShowCustomEventField] = useState(false)
    const { enableElementSelector, disableElementSelector, setNewActionName } = useActions(
        iframedToolbarBrowserLogic({ iframeRef, clearBrowserUrlOnUnmount: true })
    )

    const variable: DashboardTemplateVariableType | undefined = variables.find((v) => v.name === variableName)
    if (!variable) {
        return <></>
    }

    return (
        <div className="pl-7">
            <div className="mb-2">
                <p>
                    <IconInfo /> {variable.description}
                </p>
            </div>
            {variable.touched && !customEventName && (
                <div className="flex justify-between items-center bg-bg-3000-light p-2 pl-3 rounded mb-4">
                    <div>
                        <p className="mb-2">
                            <IconCheckCircle className="text-success font-bold" />{' '}
                            <span className="text-success font-bold">Selected</span>
                        </p>
                        <div className="ml-4">
                            <p className="text-muted mb-0 text-xs">
                                <span className="font-bold">CSS selector:</span>{' '}
                                {variable.default.selector || 'not set'}
                            </p>
                            <p className="text-muted mb-0 text-xs">
                                <span className="font-bold">Element href:</span> {variable.default.href || 'not set'}
                            </p>
                            <p className="text-muted mb-1 text-xs">
                                <span className="font-bold">Page URL:</span> {variable.default.url || 'any url'}
                            </p>
                        </div>
                    </div>
                    <div>
                        <LemonButton
                            icon={<IconTrash />}
                            type="tertiary"
                            size="small"
                            onClick={() => resetVariable(variable.id)}
                        />
                    </div>
                </div>
            )}
            {showCustomEventField && (
                <div className="mb-4">
                    <LemonLabel>Custom event name</LemonLabel>
                    <p>
                        Set the name that you'll use for a custom event (eg. a backend event) instead of selecting an
                        event from your site. You can change this later if needed.
                    </p>
                    <div className="flex gap-x-2 w-full">
                        <LemonInput
                            className="grow"
                            onChange={(v) => {
                                if (v) {
                                    setCustomEventName(v)
                                    setVariable(variable.name, {
                                        events: [{ id: v, math: 'dau', type: 'events' }],
                                    })
                                } else {
                                    setCustomEventName(null)
                                    resetVariable(variable.id)
                                }
                            }}
                            onBlur={() => {
                                if (customEventName) {
                                    setVariable(variable.name, {
                                        events: [{ id: customEventName, math: 'dau', type: 'events' }],
                                    })
                                } else {
                                    resetVariable(variable.id)
                                    setShowCustomEventField(false)
                                }
                            }}
                        />
                        <div>
                            <LemonButton
                                icon={<IconTrash />}
                                type="tertiary"
                                size="small"
                                onClick={() => {
                                    disableElementSelector()
                                    setNewActionName(null)
                                    resetVariable(variable.id)
                                    setCustomEventName(null)
                                    setShowCustomEventField(false)
                                }}
                            />
                        </div>
                    </div>
                </div>
            )}
            {!hasSelectedSite ? (
                <LemonBanner type="warning">Please select a site to continue. </LemonBanner>
            ) : (
                <div className="flex">
                    {variable.touched ? (
                        <>
                            {!allVariablesAreTouched ||
                            (allVariablesAreTouched && variables.length !== activeVariableIndex + 1) ? (
                                <LemonButton
                                    type="primary"
                                    status="alt"
                                    onClick={() =>
                                        !allVariablesAreTouched
                                            ? goToNextUntouchedActiveVariableIndex()
                                            : variables.length !== activeVariableIndex + 1
                                            ? incrementActiveVariableIndex()
                                            : null
                                    }
                                >
                                    Continue
                                </LemonButton>
                            ) : null}
                        </>
                    ) : (
                        <div className="flex gap-x-2">
                            <LemonButton
                                type="primary"
                                status="alt"
                                onClick={() => {
                                    setShowCustomEventField(false)
                                    enableElementSelector()
                                    setNewActionName(variable.name)
                                }}
                                icon={<IconTarget />}
                            >
                                Select from site
                            </LemonButton>
                            <LemonButton
                                type="secondary"
                                onClick={() => {
                                    disableElementSelector()
                                    setNewActionName(null)
                                    setShowCustomEventField(true)
                                }}
                            >
                                Use custom event
                            </LemonButton>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export function DashboardTemplateVariables({
    hasSelectedSite,
    iframeRef,
}: {
    hasSelectedSite: boolean
    iframeRef: React.RefObject<HTMLIFrameElement>
}): JSX.Element {
    const { activeDashboardTemplate } = useValues(newDashboardLogic)
    const theDashboardTemplateVariablesLogic = dashboardTemplateVariablesLogic({
        variables: activeDashboardTemplate?.variables || [],
    })
    const { variables, activeVariableIndex } = useValues(theDashboardTemplateVariablesLogic)
    const { setVariables, setActiveVariableIndex } = useActions(theDashboardTemplateVariablesLogic)
    const { setNewActionName, disableElementSelector } = useActions(
        iframedToolbarBrowserLogic({ iframeRef, clearBrowserUrlOnUnmount: true })
    )

    // TODO: onboarding-dashboard-templates: this is a hack, I'm not sure why it's not set properly initially.
    useEffect(() => {
        setVariables(activeDashboardTemplate?.variables || [])
    }, [activeDashboardTemplate])

    return (
        <div className="mb-4 DashboardTemplateVariables max-w-192">
            <LemonCollapse
                activeKey={variables[activeVariableIndex]?.id}
                panels={variables.map((v, i) => ({
                    key: v.id,
                    header: (
                        <div>
                            {v.name}
                            {v.touched && <IconCheckCircle className="text-success ml-2 text-base" />}
                        </div>
                    ),
                    content: (
                        <VariableSelector
                            variableName={v.name}
                            {...v}
                            hasSelectedSite={hasSelectedSite}
                            iframeRef={iframeRef}
                        />
                    ),
                    className: 'p-4 bg-white',
                    onHeaderClick: () => {
                        setActiveVariableIndex(i)
                        disableElementSelector()
                        setNewActionName(null)
                    },
                }))}
                embedded
                size="small"
            />
        </div>
    )
}
