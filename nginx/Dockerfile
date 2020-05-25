
FROM node:alpine AS builder


WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production


COPY . .


RUN npm run build
RUN npm run gzip

# RUN mkdir -p /var/www/frontend

FROM nginx:1.17.8-alpine

COPY --from=builder /app/build/. /var/www/frontend
COPY ./nginx/*.conf /etc/nginx/conf.d/

# EXPOSE 81 82 83 443

RUN chown -R nginx:nginx /var/www