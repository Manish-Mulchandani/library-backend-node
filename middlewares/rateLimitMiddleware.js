export const rateLimitMiddleware = (req,res,next) => {
    const windowMs = 60*1000  // 1 minute
    const maxRequests = 10    // 10 requests, can edit according to needs
    
    const clientIp = req.ip
    
    if(clientRequestCount[clientIp] > maxRequests) {
        return res.status(400).send({
            error:"Rate Limit exceeded"
        })
    }
    clientRequestCount[clientIp] = (clientRequestCount[clientIp] || 0) + 1

    setTimeout(() => {
        clientRequestCount[clientIp] = 0
    }, windowMs)
    next()
}

const clientRequestCount = {};