FROM openjdk:8-jdk-alpine
EXPOSE 8083
ADD target/achat-1.0.jar achat-devops-1.0.jar
ENTRYPOINT ["java","-jar","/achat-devops-1.0.jar"]
