// import React, { Component } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import Enquiry from "../screens/Enquiry";
// import Booking from "../screens/Booking";
// import QuickEnquiry from "../screens/QuickEnquiry";
// import AddProduct from "../screens/AddProduct";
// import Quotation from "../screens/Quotation";
// import ConvertToEnquiry from "../screens/ConvertToEnquiry";
// import TestDrive from "../screens/TestDrive";
// import CreateFollowup from "../screens/CreateFollowup";
// import Customer360 from "../screens/Customer360";
// import Timelinee from "../screens/Timelinee";
// import Home from "../screens/Home";
// // import Enquiry from '../screens/Enquiry';
// // import Enquiry from '../screens/Enquiry';
// // import Enquiry from '../screens/Enquiry';
// // import Enquiry from '../screens/Enquiry';

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// function Stackk() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Enquiry" component={Enquiry} />
//       <Stack.Screen name="Booking" component={Booking} />
//       <Stack.Screen name="QuickEnquiry" component={QuickEnquiry} />
//       <Stack.Screen name="ConvertToEnquiry" component={ConvertToEnquiry} />
//       <Stack.Screen name="Quotation" component={Quotation} />
//       <Stack.Screen name="TestDrive" component={TestDrive} />
//       <Stack.Screen name="CreateFollowup" component={CreateFollowup} />
//       <Stack.Screen name="AddProduct" component={AddProduct} />
//     </Stack.Navigator>
//   );
// }

// function Stack1() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={Home}/>
//       <Stack.Screen name="Customer360" component={Customer360} />
//       <Stack.Screen name="Enquiry" component={Enquiry} />
//       <Stack.Screen name="Booking" component={Booking} />
//       <Stack.Screen name="QuickEnquiry" component={QuickEnquiry} />
//       <Stack.Screen name="ConvertToEnquiry" component={ConvertToEnquiry} />
//       <Stack.Screen name="Quotation" component={Quotation} />
//       <Stack.Screen name="TestDrive" component={TestDrive} />
//       <Stack.Screen name="CreateFollowup" component={CreateFollowup} />
//       <Stack.Screen name="AddProduct" component={AddProduct} />
//     </Stack.Navigator>
//   );
// }

// export default class App extends Component {
//   render() {
//     return (
//       <NavigationContainer>
//         <Drawer.Navigator>

//         <Drawer.Screen name="Home" component={Stack1} />
//           <Drawer.Screen name="Customer360" component={Stackk} />
//           <Drawer.Screen name="TimeLine" component={Timelinee} />
//         </Drawer.Navigator>
//       </NavigationContainer>
//     );
//   }
// }

import React, { Component } from "react";
import { Text } from "react-native-paper";
import Home from "../screens/Home";
import Customer360 from "../screens/Customer360";
import CalenderView from "../screens/CalenderView";
import Enquiry from "../screens/Enquiry";
import Booking from "../screens/Booking";
import DashboardGridLayout from "../screens/DashboardGridLayout";
import DashboardTestDriveGridLayout from "../screens/DashboardTestDriveGridLayout";
import Quotation from "../screens/Quotation";
import ConvertToEnquiry from "../screens/ConvertToEnquiry";
import AddProduct from "../screens/AddProduct";
import TestDrive from "../screens/TestDrive";
import QuickEnquiry from "../screens/QuickEnquiry";
import CreateFollowup from "../screens/CreateFollowup";

// import { AppContainer, createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createDrawerNavigator } from 'react-navigation-drawer'
import { View, Container } from "native-base";
import { Image, AppState, Platform } from "react-native";
// import { createStackNavigator } from 'react-navigation-stack';
// import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchResultMoreThanOne from "../screens/SearchResultMoreThanOne";

import { smartstore, forceUtil } from "react-native-force";
import { querySoup } from "react-native-force/src/react.force.smartstore";

const soupExists = forceUtil.promiser(smartstore.soupExists);
const registerSoup = forceUtil.promiser(smartstore.registerSoup);


// class Hidden extends React.Component {
//   render() {
//     return null;
//   }
// }

// const MyDrawer = createDrawerNavigator({
//   Home: { screen: Home, navigationOptions : {} },
//   Login: { screen: Login, navigationOptions: { drawerLockMode: 'locked-closed' } },
//   Registration: { screen: Registration, navigationOptions: { drawerLabel: <Hidden /> } },
//   Customer360: { screen: Customer360, navigationOptions: { drawerLockMode: 'locked-closed' } },
//   CalenderView: { screen: CalenderView, navigationOptions: { drawerLockMode: 'locked-closed' } },
//   //   Enquiry : { screen : Enquiry, navigationOptions : { drawerLabel : <Hidden/>}},
//   //   Booking : { screen : Booking, navigationOptions : { drawerLabel : <Hidden/>}}
// },
//   {
//     drawerBackgroundColor: '#E5E8E8',
//     contentOptions:
//     {
//       activeTintColor: 'white', activeBackgroundColor: '#5920CB',
//     }
//   })

// const StackNavigation1 = createStackNavigator({
//   Enquiry: { screen: Enquiry, navigationOptions: { header: null } },
//   Booking: { screen: Booking, navigationOptions: { header: null } },
//   ConvertToEnquiry : { screen : ConvertToEnquiry, navigationOptions: { header: null } },
//   AddProduct : { screen : AddProduct, navigationOptions: { header: null } },
//   TestDrive : { screen : TestDrive, navigationOptions: { header: null } },
//   CreateFollowup : { screen : CreateFollowup, navigationOptions: { header: null } },
//   Quotation : { screen : Quotation, navigationOptions: { header: null } },
// })

// const StackNavigation2 = createStackNavigator({
//   DashboardTestDriveGridLayout : { screen : DashboardTestDriveGridLayout }
// })

// const MySwitchNavigator = createSwitchNavigator({
//   Home: { screen: MyDrawer },
//   Customer360: { screen : StackNavigation1 },
//   // DashboardGridLayout : { screen : StackNavigation2 }
// })

// const Stack = createStackNavigator();

// function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="Notifications" component={Notifications} />
//       <Stack.Screen name="Profile" component={Profile} />
//       <Stack.Screen name="Settings" component={Settings} />
//     </Stack.Navigator>
//   );
// }

//   Registration : { screen : Registration },
// })

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function soupInitialization() {

    querySoup(false,
        'opportunity',
        'SELECT Id from opportunity',
        (data) => {
            console.log('soup queried = ' + JSON.stringify(data));
        },
        (err) => {
            console.log('soup query failed = ' + JSON.stringify(err));
        })
    //  Opportunity Soup
    soupExists(false, 
        'opportunity', 
        (data) => {
            console.log('soup exists = ' + data);
            if(data == false) {
                registerSoup(
                    false,
                    "opportunity",
                    [
                      { path: "Id", type: "string" },
                      { path: "Name", type: "full_text" },
                      { path: "StageName", type: "full_text" },
                      { path: "AccountId", type: "full_text" },
                      { path: "Enquiry_Date__c", type: "full_text" },
                      { path: "Enquiry_Type__c", type: "full_text" },
                      { path: "Enquiry_Source__c", type: "full_text" },
                      { path: "Usage_Area__c", type: "full_text" },
                      { path: "Likely_Purchase__c", type: "full_text" },
                      { path: "Prospect_Type__c", type: "full_text" },
                      { path: "Enquiry_Source__c", type: "full_text" },
    
                      { path: "__local__", type: "string" },
                      { path: "__locally_created__", type: "string" },
                      { path: "__locally_updated__", type: "string" },
                      { path: "__locally_deleted__", type: "string" },
                    ],
                    (data) => {
                        console.log('soup created success = ' + data);
                    },
                    (err) => {
                        console.log('soup register failed = ' + err);
                        alert('Unable to initialize, kindly retry again !');
                    }
                );
            }
        }, 
        (err) => {
            console.log('soup exists err = ' + err);
            alert('Unable to initialize, kindly retry again !')
        }
    );
}

function StackData() {
  return (
    <Stack.Navigator headerMode="float">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Customer360"
        component={Customer360}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Enquiry"
        component={Enquiry}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Booking"
        component={Booking}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ConvertToEnquiry"
        component={ConvertToEnquiry}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddProduct"
        component={AddProduct}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TestDrive"
        component={TestDrive}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateFollowup"
        component={CreateFollowup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Quotation"
        component={Quotation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchResultMoreThanOne"
        component={SearchResultMoreThanOne}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function Stack1() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchResultMoreThanOne"
        component={SearchResultMoreThanOne}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Enquiry"
        component={Enquiry}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
}

export default class App extends Component {
  componentDidMount() {
    // AppState.addEventListener("change", state => alert("opened"));
    soupInitialization();
  }

  render() {
    // const MyNavigator = createAppContainer(MySwitchNavigator);
    return (
      // <Container>
      //   <MyNavigator />
      // </Container>
      <NavigationContainer>
        <Drawer.Navigator drawerType="back" overlayColor="black">
          <Drawer.Screen name="Home" component={StackData} />
          <Drawer.Screen
            name="Calender View"
            component={CalenderView}
            options={{ gestureEnabled: false }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}