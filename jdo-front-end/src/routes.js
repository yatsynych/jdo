import React from "react"
import {Routes, Route } from "react-router-dom"
//import Todo from './todo/Todo'
import {SingUp} from './pages/SignUp'
import {SingIn} from './pages/SignIn'

export const useRoutes = isAuthenticated => {

    /*
    if (isAuthenticated) {
        return (
            <Routes>
                <Route link path="/todo" exact>
                    <Todo />
                </Route>
                <Route path="/todo/create" exact>
                    <Todo />
                </Route>
                <Route path="/todo/delete/:id" exact>
                    <Todo />
                </Route>
            </Routes>
        )
    }
*/
    console.log('Log: AuthPage')

    return (
        <Routes>
            <Route path="singin" element={<SingIn />} />
            <Route path="/" element={<SingUp />} />
        </Routes>
    )
}