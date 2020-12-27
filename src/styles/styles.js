import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native';
export const widthScale = wp;
export const heightScale = hp;
export const poppinsRegular = 'Poppins-Regular';
export const poppinsMeduim = 'Poppins-Meduim';
export const poppinsBold = 'Poppins-Bold';
export const poppinsLight = 'Poppins-Light';


export const styles = StyleSheet.create({
	container: {
		width: widthScale('100%'),
		height: heightScale('100%')
	},
	imageContainer: {
		width: widthScale('100%'),
		height: heightScale('55%'),
		alignItems: 'center',
		justifyContent: 'flex-end',
		backgroundColor: 'white'
	},
	image: {
		width: widthScale('50%'),
		height: heightScale('30%')
	},
	textHolder: {
		height: heightScale('35%'),
		width: widthScale('80%'),
		alignItems: 'center',
		backgroundColor: 'white',
		paddingVertical: heightScale('8%'),
		justifyContent: 'space-around'
	},
	mainText: {
		fontFamily: poppinsMeduim,
		fontSize: widthScale('8%')
	},
	secondaeyText: {
		fontFamily: poppinsRegular,
		fontSize: widthScale('4%'),
		textAlign: 'center'
	},
	bottomView: {
		height: heightScale('45%'),
		width: widthScale('100%'),
		alignItems: 'center',
		backgroundColor: 'white'
	},
	paginationContainter: {
		width: widthScale('85%'),
		height: heightScale('10%'),
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end'
	},
	iconContainer: {
		width: widthScale('12%'),
		height: widthScale('12%'),
		borderRadius: widthScale('6%'),
		backgroundColor: '#D95500',
		alignItems: 'center',
		justifyContent: 'center'
	},
	dot: {
		width: widthScale('3.5%'),
		height: widthScale('3.5%'),
		borderRadius: widthScale('1.7%'),
		backgroundColor: 'white',
		borderColor: '#D95500',
		borderWidth: 2
	},
	dotContainer: {
		flexDirection: 'row',
		width: widthScale('15%'),
		justifyContent: 'space-between',
		marginRight: widthScale('21%')
	},
	yesImage: {
		width: widthScale('40%'),
		height: heightScale('20%')
	},
	startButton: {
		backgroundColor: '#D95500',
		borderRadius: widthScale('6%'),
		width: widthScale('23%'),
		height: heightScale('6.5%'),
		alignItems: 'center',
		justifyContent: 'center'
	},
	startText: {
		color: 'white',
		fontFamily: poppinsMeduim,
		fontSize: widthScale('3.5%')
	},
	rowHolder: {
		width: widthScale('48%'),
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	iconHolder: {
		flexDirection: 'row',
		paddingHorizontal: widthScale('3%'),
		width: widthScale('25%'),
		justifyContent: 'space-around'
	},
	paginationDot: {
		width: widthScale('3%'),
		height: widthScale('3%'),
		borderRadius: widthScale('1.5%'),
		borderColor: '#D95500'
	},
	productsView: {
		marginVertical: heightScale('1%'),
		width: widthScale('90%'),
		alignSelf: 'center'
	},
	productComponentView: {
		width: widthScale('45%'),
		height: heightScale('23%'),
		marginHorizontal: widthScale('1%')
	},
	backImage: {
		width: widthScale('45%'),
		height: heightScale('25%'),
		paddingBottom: heightScale('1%'),
		justifyContent: 'flex-end'
	},
	backImageText: {
		color: 'white',
		fontFamily: poppinsRegular,
		fontSize: widthScale('5%'),
		alignSelf: 'center'
	},
	bannerView: {
		width: widthScale('90%'),
		alignSelf: 'center'
	},
	bannerBack: {
		width: widthScale('90%'),
		height: heightScale('10%')
	},
	bannerTextView: {
		width: widthScale('40%'),
		height: heightScale('10%'),
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'flex-start'
	},
	bannerText: {
		color: 'black',
		fontFamily: poppinsMeduim,
		fontSize: widthScale('5%')
	},
	customHeader: {
		width: widthScale('100%'),
		height: heightScale('40'),
		alignItems: 'center',
		justifyContent: 'center'
	},
	productDetailsback: {
		width: widthScale('100%'),
		height: heightScale('40')
	},
	customHeaderView: {
		flexDirection: 'row',
		width: widthScale('95%'),
		alignSelf: 'center',
		marginVertical: heightScale('2%'),
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	detailsHeaderText: {
		fontFamily: poppinsRegular,
		fontSize: widthScale('6%'),
		color: 'white'
	},
	listsContainer: {
		width: widthScale('100%'),
		height: heightScale('48%'),
		flexDirection: 'row'
	},
	firstCategory: {
		height: heightScale('48%'),
		width: widthScale('49.5%'),
		marginTop: heightScale('1%')
	},
	secondCategory: {
		height: heightScale('48%'),
		width: widthScale('49.5%'),
		marginTop: heightScale('1%')
	},
	line: {
		borderWidth: 1,
		borderColor: '#E4E4E4'
	},
	tabsContainer: {
		height: heightScale('7%'),
		width: widthScale('100%'),
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	allCategory: {
		height: heightScale('50%'),
		width: widthScale('100%')
	},
	categoryText: {
		fontSize: widthScale('5%'),
		fontFamily: poppinsRegular
	},
	indTab: {
		paddingBottom: widthScale('3%'),
		borderBottomWidth: 1,
		borderBottomColor: '#D95500',
		alignItems: 'center',
		justifyContent: 'center',
		width: widthScale('30%')
	},
	subProductView: {
		height: heightScale('25%'),
		width: widthScale('49.5%'),
		borderBottomWidth: 1,
		borderBottomColor: '#c4c4c4'
	},
	subProductImage: {
		width: widthScale('49.5%'),
		height: heightScale('15%')
	},
	subProductTextContaimer: {
		height: heightScale('10%'),
		width: widthScale('45%'),
		paddingHorizontal: widthScale('1.5%')
	},
	subPrdouctTexe: {
		fontFamily: poppinsRegular,
		fontSize: widthScale('3.4%')
	},
	sortView: {
		height: heightScale('7%'),
		width: widthScale('100%'),
		backgroundColor: '#D95500',
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: heightScale('3%')
	},
	childSortView: {
		width: widthScale('50%'),
		backgroundColor: '#D95500',
		alignItems: 'center',
		justifyContent: 'center'
	},
	secondSortView: {
		width: widthScale('50%'),
		backgroundColor: '#D95500',
		alignItems: 'center',
		justifyContent: 'center'
	},
	sortText: {
		color: 'white',
		fontSize: widthScale('6%'),
		fontFamily: poppinsMeduim
	},
	cartTextsContainer: {
		height: heightScale('15%'),
		justifyContent: 'space-between',
		alignSelf: 'center',
		marginTop: heightScale('3%'),
		alignItems:'center'
	},
	nameText:{
	fontFamily:poppinsMeduim ,
	fontSize:widthScale('6%')
	},
	weightText:{
		fontFamily:poppinsLight,
		fontSize:widthScale('6%')
	},
	priceText:{
		fontFamily:poppinsLight ,
		fontSize:widthScale('8%')
	},
	classView:{
		flexDirection: 'row',
						alignItems: 'center',
						width: widthScale('50%'),
						justifyContent: 'space-around',
						marginTop: heightScale('3%')
	},
	classView2:{
		width: widthScale('20%'),
		height: heightScale('5%'),
		alignItems: 'center',
		justifyContent: 'space-around',
		borderWidth: 1,
		flexDirection: 'row',
		borderColor: '#c4c4c4',
		borderRadius: widthScale('1%')
	},
	classView3:{
		flexDirection: 'row',
		alignItems: 'center',
		width: widthScale('50%'),
		justifyContent: 'space-around',
		marginTop: heightScale('2%')
	},
	classView4:{
		width: widthScale('20%'),
		height: heightScale('5%'),
		alignItems: 'center',
		justifyContent: 'space-around',
		flexDirection: 'row',
		borderColor: '#c4c4c4',
		borderRadius: widthScale('1%')
	},
	classView5:{
		width: widthScale('90%'),
						alignSelf: 'center',
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: '#D95500',
						height: heightScale('6%'),
						marginVertical: heightScale('1%'),
						borderRadius:widthScale('4%')
	}
});
