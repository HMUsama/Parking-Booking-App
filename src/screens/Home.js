import React, { Component } from 'react';
import {Link,NavLink} from 'react-router-dom'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>

      <img src="https://www.mudelautod.ee/wp-content/uploads/loader.gif"   className="image-car"/>
      {/* <img src="https://media.giphy.com/media/1zRfp0Jwsag4yPekP4/giphy.gif" className="image-car" /> */}
      {/* <img src="https://media.giphy.com/media/lz7KlLaDAqcKiW0rSF/giphy.gif" className="image-car" /> */}
      </div>
    );
  }
}

export default Home;
