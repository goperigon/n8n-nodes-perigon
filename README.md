# n8n-nodes-perigon

This is the official n8n community node for interacting with the Perigon API. It provides comprehensive access to contextual intelligent APIs including vector articles search, news articles, stories, people, companies, journalists, sources, topics, Wikipedia data, and AI-powered summarization.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

## Installation

Follow these steps to install this node in your n8n instance:

1. Go to **Settings > Community Nodes**
2. Select **Install Another Node**
3. Enter `n8n-nodes-perigon`
4. Click **Install**

Alternatively, you can install it using npm:

## Credentials

To use this node, you need a Perigon API key. You can get one by:

1. Going to [Perigon's website](https://www.goperigon.com/)
2. Creating an account
3. Getting your API key from the dashboard

Once you have your API key, add it to n8n:

1. Go to **Credentials > New Credential**
2. Search for "Perigon API"
3. Enter your API key
4. Save the credential

## Resources and Operations

The Perigon node supports the following resources:

### 📰 Article

Search and filter news articles from 140,000+ sources worldwide.

**Operations:**

- **Search**: Search articles using keyword queries with Boolean operators (AND, OR, NOT)
- **Vector Search**: Search articles using semantic similarity with natural language queries (ideal for LLM workflows)

**Key Parameters:**

- Query string with Boolean operator support
- Category, country, language filters
- Date range filtering (from/to)
- Source domain filtering
- Topic filtering
- Content, title, description search
- Sorting options (date, relevance, add date, refresh date)
- Pagination support (up to 1000 results per page)

### 📚 Story

Track evolving narratives and clustered news headlines.

**Operations:**

- **Search**: Find news story clusters to understand how narratives develop

**Key Parameters:**

- Query filtering for story names and summaries
- Minimum cluster size and unique sources
- Category, country, topic filtering
- Date range filtering
- Source filtering
- Sort by count, created date, relevance, or total count

### 🌐 Wikipedia

Search Wikipedia articles with advanced filtering.

**Operations:**

- **Search**: Search Wikipedia using keyword queries with Boolean operators
- **Vector Search**: Semantic search using natural language queries

**Key Parameters:**

- Query, title, summary, text, and reference searching
- Category filtering
- Wikidata entity ID filtering
- Page view statistics filtering
- Sort by relevance, creation date, or update date

### 👤 Person

Search for public figures, politicians, celebrities, and newsworthy individuals.

**Operations:**

- **Search**: Find people by name, occupation, or Wikidata ID

**Key Parameters:**

- Name search with Boolean operators
- Occupation filtering (by label or Wikidata ID)
- Wikidata entity ID filtering
- Pagination support

### 🏢 Company

Browse and search for companies tracked by Perigon.

**Operations:**

- **Search**: Search companies by name, domain, ticker symbol, and more

**Key Parameters:**

- Query search (name, domains, ticker symbols)
- Country and domain filtering
- Stock exchange filtering
- Industry and sector filtering
- Employee count range filtering
- Ticker symbol filtering

### ✍️ Journalist

Search through 230,000+ journalists from around the world.

**Operations:**

- **Search**: Find journalists by name, publication, or coverage area
- **Get by ID**: Retrieve detailed information about a specific journalist

**Key Parameters:**

- Query search (name, title, Twitter bio)
- Category and topic filtering
- Country filtering
- Source/publication filtering
- Monthly post activity filtering

### 📡 Source

Discover 142,000+ media sources and publications.

**Operations:**

- **Search**: Search and filter news sources

**Key Parameters:**

- Name search with Boolean operators
- Domain filtering (supports wildcards)
- Category and country filtering
- Monthly visit statistics filtering
- Paywall status filtering
- Sort by relevance, global rank, monthly visits, or average monthly posts

### 🏷️ Topic

Browse available topics in the Perigon database.

**Operations:**

- **Search**: Search through all available topics

**Key Parameters:**

- Name search (exact or partial match)
- Category and subcategory filtering

### 🤖 Summarize

Generate AI-powered summaries of search results.

**Operations:**

- **Summarize**: Produce concise AI summaries over articles matching your filters

**Key Parameters:**

- Query for filtering articles
- Custom prompt instructions (up to 2048 characters)
- Model selection (GPT-4.1, GPT-4o, Llama 3.3 70B, DeepSeek R1, etc.)
- Article count limits
- Summarization method (articles or clusters)
- Fields to summarize (title, content, summary)
- All standard article filters (category, country, source, date range)

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

## Boolean Search Syntax

Many search fields support advanced Boolean operators:

- **AND**: Both terms must be present (e.g., `climate AND policy`)
- **OR**: Either term can be present (e.g., `Biden OR Trump`)
- **NOT**: Exclude terms (e.g., `energy NOT fossil`)
- **Wildcards**: Use `*` for multiple characters, `?` for single character (e.g., `climat*`, `wom?n`)
- **Grouping**: Use parentheses (e.g., `(renewable OR clean) AND energy`)
- **Exact phrases**: Use quotes (e.g., `"climate change"`)

Example: `("artificial intelligence" OR AI) AND (healthcare OR medical) NOT cryptocurrency`

## Resources

- [Perigon Website](https://www.goperigon.com/)
- [Perigon API Documentation](https://docs.goperigon.com/)
- [n8n Community Nodes Documentation](https://docs.n8n.io/integrations/community-nodes/)

## License

[MIT](LICENSE.md)
