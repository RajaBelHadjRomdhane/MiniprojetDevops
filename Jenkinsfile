pipeline {
	agent any
	tools {
		nodejs 'NodeJS'
	}
	environment {
        DOCKER_HUB_REPO = "raja016/devopstp-rajabelhadjromdhane" 
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
				 powershell ' npm test '
		}	
        stage('Run container'){
			steps {
				script {
                docker run -d --name devops-app ${env.DOCKER_HUB_REPO}:latest
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
