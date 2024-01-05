import React from "react";
import TableHeaders from "./tableheaders";


export function AutoTable({tablevalues}) {
    return (
        <table>
            <TableHeaders />
            <tbody>
            {tablevalues.map(item => (
                <tr>
                    {item.map(entry => (
                        <td>{entry}</td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    )
}