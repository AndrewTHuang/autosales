import React from 'react';
import styles from '../styles/components/Button.scss';

export default class Button extends React.Component {
  render() {
    const style = {
      color: this.props.color
    };

    return (
      <button style={style} className={this.props.className}> { this.props.text } </button>
    );
  }
}
