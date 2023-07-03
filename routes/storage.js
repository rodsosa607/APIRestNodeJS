const multer = require('multer');
const express = require('express');
const router = express.Router();
//TODO: http://localhost:3001/storage

const storage = multer.diskStorage({
    destination:function(req, file, cb){
        const pathStorage = `${__dirname}/../storage`;
        cb(null, pathStorage)
    },
    filename:function(req, file, cb){
        //TODO: mi-cv.pdf mi-foto.png mi-video.mp4
        const ext = file.originalname.split('.').pop() //TODO: ["png","mp4","jpg"] en este
        // caso pop() toma el último elemento del array
        const filename = `file-${Date.now()}.${ext}`; //TODO:fecha en forma unix 151561599999
        cb(null, filename);
    }
})

//middleware
const uploadMiddleware = multer({storage})

router.post("/",uploadMiddleware.single('myfile'),(req, res)=>{
    res.send({a:1});
})

module.exports = router;