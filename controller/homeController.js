const Post=require('../modals/Post');
const User=require('../modals/user')
module.exports.home=function(req,res)
{     
   // find all the post to which is posted by the user
    // Post.find({},function(err,post){
    //     if(err)
    //     return;
    //     return res.render('home',{title:'codial | home',posts:post});
    // })


    // to poputlate the user
    Post.find({}).populate('user').populate({path:'comments',populate:{
        path:'user'
    }}).exec(function(err,post){
        if(err)
        return;
       User.find({},function(err,users){
        return res.render('home',{title:'codial|Home',posts:post,All_user:users});
       })
    })
}