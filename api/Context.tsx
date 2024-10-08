"use client"

import React, { createContext, useContext, useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';  
import { onAuthStateChanged, signOut } from 'firebase/auth';  
import { auth, db } from './firebase'; 

// Define the user data structure
interface User {
  uid: string;
  displayName: string | null;
  email: string | null;
  role: string;
  link?:string;
  description?:string;
  address?:string;
  contactPerson?:string;
  profileImageUrl?:string;
}

// Define the context types
interface UserContextProps {
  user: User | null;
  logout: () => void;
}

// Create the context with default values
const UserContext = createContext<UserContextProps>({
  user: null,
  logout: () => {},
});

// Create a provider component
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const { displayName, email, uid } = firebaseUser;
        const CustomUser:User = {
          uid,
          displayName,
          email,
          role:'',
          link:'',
          description:'',
          profileImageUrl:'',
          address: '',
          contactPerson: '',
        }

        try{
          const userDoc = doc(db,'user',uid);
          const snapshot = await getDoc(userDoc);
          if(snapshot.exists()){
            const userData = snapshot.data();
            CustomUser.role = userData.role || '';
            CustomUser.link = userData.link || '';
            CustomUser.description = userData.description || '';
            CustomUser.address = userData.address || '';
            CustomUser.contactPerson = userData.contactPerson || '';
            CustomUser.profileImageUrl = userData.profileImageUrl;
          }
        }catch(error){
          console.error("Error fetching user data", error)
        }
        setUser(CustomUser);
        console.log(user)
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  // Function to log out the user
  const logout = async () => {
    await signOut(auth);
    setUser(null); 
  };
  return (
    <UserContext.Provider value={{ user, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
