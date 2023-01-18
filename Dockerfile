FROM node:14

# Créez un répertoire pour votre application
RUN mkdir -p /usr/src/app/server
WORKDIR /usr/src/app/server

# Installez les dépendances
COPY package*.json /usr/src/app/server/
RUN npm install

# Copiez les fichiers de votre application
COPY . /usr/src/app/server

# Exposez le port sur lequel votre application écoute
EXPOSE 3001

# Démarrez votre application
CMD ["npm", "start", "./server/index.js"]
