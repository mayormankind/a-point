"use client"

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Link from 'next/link';
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/api/firebase';
import { useRouter } from 'next/router';


interface FormValues {
  email: string;
  password: string;
}

// Define the validation schema using Yup
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export default function Login() {
  const [ loading, setLoading ] = useState(false);
  const router =  useRouter();
  
  const HandleLogin = async (values:FormValues)=> {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);
      const user = userCredential.user;
      toast.success('Login successful');
      router.push('/dashboard');
    } catch (error:any) {
      if (error.code === 'auth/user-not-found') {
        toast.error('User not found. Please sign up.');
      } else if (error.code === 'auth/wrong-password') {
        toast.error('Incorrect password. Please try again.');
      } else {
        toast.error('An error occurred during login.');
      }
    }finally{
      setLoading(false); 
    }
  };

  return (
    <div className='relative w-full h-screen md:px-4 flex text-blue-600 text-xs' style={{backgroundImage:'url(./bg1.jpg)'}}>
      <span className='absolute top-8 left-4 text-white text-sm'><Link href='/'>Back</Link></span>
      <div className="flex absolute bottom-0 flex-col gap-4 m-auto w-full max-w-md bg-white rounded-2xl py-10 min-h-[75vh] px-6 md:py-10 md:relative shadow-xl md:min-h-fit">
        <h1 className='font-bold text-xl text-center'>Welcome Back</h1>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={HandleLogin}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-4 text-black">
              <div className="gap-1 flex flex-col">
                <label htmlFor="email" className="text-xs">Email</label>
                <Field type="email" name="email" placeholder="Enter your email" className="border p-2 rounded" />
                <ErrorMessage name="email" component="div" className="text-red-600 text-xs" />
              </div>
              <div>
                <Field type="password" name="password" placeholder="Enter a password" className="border p-2 rounded" />
                <ErrorMessage name="password" component="div" className="text-red-600 text-xs" />
              </div>

              <span className='text-end text-xs text-blue-600'><Link href='/reset-password'>Forgot password?</Link></span>

              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Signing in...' : 'Sign in'}
              </Button>
            </Form>
          )}
        </Formik>

        <span className='text-center text-xs text-grayText'>
          Don't have an account? <Link href='/signup' className='text-blue-700 font-semibold'>Sign up</Link>
        </span>
      </div>
    </div>
  );
}