import React from 'react';
import IOSIcon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView, Button } from 'react-native';

export default class Leaderboard extends React.Component {

	// TODO: implement AJAX requests
	filterBySteps = () => this.props.navigation.navigate('');
	filterByDistance = () => this.props.navigation.navigate('');
	filterByCalories = () => this.props.navigation.navigate('');
	filterBySpeed = () => this.props.navigation.navigate('');

    render() {
    	return (
    	 <LinearGradient colors={['#00A7E1', '#1985CF', '#3066BE']} 
      style={styles.container}>
        <View style = {styles.top}>
        <View style={styles.icon}>
            <Icon2 style={styles.iconBar} name="bars" size={30} color="#FDFFFF"/>
        </View>
        <Text style = {styles.signIn}>Leaderboard</Text>
        </View>
            
            
	    	<ScrollView contentContainerStyle={{flexGrow:1}}>
	    	   <FlatList
			        data={[
			            {rank: 1, name: 'Devin', steps: '8574', distance: '57', calories: '3453', speed: '5'},
			            {rank: 2, name: 'Jackson',steps: '2342', distance: '23', calories: '4564', speed: '6'},
			            {rank: 3, name: 'James', steps: '3453', distance: '34', calories: '1456', speed: '8'},
			            {rank: 4, name: 'Joel', steps: '4564', distance: '67', calories: '1456', speed: '4'},
			            {rank: 5, name: 'John', steps: '2452', distance: '32', calories: '1456', speed: '6'},
			            {rank: 6, name: 'Jillian', steps: '9786', distance: '65', calories: '1234', speed: '5'},
			            {rank: 7, name: 'Jimmy', steps: '765', distance: '67', calories: '1234', speed: '4'},
			            {rank: 8, name: 'Julie', steps: '3433', distance: '13', calories: '1765', speed: '3'},
			        ]}

			        renderItem={({item}) => 
			          <View style={styles.buttonContainer} key={item.rank}>
			          		<View key={Math.random().toString()}>
				          		<View style={styles.user}>
                                <View style={styles.usernameContainer}>
									<Text style={styles.username}>{item.rank}. {item.name}</Text>
					          	</View>
					          		<Image source={require('./userimage.jpg')} style={styles.imageCircle}/>
					          	
				          		<View>
				          			<Text style={styles.result}>Steps:{item.steps}</Text>
				          			<Text style={styles.result}>Distance:{item.distance}</Text>
				          			<Text style={styles.result}>Calories:{item.calories}</Text>
				          		</View>
                                    </View>	
			          		</View>
				      </View>
				  }
				  keyExtractor={(item, index) => index.toString()}
				  />
                  //DONT REMOVE
                  <View style={styles.buttonContainer}/>
	    	</ScrollView>
            
	      <View style={styles.footer}>
		      <TouchableOpacity style={styles.tab}>
		      	  <Text style={styles.category}>STEPS</Text>
		      	  <Text style={styles.iconFooter}><Icon name="counter" size={25}/></Text>
		      </TouchableOpacity>
		        
		        <TouchableOpacity style={styles.tab}>
		          <Text style={styles.category}>DISTANCE</Text>
		          <Text style={styles.iconFooter}><Icon name="vector-radius" size={25}/></Text>
		        </TouchableOpacity>

		        <TouchableOpacity style={styles.tab}>
		          <Text style={styles.category}>CALORIES</Text>
		          <Text style={styles.iconFooter}><IOSIcon name="md-heart" size={25}/></Text>
		        </TouchableOpacity>

		        <TouchableOpacity style={styles.tab}>
		          <Text style={styles.category}>SPEED</Text>
		          <Text style={styles.iconFooter}><Icon1 name="directions-run" size={25}/></Text>
		        </TouchableOpacity>
	      </View>

    	</LinearGradient>
    	);
    }
}