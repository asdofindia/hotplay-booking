# Hotplay


## Setup

```
sudo pacman -S protobuf

cd nats
make setup

cd ../client
npm install
```


## Run

In {api, client, nats}, run `make start`

In `nats`, run `make listen` to view analytics pouring in.

Visit http://localhost:3000/event/hotplay-concert?utm_source=whatsapp