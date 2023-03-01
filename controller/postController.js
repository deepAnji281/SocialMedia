const Post=require('../modals/Post');
const comment=require('../modals/comment');
module.exports.createPost= async function(req,res)
{
  try{
    await Post.create({
        content:req.body.content,
        user:req.user._id,
        
    });
    req.flash('Success','post published');
   
    return res.redirect('back');
  }catch(err)
  {
    console.log(err);
    return;
  }
}


// deleting the post
module.exports.destroy= async function(req,res){
    try{
        let post= await Post.findById(req.params.id);
        // .id means converting the ._id in to string
        if(post.user==req.user.id)
        {
            post.remove();
           await comment.deleteMany({post:req.params.id})
           req.flash('Success',"Post and comment associated to it deleted");
            return res.redirect('back');
          
        
        }
        else{
            return res.redirect('back')
        }
    }catch(err){
        console.log(err);
        return;
    }
   
    
    
}