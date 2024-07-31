import { actions, connect, kea, path, reducers, selectors } from 'kea'
import { subscriptions } from 'kea-subscriptions'

import { DataTableNode, ErrorTrackingQuery } from '~/queries/schema'

import { errorTrackingLogic } from './errorTrackingLogic'
import type { errorTrackingSceneLogicType } from './errorTrackingSceneLogicType'
import { errorTrackingQuery } from './queries'

export const errorTrackingSceneLogic = kea<errorTrackingSceneLogicType>([
    path(['scenes', 'error-tracking', 'errorTrackingSceneLogic']),

    connect({
        values: [errorTrackingLogic, ['dateRange', 'filterTestAccounts', 'filterGroup', 'sparklineSelectedPeriod']],
    }),

    actions({
        setOrder: (order: ErrorTrackingQuery['order']) => ({ order }),
        setSelectedRows: (selectedRows: string[]) => ({ selectedRows }),
    }),
    reducers({
        order: [
            'last_seen' as ErrorTrackingQuery['order'],
            { persist: true },
            {
                setOrder: (_, { order }) => order,
            },
        ],
        selectedRows: [
            [] as string[],
            {
                setSelectedRows: (_, { selectedRows }) => selectedRows,
            },
        ],
    }),

    selectors({
        query: [
            (s) => [s.order, s.dateRange, s.filterTestAccounts, s.filterGroup, s.sparklineSelectedPeriod],
            (order, dateRange, filterTestAccounts, filterGroup, sparklineSelectedPeriod): DataTableNode =>
                errorTrackingQuery({
                    order,
                    dateRange,
                    filterTestAccounts,
                    filterGroup,
                    sparklineSelectedPeriod,
                }),
        ],
    }),

    subscriptions(({ actions }) => ({
        query: () => actions.setSelectedRows([]),
    })),
])
