# Use an official PHP runtime with Apache
FROM php:8.2-apache

# Set correct permissions for the project files
RUN chmod -R 755 /var/www/html/images

# Copy all project files to server
COPY . /var/www/html/

# Expose HTTP port
EXPOSE 80
