#!/bin/bash

environment=$1

echo '' > .env

# Express
echo "EXPRESS_API_HOST=$EXPRESS_API_HOST" >> .env
echo "EXPRESS_API_PORT=$EXPRESS_API_PORT" >> .env
