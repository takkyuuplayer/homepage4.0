.PHONY: node_modules src/i18n/locales.json
DomainName=takkyuuplayer.com
Distribution=$(shell aws cloudfront list-distributions | jq '.DistributionList.Items[] | select(.Aliases.Items[] == "${DomainName}")')
DistributionId=$(shell echo '${Distribution}' | jq .Id)
Bucket=$(shell echo '${Distribution}' | jq '.Origins.Items[0].DomainName' | sed -e 's/"//g' | sed -e 's/\..*//g')

all: node_modules src/i18n/locales.json

confirm:
	@echo '${Distribution}'

node_modules:
	yarn install

test:
	yarn test
	yarn lint

src/i18n/locales.json:
	yarn i18n

build:
	yarn build

deploy:
	aws s3 sync public s3://${Bucket}
	aws cloudfront create-invalidation --distribution-id ${DistributionId} --paths '/*'
