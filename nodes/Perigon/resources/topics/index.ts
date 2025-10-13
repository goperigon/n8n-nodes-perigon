import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTopics = {
	resource: ['topics'],
};

export const topicsDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		credentialTypes: ['has:authenticate'],
		displayOptions: {
			show: showOnlyForTopics,
		},
		options: [
			{
				name: 'Search',
				value: 'search',
				action: 'Search topics',
				description: 'Search through all available topics in the Perigon database',
				routing: {
					request: {
						method: 'GET',
						url: '/topics/all',
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
				...showOnlyForTopics,
				operation: ['search'],
			},
		},
		default: '',
		placeholder: 'Climate Change',
		description: 'Search for topics by exact name or partial text match',
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
				...showOnlyForTopics,
				operation: ['search'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Size',
				name: 'size',
				type: 'number',
				typeOptions: {
					minValue: 1,
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
				displayName: 'Category',
				name: 'category',
				type: 'string',
				default: '',
				placeholder: 'Tech',
				description: 'Filter topics by broad article categories',
				routing: {
					send: {
						type: 'query',
						property: 'category',
					},
				},
			},
			{
				displayName: 'Subcategory',
				name: 'subcategory',
				type: 'string',
				default: '',
				placeholder: 'TV',
				description: 'Filter topics by specific subcategory',
				routing: {
					send: {
						type: 'query',
						property: 'subcategory',
					},
				},
			},
		],
	},
];
