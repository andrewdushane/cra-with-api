import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadMessage } from '../actions/example';

export class Container extends Component {

  componentDidMount() {
    if (!this.props.message) {
      this.props.loadMessage();
    }
  }

  render() {
    return (
      <div>
        {this.props.message}
      </div>
    );
  } 
}
    
const mapStateToProps = ({ example }) => ({
  message: example.message,
});

export default connect(mapStateToProps, { loadMessage })(Container);
