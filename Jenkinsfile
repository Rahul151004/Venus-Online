pipeline{
    agent any

    environment {
        BACKEND_IMAGE = 'rbhat04/venus-server:latest'
        FRONTEND_IMAGE = 'rbhat04/venus-client:latest'
        VITE_API_URL = 'http://server:5000'
    }

    stages{
        // stage('Clone Repository'){
        //     steps{
        //         git branch: 'feature/devops-pipeline', url:'https://github.com/Rahul151004/Venus-Online.git'
        //     }
        // }

        stage('Build Images'){
            steps{
                bat '''
                docker build -t %BACKEND_IMAGE% ./server
                docker build --build-arg VITE_API_URL=%VITE_API_URL% -t %FRONTEND_IMAGE% ./client
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


        stage('Run with Docker Compose') {
            steps {
                withCredentials([file(credentialsId: 'venus-env-file', variable: 'ENV_FILE')]) {
                    bat """
                        copy %ENV_FILE% server\\.env
                        docker compose down
                        docker compose up -d --build
                    """
                }
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
