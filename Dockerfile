# Use an official Node.js runtime as the base image for the build stage
FROM node:16 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install frontend dependencies
RUN npm ci

# Copy the rest of the frontend files to the container
COPY . .

# Build the Angular app
RUN npm run build

# Use a lightweight Nginx image as the base image for the production stage
FROM nginx:latest

# Copy the built Angular app to the Nginx image
COPY --from=builder /app/dist/jobjack-client /usr/share/nginx/html

# Expose the default Nginx port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]