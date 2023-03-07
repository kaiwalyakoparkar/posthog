import { TrendAPIResponse } from '~/types'

export const trendResult: TrendAPIResponse = {
    result: [
        {
            action: {
                id: '$pageview',
                type: 'events',
                order: 0,
                name: '$pageview',
                custom_name: null,
                math: null,
                math_property: null,
                math_group_type_index: null,
                properties: {},
            },
            label: '$pageview',
            count: 538545.0,
            data: [87830.0, 91561.0, 104892.0, 74522.0, 26535.0, 35259.0, 91718.0, 26228.0],
            labels: [
                '28-Feb-2023',
                '1-Mar-2023',
                '2-Mar-2023',
                '3-Mar-2023',
                '4-Mar-2023',
                '5-Mar-2023',
                '6-Mar-2023',
                '7-Mar-2023',
            ],
            days: [
                '2023-02-28',
                '2023-03-01',
                '2023-03-02',
                '2023-03-03',
                '2023-03-04',
                '2023-03-05',
                '2023-03-06',
                '2023-03-07',
            ],
            persons_urls: [
                {
                    filter: {
                        entity_id: '$pageview',
                        entity_type: 'events',
                        entity_math: null,
                        date_from: '2023-02-28T00:00:00-08:00',
                        date_to: '2023-02-28T23:59:59.999999-08:00',
                        entity_order: 0,
                    },
                    url: 'api/projects/2/persons/trends/?breakdown_attribution_type=first_touch&breakdown_normalize_url=False&date_from=2023-02-28T00%3A00%3A00-08%3A00&display=ActionsLineGraph&events=%5B%7B%22id%22%3A+%22%24pageview%22%2C+%22type%22%3A+%22events%22%2C+%22order%22%3A+0%2C+%22name%22%3A+%22%24pageview%22%2C+%22custom_name%22%3A+null%2C+%22math%22%3A+null%2C+%22math_property%22%3A+null%2C+%22math_group_type_index%22%3A+null%2C+%22properties%22%3A+%7B%7D%7D%5D&insight=TRENDS&interval=day&properties=%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22email%22%2C+%22operator%22%3A+%22not_icontains%22%2C+%22type%22%3A+%22person%22%2C+%22value%22%3A+%22posthog.com%22%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22%24host%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22event%22%2C+%22value%22%3A+%5B%22127.0.0.1%3A3000%22%2C+%22127.0.0.1%3A5000%22%2C+%22localhost%3A5000%22%2C+%22localhost%3A8000%22%2C+%22localhost%3A8001%22%2C+%22localhost%22%5D%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22distinct_id%22%2C+%22operator%22%3A+%22not_icontains%22%2C+%22type%22%3A+%22event%22%2C+%22value%22%3A+%22posthog.com%22%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22email%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22person%22%2C+%22value%22%3A+%5B%22capturi%40capturi.com%22%5D%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22email%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22person%22%2C+%22value%22%3A+%5B%22fuziontech%40gmail.com%22%5D%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22realm%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22event%22%2C+%22value%22%3A+%5B%22demo%22%5D%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22%24ip%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22event%22%2C+%22value%22%3A+%5B%2271.84.26.175%22%5D%7D%5D%7D%5D%7D&sampling_factor=&smoothing_intervals=1&entity_id=%24pageview&entity_type=events&date_to=2023-02-28T23%3A59%3A59.999999-08%3A00&entity_order=0',
                },
                {
                    filter: {
                        entity_id: '$pageview',
                        entity_type: 'events',
                        entity_math: null,
                        date_from: '2023-03-01T00:00:00-08:00',
                        date_to: '2023-03-01T23:59:59.999999-08:00',
                        entity_order: 0,
                    },
                    url: 'api/projects/2/persons/trends/?breakdown_attribution_type=first_touch&breakdown_normalize_url=False&date_from=2023-03-01T00%3A00%3A00-08%3A00&display=ActionsLineGraph&events=%5B%7B%22id%22%3A+%22%24pageview%22%2C+%22type%22%3A+%22events%22%2C+%22order%22%3A+0%2C+%22name%22%3A+%22%24pageview%22%2C+%22custom_name%22%3A+null%2C+%22math%22%3A+null%2C+%22math_property%22%3A+null%2C+%22math_group_type_index%22%3A+null%2C+%22properties%22%3A+%7B%7D%7D%5D&insight=TRENDS&interval=day&properties=%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22email%22%2C+%22operator%22%3A+%22not_icontains%22%2C+%22type%22%3A+%22person%22%2C+%22value%22%3A+%22posthog.com%22%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22%24host%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22event%22%2C+%22value%22%3A+%5B%22127.0.0.1%3A3000%22%2C+%22127.0.0.1%3A5000%22%2C+%22localhost%3A5000%22%2C+%22localhost%3A8000%22%2C+%22localhost%3A8001%22%2C+%22localhost%22%5D%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22distinct_id%22%2C+%22operator%22%3A+%22not_icontains%22%2C+%22type%22%3A+%22event%22%2C+%22value%22%3A+%22posthog.com%22%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22email%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22person%22%2C+%22value%22%3A+%5B%22capturi%40capturi.com%22%5D%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22email%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22person%22%2C+%22value%22%3A+%5B%22fuziontech%40gmail.com%22%5D%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22realm%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22event%22%2C+%22value%22%3A+%5B%22demo%22%5D%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22%24ip%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22event%22%2C+%22value%22%3A+%5B%2271.84.26.175%22%5D%7D%5D%7D%5D%7D&sampling_factor=&smoothing_intervals=1&entity_id=%24pageview&entity_type=events&date_to=2023-03-01T23%3A59%3A59.999999-08%3A00&entity_order=0',
                },
                {
                    filter: {
                        entity_id: '$pageview',
                        entity_type: 'events',
                        entity_math: null,
                        date_from: '2023-03-02T00:00:00-08:00',
                        date_to: '2023-03-02T23:59:59.999999-08:00',
                        entity_order: 0,
                    },
                    url: 'api/projects/2/persons/trends/?breakdown_attribution_type=first_touch&breakdown_normalize_url=False&date_from=2023-03-02T00%3A00%3A00-08%3A00&display=ActionsLineGraph&events=%5B%7B%22id%22%3A+%22%24pageview%22%2C+%22type%22%3A+%22events%22%2C+%22order%22%3A+0%2C+%22name%22%3A+%22%24pageview%22%2C+%22custom_name%22%3A+null%2C+%22math%22%3A+null%2C+%22math_property%22%3A+null%2C+%22math_group_type_index%22%3A+null%2C+%22properties%22%3A+%7B%7D%7D%5D&insight=TRENDS&interval=day&properties=%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22email%22%2C+%22operator%22%3A+%22not_icontains%22%2C+%22type%22%3A+%22person%22%2C+%22value%22%3A+%22posthog.com%22%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22%24host%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22event%22%2C+%22value%22%3A+%5B%22127.0.0.1%3A3000%22%2C+%22127.0.0.1%3A5000%22%2C+%22localhost%3A5000%22%2C+%22localhost%3A8000%22%2C+%22localhost%3A8001%22%2C+%22localhost%22%5D%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22distinct_id%22%2C+%22operator%22%3A+%22not_icontains%22%2C+%22type%22%3A+%22event%22%2C+%22value%22%3A+%22posthog.com%22%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22email%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22person%22%2C+%22value%22%3A+%5B%22capturi%40capturi.com%22%5D%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22email%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22person%22%2C+%22value%22%3A+%5B%22fuziontech%40gmail.com%22%5D%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22realm%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22event%22%2C+%22value%22%3A+%5B%22demo%22%5D%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22%24ip%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22event%22%2C+%22value%22%3A+%5B%2271.84.26.175%22%5D%7D%5D%7D%5D%7D&sampling_factor=&smoothing_intervals=1&entity_id=%24pageview&entity_type=events&date_to=2023-03-02T23%3A59%3A59.999999-08%3A00&entity_order=0',
                },
                {
                    filter: {
                        entity_id: '$pageview',
                        entity_type: 'events',
                        entity_math: null,
                        date_from: '2023-03-03T00:00:00-08:00',
                        date_to: '2023-03-03T23:59:59.999999-08:00',
                        entity_order: 0,
                    },
                    url: 'api/projects/2/persons/trends/?breakdown_attribution_type=first_touch&breakdown_normalize_url=False&date_from=2023-03-03T00%3A00%3A00-08%3A00&display=ActionsLineGraph&events=%5B%7B%22id%22%3A+%22%24pageview%22%2C+%22type%22%3A+%22events%22%2C+%22order%22%3A+0%2C+%22name%22%3A+%22%24pageview%22%2C+%22custom_name%22%3A+null%2C+%22math%22%3A+null%2C+%22math_property%22%3A+null%2C+%22math_group_type_index%22%3A+null%2C+%22properties%22%3A+%7B%7D%7D%5D&insight=TRENDS&interval=day&properties=%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22email%22%2C+%22operator%22%3A+%22not_icontains%22%2C+%22type%22%3A+%22person%22%2C+%22value%22%3A+%22posthog.com%22%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22%24host%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22event%22%2C+%22value%22%3A+%5B%22127.0.0.1%3A3000%22%2C+%22127.0.0.1%3A5000%22%2C+%22localhost%3A5000%22%2C+%22localhost%3A8000%22%2C+%22localhost%3A8001%22%2C+%22localhost%22%5D%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22distinct_id%22%2C+%22operator%22%3A+%22not_icontains%22%2C+%22type%22%3A+%22event%22%2C+%22value%22%3A+%22posthog.com%22%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22email%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22person%22%2C+%22value%22%3A+%5B%22capturi%40capturi.com%22%5D%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22email%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22person%22%2C+%22value%22%3A+%5B%22fuziontech%40gmail.com%22%5D%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22realm%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22event%22%2C+%22value%22%3A+%5B%22demo%22%5D%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22%24ip%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22event%22%2C+%22value%22%3A+%5B%2271.84.26.175%22%5D%7D%5D%7D%5D%7D&sampling_factor=&smoothing_intervals=1&entity_id=%24pageview&entity_type=events&date_to=2023-03-03T23%3A59%3A59.999999-08%3A00&entity_order=0',
                },
                {
                    filter: {
                        entity_id: '$pageview',
                        entity_type: 'events',
                        entity_math: null,
                        date_from: '2023-03-04T00:00:00-08:00',
                        date_to: '2023-03-04T23:59:59.999999-08:00',
                        entity_order: 0,
                    },
                    url: 'api/projects/2/persons/trends/?breakdown_attribution_type=first_touch&breakdown_normalize_url=False&date_from=2023-03-04T00%3A00%3A00-08%3A00&display=ActionsLineGraph&events=%5B%7B%22id%22%3A+%22%24pageview%22%2C+%22type%22%3A+%22events%22%2C+%22order%22%3A+0%2C+%22name%22%3A+%22%24pageview%22%2C+%22custom_name%22%3A+null%2C+%22math%22%3A+null%2C+%22math_property%22%3A+null%2C+%22math_group_type_index%22%3A+null%2C+%22properties%22%3A+%7B%7D%7D%5D&insight=TRENDS&interval=day&properties=%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22email%22%2C+%22operator%22%3A+%22not_icontains%22%2C+%22type%22%3A+%22person%22%2C+%22value%22%3A+%22posthog.com%22%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22%24host%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22event%22%2C+%22value%22%3A+%5B%22127.0.0.1%3A3000%22%2C+%22127.0.0.1%3A5000%22%2C+%22localhost%3A5000%22%2C+%22localhost%3A8000%22%2C+%22localhost%3A8001%22%2C+%22localhost%22%5D%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22distinct_id%22%2C+%22operator%22%3A+%22not_icontains%22%2C+%22type%22%3A+%22event%22%2C+%22value%22%3A+%22posthog.com%22%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22email%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22person%22%2C+%22value%22%3A+%5B%22capturi%40capturi.com%22%5D%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22email%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22person%22%2C+%22value%22%3A+%5B%22fuziontech%40gmail.com%22%5D%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22realm%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22event%22%2C+%22value%22%3A+%5B%22demo%22%5D%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22%24ip%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22event%22%2C+%22value%22%3A+%5B%2271.84.26.175%22%5D%7D%5D%7D%5D%7D&sampling_factor=&smoothing_intervals=1&entity_id=%24pageview&entity_type=events&date_to=2023-03-04T23%3A59%3A59.999999-08%3A00&entity_order=0',
                },
                {
                    filter: {
                        entity_id: '$pageview',
                        entity_type: 'events',
                        entity_math: null,
                        date_from: '2023-03-05T00:00:00-08:00',
                        date_to: '2023-03-05T23:59:59.999999-08:00',
                        entity_order: 0,
                    },
                    url: 'api/projects/2/persons/trends/?breakdown_attribution_type=first_touch&breakdown_normalize_url=False&date_from=2023-03-05T00%3A00%3A00-08%3A00&display=ActionsLineGraph&events=%5B%7B%22id%22%3A+%22%24pageview%22%2C+%22type%22%3A+%22events%22%2C+%22order%22%3A+0%2C+%22name%22%3A+%22%24pageview%22%2C+%22custom_name%22%3A+null%2C+%22math%22%3A+null%2C+%22math_property%22%3A+null%2C+%22math_group_type_index%22%3A+null%2C+%22properties%22%3A+%7B%7D%7D%5D&insight=TRENDS&interval=day&properties=%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22email%22%2C+%22operator%22%3A+%22not_icontains%22%2C+%22type%22%3A+%22person%22%2C+%22value%22%3A+%22posthog.com%22%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22%24host%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22event%22%2C+%22value%22%3A+%5B%22127.0.0.1%3A3000%22%2C+%22127.0.0.1%3A5000%22%2C+%22localhost%3A5000%22%2C+%22localhost%3A8000%22%2C+%22localhost%3A8001%22%2C+%22localhost%22%5D%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22distinct_id%22%2C+%22operator%22%3A+%22not_icontains%22%2C+%22type%22%3A+%22event%22%2C+%22value%22%3A+%22posthog.com%22%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22email%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22person%22%2C+%22value%22%3A+%5B%22capturi%40capturi.com%22%5D%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22email%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22person%22%2C+%22value%22%3A+%5B%22fuziontech%40gmail.com%22%5D%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22realm%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22event%22%2C+%22value%22%3A+%5B%22demo%22%5D%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22%24ip%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22event%22%2C+%22value%22%3A+%5B%2271.84.26.175%22%5D%7D%5D%7D%5D%7D&sampling_factor=&smoothing_intervals=1&entity_id=%24pageview&entity_type=events&date_to=2023-03-05T23%3A59%3A59.999999-08%3A00&entity_order=0',
                },
                {
                    filter: {
                        entity_id: '$pageview',
                        entity_type: 'events',
                        entity_math: null,
                        date_from: '2023-03-06T00:00:00-08:00',
                        date_to: '2023-03-06T23:59:59.999999-08:00',
                        entity_order: 0,
                    },
                    url: 'api/projects/2/persons/trends/?breakdown_attribution_type=first_touch&breakdown_normalize_url=False&date_from=2023-03-06T00%3A00%3A00-08%3A00&display=ActionsLineGraph&events=%5B%7B%22id%22%3A+%22%24pageview%22%2C+%22type%22%3A+%22events%22%2C+%22order%22%3A+0%2C+%22name%22%3A+%22%24pageview%22%2C+%22custom_name%22%3A+null%2C+%22math%22%3A+null%2C+%22math_property%22%3A+null%2C+%22math_group_type_index%22%3A+null%2C+%22properties%22%3A+%7B%7D%7D%5D&insight=TRENDS&interval=day&properties=%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22email%22%2C+%22operator%22%3A+%22not_icontains%22%2C+%22type%22%3A+%22person%22%2C+%22value%22%3A+%22posthog.com%22%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22%24host%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22event%22%2C+%22value%22%3A+%5B%22127.0.0.1%3A3000%22%2C+%22127.0.0.1%3A5000%22%2C+%22localhost%3A5000%22%2C+%22localhost%3A8000%22%2C+%22localhost%3A8001%22%2C+%22localhost%22%5D%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22distinct_id%22%2C+%22operator%22%3A+%22not_icontains%22%2C+%22type%22%3A+%22event%22%2C+%22value%22%3A+%22posthog.com%22%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22email%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22person%22%2C+%22value%22%3A+%5B%22capturi%40capturi.com%22%5D%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22email%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22person%22%2C+%22value%22%3A+%5B%22fuziontech%40gmail.com%22%5D%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22realm%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22event%22%2C+%22value%22%3A+%5B%22demo%22%5D%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22%24ip%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22event%22%2C+%22value%22%3A+%5B%2271.84.26.175%22%5D%7D%5D%7D%5D%7D&sampling_factor=&smoothing_intervals=1&entity_id=%24pageview&entity_type=events&date_to=2023-03-06T23%3A59%3A59.999999-08%3A00&entity_order=0',
                },
                {
                    filter: {
                        entity_id: '$pageview',
                        entity_type: 'events',
                        entity_math: null,
                        date_from: '2023-03-07T00:00:00-08:00',
                        date_to: '2023-03-07T23:59:59.999999-08:00',
                        entity_order: 0,
                    },
                    url: 'api/projects/2/persons/trends/?breakdown_attribution_type=first_touch&breakdown_normalize_url=False&date_from=2023-03-07T00%3A00%3A00-08%3A00&display=ActionsLineGraph&events=%5B%7B%22id%22%3A+%22%24pageview%22%2C+%22type%22%3A+%22events%22%2C+%22order%22%3A+0%2C+%22name%22%3A+%22%24pageview%22%2C+%22custom_name%22%3A+null%2C+%22math%22%3A+null%2C+%22math_property%22%3A+null%2C+%22math_group_type_index%22%3A+null%2C+%22properties%22%3A+%7B%7D%7D%5D&insight=TRENDS&interval=day&properties=%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22email%22%2C+%22operator%22%3A+%22not_icontains%22%2C+%22type%22%3A+%22person%22%2C+%22value%22%3A+%22posthog.com%22%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22%24host%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22event%22%2C+%22value%22%3A+%5B%22127.0.0.1%3A3000%22%2C+%22127.0.0.1%3A5000%22%2C+%22localhost%3A5000%22%2C+%22localhost%3A8000%22%2C+%22localhost%3A8001%22%2C+%22localhost%22%5D%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22distinct_id%22%2C+%22operator%22%3A+%22not_icontains%22%2C+%22type%22%3A+%22event%22%2C+%22value%22%3A+%22posthog.com%22%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22email%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22person%22%2C+%22value%22%3A+%5B%22capturi%40capturi.com%22%5D%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22email%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22person%22%2C+%22value%22%3A+%5B%22fuziontech%40gmail.com%22%5D%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22realm%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22event%22%2C+%22value%22%3A+%5B%22demo%22%5D%7D%5D%7D%2C+%7B%22type%22%3A+%22AND%22%2C+%22values%22%3A+%5B%7B%22key%22%3A+%22%24ip%22%2C+%22operator%22%3A+%22is_not%22%2C+%22type%22%3A+%22event%22%2C+%22value%22%3A+%5B%2271.84.26.175%22%5D%7D%5D%7D%5D%7D&sampling_factor=&smoothing_intervals=1&entity_id=%24pageview&entity_type=events&date_to=2023-03-07T23%3A59%3A59.999999-08%3A00&entity_order=0',
                },
            ],
            filter: {
                breakdown_attribution_type: 'first_touch',
                breakdown_normalize_url: false,
                date_from: '-7d',
                display: 'ActionsLineGraph',
                events: [
                    {
                        id: '$pageview',
                        type: 'events',
                        order: 0,
                        name: '$pageview',
                        custom_name: null,
                        math: null,
                        math_property: null,
                        math_group_type_index: null,
                        properties: {},
                    },
                ],
                insight: 'TRENDS',
                interval: 'day',
                properties: {
                    type: 'AND',
                    values: [
                        {
                            type: 'AND',
                            values: [{ key: 'email', operator: 'not_icontains', type: 'person', value: 'posthog.com' }],
                        },
                        {
                            type: 'AND',
                            values: [
                                {
                                    key: '$host',
                                    operator: 'is_not',
                                    type: 'event',
                                    value: [
                                        '127.0.0.1:3000',
                                        '127.0.0.1:5000',
                                        'localhost:5000',
                                        'localhost:8000',
                                        'localhost:8001',
                                        'localhost',
                                    ],
                                },
                            ],
                        },
                        {
                            type: 'AND',
                            values: [
                                { key: 'distinct_id', operator: 'not_icontains', type: 'event', value: 'posthog.com' },
                            ],
                        },
                        {
                            type: 'AND',
                            values: [
                                { key: 'email', operator: 'is_not', type: 'person', value: ['capturi@capturi.com'] },
                            ],
                        },
                        {
                            type: 'AND',
                            values: [
                                { key: 'email', operator: 'is_not', type: 'person', value: ['fuziontech@gmail.com'] },
                            ],
                        },
                        { type: 'AND', values: [{ key: 'realm', operator: 'is_not', type: 'event', value: ['demo'] }] },
                        {
                            type: 'AND',
                            values: [{ key: '$ip', operator: 'is_not', type: 'event', value: ['71.84.26.175'] }],
                        },
                    ],
                },
                sampling_factor: '',
                smoothing_intervals: 1,
            },
        },
    ],
    type: 'Trends',
    last_refresh: '2023-03-07T13:42:17.746798Z',
    is_cached: true,
    next: null,
}
