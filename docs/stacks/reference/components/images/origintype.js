import React from 'react';
import CodeBlock from "@theme/CodeBlock"
import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import {dockerhub, dockerfile, dockerregistry} from "./origins/origin-types.js"


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

                | Field | Type | Required | Nullable | Description |
                |------------|--------|:--------:|:--------:|------------------|
                | `target` | String | ✅ | ❌ | The name and tag of the image as listed on Docker Hub, separated by a colon. |
                | `username` | String | ❌ | ❌ | A private repo's username for authentication purposes. |
                | `token` | String | ❌ | ❌ | A private repo's token for authentication purposes. |

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
