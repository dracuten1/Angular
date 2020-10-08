pipeline {
  agent {
     docker { image 'node:alpine' }
  }
  stages {
    stage('Install') {
      steps {
        sh 'npm install g @angular/cli'
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
