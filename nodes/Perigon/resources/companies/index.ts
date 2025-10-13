import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCompanies = {
	resource: ['companies'],
};

export const companiesDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		credentialTypes: ['has:authenticate'],
		displayOptions: {
			show: showOnlyForCompanies,
		},
		options: [
			{
				name: 'Search',
				value: 'search',
				action: 'Search companies',
				description:
					'Browse or search for companies Perigon tracks by name, domain, ticker, and more',
				routing: {
					request: {
						method: 'GET',
						url: '/companies/all',
					},
				},
			},
		],
		default: 'search',
	},
	{
		displayName: 'Query',
		name: 'q',
		type: 'string',
		displayOptions: {
			show: {
				...showOnlyForCompanies,
				operation: ['search'],
			},
		},
		default: '',
		placeholder: 'Tesla OR Apple',
		description:
			'Search companies by name, alternative names, domains, and ticker symbols. Supports Boolean operators.',
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
			show: {
				...showOnlyForCompanies,
				operation: ['search'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Company ID',
				name: 'id',
				type: 'string',
				default: '',
				placeholder: 'id1,id2',
				description: 'Filter by unique company identifiers (comma-separated)',
				routing: {
					send: {
						type: 'query',
						property: 'id',
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
				description: 'Filter by company headquarters country (comma-separated)',
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
				displayName: 'Domain',
				name: 'domain',
				type: 'string',
				default: '',
				placeholder: 'tesla.com,apple.com',
				description: 'Filter by company domains (comma-separated)',
				routing: {
					send: {
						type: 'query',
						property: 'domain',
						value:
							'={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
					},
				},
			},
			{
				displayName: 'Exchange',
				name: 'exchange',
				type: 'string',
				default: '',
				placeholder: 'NASDAQ,NYSE',
				description: 'Filter by stock exchange (comma-separated)',
				routing: {
					send: {
						type: 'query',
						property: 'exchange',
						value:
							'={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
					},
				},
			},
			{
				displayName: 'Industry',
				name: 'industry',
				type: 'string',
				default: '',
				placeholder: 'Auto Manufacturers',
				description: 'Filter by company industry. Supports Boolean operators.',
				routing: {
					send: {
						type: 'query',
						property: 'industry',
					},
				},
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				placeholder: 'Tesla Inc',
				description: 'Search within company names. Supports Boolean operators.',
				routing: {
					send: {
						type: 'query',
						property: 'name',
					},
				},
			},
			{
				displayName: 'Num Employees From',
				name: 'numEmployeesFrom',
				type: 'number',
				default: 0,
				description: 'Filter for companies with at least this many employees',
				routing: {
					send: {
						type: 'query',
						property: 'numEmployeesFrom',
						value: '={{ $value > 0 ? $value : undefined }}',
					},
				},
			},
			{
				displayName: 'Num Employees To',
				name: 'numEmployeesTo',
				type: 'number',
				default: 0,
				description: 'Filter for companies with no more than this many employees',
				routing: {
					send: {
						type: 'query',
						property: 'numEmployeesTo',
						value: '={{ $value > 0 ? $value : undefined }}',
					},
				},
			},
			{
				displayName: 'Page',
				name: 'page',
				type: 'number',
				typeOptions: {
					minValue: 0,
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
				displayName: 'Sector',
				name: 'sector',
				type: 'string',
				default: '',
				placeholder: 'Technology',
				description: 'Filter by company sector. Supports Boolean operators.',
				routing: {
					send: {
						type: 'query',
						property: 'sector',
					},
				},
			},
			{
				displayName: 'Size',
				name: 'size',
				type: 'number',
				typeOptions: {
					minValue: 1,
					maxValue: 100,
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
				displayName: 'Symbol',
				name: 'symbol',
				type: 'string',
				default: '',
				placeholder: 'TSLA,AAPL,GOOGL',
				description: 'Filter by stock ticker symbols (comma-separated)',
				routing: {
					send: {
						type: 'query',
						property: 'symbol',
						value:
							'={{ $value ? $value.split(",").map(v => v.trim()).filter(v => v) : undefined }}',
					},
				},
			},
		],
	},
];
