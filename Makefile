.PHONY: build vendor web

export ROOT=$(dir $(realpath $(firstword $(MAKEFILE_LIST))))

all: vendor web

tools:
	which dep || go get -u github.com/golang/dep/cmd/dep
	which awslocal || pip install awscli-local

vendor:
	dep ensure

build: feed.go
	@mkdir -p ${ROOT}/build
	GOOS=linux go build -o ${ROOT}/build/feed ./feed.go

production: build
	$(MAKE) deploy -C ./deployments/production/

test:
	go vet ./...
