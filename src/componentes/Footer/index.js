import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';

import { Footer, FooterTab, Button, Icon, Text } from 'native-base';

class FooterComponent extends Component {
    render() {
        return (
            <Footer  style={{ backgroundColor :"#192060" }}>
                <FooterTab>
                    <Button vertical onPress={ () => navigation.navigate('Home')}>
                        <Icon type="FontAwesome" name="home" />
                        <Text>Inicio</Text>
                    </Button>
                    <Button vertical onPress={ () => navigation.navigate('Search')}>
                        <Icon  type="FontAwesome" name="search" />
                        <Text>Busca</Text>
                    </Button>
                    <Button vertical onPress={ () => navigation.navigate('SingleGame')}>
                        <Icon  type="AntDesign" name="profile" />
                        <Text>Histórico</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}
export default withNavigation(FooterComponent);