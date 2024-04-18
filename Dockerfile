# Utiliza la imagen base oficial de Node.js
FROM node:14

RUN  mkdir -p /usr/src/app
# Establece el directorio de trabajo dentro del contenedor
WORKDIR  /usr/src/app

# Copia el archivo package.json y package-lock.json para instalar las dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install 

# Copia el resto de los archivos de la aplicación
COPY . .

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 2000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
