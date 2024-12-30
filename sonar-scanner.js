const scanner = require('sonarqube-scanner');
scanner({
  serverUrl: 'http://3.107.178.131:9000', // Replace with your SonarQube server URL
  token: 'sqp_c443a340d90eb8777528edacbeeaa472a6dcb7f4', // Replace with your SonarQube authentication token
  options: {
    'sonar.projectKey': 'Docker-React',
    'sonar.sources': 'src',
    'sonar.tests': 'src',
    'sonar.test.inclusions': '**/*.test.js,**/*.spec.js,**/*.test.jsx,**/*.spec.jsx',
    'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
  },
}, () => process.exit());
