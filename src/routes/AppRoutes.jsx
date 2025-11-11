import {createBrowserRouter} from 'react-router-dom'
import Layout from '../Layout'
import Users from '../Users'
import { ModalUser } from '../pages/ModalUser'

export const router = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children:[
            {
                index:true,
                element: <Users/>
            },
            {
                path:"/modal/:user",
                element:<ModalUser/>
            }
        ]
    },
])