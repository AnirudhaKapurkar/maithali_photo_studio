# Use an official PHP runtime with Apache
FROM php:8.2-apache


# Copy all project files to server
COPY . /var/www/html/

# Expose HTTP port
EXPOSE 80
