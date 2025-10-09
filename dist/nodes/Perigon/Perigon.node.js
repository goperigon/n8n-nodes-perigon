"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Perigon = void 0;
const n8n_workflow_1 = require("n8n-workflow");
const articles_1 = require("./resources/articles");
const wikipedia_1 = require("./resources/wikipedia");
class Perigon {
    constructor() {
        this.description = {
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
            inputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            outputs: [n8n_workflow_1.NodeConnectionTypes.Main],
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
                ...articles_1.articlesDescription,
                ...wikipedia_1.wikipediaDescription,
            ],
        };
    }
}
exports.Perigon = Perigon;
//# sourceMappingURL=Perigon.node.js.map