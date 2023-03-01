const Post=require('../modals/Post');
const { populate } = require('../modals/user');
const User=require('../modals/user')
module.exports.home= async function(req,res)
{     
   // find all the post to which is posted by the user
    // Post.find({},function(err,post){
    //     if(err)
    //     return;
    //     return res.render('home',{title:'codial | home',posts:post});
    // })


    // to poputlate the user
    try{  
        let post=await Post.find({})
        .populate('user')
        .populate({path:'comments',populate:{path:'user'}});

       
        let users= await User.find({});
        return res.render('home',{title:'codialHome',posts:post,All_user:users});
    }
    catch(err){
        console.log('error in populating the thing',err);
        return;
    }
}