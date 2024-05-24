'use client'

import React, { useState } from 'react'
import AuthenticationService from '../authentication/AuthenticationService';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export const Navbar = ({username}: any) => {
    const router = useRouter();
    
    const handleLogout = () => {
        AuthenticationService.logout();
        toast.success('Logout Success');
        router.push('/welcome');
    }

    return (
        <div className='fixed top-0 left-0 flex w-full p-4 px-10 justify-between items-center shadow-lg z-50' style={{backgroundColor: "#FF7C36"}}>
            <h1 className='font-bold text-xl text-white'><Link href={"/"}>Snackscription</Link></h1>
            <div className='flex justify-between items-center gap-10 ml-24'>
                <Link href={'/'} className="text-white font-light py-3 rounded-md text-sm sm:text-lg hover:text-orange-200">Home</Link>
                <Link href={'#'} className="text-white font-light py-3 rounded-md text-sm sm:text-lg hover:text-orange-200">Shop</Link>
                <Link href={'/subscription'} className="text-white font-light py-3 rounded-md text-sm sm:text-lg hover:text-orange-200">My Subscriptions</Link>
            </div>
            <div className='flex items-center justify-center gap-6'>
                <h1 className='text-white text-lg font-extralight'>Welcome, {username}</h1>
                <button onClick={handleLogout} className="text-white py-3 rounded-md text-sm sm:text-lg hover:text-orange-200">Logout</button>
            </div>
        </div>
    );
}