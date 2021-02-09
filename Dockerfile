# base image
FROM node:12.20.1-alpine

# set timezone
RUN apk add tzdata
RUN cp /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime
RUN echo "America/Sao_Paulo" >  /etc/timezone

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY . /app
RUN npm install
RUN npm install nodemon -g

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# start app
CMD ["npm", "run", "start"]