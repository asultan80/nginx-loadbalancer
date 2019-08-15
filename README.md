# nginx-loadbalancer
3 backend + 1 nginx

# Launch
$ sudo docker-compose up --build


$ docker exec -it docker-nginx_backend1_1 /bin/bash

$ node index.js

$ docker exec -it docker-nginx_backend2_1 /bin/bash

$ node index.js

$ docker exec -it docker-nginx_backend3_1 /bin/bash

$ node index.js

$ curl http://localhost:8080

Will return hostname of the current backend server

You can open in browser http://localhost:8080 and see the hostname as well

