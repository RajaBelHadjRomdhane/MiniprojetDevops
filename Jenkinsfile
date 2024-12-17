pipeline {
	agent any
	tools {
		nodejs 'NodeJS'
	}
	environment {
        DOCKER_HUB_REPO = "raja016/devopstp-rajabelhadjromdhane" // Replace with your actual repository name
    }
	
	stages {
		stage('Checkout Github'){
			steps {
git branch: 'main', credentialsId: 'dev-doc-git', url: 'https://github.com/RajaBelHadjRomdhane/MiniprojetDevops.git'			}
		}		
		stage('Install node dependencies'){
			steps {
				powershell 'npm install'

				}
		}
		stage('Test Code'){
			steps {
				powershell 'npm test'

			}
		}	
        stage('Build Docker Image'){
			steps {
				script {
                    dockerImage = docker.build("${env.DOCKER_HUB_REPO}:latest")
				}
			}
		}
	
	}

	post {
		success {
			echo 'Build&Deploy completed succesfully!'
		}
		failure {
			echo 'Build&Deploy failed. Check logs.'
		}
	}
}
