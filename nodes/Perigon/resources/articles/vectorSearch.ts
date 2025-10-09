import type { INodeProperties } from 'n8n-workflow';

const showOnlyForArticlesVectorSearch = {
	operation: ['vectorSearch'],
	resource: ['articles'],
};

export const articlesVectorSearchDescription: INodeProperties[] = [
	{
		displayName: 'Prompt',
		name: 'prompt',
		type: 'string',
		displayOptions: {
			show: showOnlyForArticlesVectorSearch,
		},
		default: '',
		required: true,
		description: 'Natural language query for semantic search of articles',
		routing: {
			send: {
				type: 'body',
				property: 'prompt',
			},
		},
	},
	{
		displayName: 'Size',
		name: 'size',
		type: 'number',
		displayOptions: {
			show: showOnlyForArticlesVectorSearch,
		},
		typeOptions: {
			minValue: 1,
			maxValue: 1000,
		},
		default: 10,
		description: 'Number of results to return',
		routing: {
			send: {
				type: 'body',
				property: 'size',
			},
		},
	},
	{
		displayName: 'Additional Filters',
		name: 'filters',
		placeholder: 'Add Filter',
		type: 'fixedCollection',
		displayOptions: {
			show: showOnlyForArticlesVectorSearch,
		},
		default: {},
		typeOptions: {
			multipleValues: false,
		},
		options: [
			{
				name: 'filterOptions',
				displayName: 'Filter Options',
				values: [
					{
						displayName: 'Categories',
						name: 'categories',
						type: 'string',
						default: '',
						placeholder: 'Politics,Tech,Sports',
						description: 'Comma-separated list of categories',
					},
					{
						displayName: 'Cities',
						name: 'cities',
						type: 'string',
						default: '',
						placeholder: 'Austin,New York,Los Angeles',
						description: 'Comma-separated list of cities',
					},
					{
						displayName: 'Countries',
						name: 'countries',
						type: 'string',
						default: '',
						placeholder: 'us,ca,mx',
						description: 'Comma-separated list of country codes (e.g., us, ca, mx)',
					},
					{
						displayName: 'From Date',
						name: 'from',
						type: 'dateTime',
						default: '',
						description: 'Filter articles published after this date',
					},
					{
						displayName: 'Sort By',
						name: 'sortBy',
						type: 'options',
						options: [
							{
								name: 'Relevance',
								value: 'relevance',
							},
							{
								name: 'Date',
								value: 'date',
							},
							{
								name: 'Reverse Date',
								value: 'reverseDate',
							},
						],
						default: 'relevance',
						description: 'Sort order for results',
					},
					{
						displayName: 'Sources',
						name: 'sources',
						type: 'string',
						default: '',
						placeholder: 'cnn.com,bbc.com',
						description: 'Comma-separated list of source domains',
					},
					{
						displayName: 'States',
						name: 'states',
						type: 'string',
						default: '',
						placeholder: 'TX,CA,NY',
						description: 'Comma-separated list of state codes',
					},
					{
						displayName: 'To Date',
						name: 'to',
						type: 'dateTime',
						default: '',
						description: 'Filter articles published before this date',
					},
					{
						displayName: 'Topics',
						name: 'topics',
						type: 'string',
						default: '',
						placeholder: 'Markets,Cryptocurrency,Climate Change',
						description: 'Comma-separated list of topics',
					},
				],
			},
		],
	},
];
