import React, { Component } from 'react';
import { Input, Icon, Button } from 'native-base';
import { Search, Container } from './styled';

export default class SearchBar extends Component {
  render() {
    return (
        <Container>
            <Button transparent >
                <Icon name="ios-menu" />
            </Button>
            <Search style={{ fixed :"top"}}>
                <Icon name="ios-search" />
                <Input placeholder="Game" style={{ maxHeight: 40, alignContent: 'center'}}/>
            </Search>
        </Container>
      );
    }
  }