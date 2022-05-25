# host react app on nginx docker container

- create react app:
  ```
  create-react-app nginx_react_demo
  ```
- build it:
  ```
  npm run build
  ```
- create docker file
  ```
  FROM nginx:1.20.2
  WORKDIR /app
  COPY myapp.config /etc/nginx/nginx.conf
  COPY build/ /app/build
  EXPOSE 80
  ENTRYPOINT ["nginx", "-g", "daemon off;"]
  ```
- create .dockerignore file and not necessary files
  ```
  .git/
  .env/
  README.md
  node_modules
  note.txt
  package-lock.json
  package.json
  public
  src
  ```
- build docker image:
  ```
  docker build -t adamcao/reactnginx:1.0 .
  ```
- run container
  ```
  docker run -d -t --name myreact -p 8001:80 adamcao/reactnginx:1.0 
  ```
- open from browser  [localhost:8001](localhost:8001)