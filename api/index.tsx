import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { collection, addDoc,  onSnapshot, query, where, doc, setDoc, deleteDoc, orderBy, updateDoc, serverTimestamp } from 'firebase/firestore';
import {auth,provider,db, storage} from "./firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";

export const userRef = collection(db,'users');
export const audioRef = collection(db,'audios');
export const notificationRef = collection(db,'notifications');
interface loginProps{
    email: string;
    password: string;
}
interface signupProps{
    email: string;
    password: string;
}

export const SignIn = ( { email,password } : loginProps ) => {
    let response= signInWithEmailAndPassword(auth, email, password)
    return response;
  };
  
export const SignUpWithEmail = ( { email,password } : signupProps ) =>{
    let response = createUserWithEmailAndPassword(auth, email, password)
    return response;
  }
  
export const SaveUserData = (props:any) =>{
  addDoc(userRef, props)
  .then(()=>{})
  .catch((err)=>{
    console.log(err);
  })
}

export const profileUpdate = async( { user, id, info } : any ) =>{
  let toUpdate = doc(userRef,id);
  await updateDoc(toUpdate,info)
  .then(()=>{
    toast.success('your profile update was successfully');
  })
  .catch((err)=>{
    toast.error('could not update your profile');
    console.log(err)
  })
  await updateProfile(user, {info});
}

export const getActiveUser = ( { cuser, setUser } : any ) =>{
    onSnapshot(userRef, (res)=>{
    const user = res.docs.map((docs)=>{
        return { ...docs.data() }
      }).filter((item)=>{
        return (item.uid) === cuser
      })[0]
      setUser(user);
    });
  }

export const getData = ( { ref, setData, setLoading } : any ) =>{
    onSnapshot(ref, (snapshot)=>{
      setData(
        snapshot.docs.map((docs) =>{
          return { ...docs.data(), id: docs.id };
        })
      );
      setLoading(true)
      });
  }
  
export const filesUpload = ( { file, setStatus, setProgress } : any ) =>{
  const filesRef = ref(storage,`files/${file.name}`);
  const uploadTask = uploadBytesResumable(filesRef,file)
  uploadTask.on("state_changed", (snapshot) =>{
    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      setProgress(progress);
    },
    (err) => {
      console.log(err);
    },
    ()=>{
      getDownloadURL(uploadTask.snapshot.ref).then((res)=>{
        setStatus(res);
      });
    })
}

export const sendNotification = ( data : any ) =>{
  addDoc(notificationRef, data)
  .then(()=>{})
  .catch((err)=>{
    console.log(err);
  })
}

export const fetchNotifications = ( setNotifications : any ) =>{
  let data = query(notificationRef, orderBy('time')); 
  onSnapshot(data,(res)=>{
    const notifications = res.docs.map((doc)=>{
      return{id:doc.id, ...doc.data()};
    });
    setNotifications(notifications);
  })
}

export const fetchProfile = ( { id, setProfileInfo } : any ) =>{
  let profileQuery = query(userRef, where("userID" == id));
  onSnapshot(profileQuery, (res)=>{
    setProfileInfo(
      res.docs.map(doc=>{
        return { ...doc.data(), id: doc.id}
      })[0]
    )
  })
}

export const getAllUsers = ( setUsers : any) =>{
  onSnapshot(userRef, (res)=>{
    const usersProfile = res.docs.map(doc=>{
      return { ...doc.data(), id:doc.id }
    })
    setUsers(usersProfile);
    });
}
