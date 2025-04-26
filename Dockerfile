# Use an official PHP runtime with Apache
FROM php:8.2-apache

# Install needed PHP extensions
RUN docker-php-ext-install mysqli pdo_mysql gd mbstring zip

# Copy all project files to server
COPY . /var/www/html/

# Expose HTTP port
EXPOSE 80
