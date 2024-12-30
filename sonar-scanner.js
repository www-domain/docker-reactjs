const { scan } = require('sonarqube-scanner');

scan({
    serverUrl: "http://your-sonar-server",
    options: {
        "sonar.projectKey": "your-project-key",
        "sonar.sources": "./src",
        "sonar.login": "your-login-token",
    }
}, () => {
    console.log("SonarQube scan completed successfully!");
    process.exit();
});
