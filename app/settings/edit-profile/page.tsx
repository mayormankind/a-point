import Input from '@/components/common/Input'
import Link from 'next/link'
import React from 'react'
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';

// const validationSchema = Yup.object().shape({
//   name: Yup.string().required('Name is required'),
//   email: Yup.string().email('Invalid email address').required('Email is required'),
//   phoneNumber: Yup.string()
//     .matches(/^\d{11}$/, 'Phone number must be 11 digits')
//     .required('Phone number is required'),
//   role: Yup.string().required('Role is required'),
//   level: Yup.string().required('Skill level is required'),
//   image: Yup.mixed()
//     .required('Image is required')
//     .test('fileSize', 'The file is too large', (value) => {
//       return value && value.length > 0 && value[0].size <= 2000000; // 2MB
//     })
//     .test('fileType', 'Unsupported File Format', (value) => {
//       return value && value.length > 0 && ['image/jpeg', 'image/png', 'image/gif'].includes(value[0].type);
//     }),
// });


export default function EditProfile() {

  // const { register, handleSubmit, formState: { errors }, reset } = useForm({
  //   resolver: yupResolver(validationSchema),
  // });
  // const [modal, setModal] = useState(false);
  // const [success, setSuccess] = useState(false);
  // const [bioData, setBioData] = useState({});
  // const [ uploadProgress, setUploadProgress ] = useState(0);

  // const doSubmit = async (data) => {
  //   try {
  //     const imagesRef = ref(store, `User/${uuid()}`);
  //     const uploadTask = uploadBytesResumable(imagesRef, data.image[0]);
  //     uploadTask.on(
  //       'state_changed',
  //       (snapshot) => {
  //         // Optional: handle progress, if needed
  //           const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //           setUploadProgress(progress);
  //           console.log('Upload is ' + progress + '% done');
  //       },
  //       (err) => {
  //         console.log(err);
  //         alert('An error occurred while uploading the image.');
  //       },
  //       async () => {
  //         const imageURL = await getDownloadURL(uploadTask.snapshot.ref);
  //         await setDoc(doc(db, "users", uuid()), {
  //           mid: uuid(),
  //           email: data.email,
  //           name: data.name,
  //           phoneNumber: data.phoneNumber,
  //           role: data.role,
  //           level: data.level,
  //           image: imageURL,
  //         });

  //         // Save email to localStorage
  //         localStorage.setItem('RegisteredEmail', data.email);
  //         setBioData(data);
  //         setModal(true);
  //         reset(); // Reset the form after successful submission
  //       }
  //     );
  //   } catch (err) {
  //     console.log(err);
  //     alert('An error occurred while uploading.');
  //   }
  // };

  return (
    <div className='p-6 md:p-10 h-screen'>
      <div className="flex flex-col gap-6">
        <Link href='/dashboard/profile'>Back</Link>
        <h1 className='text-2xl font-bold'>Edit Profile</h1>
        {/* <h1 className='text-2xl font-bold'><Edit</h1> */}
        <img src="/avatar.png" alt="" className="w-20 mx-auto h-20 rounded-full"/>
        <div className="flex flex-col">
            <Input variant='underlined' type='text' placeholder='Username' />
            <Input variant='underlined' type='email' placeholder='Email'/>
            <Input variant='underlined' type='number' placeholder='Phone'/>
            <Input variant='underlined' type='date' placeholder='Date of birth'/>
            <Input variant='underlined' type='text' placeholder='Address'/>
            <Input variant='underlined' type='text' placeholder='Company and Service Description'/>
        </div>
      </div>
    </div>
  )
}
