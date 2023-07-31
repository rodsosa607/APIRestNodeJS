const handleHttpError = ( res, message = 'SOMETHING_IS_WORNG', code = 403)=>{
    res.status(code);
    res.send({error: message})
}

module.exports = { handleHttpError };