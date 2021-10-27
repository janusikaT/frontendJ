import React, { Component } from 'react';
import {Button,Card} from 'react-bootstrap'
class AddToCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div>
          <Card>
        <Button onClick={this.IncrementItem}>add</Button>
        <Button onClick={this.DecreaseItem}>delete</Button>
        <Button onClick={this.ToggleClick}>
          { this.state.show ? 'Hide number' : 'Show number' }
        </Button>
        { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
        </Card>
      </div>
    );
  }
}

export default AddToCart;