pipeline {
    agent {
        docker {
            image 'node:16-alpine'
            args '-u root'
        }
    }
    environment {
        VITE_APP_PB_URL = "https://api.elykp.com"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'yarn'
            }
        }
        stage('Test') {
            steps {
                sh 'yarn test'
            }
        }
        stage('Build and compress') {
            steps {
                sh 'yarn build'
                sh 'tar -czvf dist.tar.gz dist/'
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
                            transfers: [sshTransfer(
                                sourceFiles: 'dist.tar.gz', 
                                remoteDirectory: "kyllo", 
                                cleanRemote: true, 
                                execCommand: "tar -xzvf /home/kyle/kyllo/dist.tar.gz /home/kyle/kyllo"
                                )
                            ],
                            verbose: true,
                        )
                    ]
                )
            }
        }
    }
}