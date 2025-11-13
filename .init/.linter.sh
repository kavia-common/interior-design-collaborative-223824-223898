#!/bin/bash
cd /home/kavia/workspace/code-generation/interior-design-collaborative-223824-223898/interior_design_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

