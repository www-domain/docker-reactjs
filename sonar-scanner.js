const scanner = require('sonarqube-scanner');

scanner({
    serverUrl: "http://your-sonarqube-server",
    options: {
        "sonar.projectKey": "your-project-key",
        "sonar.sources": "./src",
        "sonar.login": "your-login-token"
    }
}, () => process.exit());

