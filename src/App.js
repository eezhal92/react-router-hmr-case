import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Link to='/'>Home</Link> | <Link to='/about'>About</Link>
        <br />
        {children}
      </div>
    );
  }
}

export default App;
