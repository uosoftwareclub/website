---
title: How to use Github's GraphQL API with Express.js
author: Yong Lin Wang, UOSC
date: 2020-08-21
hero: ./images/header.jpg
excerpt: GitHub offers a powerful REST based API for developers to get data and integrate
---

GitHub offers a powerful REST based API for developers to get data and integrate
with its platform, with API version 4, they also introduced the GitHub GraphQL
API. This article will show how you can leverage the power of GitHub GraphQL API
in your express application.

### About GraphQL

GraphQL is a data querying language that is **strongly typed, introspective, and
hierarchal.** It acts as an application layer as well as a specification. The
*Graph *in GraphQL refers to a graph structure where *nodes *define objects
(repositories, gists, users, etc.) and *edges *define relationship between
objects. The API traverses and returns application data based on the schema
definition, independent of how the data is stored.

This allows a much greater level of flexibility and more precise data fetching
compared to REST based APIs. In one request you can get the name of all the
repositories the user owns and their user profile. [For more information about
GraphQL and how GitHub uses it, visit their developer
page](https://docs.github.com/en/graphql/overview/about-the-graphql-api).

---

### Setting up the Server

I’m going to omit the basic set up like `npm init` and installing dependencies,
and jump right into the code, the dependencies I use can be installed like.

```bash
    npm install express dotenv cors
```

To get started create a js file called `server.js` with the following content:

```js
const express = require('express');
const cors = require('cors');

// Configure Environment
require('dotenv').config();

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(cors());

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
```

Now run `node server.js` to start the server, you should see

[server]: Server is running at [http://localhost:8080](http://localhost:8080)

in your terminal. Good job! We have a working express server now.

### Forming GraphQL Calls

One thing you should note is that GraphQL requests are also sent using the HTTP
protocol so any http-speaking libraries you use for REST APIs can be used to
form GraphQL calls with a few things in mind:

- The request should be a POST request.
- All requests are handled by a single endpoint:
  [https://api.github.com/graphql](https://api.github.com/graphql)
- Authentication is required using [bearer
  tokens](https://oauth.net/2/bearer-tokens)

To make graphql requests in express, I recommend using a libary called
[graphql-request](https://github.com/prisma-labs/graphql-request), to install
the library:

```bash
npm install graphql-request graphql

# if you use yarn
yarn add graphql-request graphql
```

You can use the library inline, or you can create a separate reusable module for
all of your GraphQL calls.

### Authenticating with GitHub GraphQL

To access the API, you need to have a personal access token, you can obtain one
by going to your settings page and developer settings. Make sure to copy your
token before leaving the page because you cannot see the token anymore after.

When creating the token, you are prompted to select the permissions for the
token, choose what is necessary for your application, [see this page for more
details](https://docs.github.com/en/developers/apps/scopes-for-oauth-apps).

Now we can add the GraphQL client to the server

```js
const g = require('graphql-request');
const express = require('express');
const cors = require('cors');

// Configure Environment
require('dotenv').config();

const app = express();
const port = 8080;
const url = 'https://api.github.com/graphql';

// Do not have your token in a string in your code, especially if you use source control
// https://medium.com/codait/environment-variables-or-keeping-your-secrets-secret-in-a-node-js-app-99019dfff716
const TOKEN = 'PUT_YOUR_TOKEN_HERE';
// Create the graphQL client
const graphQLClient = new g.GraphQLClient(url, {
  headers: {
    authorization: `Bearer ${TOKEN}`,
  },
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(cors());

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
```

We are one step closer to getting graphQL working on our server, let’s test this
out by creating an endpoint that gets your profile information from GitHub!

```js
const g = require('graphql-request');
const express = require('express');
const cors = require('cors');

const { GraphQLClient, gql } = g;

// Configure Environment
require('dotenv').config();

const app = express();
const port = 8080;
const url = 'https://api.github.com/graphql';

// Do not have your token in a string in your code, especially if you use source control
// https://medium.com/codait/environment-variables-or-keeping-your-secrets-secret-in-a-node-js-app-99019dfff716
const TOKEN = 'PUT_YOUR_TOKEN_HERE';
// Create the graphQL client
const graphQLClient = new GraphQLClient(url, {
  headers: {
    authorization: `Bearer ${TOKEN}`,
  },
});

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/github-profile', async (req, res) => {
  // The query that gets profile information
  const query = gql`
    {
      viewer {
        login
        name
        company
        url
        bio
      }
    }
  `;
  // Make Graphql call
  const githubRes = await graphQLClient.request(query);
  // Respond with results
  res.json(githubRes);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
```

If you visit
[http://localhost:8080/github-profile](http://localhost:8080/github-profile),
you should be able to see a json with your user profile info!

**Tada! We have integrated our application with GitHub! Now the possibility is
limitless!**
