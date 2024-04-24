FROM node:21.5.0-alpine3.19 as builder
RUN mkdir -p /app
WORKDIR /app
COPY ./package*.json ./
RUN yarn install
COPY ./ ./
RUN yarn build


FROM nginx:1.20.1-alpine
COPY --from=builder /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
