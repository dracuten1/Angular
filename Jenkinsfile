pipeline {
  agent {
    node {
      label 'NodeJS'
    }

  }
  stages {
    stage('error') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

  }
}