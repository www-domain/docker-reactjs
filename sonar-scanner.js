const { scan } = require('sonarqube-scanner');

scan({
    serverUrl: "http://3.107.178.131:9000/",
    options: {
        "sonar.projectKey": "Docker-React",
        "sonar.sources": "./src",
        "sonar.login": "sqb_857d15a7a715a0538d4aa2025f95ac62191b71bd",
    }
}, () => {
    console.log("SonarQube scan completed successfully!");
    process.exit();
});
