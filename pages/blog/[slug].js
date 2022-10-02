import React,{useState} from 'react'

const slug = (props) => {
  const [blog, setblog] = useState(props.myBlog)


  return <>
  <div className="blogpost">
    <h2 className="blogPostTitle">{blog && blog.titel}</h2>
    <hr />
    <p>{blog && blog.content}</p>
  </div>
  </>
  
}

export async function getServerSideProps(context){
  const {slug} = context.query
  let data = await fetch(`http://localhost:8445/api/blog/getBlog?slug=${slug}`)
  let myBlog = await data.json()

  return{
    props:{myBlog},
  }
}

export default slug