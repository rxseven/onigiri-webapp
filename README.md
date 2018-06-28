# Onigiri Webapp

Single Page Application built with React and Redux.

With **Onigiri**, you can create and analyze surveys right in your pocket or web browser —no special software required. You get results as they come in and, you can summarize survey results at a glance with graphs.

## Demo

Onigiri is hosted on Heroku at [https://onigiri-webapp.herokuapp.com](https://onigiri-webapp.herokuapp.com).

## Running Onigiri locally

1. Clone Onigiri Webapp from GitHub:

   ```sh
   git clone https://github.com/rxseven/onigiri-webapp.git
   ```

2. Open `.env.development` file and add the configuration below:

   ```
   REACT_APP_API_URL=https://onigiri-api.herokuapp.com
   REACT_APP_WEB_URL=https://localhost:3000
   REACT_APP_FACEBOOK_APP_ID=[FACEBOOK_APP_ID]
   REACT_APP_GOOGLE_APP_ID=[GOOGLE_APP_ID]
   REACT_APP_STRIPE_KEY=[STRIPE_PUBLIC_KEY]
   ```

3. Install dependencies:

   ```sh
   yarn install
   ```

4. Start the app:

   ```sh
   HTTPS=true yarn start
   ```

5. Open [https://localhost:3000](https://localhost:3000) in the browser.

> Note: the server will use a self-signed certificate, so your web browser will almost definitely display a warning upon accessing the page.

## Browser support

Because this project uses CSS3 features, it’s only meant for modern browsers. Some browsers currently fail to apply some of the styles correctly.

Chrome and Firefox have full support, but Safari and IE have strange behaviors.

## Related projects

### [Onigiri API](https://github.com/rxseven/onigiri-api)

RESTful API for Onigiri built with Node.js, Express, Passport and MongoDB.

### [Setup React App](https://github.com/rxseven/setup-react-app)

React & Redux boilerplate with best practices bootstrapped with CRA.

## Changelog

See [releases](https://github.com/rxseven/onigiri-webapp/releases).

## Acknowledgements

This project is developed and maintained by [Theerawat Pongsupawat](https://www.linkedin.com/in/pongsupawat/), frontend developer from Chiang Mai, Thailand.

## Credits

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## License

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.
