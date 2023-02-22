const express=require('express');
const router=express.Router();
const usercont=require('../controller/userController');
router.get('/user/profile',usercont.profile);
router.get('/user/sign-up',usercont.signUp);
router.get('/user/sign-in',usercont.signIn);
router.post('/user/create',usercont.create);
router.post('/user/creatSession',usercont.createSession);
module.exports=router;
