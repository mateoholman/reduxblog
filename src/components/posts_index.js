import React, { Component } from 'react';

class PostsIndex extends Component {

  //We put our action creator in here because it will only be called once
  //before the component mounts. It won't be called after each re-render.
  componentWillMount() {
    console.log('This would be a good time to call an action creator');
  }

  render() {
    return (
      <div>List of Blog Posts</div>
    );
  }
}

export default PostsIndex;
