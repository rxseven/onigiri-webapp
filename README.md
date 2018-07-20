# Onigiri

[![Build Status](https://travis-ci.org/rxseven/onigiri-webapp.svg?branch=master)](https://travis-ci.org/rxseven/onigiri-webapp) [![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/) [![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

React & Redux web application for collecting and organizing surveys.

With **Onigiri**, you can create and analyze surveys right in your pocket or web browser —no special software required. You get results as they come in and, you can summarize survey results at a glance with graphs.

> Onigiri (おにぎり) also known as rice ball, is a Japanese food made from white rice formed into triangular or cylindrical shapes and often wrapped in seaweed. For more information, see [Wikipedia](https://en.wikipedia.org/wiki/Onigiri).

## Table of Contents

- [Demo](#demo)
- [Running Onigiri Locally](#running-onigiri-locally)
- [Running Tests](#running-tests)
- [Features and Specification](#features-and-specification)
- [State Shape](#state-shape)
- [Development Workflow](#development-workflow)
- [Browser Support](#browser-support)
- [Related Projects](#related-projects)
- [Changelog](#changelog)
- [Acknowledgements](#acknowledgements)
- [Credits](#credits)
- [Licenses](#licenses)

## Demo

Onigiri is hosted on Heroku at [https://onigiri-webapp.herokuapp.com](https://onigiri-webapp.herokuapp.com)

> **App sleeping...** as Onigiri and its API run on a free plan, when an app on Heroku has only one web dyno and that dyno doesn’t receive any traffic in 1 hour, the dyno goes to sleep. When someone accesses the app, the dyno manager will automatically wake up the web dyno to run the web process type. **This causes a short delay for this first request**, but subsequent requests will perform normally. For more information, see [App Sleeping on Heroku](https://blog.heroku.com/app_sleeping_on_heroku).

> **Daily limit** as Onigiri runs on a free plan, and the free trial is already expired, at which point, **Onigiri is restricted to sending 100 emails per day**. For more information, see [SendGrid Pricing & Plans](https://www.sendgrid.com/pricing/).

[Back to top](#table-of-contents)

## Running Onigiri Locally

### Prerequisites

#### Development environment

- [nvm](https://github.com/creationix/nvm) and [Node.js v8.9.3](https://nodejs.org/en/blog/release/v8.9.3/) or higher
- [npm v5.5.1](https://github.com/npm/npm/releases/tag/v5.5.1) or higher or [the latest version of Yarn](https://yarnpkg.com/en/)

#### Third party services

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

**5.** Start the app:

```sh
yarn start:https
```

**6.** Open [https://localhost:3000](https://localhost:3000) in the browser.

> Note: the server will use a self-signed certificate, so your web browser will almost definitely display a warning upon accessing the page.

[Back to top](#table-of-contents)

## Running Tests

Run tests with the command below:

```sh
yarn test
```

> Note: by default, when you run the command above, Jest will only run the tests related to files changed (modified) since the last commit. This is an optimization designed to make your tests run fast regardless of how many tests in the project you have. However, you can also press a in the watch mode to force Jest to run all tests.

[Back to top](#table-of-contents)

## Features and Specification

Full details on Onigiri’s features and technical information are available [here](https://onigiri-webapp.herokuapp.com/about).

[Back to top](#table-of-contents)

## State Shape

As Redux encourages us to think about our application in terms of the data we need to manage. The data at any given point in time is the *"state"* of our application, and the structure and organization of that state is typically referred to as its *"shape"*. The shape of our state plays a major role in how we structure our reducer logic. For more information on basic reducer structure, see [this recipe](https://redux.js.org/recipes/structuring-reducers/basic-reducer-structure).

Onigiri has an [Immutable Collection](https://facebook.github.io/immutable-js/docs/#/Collection) as the top of the state tree. The most common way to organize data within that top-level Immutable Map is to further divide data into sub-trees, where each top-level key represents some *"domain"* or *"slice"* of related data. Thus, Onigiri has 4 root state domains as follows:

- data
- screens
- burgerMenu
- form

Because Redux store represents the core of the application, we should **define our state shape in terms of our domain data and app state rather than our UI component tree**. Below are what of each state domain looks like:

### Data domain

This state domain has 4 sub-trees:

```
data
├── credits
│   ├── balance
│   └── lastCheckout
├── features
│   └── payments
│       └── ui
│           └── asynchronous
│               └── post
│                   ├── error
│                   └── loading
├── interfaces
│   ├── modal
│   │   └── isOpen
│   └── session
│       └── asynchronous
│           └── signout
│               ├── error
│               └── loading
└── session
    ├── authorization
    ├── loading
    │   ├── signin
    │   └── verify
    └── user
        ├── email
        ├── id
        ├── name
        │   ├── firstName
        │   └── lastName
        └── photo
            └── url
```

### Screens domain

This state domain has 2 sub-trees:

```
screens
├── surveys
└── users
```

#### Surveys

```
surveys
├── details
│   ├── data
│   │   └── survey
│   │       ├── no
│   │       ├── body
│   │       ├── archived
│   │       ├── dateSent
│   │       ├── yes
│   │       ├── from
│   │       ├── completed
│   │       ├── subject
│   │       ├── sender
│   │       ├── landing
│   │       ├── title
│   │       └── _id
│   └── ui
│       └── asynchronous
│           ├── delete
│           │   └── survey
│           │       ├── error
│           │       └── loading
│           ├── get
│           │   ├── recipients
│           │   │   ├── error
│           │   │   └── loading
│           │   └── survey
│           │       ├── error
│           │       └── loading
│           └── patch
│               └── survey
│                   ├── error
│                   └── loading
├── doorway
│   ├── data
│   │   └── landing
│   │       └── URI
│   └── ui
│       └── asynchronous
│           └── get
│               └── landing
│                   ├── error
│                   └── loading
├── list
│   ├── data
│   │   └── surveys
│   │       ├── data
│   │       │   ├── 5b4ee1d58cfd9a1392082091
│   │       │   │   ├── no
│   │       │   │   ├── yes
│   │       │   │   ├── _id
│   │       │   │   ├── dataSent
│   │       │   │   ├── subject
│   │       │   │   └── title
│   │       │   ├── ...
│   │       │   └── ...
│   │       └── meta
│   │           ├── query
│   │           │   ├── limit
│   │           │   └── page
│   │           ├── paging
│   │           │   ├── next
│   │           │   └── previous
│   │           └── summary
│   │               ├── pages
│   │               └── total
│   ├── ui
│   │   └── asynchronous
│   │       └── get
│   │           ├── error
│   │           ├── loading
│   │           └── loaded
│   └── view
│       ├── mode
│       ├── pagination
│       │   ├── current
│       │   ├── more
│       │   ├── next
│       │   ├── query
│       │   └── total
│       ├── query
│       └── selected
└── new
    └── ui
        └── asynchronous
            └── post
                ├── error
                └── loading
```

#### Users

```
users
├── profile
│   ├── data
│   │   └── profile
│   │       ├── gender
│   │       ├── verified
│   │       ├── name
│   │       │   ├── firstName
│   │       │   └── lastName
│   │       ├── creationDate
│   │       ├── provider
│   │       ├── photo
│   │       │   └── url
│   │       ├── role
│   │       ├── language
│   │       ├── id
│   │       └── email
│   └── ui
│       └── asynchronous
│           ├── delete
│           │   └── profile
│           │       ├── error
│           │       └── loading
│           ├── get
│           │   ├── credits
│           │   │   ├── error
│           │   │   └── loading
│           │   └── profile
│           │       ├── error
│           │       └── loading
│           └── post
│               └── checkout
│                   ├── error
│                   └── loading
├── signin
│   └── ui
│       ├── asynchronous
│       │   └── post
│       │       ├── error
│       │       └── loading
│       └── strategy
│           └── type
└── signup
    └── ui
        └── asynchronous
            └── post
                ├── error
                └── loading
```

### Third-party library’s domains

This state domain has 2 sub-trees:

#### Burger menu

```
burgerMenu
└── isOpen
```

#### Redux form

```
form
├── signin
├── signup
└── survey
```

[Back to top](#table-of-contents)

## Development Workflow

The complete guidelines are available in [this project](https://github.com/rxseven/setup-react-app).

[Back to top](#table-of-contents)

## Browser Support

Because this project uses CSS3 features, it’s only meant for modern browsers. Some browsers currently fail to apply some of the styles correctly.

Chrome and Firefox have full support, but Safari and IE have strange behaviors.

[Back to top](#table-of-contents)

## Related Projects

**[Onigiri API](https://github.com/rxseven/onigiri-api)**

RESTful API for Onigiri built with Node.js, Express, Passport and MongoDB.

**[Setup React App](https://github.com/rxseven/setup-react-app)**

React & Redux starter kit with best practices bootstrapped with Create React App.

[Back to top](#table-of-contents)

## Changelog

See [releases](https://github.com/rxseven/onigiri-webapp/releases).

## Acknowledgements

This project is maintained by [Theerawat Pongsupawat](http://www.rxseven.com), frontend developer from Chiang Mai, Thailand.

## Credits

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Licenses

The content of this project itself is licensed under the [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International license](http://creativecommons.org/licenses/by-nc-nd/4.0/), and the underlying source code is licensed under the [GNU AGPLv3 license](https://www.gnu.org/licenses/agpl-3.0).
