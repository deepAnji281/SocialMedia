const Post=require('../modals/Post');
const comment=require('../modals/comment');
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


// deleting the post
module.exports.destroy=function(req,res){
    
    Post.findById(req.params.id,function(err,post){
        // .id means converting the ._id in to string
        if(post.user==req.user.id)
        {
            post.remove();
           comment.deleteMany({post:req.params.id},function(err){
            return res.redirect('back');
           })
        }
        else{
            return res.redirect('back')
        }
    })
    
}