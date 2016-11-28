FROM node:latest

RUN useradd --user-group --create-home --shell /bin/false app
RUN npm install --global bower
RUN npm install --global nodemon

ENV SRC=/usr/src

RUN mkdir -p $SRC/app
COPY package.json npm-shrinkwrap.json $SRC/app/
RUN chown -R app:app $SRC

USER app

WORKDIR $SRC/app
RUN npm install
RUN npm cache clean

CMD ["npm", "start"]
