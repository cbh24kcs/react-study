from nginx

RUN rm -rf /usr/share/nginx/html/*
COPY ./dist/ /usr/share/nginx/html/
COPY ./docker/nginx-default.conf /etc/nginx/conf.d/default.conf
