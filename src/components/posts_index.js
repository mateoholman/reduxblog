import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPosts } from '../actions';

class PostsIndex extends Component {

  //We put our action creator in here because it will only be called once
  //before the component mounts. It won't be called after each re-render.
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    //While .map is an array prototype, lodash has the ability to map over
    //objects!
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      )
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-sm btn-primary" to="/posts/new">
            Add A Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
