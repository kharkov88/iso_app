import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router';

export default class extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Menu>
          <Menu.Item as={Link} to={'/'}
            name='home'
            fixed='right'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
              Home
          </Menu.Item>

          <Menu.Item as={Link} to={'/shop'}
            className='link-shop'
            name='shop'
            active={activeItem === 'shop'}
            onClick={this.handleItemClick}
          >
              Shop
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
