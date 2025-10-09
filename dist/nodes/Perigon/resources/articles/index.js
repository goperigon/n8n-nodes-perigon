"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articlesDescription = void 0;
const vectorSearch_1 = require("./vectorSearch");
const showOnlyForArticles = {
    resource: ['articles'],
};
exports.articlesDescription = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        credentialTypes: ['has:authenticate'],
        displayOptions: {
            show: showOnlyForArticles,
        },
        options: [
            {
                name: 'Vector Search',
                value: 'vectorSearch',
                action: 'Search articles using vector similarity',
                description: 'Search articles using semantic similarity with natural language queries',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/vector/news/all',
                    },
                },
            },
        ],
        default: 'vectorSearch',
    },
    ...vectorSearch_1.articlesVectorSearchDescription,
];
//# sourceMappingURL=index.js.map