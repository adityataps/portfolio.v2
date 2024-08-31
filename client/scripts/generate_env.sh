#!/bin/bash

echo "Generating ENV file for Client..."
touch .env

echo "VITE_API_URL=$VITE_API_URL" >> .env

echo "ENV file generated successfully."
