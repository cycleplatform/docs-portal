#!/bin/bash
docker buildx build --platform linux/amd64 -t cycleplatform/portal-docs:latest . 

docker push cycleplatform/portal-docs