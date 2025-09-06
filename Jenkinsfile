pipeline {
    agent any
    tools {
        // You must have Python and Git configured as tools in Jenkins
        python 'python3.8' 
        git 'git' 
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/your-username/your-python-repo.git'
            }
        }
        stage('Setup Environment') {
            steps {
                sh 'pip install --no-cache-dir -r requirements.txt'
            }
        }
        stage('Run Selenium Tests') {
            steps {
                // Assuming chromedriver is available on the Jenkins agent
                sh 'pytest'
            }
        }
    }
}