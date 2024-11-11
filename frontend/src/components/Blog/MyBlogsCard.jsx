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
    <div className="w-[70%] border border-gray-300 rounded-lg shadow-lg flex items-center p-4 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
    <div className="w-[20%] flex justify-center items-center">
      <img src="/blog.webp" alt="Blog Thumbnail" className="rounded-md object-cover w-full h-full max-h-[80px]" />
    </div>
    <div className="w-[80%] flex items-center justify-center gap-4 ml-4">
      <Link
        className="p-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 w-[4rem] text-center"
        to="/"
      >
        View
      </Link>
      <Link
        className="p-2 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600"
        to={`/editpost/${post._id}`}
      >
        Edit
      </Link>
      <button
        className="p-2 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-600"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  </div>
  
  )
}

export default MyBlogsCard
