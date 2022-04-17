FROM node:latest as node
WORKDIR /app
COPY ./ ./
RUN npm install
RUN npm run build


FROM httpd:latest as httpd
WORKDIR /app
COPY --from=node /app/build /usr/local/apache2/htdocs
EXPOSE 3000