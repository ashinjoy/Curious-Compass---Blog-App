import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useAxios from '../../hooks/useAxios'
import toast from 'react-hot-toast'

function MyBlogsCard({post,myposts,setMyposts}) {
  const {loading,data,error,apiCall} = useAxios()
  const handleDelete = ()=>{
    console.log('hi');
    
    apiCall('/deletepost',{method:'patch',data:{postId:post._id}})
  }
  useEffect(()=>{
    if(data?.success){
      console.log('log');
      
      const posts = [...myposts]
     const availablePosts =  posts.filter((post)=>post._id !== data?.postId)
     console.log(availablePosts);
     
     setMyposts(availablePosts)
      toast.success('post deleted')
      return
    }

  },[data,error])
  return (
    <div className='w-[70%] border-2 border-black flex  items-center '>
      <div className='w-[20%]'><img src="/blog.webp" alt="" /></div>
      <div className='w-[80%] flex items-center justify-center gap-[2rem]'>
        <Link className='p-2 bg-blue-500 w-[4rem]' to={'/'}>view</Link>
        <Link className='p-2 bg-green-400' to={`/editpost/${post._id}`}>Edit</Link>
        <button className='p-2 bg-red-400' onClick={handleDelete}>Delete</button>
        </div>
    </div>
  )
}

export default MyBlogsCard
