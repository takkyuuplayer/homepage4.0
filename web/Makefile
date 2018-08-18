.PHONY: node_modules src/i18n/locales.json

all: node_modules src/i18n/locales.json

node_modules:
	yarn install

test:
	yarn test
	yarn lint

src/i18n/locales.json:
	yarn i18n
