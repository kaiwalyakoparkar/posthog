import { Tabs } from 'antd'
import { useActions, useValues } from 'kea'
import { isMobile } from 'lib/utils'
import React, { ReactNode, RefObject, useMemo, useRef } from 'react'
import { HotKeys, InsightType } from '~/types'
import { insightLogic } from './insightLogic'
import { Tooltip } from 'lib/components/Tooltip'
import clsx from 'clsx'
import { FunnelsCue } from './InsightTabs/TrendTab/FunnelsCue'
import { INSIGHT_TYPES_METADATA } from 'scenes/saved-insights/SavedInsights'
import { Link } from 'lib/components/Link'
import { urls } from 'scenes/urls'

const { TabPane } = Tabs

function InsightHotkey({ hotkey }: { hotkey: HotKeys }): JSX.Element {
    return !isMobile() ? <span className="hotkey">{hotkey}</span> : <></>
}

interface Tab {
    label: string
    type: InsightType
    dataAttr: string
    hotkey: HotKeys
    ref?: RefObject<HTMLSpanElement>
    className?: string
}

export function InsightsNav(): JSX.Element {
    const { activeView, filters } = useValues(insightLogic)
    const { setActiveView } = useActions(insightLogic)
    const funnelTab = useRef<HTMLSpanElement>(null)

    const tabs: Tab[] = useMemo(
        () => [
            {
                label: 'Trends',
                type: InsightType.TRENDS,
                dataAttr: 'insight-trends-tab',
                hotkey: 't',
            },
            {
                label: 'Funnels',
                type: InsightType.FUNNELS,
                dataAttr: 'insight-funnels-tab',
                hotkey: 'f',
                ref: funnelTab,
            },
            {
                label: 'Retention',
                type: InsightType.RETENTION,
                dataAttr: 'insight-retention-tab',
                hotkey: 'r',
            },
            {
                label: 'User Paths',
                type: InsightType.PATHS,
                dataAttr: 'insight-path-tab',
                hotkey: 'p',
            },
            {
                label: 'Stickiness',
                type: InsightType.STICKINESS,
                dataAttr: 'insight-stickiness-tab',
                hotkey: 'i',
            },
            {
                label: 'Lifecycle',
                type: InsightType.LIFECYCLE,
                dataAttr: 'insight-lifecycle-tab',
                hotkey: 'l',
            },
            {
                label: 'Query',
                type: InsightType.QUERY,
                dataAttr: 'insight-query-tab',
                hotkey: 'q',
            },
        ],
        [funnelTab]
    )

    return (
        <>
            <FunnelsCue
                tooltipPosition={
                    // 1.5x because it's 2 tabs (trends & funnels) + margin between tabs
                    funnelTab?.current ? funnelTab.current.getBoundingClientRect().width * 1.5 + 16 : undefined
                }
            />
            <Tabs
                activeKey={activeView}
                className="top-bar"
                onChange={(key) => setActiveView(key as InsightType)}
                animated={false}
            >
                {tabs.map(({ label, type, dataAttr, hotkey, ref, className }) => {
                    const Outer = ({ children }: { children: ReactNode }): JSX.Element =>
                        INSIGHT_TYPES_METADATA[type]?.description ? (
                            <Tooltip placement="top" title={INSIGHT_TYPES_METADATA[type].description}>
                                {children}
                            </Tooltip>
                        ) : (
                            <span ref={ref}>{children}</span>
                        )
                    return (
                        <TabPane
                            key={type}
                            tab={
                                <Link
                                    className={clsx('tab-text', className)}
                                    to={urls.insightNew({ ...filters, insight: type })}
                                    preventClick
                                    data-attr={dataAttr}
                                >
                                    <Outer>
                                        {label}
                                        <InsightHotkey hotkey={hotkey} />
                                    </Outer>
                                </Link>
                            }
                        />
                    )
                })}
            </Tabs>
        </>
    )
}
