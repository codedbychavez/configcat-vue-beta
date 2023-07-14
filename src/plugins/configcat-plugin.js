import * as configcat from 'configcat-js';

export default {
  install: (app, options) => {
    let configCatClient = configcat.createClient(options.SDKKey, options.clientOptions);
    // Augment the hooks to the client
    if (options.hooks.length > 0) {
      for (hook of options.hook) {
        console.log('The hook: ', hook)
      }
    }
    app.config.globalProperties.configCatClient = configCatClient;
  },
};