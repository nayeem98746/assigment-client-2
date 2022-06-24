import { useEffect, useState } from "react";
import initializeFirebase from "../Component/Login/Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword , signOut,onAuthStateChanged,signInWithEmailAndPassword  ,updateProfile } from "firebase/auth";


initializeFirebase()
const useFirebase = () => {
    const [user , setUser] = useState({})
    const [isLoading , setIsLoading ] = useState(true)
    const [authError , setAuthError] = useState('')
    const [admin , setAdmin] = useState(false)
    const auth = getAuth();

    // register function 

    const registerUser = (email, password , name , navigate) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const newUser = { email, displayName: name };
            setUser(newUser);
            setAuthError('')
            // save user to the data base 
            saveUser(email, name, 'POST');
            // send name to firebase after creation
            updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {
            }).catch((error) => {
            });
            navigate('/');

           
          })
          .catch((error) => {
            const errorCode = error.code;
            setAuthError(error.message)
            // ..
          })
          .finally(() => setIsLoading(false));
    }

    // login user
    const loginUser = (email , password , location , navigate) => {
        setIsLoading(true)
        

        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const destination = location?.state?.from || '/';
    navigate(destination);


   setAuthError('');
  })
  .catch((error) => {
    setAuthError(error.message)

  })
  .finally(() => setIsLoading(false));
}

    // observer user state
    useEffect( () => {
     const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
             
              const uid = user.uid;
                setUser(user)
            } else {
              setUser({})
            }
            setIsLoading(false);
          });
          return () => unsubscribe;
    }  ,[] )

    useEffect(() => {
        fetch(`https://obscure-hollows-04792.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))

    } , [user.email])




    // Log out function

    const logOut = () => {
        setIsLoading(true)

        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(() => setIsLoading(false));
    }
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://obscure-hollows-04792.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }



    return{
        user,
        isLoading,
        admin,
        authError,
        registerUser,
        saveUser,
        logOut,
        loginUser
    }


}

export default useFirebase;