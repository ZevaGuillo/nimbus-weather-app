# Easy way

# FROM node:20-alpine 
# WORKDIR /app
# COPY package.json ./
# RUN npm i
# COPY . .
# CMD [ "npm", "run", "dev" ]

# install dev dependencies
FROM node:20-alpine AS dev-deps
WORKDIR /app
COPY package.json ./
RUN npm i

# run the build of the project
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . . 
RUN npm run build

# image with dependencies for production
FROM node:20-alpine AS prod-deps
WORKDIR /app
COPY package.json ./
RUN npm i --prod


FROM node:20-alpine AS prod
EXPOSE 3000
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=prod-deps /app/package.json ./
COPY --from=builder /app/.next ./.next
ENV NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ${NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
ENV NEXT_PUBLIC_UNSPLASH ${NEXT_PUBLIC_UNSPLASH}
ENV NEXT_PUBLIC_OPENWEATHER ${NEXT_PUBLIC_OPENWEATHER}
CMD [ "npm", "start" ]
