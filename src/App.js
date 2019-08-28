import React from 'react';
import { inject, observer } from "mobx-react";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>MobX - Without decorators</h2>
        <hr />
        <h4>Contact store</h4>
        <p>Count - {this.props.contactStore.contactsCount}</p>
      </div>
    )
  }
}

export default inject("contactStore")(observer(App));
