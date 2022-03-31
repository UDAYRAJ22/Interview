import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { colors, fontSize } from '../config/constants'
import Entypo from 'react-native-vector-icons/Entypo'

const TaskItemView = ({taskItem}) =>{
    return(
        <View style={styles.taskItemView}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={styles.taskId}>#{taskItem.item.id}</Text>
                <View style={{width:30, height:30, borderRadius:15, backgroundColor: taskItem.item.status=='active'?colors.green:colors.tomato, justifyContent:'center', alignItems:'center'}}>
                    <Entypo name="check" size={20} color={colors.white}/>
                </View>
            </View>
            <Text style={styles.userName}>{taskItem.item.name}</Text>
            <Text style={{marginVertical:3}}>E- Mail Id : <Text style={styles.userEmail}>{taskItem.item.email}</Text></Text>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{marginVertical:3, marginLeft:10}}>Gender : <Text style={styles.userEmail}>{taskItem.item.gender}</Text></Text>
                <Text style={{marginVertical:3}}>Status : <Text style={[styles.userEmail,{textTransform:'capitalize', color: taskItem.item.status=='active' ? colors.green :colors.tomato}]}>{taskItem.item.status}</Text></Text>
            </View>
        </View>
    )
}
export default TaskItemView
const styles = StyleSheet.create({
    taskItemView:{
        padding:5,
        paddingHorizontal:10,
        marginVertical:10,
        borderRadius:10,
        backgroundColor:colors.greyLight,
    },
    taskId:{
        fontSize:fontSize.size16,
        color:colors.primary,
        fontWeight:'bold'
    },
    userName:{
        fontSize:fontSize.size18,
        color:colors.black,
        fontWeight:'bold',
        textTransform:'capitalize',
        marginVertical:7,
    },
    userEmail:{
        fontSize:fontSize.size14,
        color:colors.black,
    },
})