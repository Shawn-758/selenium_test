pipeline {
    agent any
    tools {
        // You must have Node.js and Git configured as tools in Jenkins
        nodejs 'node16' 
        git 'git'
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Shawn-758/selenium_test'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Start Application') {
            steps {
                sh 'npm start &'
                sh 'sleep 30'
            }
        }
        stage('Run Selenium Tests') {
            steps {
                sh 'npx mocha selenium_tests.js'
            }
        }
    }
    post {
        always {
            // Kill the React app process to clean up after the build
            sh 'pkill -f "npm start"'
        }
    }
}