pipeline {
    agent any
    tools {
        git 'Default'
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Shawn-758/selenium_test.git'
            }
        }
        stage('Check Python Version') {
            steps {
                sh 'python3 --version'
            }
        }
    }
}