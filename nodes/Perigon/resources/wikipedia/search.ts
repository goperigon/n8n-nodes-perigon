import type { INodeProperties } from 'n8n-workflow';

const showOnlyForWikipediaSearch = {
	operation: ['search'],
	resource: ['wikipedia'],
};

export const wikipediaSearchDescription: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'q',
		type: 'string',
		displayOptions: {
			show: showOnlyForWikipediaSearch,
		},
		default: '',
		placeholder: 'artificial intelligence',
		description:
			'Primary search query for filtering pages based on title, summary, and content. Supports Boolean operators.',
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
			show: showOnlyForWikipediaSearch,
		},
		default: {},
		options: [
			{
				displayName: 'Category',
				name: 'category',
				type: 'string',
				default: '',
				placeholder: 'Science,Technology',
				description: 'Filter by Wikipedia categories (comma-separated)',
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
				displayName: 'Page Views From',
				name: 'pageviewsFrom',
				type: 'number',
				default: 0,
				description: 'Minimum average daily page views',
				routing: {
					send: {
						type: 'query',
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
				description: 'Maximum average daily page views',
				routing: {
					send: {
						type: 'query',
						property: 'pageviewsTo',
						value: '={{ $value > 0 ? $value : undefined }}',
					},
				},
			},
			{
				displayName: 'Show Num Results',
				name: 'showNumResults',
				type: 'boolean',
				default: false,
				description: 'Whether to show the total number of matched pages',
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
					{ name: 'Page Views (Highest)', value: 'pageViewsDesc' },
					{ name: 'Page Views (Lowest)', value: 'pageViewsAsc' },
					{ name: 'Relevance', value: 'relevance' },
					{ name: 'Revision Date (Newest)', value: 'revisionTsDesc' },
					{ name: 'Revision Date (Oldest)', value: 'revisionTsAsc' },
					{ name: 'Scraped Date (Newest)', value: 'scrapedAtDesc' },
					{ name: 'Scraped Date (Oldest)', value: 'scrapedAtAsc' },
				],
				default: 'relevance',
				description: 'Sort order for Wikipedia page results',
				routing: {
					send: {
						type: 'query',
						property: 'sortBy',
					},
				},
			},
			{
				displayName: 'Summary',
				name: 'summary',
				type: 'string',
				default: '',
				placeholder: 'neural networks',
				description: 'Search within page summaries',
				routing: {
					send: {
						type: 'query',
						property: 'summary',
					},
				},
			},
			{
				displayName: 'Text',
				name: 'text',
				type: 'string',
				default: '',
				placeholder: 'deep learning',
				description: 'Search within page content (across all sections)',
				routing: {
					send: {
						type: 'query',
						property: 'text',
					},
				},
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				placeholder: 'machine learning',
				description: 'Search specifically within page titles',
				routing: {
					send: {
						type: 'query',
						property: 'title',
					},
				},
			},
			{
				displayName: 'Wiki Code',
				name: 'wikiCode',
				type: 'string',
				default: '',
				placeholder: 'enwiki',
				description:
					'Filter by wiki project codes (comma-separated, currently only enwiki supported)',
				routing: {
					send: {
						type: 'query',
						property: 'wikiCode',
						value:
							'={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
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
