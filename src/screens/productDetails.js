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
import Carousel from 'react-native-banner-carousel';
import { inject, observer } from 'mobx-react';
import { makeObservable, observable, action, toJS, configure } from 'mobx';
import ProductComponent from '../components/productComponent';
import AntIcon from 'react-native-vector-icons/AntDesign';
import LineIcon from 'react-native-vector-icons/SimpleLineIcons';
import SubProductView from '../components/subProductComponent';

const productDetails = (props) => {
	const products = props.route.params.products;
    const [ tab, setTab ] = useState(1);
    const [ids , setIds]= useState([])

    const handleChecks = (id) => {
        let temp =[...ids]
        let newArr= [...temp , id]
         setIds(newArr)
    }
	props.navigation.setOptions({
		headerShown: false
	});
	return (
		<View style={styles.container}>
			<StatusBar hidden />
			<View style={styles.customHeader}>
				<ImageBackground
					style={styles.productDetailsback}
					resizeMode={'cover'}
					source={require('../assets/meat.png')}
				>
					<View style={styles.customHeaderView}>
						<TouchableOpacity onPress={() => props.navigation.goBack()} style={{ paddingHorizontal: widthScale('3%') }}>
							<LineIcon name="arrow-left" size={widthScale('5%')} color="white" />
						</TouchableOpacity>
						<View>
							<Text style={styles.detailsHeaderText}>{`${products[0].name} && ${products[1].name}`}</Text>
						</View>
						<View style={{ flexDirection: 'row' }}>
							<View style={{ paddingHorizontal: widthScale('1%') }}>
								<AntIcon name="search1" size={widthScale('6%')} color="white" />
							</View>
							<View style={{ paddingHorizontal: widthScale('1%') }}>
								<AntIcon name="shoppingcart" size={widthScale('6%')} color="white" />
							</View>
						</View>
						<View />
					</View>
				</ImageBackground>
			</View>
			<View style={styles.allCategory}>
				<View style={styles.tabsContainer}>
					<TouchableOpacity
						onPress={() => setTab(1)}
						style={{ ...styles.indTab, borderBottomColor: tab === 1 ? '#D95500' : '#c4c4c4' }}
					>
						<Text style={styles.categoryText}>{products[0].name}</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => setTab(2)}
						style={{ ...styles.indTab, borderBottomColor: tab === 2 ? '#D95500' : '#c4c4c4' }}
					>
						<Text style={styles.categoryText}>{products[1].name}</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.listsContainer}>
					<View style={styles.firstCategory}>
						<FlatList
							data={products[0].products}
							keyExtractor={(item) => item.id}
							renderItem={(itemData) => (
								<SubProductView
									onPress={() => {handleChecks(itemData.item.id)}}
									name={itemData.item.name}
									price={itemData.item.price}
									photo={itemData.item.product_img}
                                    weight={itemData.item.weight}
                                    navigate={() => props.navigation.push('cart', {item:itemData.item})}
                                    contain={ids.includes(itemData.item.id)}
								/>
							)}
						/>
					</View>
					<View style={styles.line} />
					<View style={styles.secondCategory}>
						<FlatList
							data={products[1].products}
							keyExtractor={(item) => item.id}
							renderItem={(itemData) => (
								<SubProductView
                                onPress={() => handleChecks(itemData.item.id)}
									name={itemData.item.name}
									price={itemData.item.price}
									photo={itemData.item.product_img}
                                    weight={itemData.item.weight}
                                    contain={ids.includes(itemData.item.id)}
                                    navigate={() => props.navigation.push('cart',{item:itemData.item})}
                                    
								/>
							)}
						/>
					</View>
				</View>
			</View>
			<View style={styles.sortView}>
				<View style={styles.childSortView}>
					<Text style={styles.sortText}>Sort by</Text>
				</View>
				<View style={styles.secondSortView}>
					<Text style={styles.sortText}>Filter</Text>
				</View>
			</View>
		</View>
	);
};

export default productDetails;
