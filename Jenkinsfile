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
                    # Install pyenv and Python using a consistent method
                    # This command will work as long as a base Python installation is available on the agent
                    python3 -m pip install --user pyenv-virtualenv

                    # Create a virtual environment for the project
                    /usr/bin/python3 -m venv venv
                    source venv/bin/activate

                    # Install project dependencies
                    pip install --no-cache-dir -r requirements.txt
                '''
            }
        }
        stage('Run Selenium Tests') {
            steps {
                sh '''
                    # Activate the virtual environment before running tests
                    source venv/bin/activate
                    pytest
                '''
            }
        }
    }
}