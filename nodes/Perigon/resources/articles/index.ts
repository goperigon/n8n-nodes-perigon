import type { INodeProperties } from 'n8n-workflow';
import { articlesVectorSearchDescription } from './vectorSearch';

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
				name: 'Vector Search',
				value: 'vectorSearch',
				action: 'Search articles using vector similarity',
				description: 'Search articles using semantic similarity with natural language queries',
				routing: {
					request: {
						method: 'POST',
						url: '/vector/news/all',
					},
				},
			},
		],
		default: 'vectorSearch',
	},
	...articlesVectorSearchDescription,
];
