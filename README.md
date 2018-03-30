## Onigiri Webapp

Single Page Application built with React and Redux.

With **Onigiri**, you can create and analyze surveys right in your pocket or web browser —no special software required. You get results as they come in and, you can summarize survey results at a glance with graphs.

## Demo

### Live demo

Hosted on Heroku at [https://onigiri-webapp.herokuapp.com/](https://onigiri-webapp.herokuapp.com/)

### To build the demo locally

Clone a repository from `https://github.com/rxseven/onigiri-webapp.git`

Configure `.env.development`

```
REACT_APP_API_URL=http://onigiri-api.herokuapp.com
REACT_APP_WEB_URL=http://localhost:3000
REACT_APP_STRIPE_KEY=[STRIPE_PUBLIC_KEY]
```

And run the following commands in terminal:

```
yarn install
yarn start

```

Then open `localhost:3000` in a browser.

## Development configuration

### Prettier

We will configure Prettier to format our code based on our ESLint rules.

First we need to install [prettier-eslint](https://www.npmjs.com/package/prettier-eslint) by running

`yarn add prettier-eslint --dev`

We want Visual **Studio Code** to format our code using **Prettier** after saving a file.

Press `CMD + ,` if you’re on a Mac to open your Workspace Settings then add the following:

```json
// Format a file on save. A formatter must be available, the file must not be auto-saved, and editor must not be shutting down.
"editor.formatOnSave": true,
// Enable/disable default JavaScript formatter (For Prettier)
"javascript.format.enable": false,
// Use 'prettier-eslint' instead of 'prettier'. Other settings will only be fallbacks in case they could not be inferred from eslint rules.
"prettier.eslintIntegration": true
```

## Browser support

Because this project uses CSS3 features, it's only meant for modern browsers. Some browsers currently fail to apply some of the styles correctly.

Chrome and Firefox have full support, but Safari and IE have strange behaviors.

## Related projects

[onigiri-api](https://github.com/rxseven/onigiri-api)

RESTful API for Onigiri built with Node.js, Express, Passport and MongoDB.

## Credits

Onigiri is developed and maintained by [Theerawat Pongsupawat](https://www.linkedin.com/in/pongsupawat/), frontend web developer from Chiang Mai, Thailand.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## License

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.