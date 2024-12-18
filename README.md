Start front-end:
- cd front-end
- npm install
- npm run dev

Start back-end:
- cd back-end
- npm install
- PORT=<PORT_NAME> npm run dev (Ex: PORT=8000 npm run dev)

Start redis-stack:
- Download redis-stack image by docker using: <b>docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest</b>
- Run redis-stack image in Docker Desktop