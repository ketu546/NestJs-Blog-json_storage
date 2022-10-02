import React, {useState} from "react";
import Link from "next/link";
const Blog = (props) => {
    const [blogs, setblogs] = useState(props.allblogs)    
    return <>
        <div className="main">
            <div className="blogtitel">
                <h2>Our <span>Blog</span></h2></div>


            <div className="blog">

                {blogs.map((blogitem)=>{
                    return <div  className="blogs" key={blogitem.slug}>
                    <Link href={`/blog/${blogitem.slug}`}><a>
                        <h3 style={{height:"4.2rem"}}>{blogitem.titel}</h3> </a></Link>
                        <hr style={{width:" 60%",border:"1px solid red"}}/>
                        <span><b>Author: </b><i>{blogitem.author}</i></span>
                        <p>{blogitem.content.substr(0,200)}</p>
                    </div>
                })}



               


            </div>
        </div>

    </>
};


export async function getServerSideProps(context) {          
    const blog = await fetch("http://localhost:8445/api/blog/blogs")
    let allblogs = await blog.json()
    return {
      props: {allblogs},
    }
  }


export default Blog;