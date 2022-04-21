# FROM node:latest as node
# WORKDIR /app
# COPY ./ ./
# RUN npm install
# ARG URI
# ENV REACT_APP_API_URL=$URI
# RUN npm run build



# FROM httpd:latest as httpd
# WORKDIR /app
# COPY --from=node /app/build /usr/local/apache2/htdocs
# EXPOSE 3000


# Build Environment
FROM node:14.8.0-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci --silent
# Have a .dockerignore file ignoring node_modules and build
COPY . ./
ARG URI
ENV REACT_APP_API_URL=$URI
RUN npm run build
# Production
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]