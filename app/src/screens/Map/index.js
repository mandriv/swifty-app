import React from 'react';
import PropTypes from 'prop-types';
import {  View, Text,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';


export default class Map extends React.PureComponent {

  render() {
    return (
	<LinearGradient colors={['#00A7E1', '#1985CF', '#3066BE']} 
      style={styles.container}>
        
        <View style = {styles.top}>
        <View style={styles.icon}>
            <Icon1 style={styles.iconBar} name="bars" size={30} color="#FDFFFF"/>
        </View>
        <Text style = {styles.signIn}>Map</Text>
        </View>
			      
		<View style={styles.footer}>
			<TouchableOpacity style={styles.bottomTab}>
			<Text style={styles.iconCircle}><Icon2 name="md-walk" size={25}/></Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.bottomTab}>
			<Text style={styles.iconCircle}><Icon1 name="road" size={25}/></Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.bottomTab}>
			<Text style={styles.iconCircle}><Icon1 name="fire" size={25}/></Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.bottomTab}>
			<Text style={styles.iconCircle}><Icon name="speedometer" size={25}/></Text>
			</TouchableOpacity>
		</View>
	</LinearGradient>
    );
  }
}