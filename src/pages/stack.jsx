import React from "react"
import Layout from "@theme/Layout"
import JSONSchemaViewer from "@theme/JSONSchemaViewer"

export default function ExamplePage() {
    const [schema, setSchema] = React.useState(undefined);

    React.useEffect( () => {
        fetch(
            // TODO Your link here
            "https://raw.githubusercontent.com/cycleplatform/api-spec/main/stackspec/stackspec.json",
            {
                headers: {
                    'Accept': 'application/json',
                }
            }
        )
            .then((response) => response.json())
            .then((data) => setSchema(data))
            .catch( (err) => setSchema(err) )
    }, [schema])

    return (
        <div 
        >
            {schema === undefined && <div>Loading ...</div>}
            {schema !== undefined && schema instanceof Error && <div>Houston we have a problem : {schema.message}</div>}
            {schema !== undefined && !(schema instanceof Error) && <JSONSchemaViewer id="json-schema" schema={schema} />}
        </div>
    )
}