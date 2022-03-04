#!/bin/bash

# cd /root/srv/app

#build docker container
docker build -t portal .


# stop existing container
docker stop portal  && docker rm portal 

# delete existing container

# delete existing image

# run new image
docker run  -d -p 5100:3000  --name posrtal  portal 
