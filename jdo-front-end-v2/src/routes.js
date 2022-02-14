import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Todo from './pages/todo/Todo'
import SingUp from './pages/auth/SignUp'
import SingIn from './pages/auth/SignIn'

export const appRoutes = isAuthenticated => {

    if (isAuthenticated) {
        return (
            <Routes>
                <Route path="/" element={<Todo />} exact />
                <Route path="/todo/create"  element={<Todo />} exact />
                <Route path="/todo/delete/:id" element={<Todo />} exact />
                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path="/" element={<SingIn />} />
            <Route path="/auth/singup" element={<SingUp />} exact />
            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
    )
}