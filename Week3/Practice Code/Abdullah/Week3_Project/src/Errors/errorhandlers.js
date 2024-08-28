const errorHandler = (error, req , res, next) => {
    console.error(error.message)
        res.status(501).send("something went wrong")
    
}
export default errorHandler