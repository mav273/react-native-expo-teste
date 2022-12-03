import React, { useState,useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';

function App(){
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
      useEffect( () => {
      fetch('https://weather.contrateumdev.com.br/api/weather/city/?city=Recife,pernambuco')
      .then((response) => response.json())
        .then((json) => setData(json.main))
      .catch((error) => console.error(error))
    },[])

    return(
      <View style={styles.container}>
        <Image style={styles.image} source={require('./assets/download.png')}/>
        <Text id='texto'>Temperatura Recife,PE: {data.temp} °C</Text>
        <StatusBar style="auto" />
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
  },
});

export default App