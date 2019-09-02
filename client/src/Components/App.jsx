import React from 'react';
import List from './List.jsx';
import Form from './Form.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <List />
        <Form />
      </div>
    )
  };
};

export default App;