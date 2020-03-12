#!/bin/bash
docker run -d -p 27017:27107 -v ~/data:/data/db mongo
