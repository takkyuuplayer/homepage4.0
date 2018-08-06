all:
	aws cloudformation deploy --template-file s3_cf.yml --stack-name lambdaS3

deploy:
	zip --junk-paths lambda.zip ${ROOT}/build/feed
	aws cloudformation package \
		--template-file sam.yml \
		--s3-bucket lambda.takkyuuplayer.com \
		--output-template-file packaged.yml
	aws cloudformation deploy \
		--template-file packaged.yml \
		--stack-name feed \
		--capabilities CAPABILITY_IAM
