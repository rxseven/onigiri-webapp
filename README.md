# Onigiri

[![Build Status](https://travis-ci.org/rxseven/onigiri-webapp.svg?branch=master)](https://travis-ci.org/rxseven/onigiri-webapp) [![Coverage Status](https://coveralls.io/repos/github/rxseven/onigiri-webapp/badge.svg)](https://coveralls.io/github/rxseven/onigiri-webapp) [![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/) [![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

React & Redux single-page web application for collecting and organizing surveys.

With **Onigiri**, you can create and analyze surveys right in your pocket or on your personal laptop —no special software required. You get results as they come in and, you can summarize survey results at a glance with graphs.

> Onigiri (おにぎり) also known as rice ball, is a Japanese food made from white rice formed into triangular or cylindrical shapes and often wrapped in seaweed. For more information, see [Wikipedia](https://en.wikipedia.org/wiki/Onigiri).

## Table of Contents

- [Live Demo](#live-demo)
- [Running Onigiri Locally](#running-onigiri-locally)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Development Workflow](#development-workflow)
- [Third-party services](#third-party-services)
- [Browser Support](#browser-support)
- [Related Projects](#related-projects)
- [Development Milestones](#development-milestones)
- [Changelog](#changelog)
- [Acknowledgements](#acknowledgements)
- [Credits](#credits)
- [Licenses](#licenses)

## Live Demo

Onigiri is hosted on Heroku at [https://onigiri-webapp.herokuapp.com](https://onigiri-webapp.herokuapp.com)

> **App sleeping...** as Onigiri and its API run on a free plan, when an app on Heroku has only one web dyno and that dyno doesn’t receive any traffic in 1 hour, the dyno goes to sleep. When someone accesses the app, the dyno manager will automatically wake up the web dyno to run the web process type. **This causes a short delay for this first request**, but subsequent requests will perform normally. For more information, see [App Sleeping on Heroku](https://blog.heroku.com/app_sleeping_on_heroku).

> **Daily limit** as Onigiri runs on a free plan, and the free trial is already expired, at which point, **Onigiri is restricted to sending 100 emails per day**. For more information, see [SendGrid Pricing & Plans](https://www.sendgrid.com/pricing/).

[Back to top](#table-of-contents)

## Running Onigiri Locally

### Prerequisites

#### Development environment

- [nvm](https://github.com/creationix/nvm) and [Node.js v8.9.3](https://nodejs.org/en/blog/release/v8.9.3/) or higher
- [npm v5.5.1](https://github.com/npm/npm/releases/tag/v5.5.1) or higher or [the latest version of Yarn](https://yarnpkg.com/en/)

#### Software as a Service

- [Facebook app ID](https://developers.facebook.com/docs/apps/register/)
- [Google app ID](https://developers.google.com/identity/protocols/OAuth2)
- [Stripe publishable key](https://stripe.com/docs/keys)

### Setup

**1.** Clone Onigiri Webapp from GitHub:

```sh
git clone https://github.com/rxseven/onigiri-webapp.git
```

**2.** Switch to a specified Node version:

```sh
nvm use
```

**3.** Open `.env.development` file and add the configuration below:

```
REACT_APP_API_URL=https://onigiri-api.herokuapp.com
REACT_APP_WEB_URL=https://localhost:3000
REACT_APP_FACEBOOK_APP_ID=[FACEBOOK_APP_ID]
REACT_APP_GOOGLE_APP_ID=[GOOGLE_APP_ID]
REACT_APP_STRIPE_KEY=[STRIPE_PUBLIC_KEY]
```

**4.** Install dependencies:

```sh
yarn install
```

### Start

**1.** Start the app:

```sh
yarn start:https
```

**2.** Open [https://localhost:3000](https://localhost:3000) in the browser.

> Note: the server will use a self-signed certificate, so your web browser will almost definitely display a warning upon accessing the page.

[Back to top](#table-of-contents)

## Features

### Authentication

Password-base and OAuth *(via third-party services, [Facebook](https://developers.facebook.com/products/account-creation) & [Google](https://cloud.google.com/))*

- Sign-up *(register)*
- Sign-in
- Sign-out
- JSON Web Token

### Users

- View user profile
- Delete user account

### Payments

- View credits
- Add credits, checkout, pay by credit card *(via third-party service, [Stripe](https://stripe.com/checkout))*

### Surveys

- Create survey *(and send emails)*
- View survey list *(with infinite scrolling functionality)*
- View survey details and statistics
- View recipient list
- Update survey *(mark as archive and/or complete)*
- Delete survey

### Emails and Statistics

- Send survey emails *(via third-party service, [SendGrid](https://sendgrid.com/))*
- Collect response data *(via webhook)*
- Update survey statistics

> Link: full details on Onigiri’s features and technical information are available [here](https://onigiri-webapp.herokuapp.com/about).

[Back to top](#table-of-contents)

## Technology Stack

Onigiri is built with [MERN](https://www.mongodb.com/blog/post/the-modern-application-stack-part-1-introducing-the-mean-stack) stack, one of the most popular stack of technologies for building a modern single-page app.

### Web application

- React, React Router, React Transition Group, Recompose
- Redux, Redux Saga, Redux Immutable, Redux Form, Reselect
- Lodash, Ramda, Axios, Immutable, Normalizr
- Sass, PostCSS, CSS modules, Bootstrap
- [More...](https://github.com/rxseven/onigiri-webapp/blob/master/package.json)

### RESTful API

- Node.js, Express, Passport, MongoDB, Mongoose
- Body parser, Path parser, Joi, Lodash
- Bcrypt.js, CORS, JSON Web Token
- SendGrid, Stripe, Gravatar
- [More...](https://github.com/rxseven/onigiri-api/blob/master/package.json)

> Link: RESTful API for Onigiri built with Node.js can be found in [this repository](https://github.com/rxseven/onigiri-api).

[Back to top](#table-of-contents)

## Development Workflow

- Project bootstraping with Create React App
- Development server, live reloading, and assets bundling with Webpack
- JavaScript transpiling with Babel
- CSS pre-processing and transforming with Sass, PostCSS, and CSS modules
- JavaScript linting with ESLint
- Stylesheet linting with Stylelint
- Code formatting with Prettier
- Automate testing with Jest and Enzyme
- Assets analyzing and debuging with Source Map Explorer
- Static type checking with Flow
- Code debugging with Visual Studio Code and Chrome Debugger
- Pre-commit hooking with Husky and Lint-staged
- CI/CD with GitHub, Travis CI, Coveralls, and Heroku
- App deploying with Docker *(in progress)*

> Link: the complete guidelines are available in [this project](https://github.com/rxseven/setup-react-app).

[Back to top](#table-of-contents)

## Third-party services

### Infrastructure

- [Heroku](https://www.heroku.com/) - cloud platform as a service
- [mLab](https://mlab.com/) - database as a service for MongoDB

### Cloud computing and Platforms

- [SendGrid](https://sendgrid.com/) - cloud-based email
- [Stripe](https://stripe.com/checkout) - online payment platform
- [Facebook Platform](https://developers.facebook.com/products/account-creation) - social networking platform
- [Google Cloud Platform](https://cloud.google.com/) - cloud computing, Hosting, and APIs

### Software as a Service

- [GitHub](https://github.com/) - web-based hosting service for version control using Git
- [Travis CI](https://travis-ci.org/) - continuous integration
- [Coveralls](https://coveralls.io/) - test coverage history and statistics

[Back to top](#table-of-contents)

## Browser Support

Because this project uses CSS3 features, it’s only meant for modern browsers. Some browsers currently fail to apply some of the styles correctly.

Chrome and Firefox have full support, but Safari and IE have strange behaviors.

[Back to top](#table-of-contents)

## Related Projects

**[Onigiri API](https://github.com/rxseven/onigiri-api)**

RESTful API for Onigiri built with Node.js, Express, Passport and MongoDB.

**[Setup React App](https://github.com/rxseven/setup-react-app)**

React & Redux starter kit with best practices bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

[Back to top](#table-of-contents)

## Development Milestones

- Setup container with [Docker](https://www.docker.com) *(in progress)*.
- Refactor code with functional programming principles *(in progress)*.
- Deploy the app on [DigitalOcean](https://www.digitalocean.com) or [Amazon Web Service (AWS)](https://aws.amazon.com).
- Implement components in isolation with [Storybook](https://storybook.js.org).
- Optimize the app’s performance.
- Add more unit tests and static type checking to cover the entire project *(in progress)*.

[Back to top](#table-of-contents)

## Changelog

See [releases](https://github.com/rxseven/onigiri-webapp/releases).

## Acknowledgements

This project is built and maintained by [Theerawat Pongsupawat](http://www.rxseven.com), frontend developer from Chiang Mai, Thailand.

## Credits

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Licenses

The content of this project itself is licensed under the [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International license](http://creativecommons.org/licenses/by-nc-nd/4.0/), and the underlying source code is licensed under the [GNU AGPLv3 license](https://www.gnu.org/licenses/agpl-3.0).
