# Your custom Twilio Flex Plugin

Twilio Flex Plugins allow you to customize the apperance and behavior of [Twilio Flex](https://www.twilio.com/flex). If you want to learn more about the capabilities and how to use the API, check out our [Flex documentation](https://www.twilio.com/docs/flex).

More info on the architecture: https://www.twilio.com/docs/flex/tutorials/building-flex-plugins

## Setup

Make sure you have [Node.js](https://nodejs.org) as well as [`npm`](https://npmjs.com) installed.

Afterwards install the dependencies by running `npm install`:

```bash
cd plugin-demo

# If you use npm
npm install
```

## Development

In order to develop locally, you can use the Webpack Dev Server by running:

```bash
npm start
```

This will automatically start up the Webpack Dev Server and open the browser for you. Your app will run on `http://localhost:8080`. If you want to change that you can do this by setting the `PORT` environment variable:

```bash
PORT=3000 npm start
```

When you make changes to your code, the browser window will be automatically refreshed.

## Deploy

Once you are happy with your plugin, you have to bundle it, in order to deply it to Twilio Flex.

Run the following command to start the bundling:

```bash
npm run build
```

Afterwards, you'll find in your project a `build/` folder that contains a file with the name of your plugin project. For example `plugin-example.js`. Take this file and upload it into the Assets part of your Twilio Runtime.

## Notes

This plugin demo has an outbound email component and a dialer that's iframed hosted on Heroku where I use to dial. You can follow the Twilio example here: https://www.twilio.com/docs/voice/tutorials/browser-dialer-node-react 

You can also find the /TwilioFunctions folder where the backend stuff lives. Twilio Function is Twilio's serverless computing platform where you can write Node JS code directly. More info here: https://www.twilio.com/docs/runtime/functions
