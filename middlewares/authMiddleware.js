import JWT from "jsonwebtoken"

// Protected Routes token base
export const requireSignIn = async (req,res,next) => {
    try {
        const decode = JWT.verify(
            req.headers.authorization,
            process.env.JWT_SECRET
        );
        req.userId = decode._id;
        next()
    } catch (error) {
        console.log(error)
        res.status(401).send({
            success:false,
            error,
        })

    }
}

/*export const checkSameUser = async (req,res,next) => {
    try {
        const token = req.headers.authorization
        if(!token){
            return res.status(400).send({
                error: "Token not found"
            })
        }
        const decoded = JWT.verify(token, )
    } catch (error) {
        
    }
}*/