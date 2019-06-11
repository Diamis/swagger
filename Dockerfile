FROM node:12.2.0-alpine

RUN mkdir -p /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# Установка зависимостей
COPY package.json /app/package.json
RUN npm install

COPY . /app

EXPOSE 3333

CMD ["npm", "start"]