import type { INodeProperties } from 'n8n-workflow';

const showOnlyForArticlesSearch = {
	operation: ['search'],
	resource: ['articles'],
};

export const articlesSearchDescription: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'q',
		type: 'string',
		displayOptions: {
			show: showOnlyForArticlesSearch,
		},
		default: '',
		placeholder: 'climate change AND renewable energy',
		description: 'Primary search query. Supports Boolean operators (AND, OR, NOT) and wildcards.',
		routing: {
			send: {
				type: 'query',
				property: 'q',
			},
		},
	},
	{
		displayName: 'Additional Options',
		name: 'additionalOptions',
		type: 'collection',
		placeholder: 'Add Option',
		displayOptions: {
			show: showOnlyForArticlesSearch,
		},
		default: {},
		options: [
			{
				displayName: 'Category',
				name: 'category',
				type: 'string',
				default: '',
				placeholder: 'Tech,Business,Politics',
				description: 'Filter by categories (comma-separated)',
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
				displayName: 'Content',
				name: 'content',
				type: 'string',
				default: '',
				placeholder: 'solar panels',
				description: 'Search within article content',
				routing: {
					send: {
						type: 'query',
						property: 'content',
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
				displayName: 'Description',
				name: 'desc',
				type: 'string',
				default: '',
				placeholder: 'renewable energy',
				description: 'Search within article descriptions',
				routing: {
					send: {
						type: 'query',
						property: 'desc',
					},
				},
			},
			{
				displayName: 'From Date',
				name: 'from',
				type: 'string',
				default: '',
				placeholder: '2024-01-01',
				description: 'Filter articles published after this date (YYYY-MM-DD)',
				routing: {
					send: {
						type: 'query',
						property: 'from',
					},
				},
			},
			{
				displayName: 'Language',
				name: 'language',
				type: 'string',
				default: '',
				placeholder: 'en,es,fr',
				description: 'Filter by language codes (comma-separated)',
				routing: {
					send: {
						type: 'query',
						property: 'language',
						value:
							'={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
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
				displayName: 'Show Num Results',
				name: 'showNumResults',
				type: 'boolean',
				default: false,
				description: 'Whether to show the total number of matched articles',
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
					maxValue: 1000,
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
					{ name: 'Add Date (Newest First)', value: 'addDate' },
					{ name: 'Add Date (Oldest First)', value: 'reverseAddDate' },
					{ name: 'Date (Newest First)', value: 'date' },
					{ name: 'Date (Oldest First)', value: 'reverseDate' },
					{ name: 'Refresh Date', value: 'refreshDate' },
					{ name: 'Relevance', value: 'relevance' },
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
				displayName: 'Source',
				name: 'source',
				type: 'string',
				default: '',
				placeholder: 'cnn.com,bbc.com',
				description: 'Filter by source domains (comma-separated)',
				routing: {
					send: {
						type: 'query',
						property: 'source',
						value:
							'={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
					},
				},
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				placeholder: 'climate change',
				description: 'Search specifically within article titles',
				routing: {
					send: {
						type: 'query',
						property: 'title',
					},
				},
			},
			{
				displayName: 'To Date',
				name: 'to',
				type: 'string',
				default: '',
				placeholder: '2024-12-31',
				description: 'Filter articles published before this date (YYYY-MM-DD)',
				routing: {
					send: {
						type: 'query',
						property: 'to',
					},
				},
			},
			{
				displayName: 'Topic',
				name: 'topic',
				type: 'string',
				default: '',
				placeholder: 'AI,Markets,Climate',
				description: 'Filter by topics (comma-separated)',
				routing: {
					send: {
						type: 'query',
						property: 'topic',
						value:
							'={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
					},
				},
			},
		],
	},
];
