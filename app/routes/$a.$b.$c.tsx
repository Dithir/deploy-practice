import type {Route} from "./+types/$a.$b.$c"

export default function(props: Route.ComponentProps) {
    const{
        params: {a,b,c},

    }= props;
    return(
        <p>
            This is a dynamic route with parametes: {a}, {b}, {c}
        </p>
    )
}