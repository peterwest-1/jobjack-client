#!/bin/bash

# Navigate to the directory where your npm project is located




# Check if the Git working directory is clean
if [[ -z $(git status --porcelain) ]]; then
  echo "Working directory is clean"
else
  # Run the npm version patch command and capture the output
    version=$(npm version patch)

    # Extract the version number from the output
    newVersion=$(echo "$version" | cut -d " " -f 3)

    # Print the new version number
    echo "New version: $newVersion"

    # You can use the $newVersion variable in your script as needed

fi

exit 0