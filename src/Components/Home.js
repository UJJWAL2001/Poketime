import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'
import { connect } from 'react-redux' // act as glue b/w react and redux 

class Home extends Component {
    render(){
        console.log(this.props)
        const { posts } = this.props 
        const postList = posts.length ? (
        posts.map(post => {
            return (
            <div className="post card" key={post.id}>
                <img src={Pokeball}  />
                <div className="card-content">
                    <Link to={'/'+post.id} className="red-text">
                        <span className="card-title">{post.title}</span>
                    </Link>
                <p>{post.body}</p>
                </div>
            </div>
            )
        })
        ) : (
        <div className="center">No posts to show</div>
        );

        return(
            <div className="container" id="Home">
                <h1 className="center"> Home </h1>
                {postList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home) // connect returns a higher order function that wrapps Home 


