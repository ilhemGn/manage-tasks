FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN apt-get update && apt-get install -y mariadb-client && rm -rf /var/lib/apt/lists/*

RUN npm install


COPY . .

CMD ["node", "app.js"]

