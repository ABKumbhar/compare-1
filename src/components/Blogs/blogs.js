import React, { Component } from 'react'
import axios from 'axios';
import BlogNonTrendingList from './blogNonTrendingList';
class Blogs extends Component {
     state={
        blogs:[],
     }
     componentDidMount(){
         axios.get(`https://aniket1999.pythonanywhere.com/en/blog/`)
            .then(res=>{
                // console.log(res)
                this.setState({
                  blogs:res.data
                })
                console.log(this.state)
            });
     }
    render() {
      const blogs=this.state.blogs;
        return (
            <div>
              
              <div className="blog-card">
              <h4 className="top-blogs">Top Blogs</h4>
                 <BlogNonTrendingList blogs={blogs}/>
               </div>
            </div>
        )
    }
}
export default Blogs;