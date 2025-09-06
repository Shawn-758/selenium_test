pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Shawn-758/selenium_test.git'
            }
        }
        stage('Setup Environment') {
            steps {
                sh '''
                    # Install Node.js if it's not present (optional, but good practice)
                    # This command is for a simple case and might need adjustment for your specific OS
                    # e.g., using nvm, or yum install nodejs, or apt-get install nodejs
                    # For a macOS machine:
                    brew install nodejs

                    # Navigate to the React app directory
                    cd my-react-app

                    # Install npm dependencies
                    npm install
                '''
            }
        }
        stage('Run Selenium Tests') {
            steps {
                sh '''
                    # Navigate to the React app directory
                    cd my-react-app

                    # Start the React app in the background
                    npm start &
                    sleep 30

                    # Run tests with Mocha
                    npx mocha selenium_tests.js
                '''
            }
        }
    }
    post {
        always {
            // Ensure the app process is killed after the build
            sh 'pkill -f "npm start"'
        }
    }
}