import { View, Text , Pressable, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'


const CustomButton = ({onPress,text, container, type="PRIMARY", center, posts}) => {
  return (
    <TouchableOpacity style={[styles[`container_${container}`], styles[`container_${type}`],styles[`container_${center}`], styles[`container_${posts}`] ]} activeOpacity={0.4} 
    onPress={onPress} >
    <Text style={[styles.input,styles[`input_${type}`], styles[`container_${center}`] ]}>{text}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    container_BTN:{
       // width:'85%',
        marginLeft:"8%",
        marginRight:"8%",
        height:55,
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center",
    },
    input:{
        color:"#fff",
        fontSize:20,
        fontWeight:"bold",
        
    },
    container_PRIMARY:{
        backgroundColor:"#880808",
        marginBottom:"9%",
        
    },
    container_TERTIARY:{
        alignItems:"flex-end",
        marginTop:"-8%",
        marginBottom:"6%",
    },
    input_TERTIARY:{
        color:"#880808",
        fontSize:17,
        fontWeight:"normal",
    },
    container_CENTER:{
        alignItems:"center",
        fontSize:18,
        fontWeight:"bold"
    },
    container_POSTS:{
        width:"25%",
        height:45,
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center",
    }
})

export default CustomButton