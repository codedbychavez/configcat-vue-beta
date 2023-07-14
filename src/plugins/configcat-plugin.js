import * as configcat from 'configcat-js';

export default {
  install: (app, options) => {
    let configCatClient = configcat.createClient(options.SDKKey, options.clientOptions);
    // Augment the hooks to the client
    if (options.hooks) {
      for (let hook of options.hooks) {
        app.config.globalProperties[`${hook}`] = function() {
          return configCatClient.on(`${hook}`, () => {

          });
        }
      }
    }
    app.config.globalProperties.configCatClient = configCatClient;
  },
};



// TODO: Check for invalid hook name before mapping