const express=require('express');
const router=express.Router();
const usercont=require('../controller/userController');
const passport=require('passport');
router.get('/user/profile',passport.checkAuthentication,usercont.profile);
router.get('/user/sign-up',usercont.signUp);
router.get('/user/sign-in',usercont.signIn);
router.post('/user/create',usercont.create);
router.post('/user/creatSession',passport.authenticate('local',{failureRedirect:'/user/sign-in'}),usercont.createSession);

module.exports=router;
