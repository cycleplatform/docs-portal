import React from 'react';
import CodeBlock from "@theme/CodeBlock"
import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"


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
        </Tabs>

    );
}