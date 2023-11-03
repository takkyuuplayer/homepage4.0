.PHONY: build vendor web

export ROOT=$(dir $(realpath $(firstword $(MAKEFILE_LIST))))

production:
	$(MAKE) deploy -C ./deployments
	$(MAKE) deploy -C ./web

test:
	go vet ./...
