import React from "react"
import StyledLinkB from "./links/styledLinkB"

const BlogPosts = ({posts}) => {  
    posts = posts.map(post => {
        return post.node.frontmatter
      })
    return(
        <div>
            <BlogPost posts = {posts}></BlogPost>
        </div>
    )
}

const BlogPost = ({posts}) => {
    return(
        <>
        {posts.map(post => (
            <Post key = {post.path} path = {post.path} title = {post.title} text = {post.text} date = {post.date}/>
        ))}
        </>
    )
}

const Post = ({path, title, text, date}) => {
    return(
        <div className = "card mt-3">
          <div className = "row no-gutters">
            <div className = "col-md-12" >
              <div className = {`card-body`}>
                <StyledLinkB to = {path}><h3 className = {`card-title`}>{title}</h3></StyledLinkB>
                <p className = "card-text text-muted">{date}</p>
                <p className = "card-text">{text}</p>
              </div>
            </div>
          </div>
        </div>
    )
}

export default BlogPosts