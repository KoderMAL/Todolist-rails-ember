#!/bin/bash

npm install -g ember-cli
cd ./todo-frontend
ember s &
clientpid = $!
cd ../todo-api
./bin/bundle install
./bin/rails db:setup
open http://localhost:4200/todo
./bin/rails s
kill $clientpid
