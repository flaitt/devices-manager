FROM node:13-alpine


COPY package*.json ./

ADD src ./src

RUN npm install

RUN npm run clean

RUN ls

RUN npm run build 

COPY . .

EXPOSE 3000

WORKDIR dist

CMD [ "node", "index.js" ]