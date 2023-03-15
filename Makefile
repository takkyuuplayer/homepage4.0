.PHONY: build vendor web

export ROOT=$(dir $(realpath $(firstword $(MAKEFILE_LIST))))

build: feed.go
	@mkdir -p ${ROOT}/build
	GOOS=linux go build -o ${ROOT}/build/feed ./feed.go

production:
	$(MAKE) deploy -C ./deployments/production
	$(MAKE) deploy -C ./web

test:
	go vet ./...
