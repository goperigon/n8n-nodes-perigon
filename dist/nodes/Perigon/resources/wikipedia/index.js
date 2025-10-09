"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wikipediaDescription = void 0;
const vectorSearch_1 = require("./vectorSearch");
const showOnlyForWikipedia = {
    resource: ['wikipedia'],
};
exports.wikipediaDescription = [
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
                description: 'Search Wikipedia articles using semantic similarity with natural language queries',
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
    ...vectorSearch_1.wikipediaVectorSearchDescription,
];
//# sourceMappingURL=index.js.map