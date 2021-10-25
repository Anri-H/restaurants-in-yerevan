FROM node:lts

RUN npm install -g nodemon

WORKDIR /app

COPY . .

RUN npm install

CMD npm run start