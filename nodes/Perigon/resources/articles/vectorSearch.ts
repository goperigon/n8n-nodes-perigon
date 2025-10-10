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
		displayName: 'Publication Date From',
		name: 'pubDateFrom',
		type: 'string',
		displayOptions: {
			show: showOnlyForArticlesVectorSearch,
		},
		default: '',
		placeholder: '2024-03-28',
		description: 'Filter articles published from this date (YYYY-MM-DD)',
		routing: {
			send: {
				type: 'body',
				property: 'pubDateFrom',
				value: '={{ $value ? $value : undefined }}',
			},
		},
	},
	{
		displayName: 'Publication Date To',
		name: 'pubDateTo',
		type: 'string',
		displayOptions: {
			show: showOnlyForArticlesVectorSearch,
		},
		default: '',
		placeholder: '2030-01-01',
		description: 'Filter articles published up to this date (YYYY-MM-DD)',
		routing: {
			send: {
				type: 'body',
				property: 'pubDateTo',
				value: '={{ $value ? $value : undefined }}',
			},
		},
	},
	{
		displayName: 'Show Reprints',
		name: 'showReprints',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForArticlesVectorSearch,
		},
		default: false,
		description: 'Whether to include reprinted articles',
		routing: {
			send: {
				type: 'body',
				property: 'showReprints',
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
		displayName: 'Basic Filters',
		name: 'basicFilters',
		type: 'fixedCollection',
		placeholder: 'Add Filter',
		displayOptions: {
			show: showOnlyForArticlesVectorSearch,
		},
		default: {},
		typeOptions: {
			multipleValues: false,
		},
		options: [
			{
				name: 'filterValues',
				displayName: 'Filter Options',
				values: [
					{
						displayName: 'Article IDs',
						name: 'articleId',
						type: 'string',
						default: '',
						placeholder: 'id1,id2,id3',
						description: 'Comma-separated article IDs',
						routing: {
							send: {
								type: 'body',
								property: 'filter.articleId',
								value:
									'={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
							},
						},
					},
					{
						displayName: 'Categories',
						name: 'category',
						type: 'string',
						default: '',
						placeholder: 'Sports,Finance,Tech',
						description: 'Comma-separated categories',
						routing: {
							send: {
								type: 'body',
								property: 'filter.category',
								value:
									'={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
							},
						},
					},
					{
						displayName: 'Cities',
						name: 'city',
						type: 'string',
						default: '',
						placeholder: 'Dallas,Austin,Houston',
						description: 'City names',
						routing: {
							send: {
								type: 'body',
								property: 'filter.city',
								value:
									'={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
							},
						},
					},
					{
						displayName: 'Cluster IDs',
						name: 'clusterId',
						type: 'string',
						default: '',
						placeholder: 'cluster1,cluster2',
						description: 'Comma-separated cluster IDs',
						routing: {
							send: {
								type: 'body',
								property: 'filter.clusterId',
								value:
									'={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
							},
						},
					},
					{
						displayName: 'Company Domains',
						name: 'companyDomain',
						type: 'string',
						default: '',
						placeholder: 'tesla.com,apple.com',
						description: 'Company domain names',
						routing: {
							send: {
								type: 'body',
								property: 'filter.companyDomain',
								value:
									'={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
							},
						},
					},
					{
						displayName: 'Company IDs',
						name: 'companyId',
						type: 'string',
						default: '',
						placeholder: 'id1,id2',
						description: 'Company identifier IDs',
						routing: {
							send: {
								type: 'body',
								property: 'filter.companyId',
								value:
									'={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
							},
						},
					},
					{
						displayName: 'Company Names',
						name: 'companyName',
						type: 'string',
						default: '',
						placeholder: 'Tesla Inc,Apple Inc',
						description: 'Full company names',
						routing: {
							send: {
								type: 'body',
								property: 'filter.companyName',
								value:
									'={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
							},
						},
					},
					{
						displayName: 'Company Symbols',
						name: 'companySymbol',
						type: 'string',
						default: '',
						placeholder: 'TSLA,AAPL,GOOGL',
						description: 'Stock ticker symbols',
						routing: {
							send: {
								type: 'body',
								property: 'filter.companySymbol',
								value:
									'={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
							},
						},
					},
					{
						displayName: 'Counties',
						name: 'county',
						type: 'string',
						default: '',
						placeholder: 'Dallas County,Travis County',
						description: 'County names',
						routing: {
							send: {
								type: 'body',
								property: 'filter.county',
								value:
									'={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
							},
						},
					},
					{
						displayName: 'Countries',
						name: 'country',
						type: 'string',
						default: '',
						placeholder: 'us,gb,ca',
						description: 'Content country codes',
						routing: {
							send: {
								type: 'body',
								property: 'filter.country',
								value:
									'={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
							},
						},
					},
					{
						displayName: 'Labels',
						name: 'label',
						type: 'string',
						default: '',
						placeholder: 'Opinion,Editorial',
						description: 'Comma-separated content labels',
						routing: {
							send: {
								type: 'body',
								property: 'filter.label',
								value:
									'={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
							},
						},
					},
					{
						displayName: 'Languages',
						name: 'language',
						type: 'string',
						default: '',
						placeholder: 'en,es,fr',
						description: 'Comma-separated language codes',
						routing: {
							send: {
								type: 'body',
								property: 'filter.language',
								value:
									'={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
							},
						},
					},
					{
						displayName: 'Locations Countries',
						name: 'locationsCountry',
						type: 'string',
						default: '',
						placeholder: 'us,mx',
						description: 'Location country codes',
						routing: {
							send: {
								type: 'body',
								property: 'filter.locationsCountry',
								value:
									'={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
							},
						},
					},
					{
						displayName: 'Person Names',
						name: 'personName',
						type: 'string',
						default: '',
						placeholder: 'Elon Musk,Tim Cook',
						routing: {
							send: {
								type: 'body',
								property: 'filter.personName',
								value:
									'={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
							},
						},
					},
					{
						displayName: 'Person Wikidata IDs',
						name: 'personWikidataId',
						type: 'string',
						default: '',
						placeholder: 'Q317521,Q92',
						description: 'Wikidata person IDs',
						routing: {
							send: {
								type: 'body',
								property: 'filter.personWikidataId',
								value:
									'={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
							},
						},
					},
					{
						displayName: 'Source',
						name: 'source',
						type: 'string',
						default: '',
						placeholder: 'foxnews.com,cnn.com',
						description: 'Comma-separated source domains',
						routing: {
							send: {
								type: 'body',
								property: 'filter.source',
								value:
									'={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
							},
						},
					},
					{
						displayName: 'Source Cities',
						name: 'sourceCity',
						type: 'string',
						default: '',
						placeholder: 'Dallas,New York',
						description: 'Source city names',
						routing: {
							send: {
								type: 'body',
								property: 'filter.sourceCity',
								value:
									'={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
							},
						},
					},
					{
						displayName: 'Source Counties',
						name: 'sourceCounty',
						type: 'string',
						default: '',
						placeholder: 'Travis County',
						description: 'Source county names',
						routing: {
							send: {
								type: 'body',
								property: 'filter.sourceCounty',
								value:
									'={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
							},
						},
					},
					{
						displayName: 'Source Countries',
						name: 'sourceCountry',
						type: 'string',
						default: '',
						placeholder: 'us,uk',
						description: 'Source country codes',
						routing: {
							send: {
								type: 'body',
								property: 'filter.sourceCountry',
								value:
									'={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
							},
						},
					},
					{
						displayName: 'Source Groups',
						name: 'sourceGroup',
						type: 'string',
						default: '',
						placeholder: 'top100,trusted',
						description: 'Comma-separated source groups',
						routing: {
							send: {
								type: 'body',
								property: 'filter.sourceGroup',
								value:
									'={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
							},
						},
					},
					{
						displayName: 'Source States',
						name: 'sourceState',
						type: 'string',
						default: '',
						placeholder: 'NY,CA',
						description: 'Source state codes',
						routing: {
							send: {
								type: 'body',
								property: 'filter.sourceState',
								value:
									'={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
							},
						},
					},
					{
						displayName: 'States',
						name: 'state',
						type: 'string',
						default: '',
						placeholder: 'TX,CA,NY',
						description: 'State codes',
						routing: {
							send: {
								type: 'body',
								property: 'filter.state',
								value:
									'={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
							},
						},
					},
					{
						displayName: 'Topics',
						name: 'topic',
						type: 'string',
						default: '',
						placeholder: 'ESG,Markets,AI',
						description: 'Comma-separated topics',
						routing: {
							send: {
								type: 'body',
								property: 'filter.topic',
								value:
									'={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
							},
						},
					},
				],
			},
		],
	},
	{
		displayName: 'Location Coordinates',
		name: 'coordinates',
		type: 'fixedCollection',
		placeholder: 'Add Coordinates',
		displayOptions: {
			show: showOnlyForArticlesVectorSearch,
		},
		default: {},
		typeOptions: {
			multipleValues: false,
		},
		options: [
			{
				name: 'coordinateValues',
				displayName: 'Coordinates',
				values: [
					{
						displayName: 'Latitude',
						name: 'lat',
						type: 'number',
						default: 0,
						placeholder: '30.2672',
						description: 'Latitude coordinate',
						routing: {
							send: {
								type: 'body',
								property: 'filter.coordinates.lat',
								value: '={{ $value !== 0 ? $value : undefined }}',
							},
						},
					},
					{
						displayName: 'Longitude',
						name: 'lon',
						type: 'number',
						default: 0,
						placeholder: '-97.7431',
						description: 'Longitude coordinate',
						routing: {
							send: {
								type: 'body',
								property: 'filter.coordinates.lon',
								value: '={{ $value !== 0 ? $value : undefined }}',
							},
						},
					},
					{
						displayName: 'Radius (Km)',
						name: 'radius',
						type: 'number',
						default: 0,
						placeholder: '50',
						description: 'Search radius in kilometers',
						routing: {
							send: {
								type: 'body',
								property: 'filter.coordinates.radius',
								value: '={{ $value > 0 ? $value : undefined }}',
							},
						},
					},
				],
			},
		],
	},
	{
		displayName: 'Source Coordinates',
		name: 'sourceCoordinates',
		type: 'fixedCollection',
		placeholder: 'Add Source Coordinates',
		displayOptions: {
			show: showOnlyForArticlesVectorSearch,
		},
		default: {},
		typeOptions: {
			multipleValues: false,
		},
		options: [
			{
				name: 'sourceCoordinateValues',
				displayName: 'Source Coordinates',
				values: [
					{
						displayName: 'Latitude',
						name: 'lat',
						type: 'number',
						default: 0,
						placeholder: '40.7128',
						description: 'Source latitude',
						routing: {
							send: {
								type: 'body',
								property: 'filter.sourceCoordinates.lat',
								value: '={{ $value !== 0 ? $value : undefined }}',
							},
						},
					},
					{
						displayName: 'Longitude',
						name: 'lon',
						type: 'number',
						default: 0,
						placeholder: '-74.0060',
						description: 'Source longitude',
						routing: {
							send: {
								type: 'body',
								property: 'filter.sourceCoordinates.lon',
								value: '={{ $value !== 0 ? $value : undefined }}',
							},
						},
					},
					{
						displayName: 'Radius (Km)',
						name: 'radius',
						type: 'number',
						default: 0,
						placeholder: '100',
						description: 'Source search radius in kilometers',
						routing: {
							send: {
								type: 'body',
								property: 'filter.sourceCoordinates.radius',
								value: '={{ $value > 0 ? $value : undefined }}',
							},
						},
					},
				],
			},
		],
	},
	{
		displayName: 'Advanced Filters',
		name: 'advancedFilters',
		type: 'fixedCollection',
		placeholder: 'Add Advanced Filter',
		displayOptions: {
			show: showOnlyForArticlesVectorSearch,
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
						placeholder: '[{"category": ["Sports"]}, {"state": ["TX", "CA"]}]',
						description:
							'AND logic - all conditions must match. Provide as JSON array. Example: [{"category": ["Sports"]}, {"state": ["TX"]}]',
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
						placeholder: '[{"companySymbol": ["TSLA"]}, {"personName": ["Elon Musk"]}]',
						description:
							'OR logic - at least one condition must match. Provide as JSON array. Example: [{"companySymbol": ["TSLA"]}, {"personName": ["Elon Musk"]}]',
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
						placeholder: '{"label": ["Opinion"]}',
						description:
							'NOT logic - excludes matching articles. Provide as JSON object. Example: {"label": ["Opinion"]}',
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
