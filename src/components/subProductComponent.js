import {
	View,
	Text,
	Image,
	ImageBackground,
	ScrollView,
	StatusBar,
	Button,
	TouchableOpacity,
	FlatList
} from 'react-native';
import { heightScale, styles, widthScale, poppinsBold } from '../styles/styles';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Carousel from 'react-native-banner-carousel';
import { inject, observer } from 'mobx-react';
import { makeObservable, observable, action, toJS, configure } from 'mobx';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const subProductComponent = (props) => {
	return (
		<TouchableWithoutFeedback onPress={props.navigate} style={styles.subProductView}>
			<View>
				<Image source={{ uri: props.photo }} style={styles.subProductImage} resizeMode={'cover'} />
			</View>
			<View style={styles.subProductTextContaimer}>
				<Text style={{...styles.subPrdouctTexe, fontFamily:poppinsBold}}>{props.name}</Text>
				<Text style={styles.subPrdouctTexe}>{props.weight}</Text>
                <View style={{flexDirection:'row' , width:widthScale('42%'), justifyContent:'space-between'}}>

				<Text style={styles.subPrdouctTexe}>{props.price}</Text>
                <TouchableOpacity onPress={props.onPress}>
                {props.contain ?   <AntIcon  name={'checkcircle'} size={widthScale('5%')} color={'#D95500'} /> : <AntIcon  name={'pluscircle'} size={widthScale('5%')} color={'#c4c4c4'} />}
                </TouchableOpacity>

                </View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default subProductComponent;
