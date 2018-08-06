.PHONY: build vendor
export ROOT=$(dir $(realpath $(firstword $(MAKEFILE_LIST))))

all: tools vendor

tools:
	which dep || go get -u github.com/golang/dep/cmd/dep
	which awscli-local || pip install awscli-local

vendor:
	dep ensure
	dep ensure -update

build: feed.go
	@mkdir -p ${ROOT}/build
	GOOS=linux go build -o ${ROOT}/build/feed ./feed.go

production: build
	$(MAKE) deploy -C ./deployments/production/

local: build
	$(MAKE) deploy -C ./deployments/local/

local/test:
	$(MAKE) test -C ./deployments/local/

lambda/list:
	aws --endpoint-url=http://localhost:4574 lambda list-functions
