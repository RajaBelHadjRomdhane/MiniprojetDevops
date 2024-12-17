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
				// sh 'npm install'
				powershell 'npm install'

				}
		}
		stage('Test Code'){
			steps {
				// sh 'npm test'
				// powershell 'npm test'
		 powershell """
                Write-Host "Working directory: $(Get-Location)"
                Write-Host "Environment variables:"
                Get-ChildItem Env:*

                # Vérifier l'existence du fichier package.json
                Test-Path package.json

                # Exécuter npm test
                npm test

                # Vérifier les fichiers de sortie
                Test-Path ./coverage
                """

			}
		}	
        stage('Build Docker Image'){
			steps {
				script {
					dockerImage = docker.build("${DOCKER_HUB_REPO}:latest")
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
