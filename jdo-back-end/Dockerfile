#  Dockerfile for Node Express Backend

FROM node:17.4.0

# Create App Directory
# RUN mkdir -p /usr/src/app
WORKDIR ./

# Install Dependencies
COPY package*.json ./

RUN npm install --silent

# Copy app source code
#COPY . .

# Exports
EXPOSE 4000

CMD ["npm","start"]