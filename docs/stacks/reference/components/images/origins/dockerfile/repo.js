import React from 'react';
import {Details, repo, DetailExamples} from "../origin-details"
import CodeBlock from "@theme/CodeBlock"
import TableHeaders from "../../../tableheaders";
import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"

export function RemoteRepo() {
    return (
        <Tabs
            defaultValue="base"
            groupId={"container-image-type"}
            values={[
                {label: 'Repo Base', value: 'base'},
                {label: 'Repo Full', value: 'full'},
                {label: 'Repo Minimum', value: 'minimum'}
            ]}
        >
            <TabItem value={"base"}>
                <CodeBlock className={"language-json"}>
                    {repo.base}
                </CodeBlock>
            </TabItem>
            <TabItem value={"full"}>
                <Tabs
                    defaultValue="http"
                    groupId={"container-image-type"}
                    values={[
                        {label: 'Auth: HTTP | Ref: Hash', value: 'http'},
                        {label: 'Auth: SSH | Ref: Tag', value: 'ssh'},
                    ]}
                >
                    <TabItem value={"http"}>
                        <CodeBlock className={"language-json"}>
                            {repo.fullhttphash}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value={"ssh"}>
                        <CodeBlock className={"language-json"}>
                            {repo.fullsshtag}
                        </CodeBlock>
                    </TabItem>
                </Tabs>
            </TabItem>
            <TabItem value={"minimum"}>
                <CodeBlock className={"language-json"}>
                    {repo.minimum}
                </CodeBlock>
            </TabItem>

        </Tabs>
    )
}

export function DetailsExamples(){
    return(
        <Tabs
            defaultValue="basic"
            groupId={"container-image-type"}
            values={[
                {label: 'Details Base', value: 'basic'},
                {label: 'Details Full', value: 'repo-tar'},
                {label: 'Details Minimum', value: 'min'}
            ]}
        >
            <TabItem value={"basic"}>
                <CodeBlock className={"language-json"}>
                    {DetailExamples.base}
                </CodeBlock>
            </TabItem>
            <TabItem value={"repo-tar"}>
                <Tabs
                    defaultValue="repo"
                    groupId={"container-image-type"}
                    values={[
                        {label: 'Repo', value: 'repo'},
                        {label: 'Tar GZ', value: 'targz'},

                    ]}
                >
                    <TabItem value={"repo"}>
                        <CodeBlock className={"language-json"}>
                            {DetailExamples.fullrepo}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value={"targz"}>
                        <CodeBlock className={"language-json"}>
                            {DetailExamples.fulltargz}
                        </CodeBlock>
                    </TabItem>
                </Tabs>
            </TabItem>
            <TabItem value={"min"}>
                <p>The most basic <code>docker-file</code> image origin details object is an empty object. This will only lead to the desired outcome if your target is a Dockerfile in the root of your project on the master branch. The details field is required, as shown above, and so cannot be omitted.</p>
                <CodeBlock className={"language-json"}>
                    {DetailExamples.minimum}
                </CodeBlock>
            </TabItem>
        </Tabs>
    )
}


export function RepoTable(){
    return(
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
    )

}