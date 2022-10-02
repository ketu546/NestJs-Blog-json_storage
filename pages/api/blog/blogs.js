// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs'

export default async function  handler(req, res) {

    const blogdata = await fs.promises.readdir("blogdata")
    let blog
    let blogs = []
    for (let index = 0; index < blogdata.length; index++) {
        const item = blogdata[index];
        blog = await fs.promises.readFile(("blogdata/" + item),"utf-8") 
        blogs.push(JSON.parse(blog))
    }
    res.status(200).json(blogs)

  }
  