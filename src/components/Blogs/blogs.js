import React, { Component } from 'react'
import axios from 'axios';
import BlogNonTrendingList from './blogNonTrendingList';
import {connect} from 'react-redux'
class Blogs extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      blogs: [],
    };
  }

   
     componentDidMount(){
         axios.get(`https://aniket1999.pythonanywhere.com/${this.props.language_select}/blogurl/`)
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
              <h4 className="top-blogs">Must reads</h4>
                 <BlogNonTrendingList blogs={blogs}/>
               </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
  return {
    language_select: state.language.language_select
  }
}
export default connect(mapStateToProps)(Blogs);