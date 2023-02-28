import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SharedLayout from './components/SharedLayout'
import { HomePage, AccountPage, SignInPage, SignUpPage, ErrorPage, SingleCoinPage } from './routes'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route element={<HomePage />} index />
                    <Route element={<AccountPage />} path="account" />
                    <Route element={<SignInPage />} path="sign-in" />
                    <Route element={<SignUpPage />} path="sign-up" />
                    <Route element={<SingleCoinPage />} path="coins/:idCoin" />
                    <Route element={<ErrorPage />} path="*" />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App