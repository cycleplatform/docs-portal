import React from 'react';
import CodeBlock from "@theme/CodeBlock"
import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import {dockerhub, dockerfile, dockerregistry} from "./origins/origin-types.js"
import TableHeaders from "../tableheaders";

export default function OriginTypes() {
    return (
        <Tabs
            defaultValue="docker-hub"
            groupId={"container-image-type"}
            values={[
                {label: 'docker-hub', value: 'docker-hub'},
                {label: 'docker-registry', value: 'docker-registry'},
                {label: 'docker-file', value: 'docker-file'}
            ]}
        >
            <TabItem value="docker-hub">
                <CodeBlock className={"language-json"} title={"defining types"}>
                    {dockerhub}
                </CodeBlock>
                <h3>Add to contents</h3>
                <table>
                    <TableHeaders />

                </table>

            </TabItem>

            <TabItem value="docker-registry">
                <CodeBlock className={"language-json"} title={"defining types"}>
                    {dockerregistry}
                </CodeBlock>
            </TabItem>

            <TabItem value="docker-file">
                <CodeBlock className={"language-json"} title={"defining types"}>
                    {dockerfile}
                </CodeBlock>
            </TabItem>

        </Tabs>
    )
}
