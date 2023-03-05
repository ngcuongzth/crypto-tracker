
import { useContext, createContext, useEffect, useState } from 'react'
import { auth, db } from '../../firebase'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth'
import { arrayUnion, doc, setDoc, updateDoc, onSnapshot } from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { updateWatchList, setUser, setDefaultWatchList } from '../../store/features/AuthSlice'

const UserContext = createContext()

const AuthProvider = ({ children }) => {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true)

    const { user } = useSelector(state => state.auth)
    const coinPath = doc(db, 'users', `${user?.email}`)

    const handleAddToWatchList = async (detailCoin, setIsSaved) => {
        if (user?.email) {
            setIsSaved(true)
            await updateDoc(coinPath, {
                watchList: arrayUnion(detailCoin)
            })
            toast.success('Added coin to your watch list')
        }
        else {
            toast.warning('Please sign in to save a coin to your watch list.')
        }
    }

    const handleRemoveFromWatchList = async (idCoin, coins) => {
        try {
            const result = coins.filter((item) => {
                return item.id !== idCoin
            })
            await updateDoc(coinPath, {
                watchList: result
            })
            toast.success('Coin removed from watch list')
        }
        catch (err) {
            toast.error(err.message)
        }
    }

    // login with email & password
    const handleLogin = async (email, password) => {
        setIsLoading(true)
        try {
            await signInWithEmailAndPassword(auth, email, password)
            setIsLoading(false)
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
            setIsLoading(false)
            return errorMessage
        }
    }
    // register with email & password
    const handleRegister = async (email, password) => {
        setIsLoading(true)
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            await setDoc(doc(db, 'users', email), {
                watchList: []
            })
            setIsLoading(false)
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
            setIsLoading(false)
            return errorMessage
        }
    }

    // handle sign out
    const handleSignOut = async () => {
        setIsLoading(true)
        try {
            setIsLoading(false)
            await signOut(auth)
            dispatch(setDefaultWatchList([]))
            toast.success('Logged out')
        }
        catch (error) {
            setIsLoading(false)
            return error.message
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
                onSnapshot(doc(db, 'users', `${currentUser.email}`), doc => {
                    dispatch(updateWatchList(doc.data().watchList))
                })
                setIsLoading(false)
            }
            else {
                dispatch(setUser(null))
                setIsLoading(false)
            }
        });
        return () => {
            unsubscribe();
        };
    }, [])


    return (
        <UserContext.Provider value={{
            handleLogin, handleSignOut, handleRegister, handleAddToWatchList, handleRemoveFromWatchList, isLoading
        }}>
            {children}
        </UserContext.Provider>
    )

}
export default AuthProvider
export const useAuthContext = () => {
    return useContext(UserContext)
}