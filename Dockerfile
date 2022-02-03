FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "./"]
RUN npm install 
COPY . .
RUN chown -R node /usr/src/app
USER node
CMD ["node", "bot.js"]
