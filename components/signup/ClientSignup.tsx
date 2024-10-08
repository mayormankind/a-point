import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Link from 'next/link';
import React, { useState } from 'react';
import { toast } from "react-toastify";
import { v4 as uuid } from 'uuid';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db, storage } from '@/api/firebase';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';


interface FormValues {
    email: string;
    fullName: string;
    password: string;
    profilePicture: File | null;
  }
 
// Define the validation schema using Yup
const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
  profilePicture: Yup.mixed()
  .required('Profile picture is required')
  .test('fileSize', 'The file is too large', (value:any) => {
    return value instanceof File && value.size <= 2000000; // Check if value is a File and apply size limit
  })
  .test('fileType', 'Unsupported File Format', (value:any) => {
    return value instanceof File && ['image/jpeg', 'image/png'].includes(value.type)
  }),
});

const ClientSignup = () => {
    const [uploadProgress, setUploadProgress] = useState(0);

    const handleSignup = async (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
        const { fullName, email, password, profilePicture } = values;

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
      
            if (profilePicture) {
              // Upload the profile picture
              const imageRef = ref(storage, `profilePictures/${uuid()}-${profilePicture.name}`);
              const uploadTask = uploadBytesResumable(imageRef, profilePicture);
      
              uploadTask.on(
                'state_changed',
                (snapshot) => {
                  const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  console.log(`Upload is ${progress}% done`);
                },
                (error) => {
                  console.error('Image upload error:', error);
                  toast.error('Failed to upload profile picture.');
                },
                async () => {
                  // Get the profile picture URL after upload
                  const profileImageUrl = await getDownloadURL(uploadTask.snapshot.ref);
      
                  // Store additional user information in Firestore
                  await setDoc(doc(db, 'users', user.uid), {
                    uid: user.uid,
                    fullName,
                    email,
                    profileImageUrl,
                    role: 'client',
                  });
      
                  toast.success('Account created successfully!');
                  resetForm(); // Reset the form
                }
              );
            }
          } catch (error) {
            console.log('Error creating account:', error);
            toast.error('An error occurred during account creation.');
          }
  };

  return (
    <div className="flex flex-col gap-4 text-black">
      <h1 className='font-bold text-xl text-center my-3 text-blue-600'>Get Started</h1>

      <Formik
        initialValues={{
          fullName: '',
          email: '',
          password: '',
          profilePicture: null as File | null,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSignup}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className="flex flex-col gap-4">
            <div className="gap-1 flex flex-col">
              <label htmlFor="fullName" className="text-xs">Full Name</label>
              <Field name="fullName" placeholder="Enter your Full name" className="border p-2 rounded" />
              <ErrorMessage name="fullName" component="div" className="text-red-600 text-xs" />
            </div>

            <div className="gap-1 flex flex-col">
              <label htmlFor="email" className="text-xs">Email</label>
              <Field type="email" name="email" placeholder="Enter your email" className="border p-2 rounded" />
              <ErrorMessage name="email" component="div" className="text-red-600 text-xs" />
            </div>

            <div className="gap-1 flex flex-col">
              <label htmlFor="password" className="text-xs">Password</label>
              <Field type="password" name="password" placeholder="Enter a password" className="border p-2 rounded" />
              <ErrorMessage name="password" component="div" className="text-red-600 text-xs" />
            </div>

            <div className="gap-1 flex flex-col">
              <label htmlFor="profilePicture" className="text-xs">Profile Picture</label>
              <input type="file" name="profilePicture" accept="image/*" onChange={(event) => setFieldValue('profilePicture', event.target.files ? event.target.files[0] : null)} />
              <ErrorMessage name="profilePicture" component="div" className="text-red-600 text-xs" />
            </div>

            {/* Submit Button */}
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Creating...' : 'Sign up'}
            </Button>

            <span className='text-center text-xs text-grayText'>
              Already have an account? <Link href='/login' className='text-blue-700 font-semibold'>Sign in</Link>
            </span>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ClientSignup;
