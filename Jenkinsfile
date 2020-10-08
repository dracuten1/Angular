pipeline {
  agent {
    node {
      label 'angular'
    }

  }
  stages {
    stage('') {
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