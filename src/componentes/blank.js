import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';

import { Container, Text } from 'react-native';

class Blank extends Component {
	render() {
		return ( 
			<Container >
				<Text>Blank Page
				</Text>
			</Container>
		);
	}
}

export default withNavigation(Blank);