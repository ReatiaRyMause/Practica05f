# Imagen Node según versión instalada
FROM node:24

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias y ejecuta instalación
COPY package.json package-lock.json ./
RUN npm install

# Copia el resto de los archivos
COPY . .

# Expone el puerto que usará React (por defecto 3000)
EXPOSE 4200

# Ejecuta la aplicación React
CMD ["npm", "start"]
