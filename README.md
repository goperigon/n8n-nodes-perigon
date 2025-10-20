# n8n-nodes-perigon

This is the official n8n community node for the Perigon API. It provides comprehensive access to news intelligence APIs, including news articles, story clusters, companies, public figures, journalists, media sources, topics, Wikipedia data, and AI-powered summarization capabilities.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Perigon](https://www.perigon.io/) provides contextual news intelligence APIs trusted by leading organizations for real-time news monitoring, media analysis, and AI-powered insights.

## Installation

Follow these steps to install this node in your n8n instance:

1. Go to **Settings > Community Nodes**
2. Select **Install Another Node**
3. Enter `@goperigon/n8n-nodes-perigon`
4. Click **Install**

Alternatively, you can install it using npm:

```bash
npm install @goperigon/n8n-nodes-perigon
```

## Documentation

For complete documentation about the Perigon API and its capabilities, visit:

- **[API Documentation](https://perigon.io/docs)** - Comprehensive guides and tutorials
- **[API Reference](https://perigon.io/reference)** - Detailed endpoint documentation
- **[Perigon Website](https://www.perigon.io/)** - Product information and use cases

## Credentials

To use this node, you need a Perigon API key.

### Getting Your API Key

1. Visit [Perigon's website](https://www.perigon.io)
2. Sign up for an account or log in
3. Navigate to your dashboard to retrieve your API key

### Adding Credentials to n8n

1. In n8n, go to **Credentials > New Credential**
2. Search for "Perigon API"
3. Enter your API key
4. Save the credential

Your credentials will be securely stored and automatically used for all Perigon node operations.

## Resources and Operations

The Perigon node supports the following resources:

### 📰 Article

Search and filter news articles from over 140,000 sources worldwide with comprehensive filtering capabilities.

**Operations:**

- **Search**: Keyword-based article search with advanced Boolean operators (AND, OR, NOT)
- **Vector Search**: Semantic similarity search using natural language queries (optimized for AI and LLM workflows)

**Key Features:**

- **Query Filtering**: Full Boolean operator support with exact phrase matching using quotes
- **Content Filtering**: Search within article titles, descriptions, and full content
- **Categorical Filtering**: Filter by categories (Tech, Business, Politics, etc.) and granular topics
- **Geographic Filtering**: Filter by country, state, or city
- **Temporal Filtering**: Date range filtering with `from` and `to` parameters
- **Source Filtering**: Filter by specific publisher domains (supports wildcards)
- **Language Support**: Multi-language article filtering
- **Sorting Options**: Sort by date, relevance, publication date, refresh date, or add date
- **Pagination**: Retrieve up to 1,000 results per page with 0-based pagination
- **Result Count**: Optional total result count display

**Common Use Cases:**

- Real-time news monitoring and alerting
- Media analysis and trend detection
- Competitive intelligence gathering
- Content aggregation for research
- AI-powered news summarization pipelines

### 📚 Story

Track evolving news narratives through automatically clustered headlines from multiple sources.

**Operations:**

- **Search**: Discover and monitor story clusters to understand how news narratives develop over time

**Key Features:**

- **Query Filtering**: Search within story names, summaries, and key points using Boolean operators
- **Cluster Configuration**: Set minimum cluster size and required number of unique sources
- **Categorical Filtering**: Filter by categories, countries, and topics
- **Temporal Filtering**: Date range filtering to track story evolution
- **Source Filtering**: Filter by specific publisher domains
- **Sorting Options**: Sort by article count, creation date, relevance, total count, or last update
- **Pagination**: Navigate through results with configurable page size
- **Result Count**: Optional display of total matching stories

**Common Use Cases:**

- Breaking news monitoring and narrative tracking
- Understanding media coverage patterns across sources
- Crisis communications and reputation management
- Competitive intelligence on industry developments
- Research on how stories evolve in the media

### 🌐 Wikipedia

Search and analyze Wikipedia articles with advanced filtering and semantic capabilities.

**Operations:**

- **Search**: Keyword-based Wikipedia search with Boolean operators
- **Vector Search**: Semantic similarity search using natural language queries

**Key Features:**

- **Multi-Field Search**: Search across article queries, titles, summaries, full text, and references
- **Category Filtering**: Filter by Wikipedia categories
- **Wikidata Integration**: Filter by Wikidata entity IDs and instance types
- **Popularity Metrics**: Filter by page view statistics (minimum and maximum)
- **Wiki Project Filtering**: Filter by wiki codes (currently supports English Wikipedia - `enwiki`)
- **Sorting Options**: Sort by relevance, creation date, or last update date
- **Pagination**: Navigate results with configurable page size
- **Pageview Statistics**: Option to include only pages with viewership data

**Common Use Cases:**

- Knowledge base enrichment and fact-checking
- Entity disambiguation and research
- Background information gathering for news stories
- Educational content creation
- Semantic search for related topics and concepts

### 👤 Person

Search for public figures, politicians, celebrities, business leaders, and other newsworthy individuals.

**Operations:**

- **Search**: Discover people by name, occupation, or unique identifiers

**Key Features:**

- **Name Search**: Search by person name with full Boolean operator support and wildcards
- **Occupation Filtering**: Filter by occupation label (e.g., "politician", "CEO", "actor") or Wikidata occupation IDs
- **Wikidata Integration**: Filter by Wikidata entity IDs for precise identification
- **Pagination**: Navigate results with configurable page size

**Common Use Cases:**

- Media monitoring for specific individuals
- Building contact databases for PR and outreach
- Research on public figures and their activities
- Identifying experts and thought leaders in specific fields
- Enriching CRM data with public figure information

### 🏢 Company

Search and discover companies with detailed business information and filtering options.

**Operations:**

- **Search**: Find companies by name, domain, ticker symbol, industry, and various business attributes

**Key Features:**

- **Query Search**: Search across company names, alternative names, domains, and ticker symbols
- **Name-Specific Search**: Direct filtering by company name with Boolean operator support
- **Geographic Filtering**: Filter by headquarters country
- **Domain Filtering**: Filter by company website domains
- **Stock Market Data**: Filter by stock exchange (NASDAQ, NYSE, etc.) and ticker symbols
- **Industry Classification**: Filter by industry and sector with Boolean operators
- **Company Size**: Filter by employee count ranges
- **Direct ID Lookup**: Filter by specific company IDs
- **Pagination**: Navigate results with configurable page size

**Common Use Cases:**

- Competitive intelligence and market research
- Lead generation and prospecting
- Investment research and due diligence
- Building company databases for sales and marketing
- Monitoring industry trends and company developments

### ✍️ Journalist

Search through over 230,000 journalists and reporters from around the world.

**Operations:**

- **Search**: Find journalists by name, publication, coverage area, or activity level
- **Get by ID**: Retrieve comprehensive details about a specific journalist using their unique identifier

**Key Features:**

- **Query Search**: Search across journalist names, titles, and Twitter biographies with Boolean operators
- **Name-Specific Search**: Direct filtering by journalist name
- **Coverage Filtering**: Filter by categories (Tech, Business, Politics, etc.) and granular topics
- **Geographic Focus**: Filter by countries they commonly cover in their reporting
- **Publication Filtering**: Filter by publisher domains and news sources
- **Activity Metrics**: Filter by monthly posting activity (minimum and maximum thresholds)
- **Direct ID Lookup**: Find specific journalists by their unique IDs
- **Result Count**: Optional display of total matching journalists
- **Pagination**: Navigate results with configurable page size (up to 1,000 per page)

**Common Use Cases:**

- Building media lists and PR contact databases
- Finding subject matter experts for interviews
- Monitoring journalist coverage and beats
- Analyzing media landscape and journalist activity
- Targeted outreach for press releases and stories

### 📡 Source

Discover and analyze over 140,000 media sources and publications worldwide.

**Operations:**

- **Search**: Search and filter news sources with comprehensive criteria

**Key Features:**

- **Name Search**: Search by source name with full Boolean operator support
- **Domain Filtering**: Filter by publisher domains with wildcard support (e.g., `*.cnn.com`)
- **Category Filtering**: Filter by primary content categories
- **Geographic Filtering**: Filter by country coverage
- **Traffic Metrics**: Filter by monthly visit ranges (minimum and maximum)
- **Paywall Status**: Filter sources by paywall presence
- **Source Groups**: Filter by predefined publisher bundles (e.g., "top100")
- **Sorting Options**: Sort by relevance, global rank, monthly visits, or average monthly posts
- **Result Count**: Optional display of total matching sources
- **Pagination**: Navigate results with configurable page size

**Common Use Cases:**

- Building media monitoring source lists
- Analyzing media landscape and publication reach
- Identifying authoritative sources for specific topics
- Filtering sources by audience size and engagement
- Creating custom news feeds from trusted publications

### 🏷️ Topic

Browse and discover topics available in the Perigon database for precise content filtering.

**Operations:**

- **Search**: Search through all available topics with hierarchical filtering

**Key Features:**

- **Name Search**: Search topics by exact name or partial text match
- **Category Filtering**: Filter topics by broad article categories (Tech, Business, Politics, etc.)
- **Subcategory Filtering**: Filter by specific subcategories for granular topic discovery
- **Pagination**: Navigate results with configurable page size

**Common Use Cases:**

- Discovering available topics for content filtering
- Understanding topic taxonomy and structure
- Building topic-based content categorization systems
- Exploring related topics within categories
- Creating targeted news feeds by topic

### 🤖 Summarize

Generate AI-powered summaries of news articles using state-of-the-art language models.

**Operations:**

- **Summarize**: Produce intelligent, concise summaries from articles matching your search criteria

**Key Features:**

- **Query Filtering**: Filter articles using Boolean operators before summarization
- **Custom Prompts**: Provide detailed instructions (up to 2,048 characters) to guide summary generation
- **Model Selection**: Choose from multiple leading AI models:
  - GPT-4.1, GPT-4.1 Mini, GPT-4.1 Nano
  - GPT-4o, GPT-4o Mini
  - Llama 3.3 70B Versatile
  - DeepSeek R1 Distill Llama 70B
- **Article Limits**: Control the number of articles to include (max 100) and return
- **Summarization Methods**:
  - **ARTICLES**: Include all matching articles
  - **CLUSTERS**: Select one representative article per story cluster
- **Field Selection**: Choose which article fields to summarize (title, content, summary)
- **Token Control**: Set maximum token limits for generated summaries
- **Article Filtering**: Apply all standard filters (category, country, source, date range)

**Common Use Cases:**

- Automated news briefings and digests
- Competitive intelligence reports
- Market research summaries
- Crisis monitoring and alerts
- Content curation for newsletters
- AI-powered research assistance

## Example Usage

### Search Recent Tech News

1. Add the Perigon node to your workflow
2. Select **Article** as the resource
3. Select **Search** as the operation
4. Enter your search query: `"artificial intelligence" AND technology`
5. In Additional Options:
   - Category: `Tech`
   - From Date: `2024-01-01`
   - Size: `20`
6. Run the workflow

### Find News Stories About Climate Change

1. Add the Perigon node
2. Select **Story** as the resource
3. Select **Search** as the operation
4. Enter query: `climate change`
5. Set minimum unique sources: `3`
6. Run the workflow

### Search for Journalists Covering Finance

1. Add the Perigon node
2. Select **Journalist** as the resource
3. Select **Search** as the operation
4. Enter query: `finance`
5. In Additional Options:
   - Category: `Business,Finance`
   - Min Monthly Posts: `10`
6. Run the workflow

### Semantic Search for Similar Articles (LLM Workflows)

1. Add the Perigon node
2. Select **Article** as the resource
3. Select **Vector Search** as the operation
4. Enter natural language query: `Articles about renewable energy innovations and their impact on climate policy`
5. Set size to desired number of results
6. Run the workflow

### Generate AI Summary of News

1. Add the Perigon node
2. Select **Summarize** as the resource
3. Select **Summarize** as the operation
4. Enter query: `electric vehicles`
5. Customize the prompt field with your summary instructions
6. In Additional Options:
   - Category: `Tech,Business`
   - Max Article Count: `20`
   - Model: `gpt-4.1`
7. Run the workflow

### Search Companies by Industry

1. Add the Perigon node
2. Select **Company** as the resource
3. Select **Search** as the operation
4. Enter query: `Tesla OR Apple OR Microsoft`
5. In Additional Options:
   - Industry: `Technology OR Auto Manufacturers`
   - Num Employees From: `1000`
6. Run the workflow

### Find Journalist Contacts for PR Campaign

1. Add the Perigon node
2. Select **Journalist** as the resource
3. Select **Search** as the operation
4. Enter query: `technology reporter`
5. In Additional Options:
   - Category: `Tech`
   - Min Monthly Posts: `5`
   - Source: `techcrunch.com,theverge.com,wired.com`
6. Run the workflow

### Get Detailed Journalist Information

1. Add the Perigon node
2. Select **Journalist** as the resource
3. Select **Get by ID** as the operation
4. Enter the journalist ID (obtained from a previous search)
5. Run the workflow to retrieve full profile details

## AI Agent Compatibility

This node is compatible with n8n's AI agent functionality (`usableAsTool: true`), allowing it to be used as a tool within AI agent workflows. This enables:

- Dynamic news retrieval based on agent decisions
- Automated research and fact-checking
- Context-aware content generation
- Multi-step information gathering workflows

## Advanced Features

### Boolean Search Syntax

Many search fields support advanced Boolean operators for precise querying:

- **AND**: Both terms must be present (e.g., `climate AND policy`)
- **OR**: Either term can be present (e.g., `Biden OR Trump`)
- **NOT**: Exclude terms (e.g., `energy NOT fossil`)
- **Wildcards**: Use `*` for multiple characters, `?` for single character (e.g., `climat*`, `wom?n`)
- **Grouping**: Use parentheses to group terms (e.g., `(renewable OR clean) AND energy`)
- **Exact Phrases**: Use double quotes for exact matching (e.g., `"climate change"`)

**Example Complex Query:**

```
("artificial intelligence" OR AI OR "machine learning") AND (healthcare OR medical) NOT cryptocurrency
```

### Semantic Vector Search

Both Article and Wikipedia resources support vector search for semantic similarity matching:

- Use natural language queries instead of keywords
- Find conceptually related content even without exact keyword matches
- Ideal for AI/LLM workflows and exploratory research
- Better results for complex, multi-faceted queries

## Resources

- **[Perigon Website](https://www.perigon.io/)** - Product information and pricing
- **[API Documentation](https://www.perigon.io/docs)** - Complete API guides
- **[API Reference](https://www.perigon.io/reference)** - Endpoint documentation
- **[n8n Documentation](https://docs.n8n.io/)** - Learn about n8n workflows
- **[Community Nodes](https://docs.n8n.io/integrations/community-nodes/)** - n8n community node information

## Support

For issues, questions, or feature requests:

- **GitHub Issues**: [Report bugs or request features](https://github.com/goperigon/n8n-nodes-perigon/issues)
- **Perigon Support**: Contact support@perigon.io
- **n8n Community**: [Join the n8n community](https://community.n8n.io/)

## License

[MIT](LICENSE.md)
