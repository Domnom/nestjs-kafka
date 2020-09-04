FROM node:12.13-alpine As development

WORKDIR /usr/src/app

COPY package.json ./

# RUN npm install --only=development
RUN npm install 
#RUN yarn install --production=true

RUN npm install -g nodemon

COPY . .

RUN npm run build