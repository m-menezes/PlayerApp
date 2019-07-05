import React, { Component } from 'react';
import Api from '~/services/api';
import { withNavigation } from 'react-navigation';

import { ActivityIndicator, View, ScrollView, Text, TouchableHighlight } from 'react-native';

import { Strong, ColText, ColNumber, Container, TopItems, Number } from './styles';


class AllPlatformPage extends Component {
    static navigationOptions = ({ navigation }) => {
        const title = 'All Platforms';
        return {
            title: title,
        };
    };
    
    constructor(props) {
        super(props);
        this.state = { isLoading: true };
        this.getDados();
    };
    

	async getDados() {
		// Get Details
		Api.defaults.params = { fields: 'name; limit 50; ' };
        const response = await Api.post('/platforms' );
		this.setState({
            isLoading: false,
			dataSource: response.data,
		});
    };
    lapsList() {
        return this.state.dataSource.map((data, index) => {
            return (
                <View key={index + 1}>
                    <TouchableHighlight key={index + 1} onPress={ () => this.props.navigation.navigate( 'PlatformPage', { platformId: data.id, platformName: data.name} ) } >
                        <TopItems >
                            <ColNumber>
                                <Number>{index + 1}</Number>
                            </ColNumber>
                            <ColText>
                                <Strong>{data.name}</Strong>
                            </ColText>
                        </TopItems>
                    </TouchableHighlight>
                </View>
            )
        });
    }

	render() {
		if (this.state.isLoading) {
			return (
				<Container>
					<View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
						<ActivityIndicator />
					</View>
				</Container>
			);
		}
		return ( 
			<Container>
				<ScrollView>
                    { this.lapsList() }
                </ScrollView>
			</Container>
		);
	}
}
export default withNavigation(AllPlatformPage);