import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

export default class SearchBar extends Component {
  render() {
    return (
        <Header searchBar rounded style={{ backgroundColor :"#192060" }}>
          <Item >
            <Icon name="ios-search" />
            <Input placeholder="Game"/>
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      );
    }
  }