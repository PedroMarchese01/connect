import { useParams } from "react-router-dom"
export function ModalUser(){
    const {user} = useParams()
    return(
        <>
            <h1>modal! de {user}</h1>
        </>
    )
}