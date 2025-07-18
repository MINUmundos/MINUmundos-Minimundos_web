# Base image with Node.js
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . .

# Expose Vite dev server port
EXPOSE 5173

# Default command: start Vite dev server
CMD ["npm", "run", "dev", "--", "--host"]
