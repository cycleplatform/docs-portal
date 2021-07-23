import React from 'react';
import CodeBlock from "@theme/CodeBlock"
import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import TableHeaders from "../tableheaders";
import {Details} from "./origins/origin-details"


export default function OriginDetails() {
    return (
        <Tabs
            defaultValue="docker-hub"
            groupId={"container-image-type"}
            values={[
                { label: 'Docker Hub (docker-hub)', value: 'docker-hub', },
                { label: 'Docker Registry (docker-registry)', value: 'docker-registry', },
                { label: 'Docker File (docker-file)', value: 'docker-file', },
            ]}
        >

            <TabItem value="docker-hub">

                <table>
                    <TableHeaders />
                    {Details.dockerhub.map(item => (
                        <tr>
                            {item.map(entry => (
                                <td>{entry}</td>
                            ))}
                        </tr>
                    ))}
                </table>


            </TabItem>
            <TabItem value="docker-registry">

                <table>
                    <TableHeaders />
                    {Details.dockerregistry.map(item => (
                        <tr>
                            {item.map(entry => (
                                <td>{entry}</td>
                            ))}
                        </tr>
                    ))}
                </table>

            </TabItem>

            <TabItem value="docker-file">
                <p>Generally a <code>docker-file</code> image source would need to have information about a repo or a url endpoint where a tar.gz package was being served.  However, when importing a stack file on Cycle, generally a user will do so through a git repo.  For <code>docker-file</code> image source's, this repo information is used when both the repo and targz_url are not used in the details and is why neither is marked as required.</p>
                <table>
                    <TableHeaders />
                    {Details.dockerfile.shared.map(item => (
                        <tr>
                            {item.map(entry => (
                                <td>{entry}</td>
                            ))}
                        </tr>
                    ))}
                </table>

            </TabItem>
        </Tabs>

    );
}