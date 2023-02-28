const User=require('../modals/user');
module.exports.profile=function(req,res)
{
   User.findById(req.params.id,function(err,user){
    if(err)
    return;
    return res.render('profile',{title:'user_profile',profile_user:user});
   })
}
module.exports.update=function(req,res){
    if(req.user.id==req.params.id)
    {
        User.findByIdAndUpdate(req.params.id,{name:req.body.name,email:req.body.email},function(err,user){
            return res.redirect('back')
        })
    }
    else{
        return res.status(401).send('Unauthorized');
    }
}
// rendering the signUp page
module.exports.signUp=function(req,res)
{   // this is used to authenticate the user
    if(req.isAuthenticated())
    {
        return res.redirect('/user/profile');
    }
    return res.render('UserSignUp',{title:'SignUp'});
}

// rendering the signIn page
module.exports.signIn=function(req,res)
{      if(req.isAuthenticated())
    {
       return res.redirect('/user/profile');
    }
    return res.render('userSignIn',{title:'signIn'});
}

// crating sign Up
module.exports.create=function(req,res){
    if(req.body.password!=req.body.confirm_password)
    return res.redirect('back');
    User.findOne({email:req.body.email},(err,user)=>{
        if(err)
        {
            console.log('getting error in siginig the data');
            return;
        }
        if(!user)
        {
            User.create(req.body,(err,user)=>{
                if(err)
                {
                    return;
                }
                return res.redirect('/user/sign-in');
                
            })

        }
        else
        return res.redirect('back');
    })
}

// creating sign In

module.exports.createSession=function(req,res)
{
   // to do latter
   return res.redirect('/')
}
module.exports.destroy=function(req,res,next){
    req.logout((err)=>{
        if(err)
        {
            return next();
        }
        return res.redirect('/');
    })
}


