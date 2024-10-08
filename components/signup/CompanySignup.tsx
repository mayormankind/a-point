import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { auth, db, storage } from '@/api/firebase'; // Firebase instance
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Link from 'next/link';
import { v4 as uuid } from 'uuid';

// Define the type for the form values
interface FormValues {
  displayName: string;
  email: string;
  address: string;
  contactPerson: string;
  password: string;
  profilePicture: File | null;
}

// Define the validation schema using Yup
const validationSchema = Yup.object().shape({
  displayName: Yup.string().required('Company Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  address: Yup.string().required('Address is required'),
  contactPerson: Yup.string().required('Contact person is required'),
  password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
  profilePicture: Yup.mixed()
  .required('Profile picture is required')
  .test('fileSize', 'The file is too large', (value:any) => {
    return value instanceof File && value.size <= 2000000; // Check if value is a File and apply size limit
  })
  .test('fileType', 'Unsupported File Format', (value:any) => {
    return value instanceof File && ['image/jpeg', 'image/png'].includes(value.type)
  })
});

export default function CompanySignup() {
  // Define the signup handler
  const handleSignup = async (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
    const { displayName, email, address, contactPerson, password, profilePicture } = values;

    try {
      // Create user in Firebase Authentication
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

            // Generate a unique link for scheduling
            const schedulingLink = `https://apoint.vervel.app/schedule/${displayName.replace(/\s+/g, '-').toLowerCase()}-${user.uid}`;

            // Store additional user information in Firestore
            await setDoc(doc(db, 'users', user.uid), {
              uid: user.uid,
              displayName,
              email,
              address,
              contactPerson,
              profileImageUrl,
              role: 'company',
              link: schedulingLink,
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
      <h1 className="font-bold text-xl text-center my-3 text-blue-600">Get Started</h1>

      {/* Formik form */}
      <Formik
        initialValues={{
          displayName: '',
          email: '',
          address: '',
          contactPerson: '',
          password: '',
          profilePicture: null as File | null, // Allow File or null for profilePicture
        }}
        validationSchema={validationSchema}
        onSubmit={handleSignup}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className="flex flex-col gap-4">
            <div className="gap-1 flex flex-col">
              <label htmlFor="displayName" className="text-xs">Company Name</label>
              <Field name="displayName" placeholder="Enter your company's name" className="border p-2 rounded" />
              <ErrorMessage name="displayName" component="div" className="text-red-600 text-xs" />
            </div>

            {/* Email */}
            <div className="gap-1 flex flex-col">
              <label htmlFor="email" className="text-xs">Email</label>
              <Field type="email" name="email" placeholder="Enter your email" className="border p-2 rounded" />
              <ErrorMessage name="email" component="div" className="text-red-600 text-xs" />
            </div>

            {/* Address */}
            <div className="gap-1 flex flex-col">
              <label htmlFor="address" className="text-xs">Address</label>
              <Field name="address" placeholder="Enter your address" className="border p-2 rounded" />
              <ErrorMessage name="address" component="div" className="text-red-600 text-xs" />
            </div>

            {/* Contact Person */}
            <div className="gap-1 flex flex-col">
              <label htmlFor="contactPerson" className="text-xs">Whom to Reach</label>
              <Field name="contactPerson" placeholder="Enter a contact person" className="border p-2 rounded" />
              <ErrorMessage name="contactPerson" component="div" className="text-red-600 text-xs" />
            </div>

            {/* Password */}
            <div className="gap-1 flex flex-col">
              <label htmlFor="password" className="text-xs">Password</label>
              <Field type="password" name="password" placeholder="Enter a password" className="border p-2 rounded" />
              <ErrorMessage name="password" component="div" className="text-red-600 text-xs" />
            </div>

            {/* Profile Picture Upload */}
            <div className="gap-1 flex flex-col">
              <label htmlFor="profilePicture" className="text-xs">Profile Picture</label>
              <input type="file" name="profilePicture" accept="image/*" onChange={(event) => setFieldValue('profilePicture', event.target.files ? event.target.files[0] : null)} />
              <ErrorMessage name="profilePicture" component="div" className="text-red-600 text-xs" />
            </div>

            {/* Submit Button */}
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Creating...' : 'Sign up'}
            </Button>

            <span className="text-center text-xs text-grayText">
              Already have an account?
              <Link href="/login" className="text-blue-700 font-semibold"> Sign in</Link>
            </span>
          </Form>
        )}
      </Formik>
    </div>
  );
}
