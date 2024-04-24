import React from "react";
import BrowserOnly from '@docusaurus/BrowserOnly';
import JSONSchemaViewer from "@theme/JSONSchemaViewer";
import mySchema from "./schema.json";

// Define the first function, perhaps for initial setup or server-side logic
function initializeSchema(setSchema) {
    React.useEffect(() => {
        // Setup the schema once when the component mounts
        setSchema(mySchema);
    }, []);
}


// Define the second function specifically for rendering in the browser
function renderSchemaViewer(schema) {
    return (
        <div>
            {schema === undefined && <div>Loading...</div>}
            {schema !== undefined && schema instanceof Error && <div>Houston we have a problem: {schema.message}</div>}
            {schema !== undefined && !(schema instanceof Error) && <JSONSchemaViewer id="json-schema" schema={schema} />}
        </div>
    );
}

export default function SchemaSpec() {
    const [schema, setSchema] = React.useState(undefined);

    // Call the initialization function
    initializeSchema(setSchema);

    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => renderSchemaViewer(schema)}
        </BrowserOnly>
    );
}






// import React from "react"
// import JSONSchemaViewer from "@theme/JSONSchemaViewer"
// import mySchema from "./schema.json"

// export default function ExamplePage() {
//     const [schema, setSchema] = React.useState(undefined);

//     React.useEffect(() => {
//         // When the component mounts, update the schema state with mySchema
//         setSchema(mySchema);
//         // As you only want to set the schema once, the dependency array is empty
//     }, []);

//     return (
//         <div 
//         >
//             {schema === undefined && <div>Loading ...</div>}
//             {schema !== undefined && schema instanceof Error && <div>Houston we have a problem : {schema.message}</div>}
//             {schema !== undefined && !(schema instanceof Error) && <JSONSchemaViewer id="json-schema" schema={schema} />}
//         </div>
//     )
// }