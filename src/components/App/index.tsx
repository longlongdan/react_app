import React from 'react';
import './index.scss';
import Home from '../Home';

interface Props {
  endDate: string,
  timeout: any
}
interface State {
  now: any
}

class App extends React.Component<Props, State> {
  // constructor(props) {
  //   super(props)
  // }
  readonly state: Readonly<State> = {
    now: ""
}
  render() {
    return (<div className="box">uiui</div>)
  }
}

export default App;
