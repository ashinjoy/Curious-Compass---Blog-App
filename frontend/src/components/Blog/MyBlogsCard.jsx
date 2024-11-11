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
    <div className="w-[70%] border border-gray-300 rounded-lg shadow-lg flex items-center p-6 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
    <div className="w-[25%] flex flex-col items-center">
      <img src={post.thumbnail} alt="Blog Thumbnail" className="rounded-md object-cover w-full h-full max-h-[120px]" />
      <h2 className="mt-3 text-center font-semibold text-gray-800 text-lg">{post.title}</h2>
    </div>
  
    <div className="w-[75%] flex items-center justify-center gap-6 ml-6">
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
