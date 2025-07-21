FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY ./package.json ./
RUN npm install

# Copy all source code
COPY . .

# Set environment variable (can be overridden in docker-compose)
ENV DATABASE_URL=postgresql://postgres:mysecreatepassword@localhost:5432/postgres

# Generate Prisma client
RUN npx prisma generate

# Start the application
CMD ["npm", "start"]
