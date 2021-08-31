import React from "react";
import {DetailExamples} from "../../stacks/reference/components/images/origins/origin-details";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


export const Role = {
    ADMIN: "admin",
    DEVELOPER: "developer",
    ANALYST: "analyst"
}

export const capabilities = [
    {
        name: 'hubs-update',
        description: 'User has ability to update basic information about the hub, such as name.',
        roles: [Role.ADMIN],
    },
    {
        name: 'hubs-delete',
        description: 'User has ability to delete the hub.',
        roles: [],
    },
    {
        name: 'hubs-invites-send',
        description: 'User has ability to invite others to the hub, at their role level or below.',
        roles: [Role.ADMIN],
    },
    {
        name: 'hubs-invites-manage',
        description: 'User has ability to revoke sent invitations.',
        roles: [Role.ADMIN],
    },
    {
        name: 'hubs-members-manage',
        description: 'User has the ability to remove members equal or lower than their role.',
        roles: [Role.ADMIN],
    },
    {
        name: 'hubs-members-view',
        description: 'User has the ability to view other members in the hub.',
        roles: [Role.ADMIN],
    },
    {
        name: 'hubs-notifications-listen',
        description: 'User has the ability to connect to the hubs websocket and listen for notifications.',
        roles: [Role.ADMIN, Role.DEVELOPER, Role.ANALYST],
    },
    {
        name: 'billing-methods-manage',
        description: 'User has the ability to add and remove payment methods to the product.',
        roles: [],
    },
    {
        name: 'billing-invoices-view',
        description: 'User has the ability to view invoices generated for the hub.',
        roles: [Role.ADMIN],
    },
    {
        name: 'billing-invoices-pay',
        description: 'User has the ability to authorize a payment to an invoice.',
        roles: [Role.ADMIN],
    },
    {
        name: 'billing-orders-manage',
        description: 'User has the ability to create/delete new orders. This is required to add new infrastructure to a hub.',
        roles: [Role.ADMIN],
    },
    {
        name: 'billing-services-view',
        description: 'User has the ability to view active services associated with the hub.',
        roles: [Role.ADMIN],
    },
    {
        name: 'billing-credits-view',
        description: 'User has the ability to view credits associated with the hub.',
        roles: [Role.ADMIN],
    },
    {
        name: 'environments-create',
        description: 'User has the ability to create new environments.',
        roles: [Role.ADMIN, Role.DEVELOPER],
    },
    {
        name: 'environments-delete',
        description: 'User has the ability to delete environments. This will automatically include the ability to delete containers.',
        roles: [Role.ADMIN, Role.DEVELOPER],
    },
    {
        name: 'environments-view',
        description: 'User has the ability to view environments.',
        roles: [Role.ADMIN, Role.DEVELOPER, Role.ANALYST],
    },
    {
        name: 'environments-update',
        description: 'User has the ability to update basic information about an environment, such as the name.',
        roles: [Role.ADMIN, Role.DEVELOPER],
    },
    {
        name: 'environments-state',
        description:
            'User has the ability to modify the state of the environment. This includes starting and stopping all containers in an environment.',
        roles: [Role.ADMIN, Role.DEVELOPER],
    },
    {
        name: 'environments-services-manage',
        description: 'User has the ability to modify environment services, such as the VPN.',
        roles: [Role.ADMIN],
    },
    {
        name: 'environments-vpn',
        description: 'User has the ability to access the VPN service provided by an environment.',
        roles: [Role.ADMIN, Role.DEVELOPER],
    },
    {
        name: 'environments-vpn-manage',
        description: 'User has the ability to manage the VPN service provided by an environment, such as adding/deleting users.',
        roles: [Role.ADMIN],
    },
    {
        name: 'containers-deploy',
        description: 'User has the ability to deploy containers.',
        roles: [Role.ADMIN, Role.DEVELOPER],
    },
    {
        name: 'containers-view',
        description: 'User has the ability to view containers.',
        roles: [Role.ADMIN, Role.DEVELOPER, Role.ANALYST],
    },
    {
        name: 'containers-console',
        description: "User has the ability to connect to a container instance's console.",
        roles: [Role.ADMIN, Role.DEVELOPER],
    },
    {
        name: 'containers-ssh',
        description: 'User has the ability to connect to a container instance via SSH / instance console.',
        roles: [Role.ADMIN, Role.DEVELOPER],
    },
    {
        name: 'containers-state',
        description: "User has the ability to modify a container's state. This allows them to start/stop/pause a container.",
        roles: [Role.ADMIN, Role.DEVELOPER],
    },
    {
        name: 'containers-update',
        description:
            "User has the ability to modify a container's information. This includes changing the domain, changing the container configuration, reimaging, and updating general settings such as the container name. ",
        roles: [Role.ADMIN, Role.DEVELOPER],
    },
    {
        name: 'containers-delete',
        description: 'User has the ability to delete containers.',
        roles: [Role.ADMIN, Role.DEVELOPER],
    },
    {
        name: 'containers-volumes-manage',
        description: "User has the ability to modify a container's volumes. This includes the name and remote access settings.",
        roles: [Role.ADMIN, Role.DEVELOPER],
    },
    {
        name: 'containers-volumes-view',
        description: "User has the ability to view a container's volumes.",
        roles: [Role.ADMIN, Role.DEVELOPER, Role.ANALYST],
    },
    {
        name: 'stacks-manage',
        description: 'User has the ability to create, delete, and otherwise manage stacks.',
        roles: [Role.ADMIN, Role.DEVELOPER],
    },

    {
        name: 'stacks-builds-manage',
        description: 'User has the ability to build stacks, view stack builds, deploy stacks to environments, and delete old builds.',
        roles: [Role.ADMIN, Role.DEVELOPER],
    },
    {
        name: 'stacks-view',
        description: 'User has the ability to view stacks.',
        roles: [Role.ADMIN, Role.DEVELOPER, Role.ANALYST],
    },

    {
        name: 'images-view',
        description: 'User has the ability to view individual images.',
        roles: [Role.ADMIN, Role.DEVELOPER, Role.ANALYST],
    },
    {
        name: 'images-import',
        description: 'User has the ability to import and build images.',
        roles: [Role.ADMIN, Role.DEVELOPER],
    },
    {
        name: 'images-update',
        description: "User has the ability to modify an image's basic information, such as name.",
        roles: [Role.ADMIN, Role.DEVELOPER],
    },
    {
        name: 'images-delete',
        description: 'User has the ability to delete images',
        roles: [Role.ADMIN, Role.DEVELOPER],
    },
    {
        name: 'jobs-view',
        description: 'User has the ability to view jobs associated with a hub.',
        roles: [Role.ADMIN, Role.DEVELOPER, Role.ANALYST],
    },
    {
        name: 'api-keys-manage',
        description: 'User has the ability to create, update, and delete API Keys.',
        roles: [Role.ADMIN],
    },
    {
        name: 'servers-provision',
        description: 'User has the ability to provision new servers for the hub.',
        roles: [Role.ADMIN],
    },
    {
        name: 'servers-view',
        description: "User has the ability to view a hub's servers.",
        roles: [Role.ADMIN, Role.DEVELOPER, Role.ANALYST],
    },
    {
        name: 'servers-update',
        description: 'User has the ability to modify information about hub servers. This includes the name, as well as adding/removing tags.',
        roles: [Role.ADMIN, Role.DEVELOPER],
    },
    {
        name: 'servers-state',
        description: `User has the ability to start/shutdown/reboot a hub's servers.`,
        roles: [Role.ADMIN],
    },
    {
        name: 'servers-decommission',
        description: <span>User has the ability to remove a hub's servers.</span>,
        roles: [Role.ADMIN],
    },
    {
        name: 'usage-view',
        description: "User has the ability to view a hub's usage statistics.",
        roles: [Role.ADMIN, Role.DEVELOPER, Role.ANALYST],
    },
    {
        name: 'dns-view',
        description: 'User has the ability to view DNS zones and records',
        roles: [Role.ADMIN, Role.DEVELOPER, Role.ANALYST],
    },
    {
        name: 'dns-manage',
        description: 'User has the ability to update/delete zones, and update/delete records within those zones.',
        roles: [Role.ADMIN, Role.DEVELOPER],
    },
    {
        name: 'sdn-networks-view',
        description: 'User has the ability to view SDN networks',
        roles: [],
    },
    {
        name: 'sdn-networks-manage',
        description: 'User has the ability to create, update, and delete SDN Networks.',
        roles: [],
    },
];

export const adminTable = capabilities.filter(cap => {
    return cap.roles.indexOf(Role.ADMIN) !== -1 ? true : false;
})

export const developerTable = capabilities.filter(cap => {
    return cap.roles.indexOf(Role.DEVELOPER) !== -1 ? true : false;
})

export const analystTable = capabilities.filter(cap => {
    return cap.roles.indexOf(Role.ANALYST) !== -1 ? true : false;
})

export function DeveloperPermissionsTable () {
    return (
        <table>
            <thead>
            <tr>
                <th>Permission</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
            {developerTable.map(item => (
                <tr key={`${item.name}-dev`}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};


export function AnalystPermissionsTable () {
    return (
        <table>
            <thead>
            <tr>
                <th>Permission</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
            {analystTable.map(item => (
                <tr key={`${item.name}-analyst`}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};




export function OwnerPermissionsTable () {
    return (
        <table>
            <thead>
            <tr>
                <th>Permission</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
            {capabilities.map(item => (
                <tr key={`${item.name}-owner`}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};



export function AdminPermissionsTable () {
    return (
        <table>
            <thead>
                <tr>
                  <th>Permission</th>
                  <th>Description</th>
                </tr>
            </thead>
            <tbody>
            {adminTable.map(item => (
                <tr key={`${item.name}-admin`}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export function PermissionsTables() {
    return(
    <Tabs
        defaultValue="owner"
        values={[
            {label: 'Owner (All)', value: 'owner'},
            {label: 'Admin', value: 'admin'},
            {label: 'Developer', value: 'developer'},
            {label: 'Analyst', value: 'analyst'}
        ]}
    >

        <TabItem value={"owner"}>
            <OwnerPermissionsTable />
        </TabItem>

        <TabItem value={"admin"}>
            <AdminPermissionsTable />
        </TabItem>

        <TabItem value={"developer"}>
            <DeveloperPermissionsTable />
        </TabItem>

        <TabItem value={"analyst"}>
            <AnalystPermissionsTable />
        </TabItem>
    </Tabs>
    );
}