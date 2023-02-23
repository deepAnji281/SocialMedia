const Post=require('../modals/Post');
module.exports.createPost=function(req,res)
{
    Post.create({
        content:req.body.content,
        user:req.user._id,
    },(err,post)=>{
        if(err)
        {
            console.log('err in creating trhe post');
            return;
        }
        return res.redirect('back');
    })
}