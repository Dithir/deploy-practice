import type { Route } from "./+types/rows._index";
import {Link} from 'react-router'


export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Directory" },
  ];
}

export default function Rows() {

  const oneTo100 = Array.from({length:100},(_,i) => i+1)

  return (
    <>
      <h2>List of Data Rows</h2>
      <ul>
        {oneTo100.map((i)=>(
            <li key={i}>
              <Link to={`./${i}`} >Row {i}</Link>
            </li>
          ))}
      </ul>
    </>
  )
}
