FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
#RUN npm ci --only=production


#RUN npm run tsc

RUN mkdir /usr/src/app/dist

COPY dist /usr/src/app/dist


EXPOSE 7000
CMD [ "node", "dist/index.js", "prod" ]