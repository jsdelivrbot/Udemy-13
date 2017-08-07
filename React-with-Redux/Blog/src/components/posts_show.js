import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    //this.props.match.params return the parameters in the url of current page
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props;

    //give time to fetch the post
    if(!post) {
      return <div>Loading...</div>
    }

    return(
      <div>
        <Link to='/'>
          Back to Index
        </Link>
        <button
          className = 'btn btn-danger pull-xs-right'
          onClick = {this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}
//ownProps refers to the props of PostsShow
//ownProps === this.props in PostsShow

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
