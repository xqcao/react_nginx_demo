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

## build
```
~/D/t/nginx_react_demo ❯❯❯ npm run build                                                                  (base) 

> nginx_react_demo@0.1.0 build
> react-scripts build

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  49.62 kB (+3.26 kB)  build/static/js/main.596d9add.js
  277 B (-264 B)       build/static/css/main.46c7d540.css

The project was built assuming it is hosted at /.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.
You may serve it with a static server:

  serve -s build

Find out more about deployment here:

  https://cra.link/deployment

~/D/t/nginx_react_demo ❯❯❯ docker build -t adamcao/reactnginx:1.0 .                                       (base) 
[+] Building 1.1s (10/10) FINISHED                                                                               
 => [internal] load build definition from Dockerfile                                                        0.0s
 => => transferring dockerfile: 37B                                                                         0.0s
 => [internal] load .dockerignore                                                                           0.0s
 => => transferring context: 34B                                                                            0.0s
 => [internal] load metadata for docker.io/library/nginx:1.20.2                                             0.9s
 => [auth] library/nginx:pull token for registry-1.docker.io                                                0.0s
 => [1/4] FROM docker.io/library/nginx:1.20.2@sha256:38f8c1d9613f3f42e7969c3b1dd5c3277e635d4576713e6453c61  0.0s
 => [internal] load build context                                                                           0.0s
 => => transferring context: 589.25kB                                                                       0.0s
 => CACHED [2/4] WORKDIR /app                                                                               0.0s
 => CACHED [3/4] COPY myapp.config /etc/nginx/nginx.conf                                                    0.0s
 => [4/4] COPY build/ /app/build                                                                            0.0s
 => exporting to image                                                                                      0.0s
 => => exporting layers                                                                                     0.0s
 => => writing image sha256:c04be5b624cbaeb1b607837a13b5f7215cf8f3d42b97982e0f2aa4f2a20f71b3                0.0s
 => => naming to docker.io/adamcao/reactnginx:1.0                                                           0.0s

Use 'docker scan' to run Snyk tests against images to find vulnerabilities and learn how to fix them
~/D/t/nginx_react_demo ❯❯❯ docker run -d -t --name mywebapp -p 8001:80 adamcao/reactnginx:1.0             (base) 
c3dda13165f50f837f2d829bf307d7ddefc9bacb6609fdb39ba58d7624fd2451
```