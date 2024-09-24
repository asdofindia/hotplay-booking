.PHONY: start

start:
	./nats-server-v2.10.21-RC.2-linux-amd64/nats-server -c js.conf

listen:
	./nats-0.1.5-linux-amd64/nats sub track.analytics

setup:
	curl -L -O https://github.com/nats-io/natscli/releases/download/v0.1.5/nats-0.1.5-linux-amd64.zip
	unzip nats-0.1.5-linux.amd64.zip
	curl -L -O https://github.com/nats-io/nats-server/releases/download/v2.10.21-RC.2/nats-server-v2.10.21-RC.2-linux-amd64.tar.gz
	tar xzvf nats-server-v2.10.21-RC.2-linux-amd64.tar.gz