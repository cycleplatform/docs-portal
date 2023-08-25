FROM node:16.16-alpine3.16 as builder
RUN mkdir -p /app
WORKDIR /app
COPY ./package*.json ./
RUN npm install --legacy-peer-deps
COPY ./ ./
RUN npm run build


FROM nginx:1.20.1-alpine
COPY --from=builder /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
