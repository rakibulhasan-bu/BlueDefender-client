import { createContext, useEffect, useState } from "react";
import { app } from "../firebase";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthProvider = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
// eslint-disable-next-line react/prop-types
const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  return (
    <AuthProvider.Provider
      value={{ user, signInWithGoogle, createUser, signIn, logOut, loading }}
    >
      {children}
    </AuthProvider.Provider>
  );
};

export default ContextProvider;
