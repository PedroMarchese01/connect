import { Outlet } from "react-router-dom"
export default function Layout(){
    return(
        <>
            <nav>

            </nav>
            <main>
                <Outlet/>
            </main>
            <footer>
                
            </footer>
        </>
    )
}