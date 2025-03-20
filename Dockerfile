# 빌드 이미지로 node:14 지정
FROM node:18 AS build

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .
RUN npm run build

# 런타임 이미지로 nginx 1.21.4 지정, /usr/share/nginx/html 폴더에 권한 추가
FROM nginx:1.24-alpine

# 빌드 이미지에서 생성된 dist 폴더를 nginx 이미지로 복사
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]

