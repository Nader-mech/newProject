import { View, Text, Image, ImageBackground, ScrollView, StatusBar , TouchableOpacity } from 'react-native';
import { heightScale, styles, widthScale } from '../styles/styles';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const firstWelcomeScreen = (props) => {
	return (
		<View style={styles.container}>
			<StatusBar hidden />
			<View style={styles.imageContainer}>
				<Image style={styles.image} resizeMode={'contain'} source={require('../assets/basket.png')} />
			</View>
			<View style={styles.bottomView}>
				<View style={styles.textHolder}>
					<Text style={styles.mainText}>Lorum ipsum</Text>
					<Text style={styles.secondaeyText}>
						Lorem ipsum dolor sit amet,consectetur adipiscing elit. Phasellus laoreet placerat elementum.
					</Text>
				</View>
				<View style={styles.paginationContainter}>
					<View style={styles.dotContainer}>
						<View style={{...styles.dot, backgroundColor:'#D95500'}} />
						<View style={styles.dot} />
						<View style={styles.dot} />
					</View>
					<TouchableOpacity  onPress={() => props.navigation.push('second')} style={styles.iconContainer}>
						<Icon name="arrow-forward-ios" size={widthScale('5%')} color="white" />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default firstWelcomeScreen;
