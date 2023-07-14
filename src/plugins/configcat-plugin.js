import * as configcat from 'configcat-js';

export default {
  install: (app, options) => {
    let configCatClient = configcat.createClient(options.SDKKey, options.clientOptions);
    // Augment the hooks to the client
    if (options.hooks) {
      for (const hook of options.hooks) {
        console.log(typeof configCatClient)
      }
    }
    app.config.globalProperties.configCatClient = configCatClient;
  },
};