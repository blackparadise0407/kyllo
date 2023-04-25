pipeline {
    agent {
        docker {
            image 'node:16-alpine'
            args '-u root'
        }
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                sh 'yarn'
                sh 'yarn build'
            }
        }
        stage('Copy artifacts to VPS') {
            steps {
                sshPublisher(
                continueOnError: false, 
                failOnError: true,
                publishers: [
                    sshPublisherDesc(
                        configName: "elykp.com",
                        transfers: [sshTransfer(sourceFiles: 'dist/**/*', remoteDirectory: "kyllo", cleanRemote: true)],
                        verbose: true,
                    )
                    ]
                )
            }
        }
    }
}