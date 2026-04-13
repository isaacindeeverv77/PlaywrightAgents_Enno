# Dockerfile
FROM ://microsoft.com
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npx", "playwright", "test"]