# Step 1: Build the Next.js app
FROM node:18-alpine AS builder

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build


# Step 2: Serve with Nginx
FROM nginx:alpine

# Install dockerize
ENV DOCKERIZE_VERSION=v0.6.1
RUN apk add --no-cache curl && \
    curl -sSL https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    | tar -C /usr/local/bin -xzv

# Remove default config
RUN rm /etc/nginx/conf.d/default.conf

# Add nginx config template (this file should use {{ .Env.PORT }} syntax)
COPY nginx.conf.template /etc/nginx/templates/nginx.conf.template

# Copy exported static files
COPY --from=builder /app/out /usr/share/nginx/html

# Expose port (Heroku sets $PORT, not port 80)
EXPOSE 8080

# Use dockerize to replace env vars in nginx.conf.template and run nginx
CMD ["dockerize", "-template", "/etc/nginx/templates/nginx.conf.template:/etc/nginx/conf.d/default.conf", "nginx", "-g", "daemon off;"]
