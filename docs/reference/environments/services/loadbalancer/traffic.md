---
sidebar_label: Traffic (Monitoring)
sidebar_position: 5
---

# Native LB Traffic and Monitoring

:::info Beta
The `Traffic` portal page is an open beta. The functionality is working but we plan to add more features to this section before removing the tag.
:::

:::danger V1 LB Required
This section of the portal only works when the V1 load balancer is selected for the given environment.
:::

:::caution IDLE Timeout
If a load balancer hasn't received traffic for longer than the period set in [idle timeout](/reference/environments/services/loadbalancer/v1#general), the statistics will be reset. 
:::


## Traffic Dashboard
The traffic dashboard is laid out to allow the user quick looks into their load balancer telemetry by port.



With the appropriate port selected, users get a clear look at several high level metrics including:

### Overview 

![load balancer dashboard](https://static.cycle.io/portal-docs/environments/traffic-dashboard.png)

1. Instance - The load balancer instance.
2. Data Transfer - total amount received and transmitted. 
3. Connections - total amount of connections made. 
4. Requests - total number of requests.
5. Disconnects - showing the amount of total connections that have ended with and without error. 

### URL's

![load balancer urls](https://static.cycle.io/portal-docs/environments/traffic-urls.png)

1. Host - the domain and path of the incoming call. 
2. Method - the HTTP method used for the call. 
3. Responses - the number of responses sent on that domain + path. 
4. Handler - number(total) and type (graphed) of the handler.  Ex in pic is 2 total both forwarded.
5. Average Time - the average time to complete the request. 



### Routers 

![load balancer router](https://static.cycle.io/portal-docs/environments/traffic-router.png)

1. Destination - container destination for the request.
2. Latency - the latency of the connection between lb <-> destination (measured by ICMP packet). 
3. Requests - the number of requests (total).
4. Connections - amount of traffic transmitted / received. 
5. Success Rate - amount of times in % that the connection was successful. 