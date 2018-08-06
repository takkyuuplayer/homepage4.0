deploy:
	zip --junk-paths ${ROOT}/lambda.zip ${ROOT}/build/feed
	aws --endpoint-url=http://localhost:4574 \
	    lambda create-function \
	    --function-name feed \
	    --runtime go1.x \
	    --role r1 \
	    --zip-file fileb://${ROOT}/lambda.zip \
	    --handler feed

test:
	aws --endpoint="http://localhost:4574" \
		lambda invoke \
		--function-name feed \
		--payload "" \
		/tmp/lambda.log
	cat /tmp/lambda.log
