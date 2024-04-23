import React from "react"
import JSONSchemaEditor from "@theme/JSONSchemaEditor"
import mySchema from "./schema.json"

export default function ExamplePage() {
  return (
    <div
    >
      {/* You can "useColorMode" if you want to take into account current Docusaurus color */}
      <JSONSchemaEditor  schema={mySchema} theme={"vs-dark"} />
    </div>
  )
}

