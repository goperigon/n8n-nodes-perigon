import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class GoperigonPerigonApi implements ICredentialType {
	name = 'goperigonPerigonApi';

	displayName = 'Goperigon Perigon API';

	// Link to your community node's README
	documentationUrl = 'https://github.com/org/@goperigon/-perigon?tab=readme-ov-file#credentials';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'x-api-key': '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.perigon.io/v1',
			url: '/v1/user',
		},
	};
}
