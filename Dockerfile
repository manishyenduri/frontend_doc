#create an app directory 
FROM node:14.10.0-alpine
WORKDIR /app
#ENV PATH /app/node_modules/.bin:$PATH
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package.json ./
COPY package-lock.json ./
#RUN npm ci --silnce 
#RUN npm install react-scripts@3.4.1 -g --silent
RUN npm install
COPY . ./
RUN npm run build
EXPOSE 1980
