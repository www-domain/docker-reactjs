const scanner = require('sonarqube-scanner');
scanner({
  serverUrl: 'http://3.107.178.131:9000/', // Replace with your SonarQube server URL
  token: 'sqp_c443a340d90eb8777528edacbeeaa472a6dcb7f4', // Replace with your SonarQube authentication token
  options: {
    'sonar.projectKey': 'Docker-React',
    'sonar.projectName': 'Docker React',
    'sonar.projectVersion': '1.0',
    'sonar.sources': 'src',
    'sonar.tests': 'src',
    'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
    'sonar.exclusions': 'node_modules/**',
    'sonar.test.inclusions': '**/*.test.js,**/*.spec.js,**/*.test.jsx,**/*.spec.jsx'
  },
}, () => process.exit());
