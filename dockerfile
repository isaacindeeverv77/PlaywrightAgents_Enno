# Use the official Playwright base image (includes Node.js and browsers)
FROM ://microsoft.com

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of your application
COPY . .

# Command to run tests
CMD ["npx", "playwright", "test"]
