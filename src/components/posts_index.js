import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {

  //We put our action creator in here because it will only be called once
  //before the component mounts. It won't be called after each re-render.
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>List of Blog Posts</div>
    );
  }
}

export default connect(null, { fetchPosts })(PostsIndex);
