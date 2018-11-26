# Onigiri

[![Latest Release](https://img.shields.io/badge/latest-1.0.0-lightgrey.svg?style=flat 'Latest Release')](https://github.com/rxseven/onigiri-webapp/releases/tag/v1.0.0) [![Build Status](https://travis-ci.org/rxseven/onigiri-webapp.svg?branch=master 'Build Status')](https://travis-ci.org/rxseven/onigiri-webapp) [![Code Coverage](https://coveralls.io/repos/github/rxseven/onigiri-webapp/badge.svg 'Code Coverage')](https://coveralls.io/github/rxseven/onigiri-webapp) [![Docker Hub Pulls](https://img.shields.io/docker/pulls/rxseven/onigiri-webapp.svg)](https://hub.docker.com/r/rxseven/onigiri-webapp 'Docker Hub Pulls') [![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/ 'CC BY-NC-ND 4.0') [![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0 'AGPL v3')

React & Redux single-page web application for collecting and organizing surveys.

With **Onigiri**, you can create and analyze surveys right in your pocket or on your personal laptop —no special software required. You get results as they come in and, you can summarize survey results at a glance with graphs.

> Onigiri (おにぎり) also known as rice ball, is a Japanese food made from white rice formed into triangular or cylindrical shapes and often wrapped in seaweed. For more information, see [Wikipedia](https://en.wikipedia.org/wiki/Onigiri).

## Table of Contents

- [Live Demo](#live-demo)
- [Running Onigiri Locally](#running-onigiri-locally)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Development Workflow](#development-workflow)
- [Third-party Services](#third-party-services)
- [Browser Support](#browser-support)
- [Related Projects](#related-projects)
- [Development Milestones](#development-milestones)
- [Changelog](#changelog)
- [Acknowledgements](#acknowledgements)
- [Credits](#credits)
- [Licenses](#licenses)

## Live Demo

**Onigiri** is running on **Heroku** at [https://onigiri-webapp.herokuapp.com](https://onigiri-webapp.herokuapp.com)

> **App sleeping...** as Onigiri and its API run on [Heroku’s free plan](https://www.heroku.com/free), when an app on Heroku has only one web dyno and that dyno doesn’t receive any traffic in 1 hour, the dyno goes to sleep. When someone accesses the app, the dyno manager will automatically wake up the web dyno to run the web process type. **This causes a short delay for this first request**, but subsequent requests will perform normally. For more information, see [App Sleeping on Heroku](https://blog.heroku.com/app_sleeping_on_heroku).

> **Daily limit** as [Onigiri API](https://github.com/rxseven/onigiri-api) runs on [SendGrid’s free plan](https://sendgrid.com/free/), and the free trial is already expired, at which point, **Onigiri is restricted to sending 100 emails per day**. For more information, see [SendGrid Pricing & Plans](https://www.sendgrid.com/pricing/).

> **Login with Facebook** button won’t work for you because the relevant Facebook app is still in [development mode](https://developers.facebook.com/docs/apps/managing-development-cycle), and you don’t have access to it.

[Back to top](#table-of-contents)

## Running Onigiri Locally

The optimized production version of Onigiri was built, packed into a standardized Docker image, and distributed to [Docker Hub](https://hub.docker.com/r/rxseven/onigiri-webapp), allowing you to easily download and virtually run the container-based application anywhere, even on your personal laptop.

### Overview

There are only five steps to get Onigiri up and running on your local machine:

1. Create a fresh project directory
2. Copy self-signed certificate from GitHub repository
3. Add a custom domain name to the local Hosts file
4. Create Docker Compose configuration file
5. Run the app on the terminal!

### Prerequisites

To run Onigiri on your local machine, you don’t need to clone the entire project from GitHub repository or have the development environment fully configured. The only thing you need is just have [Docker Community Edition](https://store.docker.com/search?type=edition&offering=community) *(v18.06.1\*)* installed.

### Setup

**1.** Create a new project directory:

```sh
mkdir onigiri && cd onigiri
```

**2.** Copy the self-signed certificate and its key for the production domain name from [`src/config/nginx/certs`](https://github.com/rxseven/onigiri-webapp/tree/master/src/config/nginx/certs) and paste into `./ssl` sub-directory:

```
onigiri
└── ssl
    ├── onigiri-webapp.herokuapp.com.crt
    └── onigiri-webapp.herokuapp.com.key
```

An **SSL certificate** is a digital certificate that authenticates the identity of your app. Once that certificate is installed on your web server, your app has established a secure session with the web server via HTTPS connections.

In later steps, we will add and configure a custom domain name in the local [Hosts file](https://en.wikipedia.org/wiki/Hosts_(file)) and use HTTPS with the self-signed certificate to allow browsers to connect to the app securely.

> **Self-signed certificates** are free and can be used to encrypt data just as well as CA-signed certificates, but your users will be displayed a warning that says that the certificate is not trusted by their computer or browser. For development and testing purposes, you can easily create and sign a certificate yourself with open source tool like [OpenSSL](https://www.openssl.org).

> **Requiring HTTPS for Facebook Login** – From October 6, 2018, all Facebook apps are required to use HTTPS, regardless of what environment they are running on. For more information see [Facebook Developer News](https://developers.facebook.com/blog/post/2018/06/08/enforce-https-facebook-login/).

**3.** Create Docker Compose file in the project’s root directory:

```sh
touch docker-compose.yml
```

Then, add the configuration below to the newly created file:

```yml
version: "3.7"

services:
  proxy:
    container_name: onigiri-proxy
    image: jwilder/nginx-proxy:latest
    ports:
      - 443:443
    volumes:
      - type: bind
        source: /var/run/docker.sock
        target: /tmp/docker.sock
        read_only: true
      - type: bind
        source: ./ssl
        target: /etc/nginx/certs
  app:
    container_name: onigiri-app
    environment:
      VIRTUAL_HOST: onigiri-webapp.herokuapp.com
      VIRTUAL_PORT: 80
    image: rxseven/onigiri-webapp:1.0.0
```

Provided DNS is setup to forward `onigiri-webapp.herokuapp.com` to the host running a reverse proxy server, the request will be routed to **onigiri-proxy** container with the `VIRTUAL_HOST` environment variable set.

Now, your final project structure should look simple like this:

```
onigiri
├── ssl
│   ├── onigiri-webapp.herokuapp.com.crt
│   └── onigiri-webapp.herokuapp.com.key
└── docker-compose.yml
```

**4.** Add a custom domain name to the local [Hosts file](https://en.wikipedia.org/wiki/Hosts_(file)) on your local machine to point the domain name to the IP address of the environment you want to run, which is the [localhost](https://en.wikipedia.org/wiki/Localhost):

```sh
sudo nano /etc/hosts
```

Enter [superuser password](https://en.wikipedia.org/wiki/Sudo), then add the line below at the end of the existing entries:

```
127.0.0.1 onigiri-webapp.herokuapp.com
```

> **Resolving host names with the local Hosts file** – Domain names or IP addresses on a local machine can be resolved by adding entries in the local Hosts file. Entries in the local Hosts file have the added advantage that the system can run the application server, even when disconnected from the network.

> Note: if you want to run the live version of Onigiri, you must remove the production domain name from the entries listed in the local Hosts file. Otherwise, your requests will not be sending over the internet, but will rather be sending to [127.0.0.1](https://127.0.0.1/) (loopback address) which is your [localhost](https://localhost/) instead.

### Run

**1.** Start [Docker](https://docs.docker.com/docker-for-mac/install/#install-and-run-docker-for-mac).

**2.** Run the **app** and **proxy** services with Docker Compose command:

```sh
docker-compose up
```

This command will create and start **onigiri-proxy** container running a **reverse proxy server** based on [jwilder/nginx-proxy](https://hub.docker.com/r/jwilder/nginx-proxy) image and **onigiri-app** container running a **web server** and **Onigiri app** based on [rxseven/onigiri-webapp](https://hub.docker.com/r/rxseven/onigiri-webapp).

**3.** Open [https://onigiri-webapp.herokuapp.com](https://onigiri-webapp.herokuapp.com) in the browser.

The reverse proxy server will use the self-signed certificate in `./ssl` directory to enable HTTPS connections. Once the browser has connected to the server, it will display an error message indicating that the app is unsafe. Just **ignore the warning** and allow the browser to access the unsafe site.

And since Onigiri was built in the **production environment** (see line 5 in [`scripts/build.js`](https://github.com/rxseven/onigiri-webapp/blob/master/scripts/build.js#L5)), this means that all environment variables specified in [`.env.production`](https://github.com/rxseven/onigiri-webapp/blob/master/.env.production) file were applied to the build process while the app was building. With this, you don’t need to separately run its API on your local machine, all API calls will be sending to the production [Onigiri API](https://github.com/rxseven/onigiri-api) running on [https://onigiri-api.herokuapp.com](https://onigiri-api.herokuapp.com).

*Containers give you instant Onigiri portability!*

> Note: the **Login with Facebook** button won’t work for you, the Facebook app specified in [`.env.production`](https://github.com/rxseven/onigiri-webapp/blob/master/.env.production#L3) file is still in [development mode](https://developers.facebook.com/docs/apps/managing-development-cycle), and you don’t have access to it.

### How this works

When you start Docker, a default bridge network (also called **bridge**) is created automatically, and newly-started containers connect to it. A bridge network allows containers (running on the same Docker daemon host) connected to the same bridge network to communicate directly with each other.

**onigiri-proxy** container sits between **onigiri-app** container and the clients (e.g. web browser) in order to **provide SSL termination functionality**. Inside the container, the **reverse proxy server** is listening on port 443 and publishes port 443 to the host system’s interfaces, the port exposed on the outside of the container (where clients connect). This port is accessible on the host (at 127.0.0.1:443) and the port is available to any client that can reach the host, e.g. [from a mobile device on the same network](#accessing-localhost-from-any-device-on-the-same-network) (at 192.168.1.24:443, for instance).

**onigiri-app** container runs a **web server** serving Onigiri app to clients, in response to their requests. This is the container being proxied by **onigiri-proxy** container, and it must expose the port to be proxied. Inside the container, the **web server** is listening on [port 80](https://github.com/rxseven/onigiri-webapp/blob/master/Dockerfile.production#L65) (by default, Nginx HTTP server listens for incoming connections and binds on port 80), but it doesn’t actually publish the port to the outside world, because we don’t want this container to be accessible on the host (by default the outside world cannot connect to containers). But we would rather allow **onigiri-proxy** container (which is connecting to the same bridge network) to be able to forward the requests to it.

The browser uses the entry in the local Hosts file to override the IP-address-to-URL mapping returned by a DNS server. HTTPS connections from the browser goes to the reverse proxy server on port 443 (HTTPS). The reverse proxy server then [handles the SSL encryption/decryption](https://github.com/jwilder/nginx-proxy#ssl-support) (so that traffic between the reverse proxy server and the web server is in HTTP) and proxies the incoming requests from the client towards the web server [serving static content](https://docs.nginx.com/nginx/admin-guide/web-server/serving-static-content/) (Onigiri app) which is listening for incoming connections from other containers on the same bridge network on port 80.

> By default, Docker exposes container ports to the IP address 0.0.0.0 (this matches all IPv4 addresses on the local machine, including 127.0.0.1).

> **127.0.0.1** is the loopback internet protocol (IP) address also referred to as the [localhost](https://en.wikipedia.org/wiki/Localhost). The address is used to establish an IP connection to the same machine or computer being used by the end-user. For more information, see [127.0.0.1 – What Are its Uses and Why is it Important?](http://www.tech-faq.com/127-0-0-1.html).

> A **web server** or **HTTP sever** is a server that serve the pieces of information that form web pages to users, in response to their requests.

> A **reverse proxy server** is a server that typically sits in front of other web servers in order to provide additional functionality that the web servers may not provide themselves. For more information, see [Automated Nginx Reverse Proxy for Docker](http://jasonwilder.com/blog/2014/03/25/automated-nginx-reverse-proxy-for-docker/).

[Back to top](#table-of-contents)

## Features

### Authentication

Password-based and OAuth2 *(via third-party services, [Facebook](https://developers.facebook.com/products/account-creation) & [Google](https://cloud.google.com/))*

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

> Note: full details on Onigiri’s features and technical information are available [here](https://onigiri-webapp.herokuapp.com/about).

[Back to top](#table-of-contents)

## Technology Stack

Onigiri was built with [MERN](https://www.mongodb.com/blog/post/the-modern-application-stack-part-1-introducing-the-mean-stack) stack, one of the most popular stack of technologies for building a modern single-page app.

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

> Note: RESTful API for Onigiri built with Node.js can be found in [this repository](https://github.com/rxseven/onigiri-api).

[Back to top](#table-of-contents)

## Development Workflow

- Project bootstraping with Create React App
- Development environment and app containerizing with Docker
- JavaScript and assets bundling with Webpack
- Development server and live reloading with Webpack DevServer
- HTTPS proxying with Nginx and self-signing SSL certificate with OpenSSL
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
- CI/CD with GitHub, Travis CI, Coveralls, Heroku, and AWS Elastic Beanstalk

> Note: the complete guidelines are available in [this project](https://github.com/rxseven/setup-react-app).

[Back to top](#table-of-contents)

## Third-party Services

### Infrastructure

- [Heroku](https://www.heroku.com/) - cloud platform as a service
- [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/) - orchestration service for deploying infrastructure
- [AWS IAM](https://aws.amazon.com/iam/) - web service that helps you securely control access to AWS resources
- [Amazon S3](https://aws.amazon.com/s3/) - object storage built to store and retrieve any amount of data from anywhere
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
- [Docker Hub](https://hub.docker.com) - cloud-based registry service for distributing container images

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

- Add automated targets (scripts) to Makefile *(in progress)*.
- Refactor code with functional programming principles *(in progress)*.
- Implement components in isolation with [Storybook](https://storybook.js.org).
- Optimize the app’s performance.
- Add more unit tests and static type checking to cover the entire project *(in progress)*.

[Back to top](#table-of-contents)

## Changelog

See [releases](https://github.com/rxseven/onigiri-webapp/releases).

## Acknowledgements

This project is maintained by [Theerawat Pongsupawat](http://www.rxseven.com), frontend developer from Chiang Mai, Thailand.

## Credits

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Licenses

The content of this project itself is licensed under the [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International license](http://creativecommons.org/licenses/by-nc-nd/4.0/), and the underlying source code is licensed under the [GNU AGPLv3 license](https://www.gnu.org/licenses/agpl-3.0).

---

\* the minimum required version or higher | ** the latest version
