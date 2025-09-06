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
        dir('/Users/shawnjoseph/.jenkins/workspace/selenium_test') {
            sh '''
                /usr/bin/python3 -m venv venv
                source venv/bin/activate
                pip install --no-cache-dir -r requirements.txt
            '''
        }
    }
}
        stage('Run Selenium Tests') {
            steps {
                sh '''
                    # Activate the virtual environment again before running tests
                    source venv/bin/activate
                    pytest
                '''
            }
        }
    }
}