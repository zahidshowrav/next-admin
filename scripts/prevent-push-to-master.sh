#!/bin/bash

# Get the name of the current branch
branch_name=$(git symbolic-ref --short HEAD)

# Check if the current branch is master
if [ "$branch_name" == "master" ]; then
  echo "❌ Direct push to master is restricted..."
  echo "Please make a pull request from another branch to master"
  exit 1
fi
