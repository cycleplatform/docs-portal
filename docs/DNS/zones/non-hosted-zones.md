---
sidebar_label: Non-Hosted Zones
sidebar_position: 3
---

# Non-Hosted Zones Workflow
How to use a non-hosted zone on Cycle.

### The Two Main Steps
The main difference between hosted and non-hosted zones is your nameservers will not be pointed to Cycle. You'll need to set up two things to make sure your DNS is properly routed.

1. Create a CNAME record pointing at your Cycle generated domain.
2. Teach the load balancer how to route traffic with a Linked record.


### Using a Cycle Generated Domain to Create a CNAME Record
First we'll need to find the Cycle generated domain for your container and then use that to create a CNAME record on the DNS manager you've chosen.

To find the Cycle generated domain name for a container:

* Go to the environment where you've deployed your container.
* Click **Containers** from the top navigation.
* Select the container you wish to find a domain for from the list.
* Copy the domain listed under the **Network** section of the container summary.

### Teaching the Load Balancer with Linked Records

Now that your CNAME record is pointed to your container, you can teach the load balancer how to route your incoming traffic by creating a Linked record. This allows the load balancer an extra bit of information on how to route your incoming traffic. An example would be if you had two publicly accessible containers in the same environment and they were both expecting traffic to come in on port 80. With Linked records in place, Cycle can help the load balancer understand which container to route the incoming traffic to.
