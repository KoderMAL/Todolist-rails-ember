# Create an image based on this existing ruby image
FROM ruby:2.4.1

# Install the software you need
RUN apk update && apk add build-base nodejs postgresql-dev \
postgresql-dev

# Create a directory for your app
RUN mkdir /app
# Set the working directory for all following commands
WORKDIR /app

# Copy the files needed for the bundle install
COPY ./Gemfile ./Gemfile.lock ./

# Install gems
RUN bundle install

COPY . .

LABEL maintainer="Amine Lalaoui <amine_lalaoui@hotmail.com>"