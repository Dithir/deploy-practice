import type { Route } from "./+types/rows.$rowId";
import {Link} from 'react-router'


export function meta({params:{rowId}}: Route.MetaArgs) {
  return [
    { title: `Row ${rowId}` },
    { name: "description", content: "Directory" },
  ];
}

export default function Rows({params:{rowId}}: Route.ComponentProps) {
  return <div>
    <p>Dynamic route this is Row {rowId} </p>
  </div>;
}
