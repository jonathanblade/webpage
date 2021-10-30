FROM node:16-alpine AS base
LABEL maintainer="Semen Syrovatskiy <mail@syrovatskiy.tk>"
ENV APP_HOME=/webpage \
    APP_DEPS=/webpage/node_modules

FROM base AS deps
WORKDIR ${APP_HOME}
COPY package*.json ./
RUN npm install

FROM deps AS build
WORKDIR ${APP_HOME}
COPY --from=deps ${APP_DEPS} ${APP_DEPS}
COPY public public
COPY src src
COPY index.html index.html
COPY postcss.config.js postcss.config.js
COPY tailwind.config.js tailwind.config.js
COPY vite.config.js vite.config.js
RUN npm run build

FROM nginx:1.18-alpine AS main
COPY --from=build /webpage/dist /usr/share/nginx/html
COPY ./etc/nginx.conf /etc/nginx/conf.d/default.conf
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
