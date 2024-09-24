.PHONY: all booking

all: booking

booking:
	protoc --go_out=booking --go-grpc_out=booking booking/booking.proto
	protoc --plugin="protoc-gen-ts=node_modules/.bin/protoc-gen-ts_proto" \
       --ts_out=../client/src/protobuf \
       --ts_opt=esModuleInterop=true,outputServices=grpc-js \
       booking/booking.proto