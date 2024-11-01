import { createBlog } from "../database/repository/postRepository.js";
import cloudinary from "../utils/cloudinary.js";

export const createPost = async (req, res, next) => {
  try {
    console.log("", req.body);
    const { title, category, content } = req.body;
    const parsedData = JSON.parse(content);
    for (const image of parsedData) {
      if (image["insert"]?.image) {
      const url =   await cloudinary.uploader.upload(image['insert']?.image,{ folder: "Blog_Assets" })
      image['insert'].image = url.secure_url
      }
    }
    console.log(parsedData);
    
    const buffer = Buffer.from(req.file.buffer).toString("base64");
    const dataUri = `data:${req.file.mimetype};base64,${buffer}`;
    const thumbnailUrl = (
      await cloudinary.uploader.upload(dataUri, { folder: "Blog_Assets" })
    ).secure_url;
    const blog = await createBlog({
      userId: req.userId,
      title,
      category,
      thumbnail: thumbnailUrl,
      content: JSON.stringify(parsedData),
    });
    res.status(201).json({success:true,message:"blog created"})
  } catch (error) {
    console.error(error);
    throw error;
  }
};
