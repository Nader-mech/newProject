import { View, Text, Image, ImageBackground, ScrollView, StatusBar, Button, TouchableOpacity , FlatList } from 'react-native';
import { heightScale, styles, widthScale } from '../styles/styles';
import React,{useEffect , useState} from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Carousel from 'react-native-banner-carousel';
import { inject, observer } from "mobx-react";
import { makeObservable , observable, action, toJS , configure } from "mobx";



const productComponent = props  => {
    return(
        <View style={styles.productComponentView}>
            <ImageBackground resizeMode={'cover'} source={{uri:props.photo}} style={styles.backImage}>
             <Text style={styles.backImageText}>{props.name}</Text>
            </ImageBackground>
        </View>
    )
}



export default productComponent