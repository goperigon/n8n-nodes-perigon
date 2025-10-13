import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { articlesDescription } from './resources/articles';
import { wikipediaDescription } from './resources/wikipedia';
import { storiesDescription } from './resources/stories';
import { peopleDescription } from './resources/people';
import { sourcesDescription } from './resources/sources';
import { journalistsDescription } from './resources/journalists';
import { companiesDescription } from './resources/companies';
import { topicsDescription } from './resources/topics';
import { summarizeDescription } from './resources/summarize';

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
						description: 'Search and filter news articles',
					},
					{
						name: 'Company',
						value: 'companies',
						description: 'Search for companies in the Perigon database',
					},
					{
						name: 'Journalist',
						value: 'journalists',
						description: 'Search journalists and reporters',
					},
					{
						name: 'Person',
						value: 'people',
						description: 'Search for public figures and newsworthy individuals',
					},
					{
						name: 'Source',
						value: 'sources',
						description: 'Search media sources and publications',
					},
					{
						name: 'Story',
						value: 'stories',
						description: 'Track evolving narratives and news story clusters',
					},
					{
						name: 'Summarize',
						value: 'summarize',
						description: 'Generate AI-powered summaries of search results',
					},
					{
						name: 'Topic',
						value: 'topics',
						description: 'Browse available topics',
					},
					{
						name: 'Wikipedia',
						value: 'wikipedia',
						description: 'Search Wikipedia articles',
					},
				],
				default: 'articles',
			},
			...articlesDescription,
			...storiesDescription,
			...peopleDescription,
			...sourcesDescription,
			...journalistsDescription,
			...companiesDescription,
			...topicsDescription,
			...wikipediaDescription,
			...summarizeDescription,
		],
	};
}
