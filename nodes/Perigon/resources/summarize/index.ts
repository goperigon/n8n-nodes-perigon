import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSummarize = {
	resource: ['summarize'],
};

export const summarizeDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		credentialTypes: ['has:authenticate'],
		displayOptions: {
			show: showOnlyForSummarize,
		},
		options: [
			{
				name: 'Summarize',
				value: 'summarize',
				action: 'Summarize search results',
				description: 'Produce a concise AI-powered summary over articles matching your filters',
				routing: {
					request: {
						method: 'POST',
						url: '/summarize',
					},
				},
			},
		],
		default: 'summarize',
	},
	{
		displayName: 'Query',
		name: 'q',
		type: 'string',
		displayOptions: {
			show: {
				...showOnlyForSummarize,
				operation: ['summarize'],
			},
		},
		default: '',
		placeholder: 'climate change renewable energy',
		description: 'Primary search query for filtering articles. Supports Boolean operators.',
		routing: {
			send: {
				type: 'query',
				property: 'q',
			},
		},
	},
	{
		displayName: 'Prompt',
		name: 'prompt',
		type: 'string',
		displayOptions: {
			show: {
				...showOnlyForSummarize,
				operation: ['summarize'],
			},
		},
		typeOptions: {
			rows: 4,
		},
		default:
			'You are a helpful assistant tasked with summarizing the search results. In a casual, natural tone, craft a vivid, insightful synthesis in one fluid paragraph (no more than 125 words). Cover as many relevant points as possible, connect ideas, highlight themes, and surface anything interesting or surprising.',
		description: 'Instructions guiding how the summary should be written (max 2048 characters)',
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
			show: {
				...showOnlyForSummarize,
				operation: ['summarize'],
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
				displayName: 'From Date',
				name: 'from',
				type: 'string',
				default: '',
				placeholder: '2024-01-01',
				description: 'Filter articles published after this date',
				routing: {
					send: {
						type: 'query',
						property: 'from',
					},
				},
			},
			{
				displayName: 'Max Article Count',
				name: 'maxArticleCount',
				type: 'number',
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				default: 10,
				description: 'Maximum number of articles to factor into the summary',
				routing: {
					send: {
						type: 'body',
						property: 'maxArticleCount',
					},
				},
			},
			{
				displayName: 'Max Tokens',
				name: 'maxTokens',
				type: 'number',
				typeOptions: {
					minValue: 1,
				},
				default: 2048,
				description: 'Maximum number of tokens to generate in the summary',
				routing: {
					send: {
						type: 'body',
						property: 'maxTokens',
					},
				},
			},
			{
				displayName: 'Method',
				name: 'method',
				type: 'options',
				options: [
					{ name: 'Articles', value: 'ARTICLES' },
					{ name: 'Clusters', value: 'CLUSTERS' },
				],
				default: 'ARTICLES',
				description:
					'Method for selecting articles: ARTICLES (include all) or CLUSTERS (one per cluster)',
				routing: {
					send: {
						type: 'body',
						property: 'method',
					},
				},
			},
			{
				displayName: 'Model',
				name: 'model',
				type: 'options',
				options: [
					{ name: 'DeepSeek R1 Distill Llama 70B', value: 'deepseek-r1-distill-llama-70b' },
					{ name: 'GPT-4.1', value: 'gpt-4.1' },
					{ name: 'GPT-4.1 Mini', value: 'gpt-4.1-mini' },
					{ name: 'GPT-4.1 Nano', value: 'gpt-4.1-nano' },
					{ name: 'GPT-4o', value: 'gpt-4o' },
					{ name: 'GPT-4o Mini', value: 'gpt-4o-mini' },
					{ name: 'Llama 3.3 70B', value: 'llama-3.3-70b-versatile' },
				],
				default: 'gpt-4.1',
				description: 'The underlying LLM model to use for generation',
				routing: {
					send: {
						type: 'body',
						property: 'model',
					},
				},
			},
			{
				displayName: 'Returned Article Count',
				name: 'returnedArticleCount',
				type: 'number',
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				default: 10,
				description: 'Maximum number of articles to return in the response',
				routing: {
					send: {
						type: 'body',
						property: 'returnedArticleCount',
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
				displayName: 'Summarize Fields',
				name: 'summarizeFields',
				type: 'multiOptions',
				options: [
					{ name: 'Title', value: 'TITLE' },
					{ name: 'Content', value: 'CONTENT' },
					{ name: 'Summary', value: 'SUMMARY' },
				],
				default: ['TITLE', 'CONTENT', 'SUMMARY'],
				description: 'Which article fields to include when generating the summary',
				routing: {
					send: {
						type: 'body',
						property: 'summarizeFields',
					},
				},
			},
		],
	},
];
