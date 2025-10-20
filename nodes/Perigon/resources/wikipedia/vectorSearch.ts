import type { INodeProperties } from 'n8n-workflow';

const showOnlyForWikipediaVectorSearch = {
	operation: ['vectorSearch'],
	resource: ['wikipedia'],
};

export const wikipediaVectorSearchDescription: INodeProperties[] = [
	{
		displayName: 'Prompt',
		name: 'prompt',
		type: 'string',
		displayOptions: {
			show: showOnlyForWikipediaVectorSearch,
		},
		default: '',
		required: true,
		description: 'Natural language prompt for semantic search of Wikipedia articles',
		routing: {
			send: {
				type: 'body',
				property: 'prompt',
			},
		},
	},
	{
		displayName: 'Additional Options',
		name: 'additionalOptions',
		type: 'collection',
		placeholder: 'Add Option',
		displayOptions: {
			show: showOnlyForWikipediaVectorSearch,
		},
		default: {},
		options: [
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
						type: 'body',
						property: 'page',
					},
				},
			},
			{
				displayName: 'Page ID',
				name: 'pageId',
				type: 'number',
				default: 0,
				description: 'Filter by specific page ID',
				routing: {
					send: {
						type: 'body',
						property: 'filter.pageId',
						value: '={{ $value > 0 ? $value : undefined }}',
					},
				},
			},
			{
				displayName: 'Page Views From',
				name: 'pageviewsFrom',
				type: 'number',
				default: 0,
				description: 'Minimum average daily page views. Leave at 0 to disable.',
				routing: {
					send: {
						type: 'body',
						property: 'pageviewsFrom',
						value: '={{ $value > 0 ? $value : undefined }}',
					},
				},
			},
			{
				displayName: 'Page Views To',
				name: 'pageviewsTo',
				type: 'number',
				default: 0,
				description: 'Maximum average daily page views. Leave at 0 to disable.',
				routing: {
					send: {
						type: 'body',
						property: 'pageviewsTo',
						value: '={{ $value > 0 ? $value : undefined }}',
					},
				},
			},
			{
				displayName: 'Score Threshold',
				name: 'scoreThreshold',
				type: 'number',
				typeOptions: {
					minValue: 0,
					maxValue: 1,
					numberPrecision: 2,
				},
				default: 0,
				description: 'Minimum similarity score threshold (0-1). Leave at 0 to disable.',
				routing: {
					send: {
						type: 'body',
						property: 'scoreThreshold',
						value: '={{ $value > 0 ? $value : undefined }}',
					},
				},
			},
			{
				displayName: 'Section ID',
				name: 'sectionId',
				type: 'number',
				default: 0,
				description: 'Filter by specific section ID',
				routing: {
					send: {
						type: 'body',
						property: 'filter.sectionId',
						value: '={{ $value > 0 ? $value : undefined }}',
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
						type: 'body',
						property: 'size',
					},
				},
			},
			{
				displayName: 'Wiki Code',
				name: 'wikiCode',
				type: 'string',
				default: '',
				placeholder: 'enwiki',
				description: 'Wiki project code (currently only enwiki is supported)',
				routing: {
					send: {
						type: 'body',
						property: 'filter.wikiCode',
						value: '={{ $value ? $value : undefined }}',
					},
				},
			},
			{
				displayName: 'Wiki Namespace',
				name: 'wikiNamespace',
				type: 'number',
				default: 0,
				description: 'Filter by wiki namespace',
				routing: {
					send: {
						type: 'body',
						property: 'filter.wikiNamespace',
						value: '={{ $value !== 0 ? $value : undefined }}',
					},
				},
			},
			{
				displayName: 'Wiki Page ID',
				name: 'wikiPageId',
				type: 'number',
				default: 0,
				description: 'Filter by specific wiki page ID',
				routing: {
					send: {
						type: 'body',
						property: 'filter.wikiPageId',
						value: '={{ $value > 0 ? $value : undefined }}',
					},
				},
			},
			{
				displayName: 'Wiki Revision From',
				name: 'wikiRevisionFrom',
				type: 'string',
				default: '',
				placeholder: '2024-03-28',
				description: 'Filter for Wikipedia revisions from this date (YYYY-MM-DD)',
				routing: {
					send: {
						type: 'body',
						property: 'wikiRevisionFrom',
						value: '={{ $value ? $value : undefined }}',
					},
				},
			},
			{
				displayName: 'Wiki Revision ID',
				name: 'wikiRevisionId',
				type: 'number',
				default: 0,
				description: 'Filter by specific wiki revision ID',
				routing: {
					send: {
						type: 'body',
						property: 'filter.wikiRevisionId',
						value: '={{ $value > 0 ? $value : undefined }}',
					},
				},
			},
			{
				displayName: 'Wiki Revision To',
				name: 'wikiRevisionTo',
				type: 'string',
				default: '',
				placeholder: '2030-01-01',
				description: 'Filter for Wikipedia revisions up to this date (YYYY-MM-DD)',
				routing: {
					send: {
						type: 'body',
						property: 'wikiRevisionTo',
						value: '={{ $value ? $value : undefined }}',
					},
				},
			},
			{
				displayName: 'Wikidata ID',
				name: 'wikidataId',
				type: 'string',
				default: '',
				placeholder: 'Q7747',
				description: 'Filter by specific Wikidata entity ID',
				routing: {
					send: {
						type: 'body',
						property: 'filter.wikidataId',
						value: '={{ $value ? $value : undefined }}',
					},
				},
			},
			{
				displayName: 'Wikidata Instance Of ID',
				name: 'wikidataInstanceOfId',
				type: 'string',
				default: '',
				placeholder: 'Q5',
				description: 'Filter pages whose Wikidata entities are instances of this ID',
				routing: {
					send: {
						type: 'body',
						property: 'filter.wikidataInstanceOfId',
						value: '={{ $value ? $value : undefined }}',
					},
				},
			},
			{
				displayName: 'Wikidata Instance Of Label',
				name: 'wikidataInstanceOfLabel',
				type: 'string',
				default: '',
				placeholder: 'human',
				description: 'Filter pages whose Wikidata entities are instances of this label',
				routing: {
					send: {
						type: 'body',
						property: 'filter.wikidataInstanceOfLabel',
						value: '={{ $value ? $value : undefined }}',
					},
				},
			},
		],
	},
	{
		displayName: 'Advanced Filters',
		name: 'advancedFilters',
		type: 'fixedCollection',
		placeholder: 'Add Advanced Filter',
		displayOptions: {
			show: showOnlyForWikipediaVectorSearch,
		},
		default: {},
		typeOptions: {
			multipleValues: false,
		},
		description: 'Advanced filter logic with AND/OR/NOT operators',
		options: [
			{
				name: 'advancedFilterValues',
				displayName: 'Advanced Filter Options',
				values: [
					{
						displayName: 'AND',
						name: 'AND',
						type: 'json',
						default: '',
						placeholder: '[{"wikiCode": "enwiki"}, {"wikidataInstanceOfLabel": "human"}]',
						description:
							'AND logic - all conditions must match. Provide as JSON array. Example: [{"wikiCode": "enwiki"}, {"pageviewsFrom": 100}]',
						routing: {
							send: {
								type: 'body',
								property: 'filter.AND',
								value: '={{ $value ? JSON.parse($value) : undefined }}',
							},
						},
					},
					{
						displayName: 'OR',
						name: 'OR',
						type: 'json',
						default: '',
						placeholder: '[{"wikidataId": "Q7747"}, {"wikidataId": "Q937"}]',
						description:
							'OR logic - at least one condition must match. Provide as JSON array. Example: [{"wikidataId": "Q7747"}, {"wikidataId": "Q937"}]',
						routing: {
							send: {
								type: 'body',
								property: 'filter.OR',
								value: '={{ $value ? JSON.parse($value) : undefined }}',
							},
						},
					},
					{
						displayName: 'NOT',
						name: 'NOT',
						type: 'json',
						default: '',
						placeholder: '{"wikiNamespace": 1}',
						description:
							'NOT logic - excludes matching pages. Provide as JSON object or array. Example: {"wikiNamespace": 1} or [{"wikiNamespace": 1}]',
						routing: {
							send: {
								type: 'body',
								property: 'filter.NOT',
								value: '={{ $value ? JSON.parse($value) : undefined }}',
							},
						},
					},
				],
			},
		],
	},
];
