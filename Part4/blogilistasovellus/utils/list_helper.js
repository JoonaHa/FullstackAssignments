const dummy = (blogs) => {
   return 1
}

const totalLikes = (blogs) => {
    return blogs.reduce((add, blog) => add + blog.likes,0)
}

const favoriteBlog = (blogs) => {
    const favorite = blogs.reduce((maxBlog, blog) => {
        blog.likes > maxBlog.likes ? blog : maxBlog}
         ,blogs[0])
    
    return {
        title: favorite.title,
        author: favorite.author,
        likes: favorite.likes
    }
    
}
  
  module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
  }

