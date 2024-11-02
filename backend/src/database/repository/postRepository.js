import { postModel } from "../schema/postSchema.js"

export const createBlog = async(data)=>{
    try {
       return await postModel.create(data)
    } catch (error) {
        console.error(error);
        throw error
    }
}

export const getAllPost = async()=>{
    try {
        return await postModel.find({})
    } catch (error) {
        console.error(error);
        throw error
    }
}

export const getPostById = async(id)=>{
    try {
       return await postModel.findById({_id:id})
    } catch (error) {
        console.error(error);
        throw error
    }
}