# ---- Build stage ----
FROM eclipse-temurin:21-jdk AS builder
WORKDIR /src

# Copy wrapper + build files explicitly
COPY gradlew .
COPY gradle/wrapper/ ./gradle/wrapper/
COPY settings.gradle* build.gradle* ./
RUN chmod +x ./gradlew

# Copy sources and build
COPY src ./src
RUN ./gradlew clean bootJar --no-daemon

# ---- Runtime stage ----
FROM eclipse-temurin:21-jre
WORKDIR /app
COPY --from=builder /src/build/libs/*.jar app.jar
ENTRYPOINT ["sh","-c","java -Dserver.port=${PORT:-8080} -jar /app/app.jar"]
