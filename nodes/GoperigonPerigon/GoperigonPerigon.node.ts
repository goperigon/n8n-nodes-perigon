import { NodeConnectionType, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { userDescription } from './resources/user';
import { companyDescription } from './resources/company';

export class GoperigonPerigon implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Goperigon Perigon',
		name: 'goperigonPerigon',
		icon: { light: 'file:goperigonPerigon.svg', dark: 'file:goperigonPerigon.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Goperigon Perigon API',
		defaults: {
			name: 'Goperigon Perigon',
		},
		usableAsTool: true,
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		credentials: [{ name: 'goperigonPerigonApi', required: true }],
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
						name: 'User',
						value: 'user',
					},
					{
						name: 'Company',
						value: 'company',
					},
				],
				default: 'user',
			},
			...userDescription,
			...companyDescription,
		],
	};
}
