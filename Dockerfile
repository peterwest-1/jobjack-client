
FROM node:16-alpine AS build
WORKDIR /app

COPY . .
RUN npm ci
RUN npm run build
# Serve Application using Nginx Server
FROM nginx:alpine
COPY --from=build /app/dist/jobjack-client/ /usr/share/nginx/html
EXPOSE 80