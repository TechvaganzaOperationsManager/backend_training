const errorHandler = (error, req, res, next) => {
    console.error(error.message); 
    res.status(500).send("Something went wrong on the server."); 
};

export default errorHandler