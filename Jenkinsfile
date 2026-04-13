pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm // Pulls code from your Git repo
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t playwright-tests .'
            }
        }
        stage('Run Tests') {
            steps {
                // --ipc=host prevents Chromium from crashing due to memory limits
                sh 'docker run --rm --ipc=host playwright-tests'
            }
        }
    }
    post {
        always {
            // Optional: Publish HTML reports or JUnit results
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: true, keepAll: true, reportDir: 'playwright-report', reportFiles: 'index.html', reportName: 'Playwright Report'])
        }
    }
}
