import React from 'react';
import './index.scss';
import Home from '../Home';

const App2 = () => {
  console.log(window);
  return (
    <div className="container">
        welcome to China!
      <div className="item">
            wah龙丹
        <Home />
      </div>
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (<div>2d8ll</div>)
  }
}

export default App;
