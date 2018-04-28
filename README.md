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
REACT_APP_API_URL=https://onigiri-api.herokuapp.com
REACT_APP_WEB_URL=https://localhost:3000
REACT_APP_FACEBOOK_APP_ID=[FACEBOOK_APP_ID]
REACT_APP_GOOGLE_APP_ID=[GOOGLE_APP_ID]
REACT_APP_STRIPE_KEY=[STRIPE_PUBLIC_KEY]
```

And run the following commands in terminal:

```
yarn install
HTTPS=true yarn start
```

Then open `https://localhost:3000` in a browser.

Note that the server will use a self-signed certificate, so your web browser will almost definitely display a warning upon accessing the page.

## Browser support

Because this project uses CSS3 features, it's only meant for modern browsers. Some browsers currently fail to apply some of the styles correctly.

Chrome and Firefox have full support, but Safari and IE have strange behaviors.

## Related projects

### [onigiri-api](https://github.com/rxseven/onigiri-api)

RESTful API for Onigiri built with Node.js, Express, Passport and MongoDB.

## Credits

Onigiri is developed and maintained by [Theerawat Pongsupawat](https://www.linkedin.com/in/pongsupawat/), frontend web developer from Chiang Mai, Thailand.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## License

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.
