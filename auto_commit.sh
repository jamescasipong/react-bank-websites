#!/bin/bash

# Add all changes to the staging area
git add .

# Commit changes with a default message
git commit -m "Automatic commit triggered by save"

# Push changes to remote repository (optional, adjust according to your needs)
git push origin main  # Replace 'main' with your branch name if different
