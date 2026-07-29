@Library("Jekins-Git") _

pipeline{
    agent any

    stages{

        stage("Git checkout"){
            steps{
                git(
                    url:"https://github.com/afrilaknaf/Kalles_BackEnd.git",
                    branch:"main"
                )
            }
        }


        stage("Check the file is exists"){
            steps{
                script{
                    if(fileExists(package.json) && fileExists(index.js)){
                        bat "echp File is exists"
                    } else {
                        bat "echo File is not exists"
                    }
                }
            }
        }


        stage("Install package"){
            steps{
                bat "echo Installing the node package"
                bat "npm ci"
            }
        }

        stage("Build"){
            steps{
                bat "echo Backend Build Successful"
            }
        }

    
    }


    post(
        emailpost(
            Subject:"SUCCESS BUILD ${env.JOB_NAME} and ${env.BUILD_NUMBER}",
            Body: """
            <h1>SUCCESS BUILD IN JENKINS</h1>
            <b>Job Name:</b> ${env.JOB_NAME} <br>
            <b>BUILD NUMBER is:</b> ${env.BUILD_NUMBER} <br>
            <b>BUILD URl is:</b> ${env.BUILD_URL} <br>
            <b>Build Status is:</b> FAILURE
            """,
            Useremail:"afrilaknaf85@gmail.com",
            Attachments:"index.js"
        )
    )
}