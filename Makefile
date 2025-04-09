deploy:
	aws --profile boz-dev s3 cp . s3://mozworth.com/ --recursive --exclude ".git/*"
	aws --profile boz-dev cloudfront create-invalidation --distribution-id E2YYKNWIRFDWH5 --paths "/*"
