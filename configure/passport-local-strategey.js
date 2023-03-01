const passport=require('passport');
const LocalStrategey=require('passport-local').Strategy;
const User=require('../modals/user');

//Authentication using passport js

passport.use(new LocalStrategey({
    usernameField:'email',
    passReqToCallback:true
},function(req,email,password,done){
    User.findOne({email:email},(err,user)=>{
        if(err)
        {   req.flash('error',"error in passport js");
            return done(err);
        }
        if(!user||user.password!=password)
        {  req.flash('error','Invalid username/password');
            return done(null,false);
        }

        return done(null,user);

    });

}));

// serlize the user to check which key kept in cookies
passport.serializeUser((user,done)=>{
    done(null,user.id);
})

// deserilize the user to key check in sessional keys from cookie
passport.deserializeUser((id,done)=>{
    User.findById(id,(err,user)=>{
        if(err)
        return done(err);
        return done(null,user)
    });
});


// checking authenitication
passport.checkAuthentication=function(req,res,next){
    if(req.isAuthenticated())
    return next();
    return res.redirect('/user/sign-in');
}

// setting user as authenticated 
passport.setAuthenticatedUser=function(req,res,next){
    // req.user contains current signed in from session cookie
    if(req.isAuthenticated())
    {
        res.locals.user=req.user;
    }
    next();
}

module.exports=passport;