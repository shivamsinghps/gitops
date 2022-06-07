FROM node:12

# Create app directory and epgpub directory
RUN mkdir /src
WORKDIR /src


#Bundle app source
COPY package.json /src

# Install app dependencies
RUN npm install

COPY . /src

EXPOSE 3000

CMD npm start


