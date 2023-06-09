export function Greeting(props){
    return(
        <>
        {props.children ? props.children : `Hello ${props.name}`}
        </>
    )
}