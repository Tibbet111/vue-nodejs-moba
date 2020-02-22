module.exports = app=>{
    const express = require('express')
    const jwt = require('jsonwebtoken')
    const assert = require('http-assert')
    const adminUser = require('../../models/AdminUser')
    const router = express.Router({
       mergeParams:true
    })
    //登录校验中间件
    const authMiddleware = require('../../middleware/auth')
    //资源中间件
    const resourceMiddleware = require('../../middleware/resource')

    //增删改查通用接口
    app.use('/admin/api/rest/:resource',authMiddleware(),resourceMiddleware(),router)

    //创建数据
    router.post('/',async(req,res)=>{  
       const model = await req.Model.create(req.body)
       res.send(model)
    }) 
    //修改数据
    router.put('/:id',async(req,res)=>{  
      const model = await req.Model.findByIdAndUpdate(req.params.id,req.body)
      res.send(model)
   }) 
    //显示数据
    router.get('/',async(req,res)=>{  
       const queryOptions = {}
       if(req.Model.modelName == 'Category'){
          queryOptions.populate = 'parent'
       }
        const items = await req.Model.find().setOptions(queryOptions).limit(10)
        res.send(items)
     })
     //获取某个详情信息
     router.get('/:id',async(req,res)=>{  
      const model = await req.Model.findById(req.params.id)
      res.send(model)
   }) 
   //删除
   router.delete('/:id',async(req,res)=>{  
      await req.Model.findByIdAndDelete(req.params.id,req.body)
      res.send({
         success : true,
         msg : '删除成功'
      })
   })

   //接受上传文件
   const multer = require('multer')
   const upload = multer({dest: __dirname + '/../../uploads'})
   app.post('/admin/api/upload',authMiddleware(),upload.single('file'),async (req,res)=>{
      const file = req.file
      file.url = `http://localhost:3000/uploads/${file.filename}`
      res.send(file)
   })

   //登录
   app.post('/admin/api/login',async (req,res)=>{
      const {username,password} = req.body
      //1.根据用户名在数据库中找用户
      const user =  await adminUser.findOne({username}).select('+password')
      //用户不存在
      assert(user,422,'用户不存在')
      //用户存在
      //2.校验密码
      const isValid = require('bcrypt').compareSync(password,user.password)
      assert(isValid,422,'密码错误')
      //3.返回前端一个token
      const token = jwt.sign({id:user._id,username:user.username},app.get('secret'))
      res.send({token})
   })
   //错误处理函数
   app.use(async (err,req,res,next)=>{
      res.status(err.statusCode || 500).send({
         message:err.message
      })
   })
}