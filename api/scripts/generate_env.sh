#!/bin/bash

echo "Generating ENV file for API..."
touch .env

echo "IPINFO_IO_API_KEY=$IPINFO_IO_API_KEY" >> .env
echo "OPENWEATHERMAP_API_KEY=$OPENWEATHERMAP_API_KEY" >> .env
echo "OPENAI_API_KEY=$OPENAI_API_KEY" >> .env

echo "ENV file generated successfully."
