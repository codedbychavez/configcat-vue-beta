import * as configcat from 'configcat-js';

export default {
  install: (app, options) => {

    let configCatClient = configcat.getClient(
      options.SDKKey,
      configcat.PollingMode.AutoPoll, 
      options.clientOptions
    )

    if (options.pollingMode == 'manual') {
      configCatClient = configcat.getClient(
        options.SDKKey,
        configcat.PollingMode.ManualPoll, 
        options.clientOptions
      );
    }

    app.config.globalProperties.configCatClient = configCatClient;
  },
};


// TODO: Check for invalid hook name before mapping