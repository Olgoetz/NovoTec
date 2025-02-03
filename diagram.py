# diagram.py
from diagrams import Diagram, Cluster, Edge

from diagrams.aws.database import RDS, ElastiCache
from diagrams.aws.storage import S3
from diagrams.k8s.network import Endpoint
from diagrams.k8s.compute import Pod, Deployment
from diagrams.k8s.network import Service

from diagrams.custom import Custom
from diagrams.onprem.client import Users

with Diagram("Terraform Enterprise", show=False, direction="TB"):
    with Cluster("AXA Network"):
        with Cluster("AWS - eu-central-1"):
            with Cluster("VPC"):
                endpoint = Endpoint("endpoint")
                with Cluster("Private Subnets"):
                    storages = [S3("bucket"), RDS("database"), ElastiCache("cache")]
          
        with Cluster("OpenShift - merlot-shared-prod-lpl"):
            with Cluster("Pods"):
                service = Service("service")
                deployment = Deployment("deployment")
                core = [Pod("core"), Pod("core"), Pod("core")]

                service >> deployment >> core

            with Cluster("Pods - Shadow"):
                core_squids = [Pod("squid"), Pod("squid")]


            with Cluster("Agents"):
                agents = [Pod("agent 1"), Pod("agen 2"), Pod("agent n")]


            with Cluster("Agents - Shadow"):
                agents_squids = [Pod("squid"), Pod("squid")]

    internet = Custom("Internet", "./internet.png")
    core_squids >>Edge(style="dotted")>>internet
    agents_squids >>Edge(style="dotted")>>internet

    core[0] >> core_squids
    core[1] >> core_squids
    core[2] >> core_squids
    agents[0] >> agents_squids
    agents[1] >> agents_squids
    agents[2] >> agents_squids

    core << endpoint >> storages[1]
   

    core << endpoint>> storages[2]
    agents << endpoint>> storages[0]
    core[0] >> Edge(style="dotted" ,color="blue") >> agents[0]
    core[1] >> Edge(style="dotted",color="blue") >> agents[1]
    core[2] >> Edge(style="dotted",color="blue") >> agents[2]
    

    # Users("users") >> service

