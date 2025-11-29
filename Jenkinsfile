 pipeline{
    agent any

    environment {
        VERRCEL_TOKEN = credentials('verrcel-token')
    }

    stages{
        stage('Install'){
            steps{
                bat 'npm install'
            }
        }
        stage('Test'){
            steps{
                echo 'no test found...'
            }
        }
        stage('Build'){
            steps{
                 bat 'npm run build'
            }
        }
        stage('Deploy'){
            steps{
                    bat 'npx vercel --prod --token=%VERRCEL_TOKEN%'
            }
        }
    }
 }