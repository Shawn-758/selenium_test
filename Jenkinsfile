pipeline {
    agent any
    tools {
        // You must configure a Git installation in Jenkins.
        // As the error message suggested, "Default" is a good choice for the name.
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
        sh '/usr/local/pyenv/bin/pyenv install --skip-existing 3.8.10'
        sh '/usr/local/pyenv/bin/pyenv local 3.8.10'
        dir('/Users/shawnjoseph/.jenkins/workspace/selenium_test') {
            sh '/Users/shawnjoseph/.pyenv/versions/3.8.10/bin/pip install --no-cache-dir -r requirements.txt'
        }
    }
}
        stage('Run Selenium Tests') {
            steps {
                // Execute the tests using the installed pytest
                sh 'pytest'
            }
        }
    }
}