import * as configcat from 'configcat-js';

export default {
  install: (app, options) => {
    let configCatClient = configcat.getClient(options.SDKKey, options.clientOptions);
    app.config.globalProperties.configCatClient = configCatClient;
  },
};



// TODO: Check for invalid hook name before mapping