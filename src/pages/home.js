import React, { Component } from 'react';
import {DrawerNavigator,TabNavigator,StackNavigator,NavigationActions} from "react-navigation"
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Icon,
} from 'react-native';

import Perfil from './Perfil';
import Configuration from './Configuration';
import Exit from './Exit';
import HeaderComponent from '../components/HeaderComponent/index'; 
/*const Drawer=DrawerNavigator({
    Perfil:{
        screen: Perfil
    },
    Configuration:{
        screen: Configuration
    }
},
{
    navigationOptions:{
        headerStyle:{
            backgroundColor: "red",
        },
        headerTintColor: "#fff",
    }
},
 {
    headerMode: 'screen'
})
export default Drawer*/

/*const PerfilStack = StackNavigator(
    {
      Perfil: {
        screen: Perfil,
      }
    }
  );
  
const ConfigurationStack = StackNavigator(
    {
      Configuration: {
        screen: Configuration,
      }
    }
  );
  
  const AppNavigator = DrawerNavigator({
    Perfil: {
      name: 'PerfilStack',
      screen: PerfilStack,
    },
    Configuration: {
      name: 'ConfigurationStack',
      screen: ConfigurationStack,
    }
  });

  export default AppNavigator*/

/*const AppDrawerNavigation = DrawerNavigator({

    Perfil: {
      screen: Perfil,
       navigationOptions: {
        drawerLabel: 'Home'
        }
    },
    Configuration: {
      screen: Configuration,
    },

  },
  {
   navigationOptions: {
    headerMode: 'none'
  },
  drawerPosition: 'left',
  drawerWidth: 200,
  contentOptions: {
    activeTintColor :'#ffffff',
    inactiveTintColor :'#1999CE',
    activeBackgroundColor :'#1999CE',
    inactiveBackgroundColor :'#ffffff',
  }
}
);

const Application = StackNavigator({
    Perfil: {screen:Perfil},
    Configuration: {screen:Configuration},
    },{
        navigationOptions:{
            activeTintColor :'red',
            inactiveTintColor :'red',
            activeBackgroundColor :'red',
            inactiveBackgroundColor :'red',
        }
  });

export default Application*/
/*
const MyApp = new DrawerNavigator({
	Perfil: {
        screen: Perfil,
	},
	Exit: {
		screen: Exit,
	},
});

const MenuButton = (
	<View>
		<TouchableOpacity onPress={() => { this.props.navigate('DrawerOpen') } }>
			<Icon name="bars" style={{color: 'white', padding: 10, marginLeft:10, fontSize: 20}}/>
		</TouchableOpacity>
	</View>
);

const AppNavigator = new StackNavigator({
    Main:{
        screen: MyApp,
        navigationOptions: {
			headerVisible: true,
		},
    },
	Perfil: {
        screen: Perfil,

	},
    Exit: {
		screen: Exit,
	},
},{
	navigationOptions: {
		title: 'Dr. Lucas',
        headerTintColor : 'black',
        headerVisible: true,
        //headerTitleStyle : style.title,
		//headerStyle : style.header,
        //headerLeft: <Icon name="bars" style={{color: 'white', padding: 10, marginLeft:10, fontSize: 20}}/>,
        //{ navigate }) => ({
        //    headerLeft : MenuButton,
        //}),
	},
});
*/
class Home extends React.Component{
    render(){
        return(
            <View>
               <HeaderComponent/>
            </View>
        );
    }
}
export default Home;