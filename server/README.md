# lizmaclean.io Server

## Building Locally

1. Ensure you have the [Docker CLI](https://docs.docker.com/get-docker/) installed
and set up on your local machine.
2. Install the server requisities with **npm** by running
    ```sh
    npm install
    ```
3. Now, you can start the postgreSQL and hasura instances with docker compose
    ```sh
    docker compose up -d  # starts the containers in detached mode
    ```
4. Once you have both running, you can monitor the logs with
    ```sh
    docker compose logs -f
    ```
5. If all is running smoothly, you can now access the hasura console via the installed
package. Upon successful spin up, a window will automatically open up to localhost on the
correct port.
    ```sh
    npx hasura console
    ```

### Using Docker and minikube with this project
If you are using Docker with minikube on your local machine, you will need to get
the IP of the minikube VM in order to access hasura correctly. To do so:
1. Run `minikube ip` in your terminal and copy the resulting IP address
2. in `config.yaml`, replace the endpoint host IP with the minikube IP you just
copied.  For example:
    ```yml
    version: 3
    endpoint: http://<minikube-ip>:8080/
    metadata_directory: metadata
    actions:
        kind: synchronous
        handler_webhook_baseurl: http://localhost:3000
    ```
3. You can now run `npx hasura console`!