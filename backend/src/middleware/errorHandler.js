export const errorHandler = (err,req,res,next)=>{
    const statusCode = err?.statusCode ? err?.statusCode : 500
    const message = err.message ? err.message : 'Internal Server Error'
    res.status(statusCode).json({message:message})
}