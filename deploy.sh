#!/bin/bash

# Generate timestamp
TIMESTAMP=$(date +%Y%m%d%H%M%S)

# Replace the timestamp placeholder in sw.js
sed "s/{{TIMESTAMP}}/$TIMESTAMP/" sw.js > sw.tmp.js
mv sw.tmp.js sw.js

# Your existing deployment commands here
# For example:
# aws s3 sync . s3://your-bucket/ --exclude "*.sh" --exclude "*.md"