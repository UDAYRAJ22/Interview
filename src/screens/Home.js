import React, {useEffect, useState} from 'react'
import {View, FlatList, StyleSheet, RefreshControl} from 'react-native'
import Header from '../components/Header'
import { BASE_URI, colors } from '../config/constants'
import TaskItemView from '../components/TaskItemView'

const Home = () =>{
    const [tasks, setTasks]=useState()
    const [refresh, setRefresh] = useState(false)

    useEffect(()=>{
        getData()
    }, [])

    const getData = async() =>{
        setRefresh(true)
        try{
            const response = await fetch(BASE_URI);
            const json = await response.json();
            // console.log("resp====> "+JSON.stringify(json.data))
            setTasks(json.data)
        }catch (error){
            console.log("Error - "+error)
        }        
        setRefresh(false)
    }

    return(
        <View style={styles.mainContainer}>
            <Header title="Tasks" isBack={true} isMenu={true}/>
            <View style={styles.container}>
                <FlatList
                    data={tasks}
                    extraData={tasks}
                    keyExtractor={(item, index)=>index.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={(item, index)=><TaskItemView taskItem = {item}/>}
                    refreshControl={
                        <RefreshControl
                            refreshing={refresh}
                            onRefresh={()=>{getData()}}
                        />
                    }
                />
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:colors.white,
    },
    container:{
        flex:1,
        marginHorizontal:15,
    },
})