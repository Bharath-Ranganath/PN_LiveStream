exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    
    specs: ['livestream.spec.js'],


    capabilities: {
      browserName: 'chrome',
      'chromeOptions': {
        // 'args': ['--headless', '--disable-gpu', '--disable-extensions', '--no-sandbox']
        'args': ['--ignore-certificate-errors'],
      },
      shardTestFiles: true,
      maxInstances: 2
    },
  };
    
  