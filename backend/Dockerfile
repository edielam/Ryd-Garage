FROM adoptopenjdk/openjdk11:latest
VOLUME /tmp
EXPOSE 8080
ARG JAR FILE
COPY cardatabase-0.0.1-SNAPSHOT.jar rydapp.jar
ENTRYPOINT ["java","-jar","/rydapp.jar"]