"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";



export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    return (
        <div className="m-2">
            <h1 className='text-2xl font-bold'>{user ? `Welcome ${user.displayName}` : `Please Sign In to continue`}</h1>
            {user && <h1 className="mt-3 mb-3">User Email: <span className="font-bold">{user.email}</span></h1>}
            {user ? 
            <div>
            <Link className="text-xl hover:underline hover:text-blue-700" href='/week-9/shopping-list/'>Continue to Shopping List</Link><br />
            <button className='bg-blue-500 p-2 rounded-lg hover:bg-blue-700 mt-3' onClick={firebaseSignOut}>Sign Out</button>
            </div> : 
            <button className="bg-blue-500 p-2 rounded-lg hover:bg-blue-700 mt-3" onClick={gitHubSignIn}>Sign In Using GitHub</button>}
        </div>
    )
}