import { View, Text, ScrollView, StyleSheet,TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import Country from './Country'

export default function Countries() {
    const [countries,setCountries]=useState([]);
    const [searched,setSearched]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>{
            setSearched(data)
            setCountries(data)})
    },[])
    const handleSearched=text=>{
        const filtred=countries.filter(country=>country.name.common.includes(text));
        setSearched(filtred)
    }
  return (
    <View>
      <Text style={styles.header}>Countries:{searched.length}</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleSearched}
      />
      <ScrollView>
        {searched.map(country=><Country country={country}></Country>)}
      </ScrollView>
    </View>
    
  )
}
const styles=StyleSheet.create({
    header:{
        marginTop:50,
        fontSize:20,
        color:"red",
        textAlign:'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
    
})