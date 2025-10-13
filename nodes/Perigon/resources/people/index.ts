import type { INodeProperties } from 'n8n-workflow';

const showOnlyForPeople = {
	resource: ['people'],
};

export const peopleDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		credentialTypes: ['has:authenticate'],
		displayOptions: {
			show: showOnlyForPeople,
		},
		options: [
			{
				name: 'Search',
				value: 'search',
				action: 'Search people',
				description:
					'Search for public figures, politicians, celebrities, and newsworthy individuals',
				routing: {
					request: {
						method: 'GET',
						url: '/people/all',
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
				...showOnlyForPeople,
				operation: ['search'],
			},
		},
		default: '',
		placeholder: 'Elon Musk',
		description: 'Search by person name. Supports Boolean operators (AND, OR, NOT) and wildcards.',
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
				...showOnlyForPeople,
				operation: ['search'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Occupation ID',
				name: 'occupationId',
				type: 'string',
				default: '',
				placeholder: 'Q82955,Q33999',
				description: 'Filter by Wikidata occupation IDs (comma-separated)',
				routing: {
					send: {
						type: 'query',
						property: 'occupationId',
						value:
							'={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
					},
				},
			},
			{
				displayName: 'Occupation Label',
				name: 'occupationLabel',
				type: 'string',
				default: '',
				placeholder: 'politician OR actor',
				description: 'Search by occupation name. Supports Boolean operators and wildcards.',
				routing: {
					send: {
						type: 'query',
						property: 'occupationLabel',
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
				displayName: 'Wikidata ID',
				name: 'wikidataId',
				type: 'string',
				default: '',
				placeholder: 'Q7747,Q937',
				description: 'Filter by Wikidata entity IDs (comma-separated)',
				routing: {
					send: {
						type: 'query',
						property: 'wikidataId',
						value:
							'={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
					},
				},
			},
		],
	},
];
