FROM nginx:1.20.2
WORKDIR /app
COPY myapp.config /etc/nginx/nginx.conf
COPY build/ /app/build
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]