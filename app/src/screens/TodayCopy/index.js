import React from 'react';
import PropTypes from 'prop-types';
import {  View, Text,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';


export default class Today extends React.PureComponent {

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
	<LinearGradient colors={['#00A7E1', '#1985CF', '#3066BE']}
      style={styles.container}>
        <View style = {styles.top}>
        <View style={styles.icon}>
            <Icon1 style={styles.iconBar} name="bars" size={30} color="#FDFFFF"/>
        </View>
        <Text style = {styles.signIn}>Today's activity</Text>
        </View>
		<LinearGradient colors={['#FFB97A', '#FFB97A', '#00A7E1']}  style={styles.circle}>
        <LinearGradient  colors={['#1788D0', '#2378C8', '#2A6EC2']} style = {styles.innerCircle}>
			<View>
				<Text style={styles.activityTitle}>Today's Steps  </Text>
				<Text style={styles.activityText}>7170</Text>
			</View>

			<View >
				<Text style={styles.stats}>
					<Icon1 style={styles.iconCircle} name="road" size={20}/>
					<Text style={styles.iconCircle}>1.2km </Text>
                    <Text style = {styles.transperent}>a </Text>
					<Icon1 style={styles.iconCircle, {paddingLeft:10}} name="fire" size={20}/>
					<Text style={styles.iconCircle}>530kcal</Text>
				</Text>

				<Text style={styles.stats}>
					<Icon style={styles.iconCircle} name="speedometer" size={20}/>
					<Text style={styles.iconCircle}>8.3km/h</Text>
				</Text>
			</View>
        </LinearGradient>
		</LinearGradient>

		<View style={styles.progress}>
	        <View style ={styles.progressTab}>
	          <Text style={styles.data}>+31 steps ꜛ</Text>
	          <Text style ={styles.text}>from yesterday</Text>
	        </View>
	        <View style ={styles.progressTab}>
	          <Text style={styles.text}>Better than</Text>
	          <Text style ={styles.data}>84%</Text>
	          <Text style ={styles.text}>of today's </Text>
	          <Text style ={styles.text}>active users</Text>
	        </View>
	        <View style ={styles.progressTab}>
	          <Text style={styles.data}>10 000 steps</Text>
	          <Text style={styles.text}>today's goal</Text>
	        </View>
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
