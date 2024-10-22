# Stage 1
FROM node:alpine AS build

RUN ["npm", "install", "-g", "pnpm"]

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN ["pnpm", "install"]

COPY . .
RUN ["chmod", "+x", "scripts/generate_env.sh"]
RUN ["sh", "scripts/generate_env.sh"]
RUN ["pnpm", "build"]



# Stage 2
FROM node:alpine AS production

RUN ["npm", "install", "-g", "pnpm"]

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN ["pnpm", "install", "--production"]

COPY --from=build /app/dist /app/dist
COPY --from=build /app/.env /app/

EXPOSE 3000
CMD ["pnpm", "start"]
