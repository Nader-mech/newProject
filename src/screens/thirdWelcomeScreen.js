import { View, Text, Image, ImageBackground, ScrollView, StatusBar , Button, TouchableOpacity} from 'react-native';
import { heightScale, styles, widthScale } from '../styles/styles';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const thirdWelcomeScreen = (props) => {
	return (
		<View style={styles.container}>
			<StatusBar hidden />
			<View style={styles.imageContainer}>
				<Image style={styles.yesImage} resizeMode={'contain'} source={require('../assets/yes.png')} />
			</View>
			<View style={styles.bottomView}>
				<View style={styles.textHolder}>
					<Text style={styles.mainText}>Lorum ipsum</Text>
					<Text style={styles.secondaeyText}>
						Lorem ipsum dolor sit amet,consectetur adipiscing elit. Phasellus laoreet placerat elementum.
					</Text>
				</View>
				<View style={{ ...styles.paginationContainter, justifyContent: 'space-between' }}>
					<TouchableOpacity  onPress={()=> props.navigation.goBack()} style={styles.iconContainer}>
						<Icon name="arrow-back-ios" size={widthScale('5%')} color="white" />
					</TouchableOpacity>
                    <View style={styles.rowHolder}>
                    <View style={{ ...styles.dotContainer, marginRight: widthScale('0%') }}>
						<View style={styles.dot} />
						<View  style={styles.dot} />
						<View style={{ ...styles.dot, backgroundColor: '#D95500' }}  />
					</View>
					<TouchableOpacity  onPress={() => props.navigation.push('app')} style={styles.startButton} >
                      <Text style={styles.startText}>Get started</Text>
                    </TouchableOpacity>
                    </View>
					
				</View>
			</View>
		</View>
	);
};

export default thirdWelcomeScreen;
