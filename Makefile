.PHONY: build vendor web

export ROOT=$(dir $(realpath $(firstword $(MAKEFILE_LIST))))

all:

tools:
	which dep || go get -u github.com/golang/dep/cmd/dep
	which awslocal || pip install awscli-local

build: feed.go
	@mkdir -p ${ROOT}/build
	GOOS=linux go build -o ${ROOT}/build/feed ./feed.go

production:
	$(MAKE) deploy -C ./deployments/production
	$(MAKE) deploy -C ./web

test:
	go vet ./...
