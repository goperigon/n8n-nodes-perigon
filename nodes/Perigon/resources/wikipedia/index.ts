import type { INodeProperties } from 'n8n-workflow';
import { wikipediaVectorSearchDescription } from './vectorSearch';

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
				name: 'Vector Search',
				value: 'vectorSearch',
				action: 'Search wikipedia using vector similarity',
				description:
					'Search Wikipedia articles using semantic similarity with natural language queries',
				routing: {
					request: {
						method: 'POST',
						url: '/vector/wikipedia/all',
					},
				},
			},
		],
		default: 'vectorSearch',
	},
	...wikipediaVectorSearchDescription,
];
