FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose port 5000 for the application
EXPOSE 5000

# Command to run the application using Node.js
CMD [ "node", "server.js" ]