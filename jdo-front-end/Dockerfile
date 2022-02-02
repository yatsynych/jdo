# Dockerfile for React client

# Build react client
FROM node:17.4.0

# Working directory be app
WORKDIR ./

COPY package*.json ./

###  Installing dependencies

RUN npm install --silent

# copy local files to app folder
COPY . .

EXPOSE 3000

CMD ["npm","start"]