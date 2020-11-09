import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, TouchableHighlight, View, SafeAreaView, Image, Button, Platform } from 'react-native';


const Login = ({ navigation }) => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={text => setUsername(text)}
            value={username}
            />
            <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            value={password}
            />
          <Button color="#fff" buttonStyle={{backgroundColor: 'red'}} title="Submit" onPress={() => navigation.navigate('Home')} />
      </View>
      
      <StatusBar style="auto" />
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Platform.OS === "android" ? 20 : 0,
    },
    view: { 
        backgroundColor: 'dodgerblue',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        height: 40,
        backgroundColor: 'white', 
        borderColor: '#0000001A', 
        borderWidth: 1,
        width: '50%',
        marginBottom: 20,
        padding: 20,
    }
  });

export default Login;