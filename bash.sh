docker build -t adamcao/reactnginx:1.0 .

docker run -d -t --name mywebapp -p 8001:80 adamcao/reactnginx:1.0

docker ps