.PHONY: node_modules src/i18n/locales.json
Bucket=takkyuuplayer.com

all: node_modules src/i18n/locales.json

node_modules:
	npm install

test:
	npm run test
	npm run lint

src/i18n/locales.json:
	npm run i18n

build:
	npm run build

deploy:
	aws s3 sync public s3://${Bucket} --acl public-read --delete
