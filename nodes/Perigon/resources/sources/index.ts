import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSources = {
	resource: ['sources'],
};

export const sourcesDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		credentialTypes: ['has:authenticate'],
		displayOptions: {
			show: showOnlyForSources,
		},
		options: [
			{
				name: 'Search',
				value: 'search',
				action: 'Search sources',
				description: 'Search and filter 142,000+ media sources available via the Perigon API',
				routing: {
					request: {
						method: 'GET',
						url: '/sources/all',
					},
				},
			},
		],
		default: 'search',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: {
				...showOnlyForSources,
				operation: ['search'],
			},
		},
		default: '',
		placeholder: 'CNN OR BBC',
		description: 'Search by source name. Supports Boolean operators (AND, OR, NOT) and wildcards.',
		routing: {
			send: {
				type: 'query',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Additional Options',
		name: 'additionalOptions',
		type: 'collection',
		placeholder: 'Add Option',
		displayOptions: {
			show: {
				...showOnlyForSources,
				operation: ['search'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Category',
				name: 'category',
				type: 'string',
				default: '',
				placeholder: 'Tech,Politics',
				description: 'Filter by primary content categories (comma-separated)',
				routing: {
					send: {
						type: 'query',
						property: 'category',
						value:
							'={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
					},
				},
			},
			{
				displayName: 'Country',
				name: 'country',
				type: 'string',
				default: '',
				placeholder: 'us,gb,ca',
				description: 'Filter by country codes (comma-separated)',
				routing: {
					send: {
						type: 'query',
						property: 'country',
						value:
							'={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
					},
				},
			},
			{
				displayName: 'Domain',
				name: 'domain',
				type: 'string',
				default: '',
				placeholder: 'cnn.com,*.bbc.com',
				description: 'Filter by domains. Supports wildcards (comma-separated).',
				routing: {
					send: {
						type: 'query',
						property: 'domain',
						value:
							'={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
					},
				},
			},
			{
				displayName: 'Max Monthly Visits',
				name: 'maxMonthlyVisits',
				type: 'number',
				default: 0,
				description: 'Filter for sources with no more than this many monthly visitors',
				routing: {
					send: {
						type: 'query',
						property: 'maxMonthlyVisits',
						value: '={{ $value > 0 ? $value : undefined }}',
					},
				},
			},
			{
				displayName: 'Min Monthly Visits',
				name: 'minMonthlyVisits',
				type: 'number',
				default: 0,
				description: 'Filter for sources with at least this many monthly visitors',
				routing: {
					send: {
						type: 'query',
						property: 'minMonthlyVisits',
						value: '={{ $value > 0 ? $value : undefined }}',
					},
				},
			},
			{
				displayName: 'Page',
				name: 'page',
				type: 'number',
				typeOptions: {
					minValue: 0,
					maxValue: 10000,
				},
				default: 0,
				description: 'Page number for pagination (0-based)',
				routing: {
					send: {
						type: 'query',
						property: 'page',
					},
				},
			},
			{
				displayName: 'Paywall',
				name: 'paywall',
				type: 'boolean',
				default: false,
				description: 'Whether to filter by paywall status',
				routing: {
					send: {
						type: 'query',
						property: 'paywall',
					},
				},
			},
			{
				displayName: 'Show Num Results',
				name: 'showNumResults',
				type: 'boolean',
				default: false,
				description: 'Whether to show the total number of matched sources',
				routing: {
					send: {
						type: 'query',
						property: 'showNumResults',
					},
				},
			},
			{
				displayName: 'Size',
				name: 'size',
				type: 'number',
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				default: 10,
				description: 'Number of results to return',
				routing: {
					send: {
						type: 'query',
						property: 'size',
					},
				},
			},
			{
				displayName: 'Sort By',
				name: 'sortBy',
				type: 'options',
				options: [
					{ name: 'Relevance', value: 'relevance' },
					{ name: 'Global Rank', value: 'globalRank' },
					{ name: 'Monthly Visits', value: 'monthlyVisits' },
					{ name: 'Avg Monthly Posts', value: 'avgMonthlyPosts' },
				],
				default: 'relevance',
				description: 'Sort order for results',
				routing: {
					send: {
						type: 'query',
						property: 'sortBy',
					},
				},
			},
			{
				displayName: 'Source Group',
				name: 'sourceGroup',
				type: 'string',
				default: '',
				placeholder: 'top100',
				description: 'Filter by predefined publisher bundle',
				routing: {
					send: {
						type: 'query',
						property: 'sourceGroup',
					},
				},
			},
		],
	},
];
