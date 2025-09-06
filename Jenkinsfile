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
        stage('Setup Environment') {
            steps {
                sh '''
                    cd my-react-app
                    npm install
                '''
            }
        }
        stage('Run Selenium Tests') {
            steps {
                sh '''
                    cd my-react-app
                    npm start &
                    sleep 30
                    npx mocha selenium_tests.js
                '''
            }
        }
    }
    post {
        always {
            sh 'pkill -f "npm start"'
        }
    }
}