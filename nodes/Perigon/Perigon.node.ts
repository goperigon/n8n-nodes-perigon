import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { articlesDescription } from './resources/articles';
import { wikipediaDescription } from './resources/wikipedia';

export class Perigon implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Perigon',
		name: 'perigon',
		icon: { light: 'file:perigon.svg', dark: 'file:perigon.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Perigon API',
		defaults: {
			name: 'Perigon',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'perigonApi', required: true }],
		requestDefaults: {
			baseURL: 'https://api.perigon.io/v1',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Article',
						value: 'articles',
					},
					{
						name: 'Wikipedia',
						value: 'wikipedia',
					},
				],
				default: 'articles',
			},
			...articlesDescription,
			...wikipediaDescription,
		],
	};
}
