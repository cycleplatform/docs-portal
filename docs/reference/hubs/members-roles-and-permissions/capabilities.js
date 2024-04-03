import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

export const Role = {
  ADMIN: "admin",
  DEVOPS: "dev_ops",
  DEVELOPER: "developer",
  CONSULTANT: "consultant",
  ANALYST: "analyst",

};


export const capabilities = [
  {
    name: "hubs-update",
    description: "User has ability to update basic information about the hub, such as name.",
    roles: [Role.ADMIN],
  },
  {
    name: "hubs-delete",
    description: "User has ability to delete the hub.",
    roles: [],
  },
  {
    name: "hubs-invites-send",
    description: "User has ability to invite others to the hub, at their role level or below.",
    roles: [Role.ADMIN],
  },
  {
    name: "hubs-invites-manage",
    description: "User has ability to revoke sent invitations.",
    roles: [Role.ADMIN],
  },
  {
    name: "hubs-integrations-view",
    description: "User has ability to view integrations for the hub.",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER, Role.CONSULTANT],
  },
  {
    name: "hubs-integrations-manage",
    description: "User has ability to manage integrations for the hub.",
    roles: [Role.ADMIN],
  },
  {
    name: "hubs-members-manage",
    description: "User has the ability to remove members equal or lower than their role.",
    roles: [Role.ADMIN],
  },
  {
    name: "hubs-members-view",
    description: "User has the ability to view other members in the hub.",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER, Role.CONSULTANT, Role.Analyst],
  },
  {
    name: "hubs-roles-view",
    description: "User has the ability to view roles for the hub.",
    roles: [Role.ADMIN],
  },
  {
    name: "hubs-roles-manage",
    description: "User has the ability to create and update roles for the hub.",
    roles: [Role.ADMIN],
  },
  {
    name: "hubs-usage-view",
    description: "User has the ability to view usage metrics for the hub.",
    roles: [Role.ADMIN],
  },
  {
    name: "hubs-auditlog-view",
    description: "User has ability to view the hubs audit log.",
    roles: [Role.ADMIN],
  },
  {
    name: "infrastructure-providers-manage",
    description: "User has ability to add and remove providers.",
    roles: [Role.ADMIN],
  },
  {
    name: "infrastructure-providers-view",
    description: "User has ability to view configured providers.",
    roles: [Role.ADMIN],
  },
  {
    name: "billing-methods-manage",
    description: "User has the ability to add and remove payment methods to the product.",
    roles: [],
  },
  {
    name: "billing-invoices-view",
    description: "User has the ability to view invoices generated for the hub.",
    roles: [Role.ADMIN],
  },
  {
    name: "billing-invoices-pay",
    description: "User has the ability to authorize a payment to an invoice.",
    roles: [],
  },
  {
    name: "billing-services-view",
    description: "User has the ability to view active services associated with the hub.",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER, Role.CONSULTANT, Role.ANALYST]
  },
  {
    name: "billing-services-manage",
    description: "User has the ability to manage active services associated with the hub.",
    roles: [],
  },
  {
    name: "billing-credits-view",
    description: "User has the ability to view credits associated with the hub.",
    roles: [Role.ADMIN],
  },
  
  {
    name: "environments-view",
    description: "User has the ability to view environments.",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER, Role.CONSULTANT, Role.ANALYST],
  },
  {
    name: "environments-manage",
    description: "User has the ability to modify the state of the environment. This includes starting and stopping all containers in an environment. This will also include the ability to modify the environment's basic information.",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER],
  },
  {
    name: "environments-deployments-manage",
    description: "User has the ability to view/create deployments and manage the tags associated with them.",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER],
  },
  {
    name: "environments-services-manage",
    description: "User has the ability to modify environment services, such as the load balancer, discovery, or scheduler.",
    roles: [Role.ADMIN, Role.DEVOPS],
  },
  {
    name: "environments-vpn",
    description: "User has the ability to access the VPN service provided by an environment.",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER],
  },
  {
    name: "environments-vpn-manage",
    description: "User has the ability to manage the VPN service provided by an environment, such as adding/deleting users.",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER],
  },
  {
    name: "environments-scopedvariables-manage",
    description: "User has the ability to manage environment scoped variables.",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER, Role.CONSULTANT, Role.ANALYST]
  },
  {
    name: "environments-scopedvariables-view",
    description: "User has the ability to view environment scoped variables.",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER],
  },
  {
    name: "containers-deploy",
    description: "User has the ability to deploy containers.",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER],
  },
  {
    name: "containers-view",
    description: "User has the ability to view containers.",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER, Role.CONSULTANT, Role.ANALYST],
  },
  {
    name: "containers-console",
    description: "User has the ability to connect to a container instance's console.",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER, Role.CONSULTANT],
  },
  {
    name: "containers-ssh",
    description: "User has the ability to connect to a container instance via SSH / instance console.",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER],
  },
  {
    name: "containers-manage",
    description: "User has the ability to manage a container which includes doing things such as starting, stopping, updating, and deleting. This allows them to start/stop/pause a container.",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER],
  },
  
  {
    name: "containers-volumes-manage",
    description: "User has the ability to modify a container's volumes. This includes the name and remote access settings.",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER],
  },
  {
    name: "containers-volumes-view",
    description: "User has the ability to view a container's volumes.",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER, Role.CONSULTANT, Role.ANALYST],
  },
  {
    name: "containers-backups-manage",
    description: "User has the ability to manage backups for containers.",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER],
  },
  {
    name: "containers-backups-view",
    description: "User has the ability to view a container's backups.",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER, Role.CONSULTANT,Role.ANALYST],
  },
  {
    name: "containers-instances-migrate",
    description: "User has the ability to migrate container instances.",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER],
  },
  {
    name: "containers-lock",
    description: "User has the ability to lock or unlock a container.",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER],
  },
  {
    name: "jobs-view",
    description: "User has the ability to view jobs associated with a hub.",
    roles: [Role.ADMIN, Role.DEVELOPER, Role.ANALYST],
  },
  {
    name: "api-keys-manage",
    description: "User has the ability to create, update, and delete API Keys.",
    roles: [Role.ADMIN],
  },
  {
    name: "sdn-networks-manage",
    description: "User has the ability to manage SDN networks.",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER],
  },
  {
    name: "sdn-networks-view",
    description: "User has the ability to view SDN networks.",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER, Role.CONSULTANT, Role.ANALYST],
  },
  {
    name: "pipelines-manage",
    description: "User has the ability to create and update pipelines.",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER],
  },
  
  {
    name: "pipelines-view",
    description: "User has the ability to view pipelines.",
    roles: [Role.ADMIN, Role.DEVOPS,Role.DEVELOPER, Role.CONSULTANT, Role.ANALYST],
  },
  {
    name: "pipelines-trigger",
    description: "User has the ability to trigger pipelines.",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER],
  },
  {
    name: "stacks-manage",
    description: "User has the ability to create, delete, and otherwise manage stacks.",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER, Role.CONSULTANT, Role.Analyst],
  },
  {
    name: "stacks-view",
    description: "User has the ability to view stacks.",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER, Role.CONSULTANT, Role.ANALYST],
  },
  {
    name: "stacks-builds-manage",
    description: "User has the ability to build stacks, view stack builds, and delete old builds.",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER],
  },
  {
    name: "stacks-builds-deploy",
    description: "User has the ability to deploy a stack build to an environment.",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER],
  },

  {
    name: "images-view",
    description: "User has the ability to view individual images.",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER, Role.ANALYST],
  },
  {
    name: "images-manage",
    description: "User has the ability create and delete images.",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER, Role.ANALYST],
  },
  {
    name: "images-sources-view",
    description: "User has the ability to view image sources.",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER, Role.ANALYST],
  },
  {
    name: "images-sources-manage",
    description: "User has the ability to create, update, and delete image sources.",
    roles: [Role.ADMIN, Role.DEVOPS,  Role.DEVELOPER, Role.ANALYST],
  },
  {
    name: "infrastructure-ips-manage",
    description: "User has the ability to create and release IP's.",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER],
  },

  {
    name: "infrastructure-servers-provision",
    description: "User has the ability to provision new servers for the hub.",
    roles: [Role.ADMIN, Role.DEVOPS],
  },
  {
    name: "infrastructure-servers-view",
    description: "User has the ability to view a hub's servers.",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER, Role.CONSULTANT, Role.ANALYST],
  },
  {
    name: "infrastructure-servers-manage",
    description: "User has the ability to restart, modify, and delete servers on the hub.",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER]
  },
  {
    name: "infrastructure-servers-decommission",
    description: "User has the ability to remove a hub's servers",
    roles: [Role.ADMIN, Role.DEVOPS],
  },  
  {
    name: "infrastructure-servers-console",
    description: "User has the ability to view console output for servers of a hub.",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER, Role.CONSULTANT],
  },
  {
    name: "security-view",
    description: "User has the ability to view a hub's security statistics.",
    roles: [Role.ADMIN, Role.DEVELOPER, Role.ANALYST],
  },
  {
    name: "security-manage",
    description: "User has the ability to manage a hub's security settings.",
    roles: [Role.ADMIN],
  },

  {
    name: "dns-view",
    description: "User has the ability to view DNS zones and records",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER, Role.CONSULTANT, Role.ANALYST],
  },
  {
    name: "dns-manage",
    description: "User has the ability to update/delete zones, and update/delete records within those zones.",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER],
  },
  {
    name: "dns-certs-view",
    description: "User has the ability to view certificates created for DNS zone records.",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER, Role.CONSULTANT]
  },
  {
    name: "autoscale-groups-manage",
    description: "User has the ability to create and update infrastructure auto-scale groups.",
    roles: [Role.ADMIN, Role.DEVOPS ],
  },
  {
    name: "autoscale-groups-view",
    description: "User has the ability to view information about  infrastructure auto-scale groups.",
    roles: [Role.ADMIN, Role.DEVOPS, Role.DEVELOPER, Role.CONSULTANT, Role.Analyst ],
  },
  
];

export const adminTable = capabilities.filter((cap) => {
  return cap.roles.indexOf(Role.ADMIN) !== -1 ? true : false;
});

export const developerTable = capabilities.filter((cap) => {
  return cap.roles.indexOf(Role.DEVELOPER) !== -1 ? true : false;
});

export const analystTable = capabilities.filter((cap) => {
  return cap.roles.indexOf(Role.ANALYST) !== -1 ? true : false;
});

export const devOpsTable = capabilities.filter((cap)  => {
  return cap.roles.indexOf(Role.DEVOPS) !== -1 ? true : false;
})

export const consultantTable = capabilities.filter((cap) => {
  return cap.roles.indexOf(Role.CONSULTANT) !== -1 ? true : false;
})

export function DeveloperPermissionsTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Permission</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {developerTable.map((item) => (
          <tr key={`${item.name}-dev`}>
            <td>{item.name}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function AnalystPermissionsTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Permission</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {analystTable.map((item) => (
          <tr key={`${item.name}-analyst`}>
            <td>{item.name}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function OwnerPermissionsTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Permission</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {capabilities.map((item) => (
          <tr key={`${item.name}-owner`}>
            <td>{item.name}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function AdminPermissionsTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Permission</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {adminTable.map((item) => (
          <tr key={`${item.name}-admin`}>
            <td>{item.name}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function DevOpsPermissionsTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Permission</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {devOpsTable.map((item) => (
          <tr key={`${item.name}-dev_ops`}>
            <td>{item.name}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function ConsultantPermissionsTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Permission</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {consultantTable.map((item) => (
          <tr key={`${item.name}-consultant`}>
            <td>{item.name}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function PermissionsTables() {
  return (
    <Tabs
      defaultValue="owner"
      values={[
        { label: "Owner (All)", value: "owner" },
        { label: "Admin", value: "admin" },
        { label: "DevOps", value: "dev_ops" },
        { label: "Developer", value: "developer" },
        { label: "Consultant", value: "consultant" },
        { label: "Analyst", value: "analyst" },
      ]}
    >
      <TabItem value={"owner"}>
        <OwnerPermissionsTable />
      </TabItem>

      <TabItem value={"admin"}>
        <AdminPermissionsTable />
      </TabItem>
      
      <TabItem value={"dev_ops"}>
        <DevOpsPermissionsTable />
      </TabItem>

      <TabItem value={"developer"}>
        <DeveloperPermissionsTable />
      </TabItem>
      
      <TabItem value={"consultant"}>
        <ConsultantPermissionsTable />
      </TabItem>

      <TabItem value={"analyst"}>
        <AnalystPermissionsTable />
      </TabItem>
    </Tabs>
  );
}
