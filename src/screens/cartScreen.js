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
import { heightScale, poppinsLight, styles, widthScale, poppinsRegular, poppinsMeduim } from '../styles/styles';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Carousel from 'react-native-banner-carousel';
import { inject, observer } from 'mobx-react';
import { makeObservable, observable, action, toJS, configure } from 'mobx';
import ProductComponent from '../components/productComponent';
import AntIcon from 'react-native-vector-icons/AntDesign';
import LineIcon from 'react-native-vector-icons/SimpleLineIcons';
import SubProductView from '../components/subProductComponent';

const cartScreen = (props) => {
	const item = props.route.params.item;
	const [ count, setCount ] = useState(1);
	const countHandler = () => {
		if(count ===1){
			return
		}
		setCount(count-1)
	}

	props.navigation.setOptions({
		headerShown: false
	});
	return (
		<View style={styles.container}>
			<StatusBar hidden />
			<View style={{ ...styles.customHeader, backgroundColor: 'white' }}>
				<View style={styles.customHeaderView}>
					<TouchableOpacity onPress={() => props.navigation.goBack()} style={{ paddingHorizontal: widthScale('3%') }}>
						<LineIcon name="arrow-left" size={widthScale('5%')} color="#0086b3" />
					</TouchableOpacity>
					<View>
						<Text style={{ ...styles.detailsHeaderText, color: '#0086b3' }}>{`Lorum ipsum`}</Text>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<View style={{ paddingHorizontal: widthScale('1%') }}>
							<AntIcon name="search1" size={widthScale('6%')} color="#0086b3" />
						</View>
						<View style={{ paddingHorizontal: widthScale('1%') }}>
							<AntIcon name="shoppingcart" size={widthScale('6%')} color="#0086b3" />
						</View>
					</View>
					<View />
				</View>
				<Image
					style={{ ...styles.productDetailsback, height: heightScale('30%') }}
					resizeMode={'cover'}
					source={{ uri: item.product_img }}
				/>
			</View>
			<View style={styles.cartTextsContainer}>
				<Text style={styles.nameText}>{item.name}</Text>
				<Text style={styles.weightText}>{item.weight}</Text>
				<Text style={styles.priceText}>{item.price}</Text>
			</View>
			<View>
				<View
					style={styles.classView}
				>
					<Text style={styles.nameText}>Qty</Text>
					<View
						style={styles.classView2}
					>
						<TouchableOpacity onPress={() => countHandler()}>
							<AntIcon name={'minus'} size={widthScale('4%')} color={'black'} />
						</TouchableOpacity>

						<Text>{count}</Text>
						<TouchableOpacity onPress={() => setCount(count + 1)}>
							<AntIcon name={'plus'} size={widthScale('4%')} color={'black'} />
						</TouchableOpacity>
					</View>
				</View>
				<View
					style={styles.classView3}
				>
					<Text style={styles.nameText}>Total</Text>
					<View
						style={styles.classView4}
					>
						<Text style={{ ...styles.nameText, color: '#D95500' }}>{count * item.price.split('L')[0]}</Text>
					</View>
				</View>
				<View style={{ width: widthScale('90%'), alignSelf: 'center', marginTop: heightScale('2%') }}>
					<Text style={{ fontSize: widthScale('4%'), fontFamily: poppinsRegular, color: '#C1C1C1' }}>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
						ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
					</Text>
				</View>
				<TouchableOpacity
					style={styles.classView5}
				>
					<Text style={{ fontFamily: poppinsMeduim, color: 'white', fontSize: widthScale('5%') }}>
						ADD TO CART
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default cartScreen;
