Package.describe({
  summary: "Meteor smart package for meteor-ua-parser.",
  version: "0.3.3",
  git: "https://github.com/classcraft/classcraft-meteor-ua-parser"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.addFiles('cc:meteor-ua-parser.js', 'server');
  api.export('uaParser', 'server');
});

Npm.depends({
  "ua-parser": "0.3.3"
});
