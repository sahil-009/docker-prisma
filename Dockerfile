FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package.json 
COPY package-lock.json package-lock.json
RUN npm install

# Copy Prisma schema
COPY prisma ./prisma/

# Generate Prisma client
RUN npx prisma generate

# Copy the rest of the application
COPY . .

# Build TypeScript
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["node", "dist/index.js"]
