import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { getAuth, signOut ,onAuthStateChanged} from "firebase/auth";


function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const auth = getAuth();
  const navigate=useNavigate()
  const user=auth.currentUser;
  //FireBase SignOut functionality

  const handleLogOut=()=>{
   
    signOut(auth).then(() => {
     
    }).catch((error) => {
      alert('An error happened')
    });
    navigate('/')
    window.location.reload()
  }
  const handlelLogOutPopUp=()=>{
    setIsOpen(!isOpen)
  }
 
 

  return (
    <div className="relative">
      <p className='cursor-pointer' onClick={handlelLogOutPopUp}><AiOutlineMenu className='scale-125' /></p>

      {isOpen && (
        <div className=' bg-white border absolute p-2  mt-2 w-[8rem] rounded-md shadow-lg '>
          <div className='m-1 p-1 cursor-pointer  rounded-sm '>
            <p className='hover:underline text-center text-black font-bold hover:brightness-150'>Career</p>
            <hr className='bg-black'></hr>
          </div>
          {user&&<div onClick={handleLogOut} className='m-1 p-1 cursor-pointer rounded-sm'>
            <p className='text-center text-red-500 font-bold hover:text-red-600'>Log-Out</p>
            <hr className='bg-black'></hr>
          </div>}


        </div>
      )}
    </div>
  );
}


export default DropdownMenu;
