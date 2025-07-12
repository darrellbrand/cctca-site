# Use official Nginx image
FROM nginx:alpine

# Remove default config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom config
COPY nginx.conf /etc/nginx/conf.d/

# Copy Next.js static export output
COPY out/ /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]