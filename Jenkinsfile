pipeline {
    agent {
        docker { label 'ubuntu' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
    }
}