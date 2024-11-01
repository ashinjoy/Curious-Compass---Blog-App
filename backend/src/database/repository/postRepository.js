import { postModel } from "../schema/postSchema.js"

export const createBlog = async(data)=>{
    try {
       return await postModel.create(data)
    } catch (error) {
        console.error(error);
        throw error
    }
}