import type { INodeProperties } from 'n8n-workflow';
import { articlesVectorSearchDescription } from './vectorSearch';
import { articlesSearchDescription } from './search';

const showOnlyForArticles = {
	resource: ['articles'],
};

export const articlesDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		credentialTypes: ['has:authenticate'],
		displayOptions: {
			show: showOnlyForArticles,
		},
		options: [
			{
				name: 'Search',
				value: 'search',
				action: 'Search articles using keywords',
				description: 'Search articles using keyword queries with Boolean operators',
				routing: {
					request: {
						method: 'GET',
						url: '/articles/all',
					},
				},
			},
			{
				name: 'Vector Search',
				value: 'vectorSearch',
				action: 'Search articles using vector similarity',
				description:
					'Search articles using semantic similarity with natural language queries (best for LLM workflows)',
				routing: {
					request: {
						method: 'POST',
						url: '/vector/news/all',
					},
				},
			},
		],
		default: 'search',
	},
	...articlesSearchDescription,
	...articlesVectorSearchDescription,
];
