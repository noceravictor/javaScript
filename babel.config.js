const presets = [
    [
      "@babel/env",
      {
        targets: {
          ie: "9",
          chrome: "58",
          safari: "11.1",
        },
        useBuiltIns: "usage",
      },
    ],
  ];
  
  module.exports = { presets };