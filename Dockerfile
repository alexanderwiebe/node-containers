# docker build -t my-node-app .
# docker run --name my-container -p 8000:8000 -d my-node-app:latest

FROM node:18

ARG PORT=8000
ENV PORT=$PORT

WORKDIR app
COPY src src
COPY package.json .
COPY tsconfig.json .

RUN npm install
RUN npm run build

EXPOSE $PORT
CMD npm run start
