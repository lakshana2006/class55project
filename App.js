import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Audio } from 'expo-av';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

class SoundButton extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync({
      uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'

    },
    {
      shouldPlay:true
    }
    );
  }

  render() {
    return(
      <TouchableOpacity style={{
        backgroundColor:'blue', 
        marginTop:10,
        borderRadius:100,
        alignItems:'center',
     }}onPress={this.playSound}>
      <Text style={{
        fontSize:20,
        fontWeight:'bold',
        }}>
         PRESS ME </Text>
      </TouchableOpacity>
    );

  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 200 }}>
        <SoundButton />
      </View>
    );
  }
}

class Sound2Button extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync({
      uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'

    },
    {
      shouldPlay:true
    }
    );
  }
  

  render() {
    return(
      <TouchableOpacity style={{
        backgroundColor:'green', 
        marginTop:30,
        borderRadius:100,
        alignItems:'center',
     }}onPress={this.playSound}>
      <Text style={{
        fontSize:20,
        fontWeight:'bold',
        }}>
         PRESS ME </Text>
      </TouchableOpacity>
    );

  }
}

export  class App2 extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 200 }}>
        <Sound2Button />
      </View>
    );
  }
}

class Sound3Button extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync({
      uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'

    },
    {
      shouldPlay:true
    }
    );
  }
  

  render() {
    return(
      <TouchableOpacity style={{
        backgroundColor:'pink', 
        marginTop:50,
        borderRadius:100,
        alignItems:'center',
     }}onPress={this.playSound}>
      <Text style={{
        fontSize:20,
        fontWeight:'bold',
        }}>
         PRESS ME </Text>
      </TouchableOpacity>
    );

  }
}

export  class App3 extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 200 }}>
        <Sound2Button />
      </View>
    );
  }
}

class Sound4Button extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync({
      uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'

    },
    {
      shouldPlay:true
    }
    );
  }
  

  render() {
    return(
      <TouchableOpacity style={{
        backgroundColor:'red', 
        marginTop:70,
        borderRadius:100,
        alignItems:'center',
     }}onPress={this.playSound}>
      <Text style={{
        fontSize:20,
        fontWeight:'bold',
        }}>
         PRESS ME </Text>
      </TouchableOpacity>
    );

  }
}

export  class App4 extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 200 }}>
        <Sound2Button />
      </View>
    );
  }
}
 
class Sound5Button extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync({
      uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'

    },
    {
      shouldPlay:true
    }
    );
  }
  

  render() {
    return(
      <TouchableOpacity style={{
        backgroundColor:'red', 
        marginTop:70,
        borderRadius:100,
        alignItems:'center',
     }}onPress={this.playSound}>
      <Text style={{
        fontSize:20,
        fontWeight:'bold',
        }}>
         PRESS ME </Text>
      </TouchableOpacity>
    );

  }
}

export  class App5 extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 200 }}>
        <Sound2Button />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
