const express=require('express');
const router=express.Router();
const usercont=require('../controller/userController');
const passport=require('passport');
router.get('/user/profile/:id',passport.checkAuthentication,usercont.profile);
router.post('/user/profile/update/:id',passport.checkAuthentication,usercont.update);
router.get('/user/sign-up',usercont.signUp);
router.get('/user/sign-in',usercont.signIn);
router.post('/user/create',usercont.create);
router.post('/user/creatSession',passport.authenticate('local',{failureRedirect:'/user/sign-in'}),usercont.createSession);
router.get('/user/sign-out',usercont.destroy);

module.exports=router;
