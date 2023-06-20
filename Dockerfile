# Use the official Node.js image as the base image
FROM node:20-slim

# Set the working directory
WORKDIR /app

# install pnpm
RUN npm i -g pnpm

# pnpm fetch does require only lockfile
COPY package.json pnpm-lock.yaml tsconfig.json nodemon.json ./

# fetch and install packages
RUN pnpm fetch --frozen-lockfile
RUN pnpm install --frozen-lockfile

# Copy src files
COPY src/ ./src

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD [ "pnpm", "start" ]