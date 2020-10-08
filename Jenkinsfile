pipeline {
  agent {
    node {
      label 'latest'
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