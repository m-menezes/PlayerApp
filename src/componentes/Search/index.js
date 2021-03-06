import React, { Component } from 'react';

import { withNavigation } from 'react-navigation';
import { TextInput } from 'react-native';
import { Header, Item, Icon } from 'native-base';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: '',
        };
        this.search = this.props.navigation.getParam('search', null);
    }
    
    SubmitSearch = ({nativeEvent: {text}}) => {
        if(text !== ''){
            if( this.props.navigation.state.routeName === "Search"){
                this.props.navigation.push('Search', { 
                    search: text,
                });
            } else {
                this.props.navigation.navigate('Search', { 
                    search: text,
                });
            }
        }
    }
    
	render() {
		return ( 
            <Header searchBar rounded style={{ backgroundColor :"#192060" }}>
                <Item >
                    <Icon name="ios-search" />
                    <TextInput
                        placeholder="Search"
                        onSubmitEditing={ this.SubmitSearch }
                        style={{flex:1}}
                        defaultValue = { this.search }
                    />
                </Item>
            </Header>
		);
	}
}

export default withNavigation(SearchBar);