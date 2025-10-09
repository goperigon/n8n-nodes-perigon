"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wikipediaVectorSearchDescription = void 0;
const showOnlyForWikipediaVectorSearch = {
    operation: ['vectorSearch'],
    resource: ['wikipedia'],
};
exports.wikipediaVectorSearchDescription = [
    {
        displayName: 'Query',
        name: 'query',
        type: 'string',
        displayOptions: {
            show: showOnlyForWikipediaVectorSearch,
        },
        default: '',
        required: true,
        description: 'Natural language query for semantic search of Wikipedia articles',
        routing: {
            send: {
                type: 'body',
                property: 'query',
            },
        },
    },
    {
        displayName: 'Size',
        name: 'size',
        type: 'number',
        displayOptions: {
            show: showOnlyForWikipediaVectorSearch,
        },
        typeOptions: {
            minValue: 1,
            maxValue: 100,
        },
        default: 10,
        description: 'Number of results to return',
        routing: {
            send: {
                type: 'body',
                property: 'size',
            },
        },
    },
    {
        displayName: 'Additional Filters',
        name: 'filters',
        placeholder: 'Add Filter',
        type: 'fixedCollection',
        displayOptions: {
            show: showOnlyForWikipediaVectorSearch,
        },
        default: {},
        typeOptions: {
            multipleValues: false,
        },
        options: [
            {
                name: 'filterOptions',
                displayName: 'Filter Options',
                values: [
                    {
                        displayName: 'Categories',
                        name: 'category',
                        type: 'string',
                        default: '',
                        placeholder: 'Science,History,Technology',
                        description: 'Comma-separated list of Wikipedia categories',
                    },
                    {
                        displayName: 'Maximum Page Views',
                        name: 'pageviewsTo',
                        type: 'number',
                        default: '',
                        description: 'Maximum average daily page views',
                    },
                    {
                        displayName: 'Minimum Page Views',
                        name: 'pageviewsFrom',
                        type: 'number',
                        default: '',
                        description: 'Minimum average daily page views',
                    },
                    {
                        displayName: 'Sort By',
                        name: 'sortBy',
                        type: 'options',
                        options: [
                            {
                                name: 'Relevance',
                                value: 'relevance',
                            },
                            {
                                name: 'Created At',
                                value: 'createdAt',
                            },
                            {
                                name: 'Updated At',
                                value: 'updatedAt',
                            },
                        ],
                        default: 'relevance',
                        description: 'Sort order for results',
                    },
                    {
                        displayName: 'Wiki Codes',
                        name: 'wikiCode',
                        type: 'string',
                        default: 'enwiki',
                        placeholder: 'enwiki',
                        description: 'Wiki project codes (currently only enwiki is supported)',
                    },
                    {
                        displayName: 'Wikidata IDs',
                        name: 'wikidataId',
                        type: 'string',
                        default: '',
                        placeholder: 'Q7747,Q937',
                        description: 'Comma-separated list of Wikidata entity IDs',
                    },
                    {
                        displayName: 'Wikidata Instance Of IDs',
                        name: 'wikidataInstanceOfId',
                        type: 'string',
                        default: '',
                        placeholder: 'Q5,Q43229',
                        description: 'Filter pages whose Wikidata entities are instances of these IDs',
                    },
                    {
                        displayName: 'Wikidata Instance Of Labels',
                        name: 'wikidataInstanceOfLabel',
                        type: 'string',
                        default: '',
                        placeholder: 'human,organization',
                        description: 'Filter pages whose Wikidata entities are instances of these labels',
                    },
                    {
                        displayName: 'With Page Views',
                        name: 'withPageviews',
                        type: 'boolean',
                        default: false,
                        description: 'Whether to include only pages with viewership statistics',
                    },
                ],
            },
        ],
    },
];
//# sourceMappingURL=vectorSearch.js.map