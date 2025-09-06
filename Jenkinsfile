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
                // Installs Python 3.8 using pyenv. You can change this version.
                sh '/usr/local/pyenv/bin/pyenv install --skip-existing 3.8.10' 
                // Sets the local Python version for this directory
                sh 'pyenv local 3.8.10'
                // Installs the dependencies from your requirements file
                sh 'pip install --no-cache-dir -r requirements.txt'
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