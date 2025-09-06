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
                    sh '/Users/shawnjoseph/.pyenv/bin/pyenv install --skip-existing 3.8.10'
                    sh '/Users/shawnjoseph/.pyenv/bin/pyenv local 3.8.10'
                    sh '/Users/shawnjoseph/.pyenv/versions/3.8.10/bin/pip install --no-cache-dir -r requirements.txt'
                }
            }
        }
        stage('Run Selenium Tests') {
            steps {
                sh '/Users/shawnjoseph/.pyenv/versions/3.8.10/bin/pytest'
            }
        }
    }
}