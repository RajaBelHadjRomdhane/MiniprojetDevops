pipeline {
	agent any
	tools {
		nodejs 'NodeJS'
	}
	environment {
        DOCKER_HUB_REPO = "raja016/devopstp-rajabelhadjromdhane" 
        DOCKER_HUB_CREDENTIALS = credentials('docker-hub-credentials')

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
		// stage('Test Code'){
		// 	steps {
		// 		 powershell ' npm test '
		// }	


		stage('Build Image') {
            steps {
                script {
                    
                    docker build -t "${env.DOCKER_HUB_REPO}:latest" .
                        echo "Image built successfully"
                    
                }
            }
        }

		stage ('push image') {
			steps{
				script {
			  docker.withRegistry('https://registry.hub.docker.com', DOCKER_HUB_CREDENTIALS) {
        	        docker push "${env.DOCKER_HUB_REPO}:latest"
			  }	
				}
			}
		}
        stage('deploy image'){
			steps {
				script {
		 	docker run -d --name devops-app "${env.DOCKER_HUB_REPO}:latest"				}
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
