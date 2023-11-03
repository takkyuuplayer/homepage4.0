.PHONY: build vendor web

export ROOT=$(dir $(realpath $(firstword $(MAKEFILE_LIST))))

build: feed.go
	CGO_ENABLED=0 GOARCH=arm64 GOOS=linux go build -tags lambda.norpc -o ./build/bootstrap

deploy:
	zip -j ./build/lambda.zip ./build/bootstrap
	aws lambda update-function-code --function-name feed --zip-file fileb://./build/lambda.zip --publish --architecture arm64
	$(MAKE) deploy -C ./web

test:
	go vet ./...
