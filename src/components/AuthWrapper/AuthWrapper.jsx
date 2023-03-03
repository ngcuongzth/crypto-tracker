
import { useContext, createContext, useEffect } from 'react'
import { auth, db } from '../../firebase'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    signInWithPopup
} from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { useDispatch } from 'react-redux'
import { setUser } from '../../store/features/AuthSlice'
import { toast } from 'react-toastify'
import { googleProvider } from '../../firebase'

const UserContext = createContext()

const AuthProvider = ({ children }) => {
    const dispatch = useDispatch()

    // login with email & password
    const handleLogin = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
        }
        catch (err) {
            let errorMessage;
            if (err.message === "Firebase: Error (auth/invalid-email).") {
                errorMessage = 'Invalid email ❌'
            }
            else if (err.message === "Firebase: Error (auth/user-not-found).") {
                errorMessage = 'User not found ❌'
            }
            else if (err.message === "Firebase: Error (auth/wrong-password).") {
                errorMessage = 'Wrong password ❌'
            }
            else if (err.message === "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).") {
                errorMessage = 'Access to this account has been temporarily disabled due to many failed login attempts ❌'
            }
            return errorMessage
        }
    }

    // register with email & password
    const handleRegister = async (email, password) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            await setDoc(doc(db, 'users', email), {
                watchList: []
            })
            return false;
        }
        catch (error) {
            let errorMessage;
            if (error.message === "Firebase: Password should be at least 6 characters (auth/weak-password).") {
                errorMessage = "Password should be at least 6 characters ❌"
            }
            else if (error.message === "Firebase: Error (auth/invalid-email).") {
                errorMessage = 'Invalid email ❌'
            }
            else if (error.message === "Firebase: Error (auth/email-already-in-use).") {
                errorMessage = 'Email already in use ❌'
            }
            return errorMessage
        }
    }

    // handle sign out
    const handleSignOut = async () => {
        try {
            await signOut(auth)
            dispatch(setUser(null))
            toast.success('Logged out')
        }
        catch (error) {
            return error.message
        }
    }


    // login with google
    const handleSignInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
        }
        catch (err) {
            return err.message
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                dispatch(setUser({
                    name: currentUser.displayName || currentUser.email,
                    email: currentUser.email,
                    photoUrl: currentUser.photoURL || null
                }))
            }
            else {
                setUser(null)
            }
        });
        return () => {
            unsubscribe();
        };
    }, [])

    return (
        <UserContext.Provider value={{
            handleLogin, handleSignOut, handleRegister, handleSignInWithGoogle
        }}>
            {children}
        </UserContext.Provider>
    )

}
export default AuthProvider
export const useAuthContext = () => {
    return useContext(UserContext)
}