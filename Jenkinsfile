pipeline{
    agent any

    environment {
        BACKEND_IMAGE = 'rbhat04/venus-server:latest'
        FRONTEND_IMAGE = 'rbhat04/venus-client:latest'
    }

    stages{
        stage('Clone Repository'){
            steps{
                git 'https://github.com/Rahul151004/Venus-Online.git'
            }
        }

        stage('Build Images'){
            steps{
                bat '''
                docker build -t %BACKEND_IMAGE% ./server
                docker build -t %FRONTEND_IMAGE% ./client
                '''
            }
        }

        stage('Push Images to Docker Hub'){
            steps{
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    bat '''
                        echo Logging into Docker Hub...
                        echo %DOCKER_PASSWORD% | docker login -u %DOCKER_USERNAME% --password-stdin
                        
                        echo Pushing images to Docker Hub...
                        docker push %BACKEND_IMAGE%
                        docker push %FRONTEND_IMAGE%

                        echo Logging out...
                        docker logout
                    '''
                }
            }
        }

        stage('Run Images'){
            steps{
                bat '''
                echo Running backend container...
                docker run -d --name venus-server -p 5000:5000 %BACKEND_IMAGE%

                echo Running frontend container...
                docker run -d --name venus-client -p 3000:80 %FRONTEND_IMAGE%
                '''
            }
        }

        stage('Run with Docker Compose') {
            steps {
                bat '''
                echo Starting containers...
                docker compose down
                docker compose up -d --build
                '''
            }
        }
        
    }

    post {
        always {
            echo 'Cleaning up workspace...'
            cleanWs()
        }
    }
}
