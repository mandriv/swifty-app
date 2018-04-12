import React from 'react';
import PropTypes from 'prop-types';
import {  View, Text,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

export default class Today extends React.PureComponent {

  render() {
    return (
	<LinearGradient colors={['#00A7E1', '#1985CF', '#3066BE']} 
      style={styles.container}>
        <View style = {styles.top}>
        <View style={styles.icon}>
            <Icon1 style={styles.iconBar} name="bars" size={30} color="#FDFFFF"/>
        </View>
        <Text style = {styles.signIn}>Settings</Text>
        </View>
		<View style={styles.circle}>
			<View style={styles.stats}>
				<Text style={styles.activityTitle}>Today's Steps</Text>
				<Text style={styles.activityText}>7170</Text>
			</View>

			<View style={styles.stats}>
				<Text style={styles.stats}>
					<Icon1 name="road" size={20}/>
					<Text style={styles.icon}>1.2km</Text>
					<Icon1 style={styles.icon} name="fire" size={20}/>
					<Text style={styles.icon}>530kcal</Text>
				</Text>

				<Text style={styles.stats}>
					<Icon style={styles.icon} name="speedometer" size={20}/>
					<Text style={styles.icon}>8.3km/h</Text>
				</Text>
			</View>
		</View>

		<View style={styles.progress}>
	        <View style ={styles.progressTab}>
	          <Text style={styles.data}>+31</Text>
	          <Text style={styles.text}>steps</Text>
	          <Text style ={styles.text}>from yesterday</Text>
	        </View>
	        <View style ={styles.progressTab}>
	          <Text style={styles.text}>Better than</Text>
	          <Text style ={styles.data}>84%</Text>
	          <Text style ={styles.text}>of today's </Text>
	          <Text style ={styles.text}>active users</Text>
	        </View>
	        <View style ={styles.progressTab}>
	          <Text style={styles.data}>10000</Text>
	          <Text style={styles.text}>steps</Text>
	          <Text style={styles.text}>today's goal</Text>
	        </View>
		</View>
			      
		<View style={styles.footer}>
			<TouchableOpacity style={styles.bottomTab}>
			<Text style={styles.icon}><Icon2 name="md-walk" size={25}/></Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.bottomTab}>
			<Text style={styles.icon}><Icon1 name="road" size={25}/></Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.bottomTab}>
			<Text style={styles.icon}><Icon1 name="fire" size={25}/></Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.bottomTab}>
			<Text style={styles.icon}><Icon name="speedometer" size={25}/></Text>
			</TouchableOpacity>
		</View>
	</LinearGradient>
    );
  }
}