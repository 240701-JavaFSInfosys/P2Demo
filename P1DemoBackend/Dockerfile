# Use a base image with Java runtime
FROM openjdk:17-jdk-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the built JAR file into the working directory
COPY target/P1Demo-0.0.1-SNAPSHOT.jar app.jar

# Expose the port that the Spring application listens on
EXPOSE 8080

# Run the Spring Boot application
ENTRYPOINT ["java", "-jar", "app.jar"]

 The Dockerfile is a text file that contains the instructions to build a Docker image. The  FROM  instruction specifies the base image to use, which in this case is the official OpenJDK image with Java 11. The  WORKDIR  instruction sets the working directory in the container to  /usr/src/app . The  COPY  instruction copies the Spring Boot JAR file into the container. The  EXPOSE  instruction exposes port 8080 for the application. The  ENTRYPOINT  instruction specifies the command to run when the container starts, which is the Java command to run the JAR file.
 Build the Docker Image
 To build the Docker image, run the following command in the terminal:
 docker build -t your-spring-app .

 The  docker build  command builds a Docker image from the Dockerfile in the current directory. The  -t  flag specifies the name of the image, which in this case is  your-spring-app .
 Run the Docker Container
 To run the Docker container, run the following command in the terminal:
 docker run -p 8080:8080 your-spring-app

 The  docker run  command runs a Docker container from the specified image. The  -p  flag specifies the port mapping, which maps port 8080 on the host to port 8080 in the container.
 Access the Spring Boot Application
 To access the Spring Boot application running in the Docker container, open a web browser and navigate to  http://localhost:8080 . You should see the Spring Boot application running in the Docker container.
 Conclusion
 In this article, we have learned how to deploy a Spring Boot application to a Docker container. We have created a simple Spring Boot application and built a Docker image that runs the application in a Docker container. We have also run the Docker container and accessed the Spring Boot application running in the container.
 Learn more about Spring Boot and Docker:

 Spring Boot Reference Guide
 Docker Documentation


 Share this: Twitter Twitter Facebook Facebook
 Like this: Like   Loading...