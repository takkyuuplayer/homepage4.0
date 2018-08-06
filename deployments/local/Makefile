deploy:
	echo ${ROOT}
	zip --junk-paths ${ROOT}/lambda.zip ${ROOT}/build/feed
	aws --endpoint-url=http://localhost:4574 --profile localstack \
	    lambda create-function \
	    --function-name=feed \
	    --runtime=go1.x \
	    --role=r1 \
	    --zip-file fileb://${ROOT}/lambda.zip \
	    --handler=feed
	rm ${ROOT}/lambda.zip
