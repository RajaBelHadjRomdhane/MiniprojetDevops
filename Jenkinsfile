pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'raja016/devopstp-rajabelhadjromdhane:latest' // Votre image DockerHub
        CONTAINER_NAME = 'rajabelhadjromdhane' // Nom du conteneur
        APP_PORT = '8080' // Port exposé par l'application
    }

    stages {
        stage('Pull Docker Image') {
            steps {
                echo "Téléchargement de l'image Docker depuis DockerHub..."
                sh "docker pull ${DOCKER_IMAGE}"
            }
        }

        stage('Run Docker Container') {
            steps {
                echo "Démarrage du conteneur Docker..."
                sh """
                docker rm -f ${CONTAINER_NAME} || true
                docker run -d --name ${CONTAINER_NAME} \
                    -p ${APP_PORT}:${APP_PORT} \
                    ${DOCKER_IMAGE}
                """
            }
        }
    }

    post {
        success {
            echo "Déploiement réussi du conteneur Docker."
        }
        failure {
            echo "Échec lors du déploiement du conteneur Docker."
        }
    }
}
