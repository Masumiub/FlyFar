"use client"
import React, { useState } from 'react'
import Lottie from 'lottie-react';
import Animation from '../../../public/assets/Travel App - Onboarding Animation.json';

import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';



export default function RegisterPage() {

    // const [showPassword, setShowPassword] = useState(false);


    return (
        <div className='w-full md:w-10/12 mx-auto'>
            <div className='mb-20'>
                <div className='mt-35 text-center'>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-5 bg-base-200 rounded-2xl bg-gradient-to-l from-sky-500 to-blue-700 mb-5">

                    <div className='w-full md:w-1/2 pb-20'>
                        <div className='text-center text-white mt-20 mb-10'>
                            <h2 className='text-5xl font-bold'>Join to FlyFar!</h2>
                            <p className='mt-3'>Dive into the rich history, vibrant traditions, and breathtaking nature.</p>
                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                            <div className="card-body">
                                <fieldset className="fieldset">

                                    <form>

                                        <label className="label mt-2 mb-2">Name</label>
                                        <input
                                            type="text"
                                            className="input w-full"
                                            placeholder="Name"
                                            name="name"
                                            required
                                        />

                                        <label className="label mt-2 mb-2">Email</label>
                                        <input
                                            type="email"
                                            className="input w-full"
                                            placeholder="Email"
                                            name="email"
                                            required
                                        />

                                        <label className="label mt-2 mb-2">Password</label>

                                        <input type='password'
                                            className="input w-full " placeholder="Password" name='password' />



                                        <button className="btn mt-4 w-full rounded-full bg-blue-500 border-0 text-white" type='submit'>Regsiter</button>
                                        <div className="divider">OR</div>
                                        <button className="btn  w-full rounded-full" type='submit'> <FcGoogle /> Login with Google</button>
                                    </form>

                                </fieldset>

                                <div className='text-center'>
                                    <p>Already have an account? <Link href='/login' className='text-blue-500'>Login</Link> </p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='w-full md:w-1/2 flex justify-center'>
                        <Lottie animationData={Animation} loop={true} className="w-[300px] md:w-[400px] lg:w-[800px] mx-auto" />
                    </div>
                </div>


            </div>
        </div>
    )
}
