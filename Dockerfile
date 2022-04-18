FROM node:latest as node
WORKDIR /app
COPY ./ ./
RUN npm install
ARG URI
ENV REACT_APP_API_URL=$URI
RUN npm run build
RUN cp ./.htaccess ./build/


FROM httpd:latest as httpd
WORKDIR /app
COPY --from=node /app/build /usr/local/apache2/htdocs
EXPOSE 3000