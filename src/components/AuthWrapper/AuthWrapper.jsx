
import { useContext, createContext, useEffect } from 'react'
import { auth, db } from '../../firebase'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { useDispatch } from 'react-redux'
import { setUser } from '../../store/features/AuthSlice'


const UserContext = createContext()

const AuthProvider = ({ children }) => {
    const dispatch = useDispatch()

    const handleSignUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        return setDoc(doc, (db, 'users', email), {
            watchList: []
        })
    }
    const handleSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleSignOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            dispatch(setUser({
                displayName: currentUser.displayName,
                email: currentUser.email,
            }))
        })
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <UserContext.Provider value={{
            handleSignIn, handleSignUp, handleSignOut
        }}>
            {children}
        </UserContext.Provider>
    )

}
export default AuthProvider
export const useAuthContext = () => {
    return useContext(UserContext)
}