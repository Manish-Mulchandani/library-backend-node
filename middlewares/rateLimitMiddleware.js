export const rateLimitMiddleware = (req,res,next) => {
    const windowMs = 60*1000
    const maxRequests = 10
    
    const clientIp = req.ip
    
    if(clientRequestCount[clientIp] > maxRequests) {
        return res.status(400).send({
            error:"Rate Limti exceeded"
        })
    }
    clientRequestCount[clientIp] = (clientRequestCount[clientIp]||0)+1

    setTimeout(() => {
        clientRequestCount[clientIp] = 0
    }, windowMs)
    next()
}

const clientRequestCount = {};