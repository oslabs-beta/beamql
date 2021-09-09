FROM node:14.17.6
# Set up a WORKDIR for application in the container and set it to /usr/src/app.
WORKDIR /usr/src/app
COPY . /usr/src/app
#COPY . /usr/src/app
# RUN a command to npm install your node_modules in the container
RUN npm i
RUN npm i -g jest
RUN npm run build
# RUN a command to build your application in the container
# EXPOSE your server port (3000)
EXPOSE 3000
# Create an ENTRYPOINT where you'll run node ./server/server.js
# CMD ["npm", "start"]
