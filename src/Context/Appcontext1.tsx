"use client"
import {useState} from 'react';
import {UserContext} from './usercontext';
import { ReactNode } from 'react';

export const AppContext=({children}: {children: ReactNode})=>{
  const [user,setuser]=useState({});
return(
<UserContext.Provider value={{user,setuser}}>
{children}
</UserContext.Provider>
)
};
