import type { INodeProperties } from 'n8n-workflow';
import { wikipediaVectorSearchDescription } from './vectorSearch';
import { wikipediaSearchDescription } from './search';

const showOnlyForWikipedia = {
	resource: ['wikipedia'],
};

export const wikipediaDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		credentialTypes: ['has:authenticate'],
		displayOptions: {
			show: showOnlyForWikipedia,
		},
		options: [
			{
				name: 'Search',
				value: 'search',
				action: 'Search wikipedia using keywords',
				description: 'Search Wikipedia articles using keyword queries with Boolean operators',
				routing: {
					request: {
						method: 'GET',
						url: '/wikipedia/all',
					},
				},
			},
			{
				name: 'Vector Search',
				value: 'vectorSearch',
				action: 'Search wikipedia using vector similarity',
				description:
					'Search Wikipedia articles using semantic similarity with natural language queries (best for LLM workflows)',
				routing: {
					request: {
						method: 'POST',
						url: '/vector/wikipedia/all',
					},
				},
			},
		],
		default: 'search',
	},
	...wikipediaSearchDescription,
	...wikipediaVectorSearchDescription,
];
