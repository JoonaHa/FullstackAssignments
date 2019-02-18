const dummy = (blogs) => {
   return 1
  }

  const totalLikes = (blogs) => {
    return blogs.reduce((add, blog) => add + blog.likes,0)
}
  
  module.exports = {
    dummy,
    totalLikes
  }

