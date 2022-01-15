FROM archlinux:latest

WORKDIR /home/node

COPY . /home/node

# arch for later
# From archlinux:latest
RUN pacman -Syu --noconfirm \
  && pacman -S npm --noconfirm

RUN npm ci \
  && npm run build \
  && node dist/src/main.js

# buildah build -t nestjs-miner . # run it
