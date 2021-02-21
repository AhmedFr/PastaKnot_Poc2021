FROM node:alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE $API_PORT
CMD ["npm", "start"]