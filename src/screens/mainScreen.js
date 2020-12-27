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
import { heightScale, styles, widthScale } from '../styles/styles';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Carousel from 'react-native-banner-carousel';
import { inject, observer } from 'mobx-react';
import { makeObservable, observable, action, toJS, configure } from 'mobx';
import ProductComponent from '../components/productComponent';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const images = [ require('../assets/slider.png'), require('../assets/slider.png'), require('../assets/slider.png') ];

const mainScreen = (props) => {
	const { products, getProducts } = props.store;
	const navigateProps = toJS(products)
    
	useEffect(
		() => {
			const getData = async () => {
				await getProducts();

			};
			getData();
		},
		[ getProducts ]
	);

	const renderImage = (image, index) => {
		return (
			<View key={index}>
				<Image
					style={{ width: widthScale('100%'), height: heightScale('30%') }}
					resizeMode={'cover'}
					source={image}
				/>
			</View>
		);
	};

	props.navigation.setOptions({
		headerTitle: '',
		headerLeft: () => (
			<TouchableOpacity style={{ paddingHorizontal: widthScale('3%') }}>
				<Icon name="menu" size={widthScale('6%')} color="#0086b3" />
			</TouchableOpacity>
		),
		headerRight: () => (
			<View style={styles.iconHolder}>
				<AntIcon name="search1" size={widthScale('6%')} color="#0086b3" />
				<AntIcon name="shoppingcart" size={widthScale('6%')} color="#0086b3" />
			</View>
		)
	});
	return (
		<View style={styles.container}>
			<StatusBar hidden />
			<Carousel
				activePageIndicatorStyle={{ backgroundColor: '#D95500', borderColor: '#D95500' }}
				pageIndicatorStyle={{ backgroundColor: 'white', borderColor: 'D95500' }}
				autoplay
				autoplayTimeout={5000}
				index={0}
				pageSize={widthScale('100%')}
			>
				{images.map((image, index) => renderImage(image, index))}
			</Carousel>
			<ScrollView>
				<TouchableWithoutFeedback onPress={() => props.navigation.push('details', {products:(navigateProps.slice(0, 2))})} style={styles.productsView}>
					<FlatList
						data={products.slice(0, 2)}
						horizontal
						keyExtractor={(item) => item.id}
						renderItem={(itemData) => (
							<ProductComponent name={itemData.item.name} photo={itemData.item.category_img} />
						)}
					/>
				</TouchableWithoutFeedback>
				<View style={styles.bannerView}>
					<ImageBackground
						style={styles.bannerBack}
						resizeMode={'cover'}
						source={require('../assets/pinbanner.png')}
					>
						<View style={styles.bannerTextView}>
							<Text style={styles.bannerText}>lorum ipsum</Text>
						</View>
					</ImageBackground>
				</View>
				<TouchableWithoutFeedback onPress={() => props.navigation.push('details', {products:navigateProps.slice(2, 4)})} style={styles.productsView}>
					<FlatList
						data={products.slice(2, 4)}
						horizontal
						keyExtractor={(item) => item.id}
						renderItem={(itemData) => (
							<ProductComponent name={itemData.item.name} photo={itemData.item.category_img} />
						)}
					/>
				</TouchableWithoutFeedback>
			</ScrollView>
		</View>
	);
};

export default inject('store')(observer(mainScreen));
