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
                sshagent(['elykp.com']) {
                    script {
                        def remoteDir = '~/kyllo'
                        sshCommand remoteUser: 'kyle', remoteHost: 'elykp.com', command: "mkdir -p ${remoteDir}"
                        sshPut from: 'dist/', into: remoteDir, remote: true
                    }
                }
            }
        }
    }
}