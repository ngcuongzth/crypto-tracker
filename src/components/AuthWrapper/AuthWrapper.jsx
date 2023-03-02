
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
import { toast } from 'react-toastify'

const UserContext = createContext()

const AuthProvider = ({ children }) => {
    const dispatch = useDispatch()
    // handle sign in 
    const handleSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    // handle sign up
    const handleSignUp = async (email, password) => {
        // setDoc - đối số thứ nhất là docRef
        // - đối số thứ hai là data 

        // docRef là giá trị trả về của hàm doc
        // với đối số truyền vào là db, 
        // await setDoc(doc(db, 'user', email), {
        //     watchList: [],
        // });
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // handle sign out
    const handleSignOut = () => {
        signOut(auth).then(() => {
            dispatch(setUser(null))
            toast.success('Logged out')
        }).catch((error) => {
            console.log(error)
        });
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