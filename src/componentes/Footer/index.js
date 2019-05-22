import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';
export default class FooterTabsIconTextExample extends Component {
  render() {
    return (
        <Footer>
          <FooterTab>
            <Button vertical active>
              <Icon active type="FontAwesome" name="home" />
              <Text>Inicio</Text>
            </Button>
            <Button vertical>
              <Icon  type="FontAwesome" name="search" />
              <Text>Busca</Text>
            </Button>
            <Button vertical>
              <Icon  type="AntDesign" name="profile" />
              <Text>Histórico</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}