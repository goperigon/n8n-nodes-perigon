import type { INodeProperties } from 'n8n-workflow';

const showOnlyForJournalists = {
	resource: ['journalists'],
};

export const journalistsDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		credentialTypes: ['has:authenticate'],
		displayOptions: {
			show: showOnlyForJournalists,
		},
		options: [
			{
				name: 'Get by ID',
				value: 'getById',
				action: 'Get journalist by ID',
				description: 'Find additional details on a journalist by their unique ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/journalists/{{$parameter.journalistId}}',
					},
				},
			},
			{
				name: 'Search',
				value: 'search',
				action: 'Search journalists',
				description: 'Search 230,000+ journalists from around the world',
				routing: {
					request: {
						method: 'GET',
						url: '/journalists/all',
					},
				},
			},
		],
		default: 'search',
	},
	{
		displayName: 'Journalist ID',
		name: 'journalistId',
		type: 'string',
		displayOptions: {
			show: {
				...showOnlyForJournalists,
				operation: ['getById'],
			},
		},
		default: '',
		required: true,
		placeholder: 'dd9518041aa146e8bb46bedd30a5d985',
		description: 'The unique identifier for the journalist',
	},
	{
		displayName: 'Query',
		name: 'q',
		type: 'string',
		displayOptions: {
			show: {
				...showOnlyForJournalists,
				operation: ['search'],
			},
		},
		default: '',
		placeholder: 'Matt Levine',
		description: 'Search journalists by name, title, or Twitter bio. Supports Boolean operators.',
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
				...showOnlyForJournalists,
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
				placeholder: 'Tech,Business',
				description: 'Filter by categories they cover (comma-separated)',
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
				description: 'Filter by countries they commonly cover (comma-separated)',
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
				displayName: 'Journalist ID',
				name: 'id',
				type: 'string',
				default: '',
				placeholder: 'id1,id2',
				description: 'Filter by unique journalist identifiers (comma-separated)',
				routing: {
					send: {
						type: 'query',
						property: 'id',
						value:
							'={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
					},
				},
			},
			{
				displayName: 'Max Monthly Posts',
				name: 'maxMonthlyPosts',
				type: 'number',
				default: 0,
				description: 'Filter for journalists who publish no more than this many articles per month',
				routing: {
					send: {
						type: 'query',
						property: 'maxMonthlyPosts',
						value: '={{ $value > 0 ? $value : undefined }}',
					},
				},
			},
			{
				displayName: 'Min Monthly Posts',
				name: 'minMonthlyPosts',
				type: 'number',
				default: 0,
				description: 'Filter for journalists who publish at least this many articles per month',
				routing: {
					send: {
						type: 'query',
						property: 'minMonthlyPosts',
						value: '={{ $value > 0 ? $value : undefined }}',
					},
				},
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				placeholder: 'John Smith',
				description: 'Search by journalist name. Supports Boolean operators.',
				routing: {
					send: {
						type: 'query',
						property: 'name',
					},
				},
			},
			{
				displayName: 'Page',
				name: 'page',
				type: 'number',
				typeOptions: {
					minValue: 0,
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
				description: 'Whether to show the total number of matched journalists',
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
				displayName: 'Source',
				name: 'source',
				type: 'string',
				default: '',
				placeholder: 'cnn.com,bbc.com',
				description: 'Filter by publisher domains (comma-separated)',
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
				displayName: 'Topic',
				name: 'topic',
				type: 'string',
				default: '',
				placeholder: 'Tech,Politics',
				description: 'Filter by topics they cover (comma-separated)',
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
