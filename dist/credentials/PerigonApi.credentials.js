"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerigonApi = void 0;
class PerigonApi {
    constructor() {
        this.name = 'perigonApi';
        this.displayName = 'Perigon API';
        this.documentationUrl = 'https://github.com/org/@goperigon/-perigon?tab=readme-ov-file#credentials';
        this.properties = [
            {
                displayName: 'API Key',
                name: 'apiKey',
                type: 'string',
                typeOptions: { password: true },
                required: true,
                default: '',
            },
        ];
        this.authenticate = {
            type: 'generic',
            properties: {
                headers: {
                    'x-api-key': '={{$credentials.apiKey}}',
                },
            },
        };
        this.test = {
            request: {
                baseURL: 'https://api.perigon.io/v1',
                url: '/all',
            },
        };
    }
}
exports.PerigonApi = PerigonApi;
//# sourceMappingURL=PerigonApi.credentials.js.map