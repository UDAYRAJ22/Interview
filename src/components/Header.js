import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {fontSize, colors} from '../config/constants'
import Entypo from 'react-native-vector-icons/Entypo'

const Header = ({title, isBack, isMenu}) =>{
    return(
        <View style={styles.headerBar}>
            <View>
                { isBack && (<TouchableOpacity activeOpacity={0.7} style={{backgroundColor:colors.white, width:30, height:30, borderRadius:15, justifyContent:'center', alignItems:'center'}}>
                    <Entypo name="chevron-left" size={30} color={colors.primary}/>
                </TouchableOpacity>) }
            </View>
            <View>
                <Text style={styles.headerTitle}>{title}</Text>
            </View>
            <View>
                {isMenu && <Entypo name="menu" size={30} color={colors.white}/>}
            </View>
        </View>
    )
}
export default Header

const styles = StyleSheet.create({
    headerBar : {
        flexDirection:'row',
        height:45,
        maxHeight:45,
        alignItems:"center",
        justifyContent:'space-between',
        backgroundColor:colors.primary,
        paddingHorizontal:15,
    },
    headerTitle : {
        fontSize:fontSize.size18,
        color:colors.white
    }
})