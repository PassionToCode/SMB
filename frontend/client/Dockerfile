FROM node:18.16.0

WORKDIR /app

#Environment variables.
ENV PATH /app/node_modules/.bin:$PATH

COPY ./frontend/client/package*.json ./

RUN ls -al

#install npm and react versions.
RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent

#install nodemon to provide hot-reloading functionality.
RUN npm install -g nodemon --save-dev

COPY ./frontend/client .

#use nodemon to run the react application using npm.
CMD ["nodemon", "--exec", "npm", "start"]