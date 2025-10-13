import type { INodeProperties } from 'n8n-workflow';

const showOnlyForStories = {
	resource: ['stories'],
};

export const storiesDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		credentialTypes: ['has:authenticate'],
		displayOptions: {
			show: showOnlyForStories,
		},
		options: [
			{
				name: 'Search',
				value: 'search',
				action: 'Search news stories',
				description: 'Track evolving narratives and top news headlines with story clusters',
				routing: {
					request: {
						method: 'GET',
						url: '/stories/all',
					},
				},
			},
		],
		default: 'search',
	},
	{
		displayName: 'Query',
		name: 'q',
		type: 'string',
		displayOptions: {
			show: {
				...showOnlyForStories,
				operation: ['search'],
			},
		},
		default: '',
		placeholder: 'climate summit',
		description: 'Search query for filtering stories based on name, summary, and key points',
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
			show: {
				...showOnlyForStories,
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
				placeholder: 'Tech,Business,Politics',
				description: 'Filter by categories (comma-separated)',
				routing: {
					send: {
						type: 'query',
						property: 'category',
						value: '={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
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
						value: '={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
					},
				},
			},
			{
				displayName: 'From Date',
				name: 'from',
				type: 'string',
				default: '',
				placeholder: '2024-01-01',
				description: 'Filter stories created after this date',
				routing: {
					send: {
						type: 'query',
						property: 'from',
					},
				},
			},
			{
				displayName: 'Min Cluster Size',
				name: 'minClusterSize',
				type: 'number',
				default: 1,
				description: 'Minimum number of articles in a story cluster',
				routing: {
					send: {
						type: 'query',
						property: 'minClusterSize',
					},
				},
			},
			{
				displayName: 'Min Unique Sources',
				name: 'minUniqueSources',
				type: 'number',
				default: 3,
				description: 'Minimum number of unique sources required for a story',
				routing: {
					send: {
						type: 'query',
						property: 'minUniqueSources',
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
				description: 'Whether to show the total number of matched stories',
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
					{ name: 'Count', value: 'count' },
					{ name: 'Created At', value: 'createdAt' },
					{ name: 'Relevance', value: 'relevance' },
					{ name: 'Total Count', value: 'totalCount' },
					{ name: 'Updated At', value: 'updatedAt' },
				],
				default: 'createdAt',
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
						value: '={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
					},
				},
			},
			{
				displayName: 'To Date',
				name: 'to',
				type: 'string',
				default: '',
				placeholder: '2024-12-31',
				description: 'Filter stories created before this date',
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
						value: '={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
					},
				},
			},
		],
	},
];
