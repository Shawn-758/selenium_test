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
                    # Create a virtual environment directly in the workspace
                    /usr/bin/python3 -m venv venv

                    # Activate the virtual environment
                    source venv/bin/activate

                    # Install project dependencies
                    pip install --no-cache-dir -r requirements.txt
                '''
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