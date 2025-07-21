FROM node:20-alpine

WORKDIR /app

COPY ./package.json ./package.json

RUN npm install

COPY . .

ENV DATABASE_URL=postgresql://postgres:mysecreatepassword@localhost:5432/postgres

RUN echo $DATABASE_URL  DATABASE_URL=npx prisma migrate dev

RUN npx prisma generate

CMD ["npm", "start"]

