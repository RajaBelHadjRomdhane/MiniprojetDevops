pipeline {
	agent any
	tools {
		nodejs 'NodeJS'
	}
	
	stages {
		stage('Checkout Github'){
			steps {
git branch: 'main', credentialsId: 'dev-doc-git', url: 'https://github.com/RajaBelHadjRomdhane/MiniprojetDevops.git'			}
		}		
		stage('Install node dependencies'){
			steps {
				sh 'npm install'
			}
		}
		stage('Test Code'){
			steps {
				sh 'npm test'
			}
		}
		// stage('Build Docker Image'){
		// 	steps {
		// 		script {
		// 			dockerImage = docker.build("${DOCKER_HUB_REPO}:latest")
		// 		}
		// 	}
		// }
		// stage('Trivy Scan'){
		// 	steps {
		// 		sh 'trivy --severity HIGH,CRITICAL --no-progress image --format table -o trivy-scan-report.txt ${DOCKER_HUB_REPO}:latest'
		// 	}
		// }
		// stage('Push Image to DockerHub'){
		// 	steps {
		// 		script {
		// 			docker.withRegistry('https://registry.hub.docker.com', "${DOCKER_HUB_CREDENTIALS_ID}"){
		// 				dockerImage.push('latest')
		// 			}
		// 		}
		// 	}
		// }
		
	
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