.PHONY: node_modules src/i18n/locales.json
DomainName=v4.takkyuuplayer.com
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


deploy:
	yarn build
	aws s3 mv --recursive public s3://${Bucket}
	aws s3 ls s3://${Bucket} --recursive | awk -v Bucket="${Bucket}" '{system("aws s3api copy-object --bucket " Bucket " --copy-source " Bucket "/" $$4 " --key " $$4 " --metadata-directive REPLACE --cache-control \"no-cache, no-store\"")}'
	aws cloudfront create-invalidation --distribution-id ${DistributionId} --paths '/*'
