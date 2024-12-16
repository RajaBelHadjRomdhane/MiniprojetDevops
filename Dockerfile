FROM node:18-alpine

WORKDIR /app

COPY  . /app

RUN npm install

EXPOSE 3000

ENV NAME devopstp-rajabelhadjromdhane

CMD ["npm","start"]