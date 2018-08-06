.PHONY: build
export ROOT=$(dir $(realpath $(firstword $(MAKEFILE_LIST))))

build: feed.go
	@mkdir -p ${ROOT}/build
	GOOS=linux go build -o ${ROOT}/build/feed ./feed.go

local: build
	$(MAKE) deploy -C ./deployments/local/

local/test:
	$(MAKE) test -C ./deployments/local/

lambda/list:
	aws --endpoint-url=http://localhost:4574 lambda list-functions
