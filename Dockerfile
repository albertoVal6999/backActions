FROM node:lts
WORKDIR /app
COPY package.json package-lock.json tsconfig.json ./
RUN npm install
COPY . .
RUN npm install -g ts-node nodemon
EXPOSE 3000
CMD ["npm", "run", "dev"]
