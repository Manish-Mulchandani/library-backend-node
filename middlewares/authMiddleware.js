import JWT from "jsonwebtoken"

// Protected Routes token based
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