import React, {useState} from 'react'
import {View, Image,Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import { colors, fontSize } from '../config/constants'
import {CommonActions} from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Login = (props) =>{
    const [emailAddress, setEmailAddress] = useState("")
    const [password, setPassword] = useState("")

    const doLogin = () =>{
        // props.navigation.navigate('Home')
        props.navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [ { name: 'Home' } ],
            })
          );
    }

    return(
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Image
                    source={require('../images/bookIcon.jpg')}
                    style={{width:150, height:130, resizeMode:'cover', alignSelf:'center', marginBottom:20}}
                />
                <Text style={styles.label}>E-Mail Address</Text>
                <View style={styles.textInputView}>
                    <AntDesign name='mail' size={20} color={colors.primary}/>
                    <TextInput
                        style={styles.textInputText}
                        keyboardType='email-address'
                        autoCapitalize='none'
                        autoCorrect={false}
                        value={emailAddress}
                        onChangeText={(value)=>{setEmailAddress(value)}}
                    />
                </View>
                <Text style={styles.label}>Password</Text>
                <View style={styles.textInputView}>
                    <AntDesign name='lock' size={20} color={colors.primary}/>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.textInputText}
                        keyboardType='default'
                        autoCapitalize='none'
                        autoCorrect={false}
                        value={password}
                        onChangeText={(value)=>{setPassword(value)}}
                    />
                </View>
                <Text style={[styles.label,{alignSelf:'flex-end', marginTop:5}]}>Forgot Password?</Text>
                <TouchableOpacity 
                    onPress={doLogin}
                    style={styles.buttonView}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'flex-start',
        marginHorizontal:25,
    },
    label:{
        fontSize:fontSize.size14,
        color:colors.purpleLight
    },
    textInputView:{
        alignItems:'center',
        flexDirection:'row',
        width:'100%',
        paddingLeft:10,
        marginVertical:10,
        borderRadius:10,
        borderWidth:0.5,
        borderColor:colors.primary
    },
    textInputText:{
        width:'100%',
        fontSize:fontSize.size14,
        color:colors.primary,
    },
    buttonView:{
        width:'90%',
        marginTop:10,
        alignSelf:'center',
        paddingVertical:12,
        borderRadius:5,
        backgroundColor: colors.primary,
    },
    buttonText:{
        color:colors.white,
        textAlign:'center',
        fontSize:fontSize.size18,
    }
})

export default Login