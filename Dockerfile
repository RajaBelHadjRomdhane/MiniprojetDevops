FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

RUN npm install

COPY . .

EXPOSE 3000

ENV NAME devopstp-rajabelhadjromdhane

CMD ["npm","start"]