import React, { Component } from "react";
import ViewMoreText from "react-native-view-more-text";
import { StyleSheet, ScrollView, Linking, Platform, Image } from "react-native";
import {
  ListItem,
  Row,
  Container,
  Left,
  Right,
  Body,
  Header,
  Icon,
  View,
  Text,
  Button,
  Content,
  Accordion,
  Thumbnail
} from "native-base";
import {
  ScrollableTabView,
  ScrollableTabBar
} from "@valdio/react-native-scrollable-tabview";
import {
  FAB,
  IconButton,
  Paragraph,
  Dialog,
  Portal,
  TextInput,
  ActivityIndicator
} from "react-native-paper";
import { forceUtil, oauth, net } from "react-native-force";
import Timelinee from "./Timelinee";
import Enquiry from "./Enquiry";
import Booking from "./Booking";
import Quotation from "./Quotation";

var SharedPreferences = require("react-native-shared-preferences");

// const stack = createStackNavigator({
//      Enquiry : {screen : Enquiry},
//      Booking : {screen : Booking}
// })

// export default createAppNavigator(stack);

export default class Customer360 extends Component {
  owner_id;

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      enquiryId: props.route.params.enquiryId,
      ownerId: undefined,
      enquiryData: undefined /*{"totalSize":1,"done":true,"records":[{"attributes":{"type":"Opportunity","url":"/services/data/v46.0/sobjects/Opportunity/0065D0000054BN4QAM"},"Id":"0065D0000054BN4QAM","Name":"SUV","Account":{"attributes":{"type":"Account","url":"/services/data/v46.0/sobjects/Account/0015D00000d0ew9QAA"},"Name":"Amul"},"Dealer__r":null,"StageName":"Enquiry","Enquiry_Date__c":"2020-03-11T11:49:59.000+0000","Enquiry_Type__c":"FLD","Likely_Purchase__c":"GT45","Enquiry_Source__c":"TEV","Usage_Area__c":"City outskirt","Refer_By_Name__c":null,"Next_Action__c":"V","Enquiry_Number__c":"EN-0000000703","Existing_Customer__c":false,"DMS_Enquiry_Number__c":null,"Contact__r":{"attributes":{"type":"Contact","url":"/services/data/v46.0/sobjects/Contact/0035D00001IICFjQAP"},"Name":"Pranav surendra honmode mr","MobilePhone":"8668438983","Email":"pranav@mobigic.com","Salutation":"MR","Phone":"9890393945","Customer_Type__c":"IND","Age__c":"< 30 Yrs","Communicate_To__c":"OFC","Wedding_Anniversary_Date__c":"2020-05-14","MailingStreet":null,"MailingPostalCode":null,"Gender__c":"Male","Number_Of_Car_Owned__c":1,"Family_Size__c":4,"First_Time_User__c":false},"OpportunityLineItems":null,"Bookings__r":null,"Test_Drives__r":null,"Quotes":null,"Tasks":null}]}*/
    };
    // console.log("##########################");
    // console.log(this.state.fullData.Name);
    console.log(
      "#### This is the Enquiry Id : " + JSON.stringify(this.state.enquiryId)
    );
  }

  componentDidMount() {
    SharedPreferences.getItem(
      "OwnerId",
      function(value) {
        console.log("This is the value form index : " + value);
        this.setState({ ownerId: value });
      }.bind(this)
    );
  }

  componentDidUpdate() {
    if (
      this.state.enquiryId &&
      this.state.ownerId &&
      this.state.enquiryData == undefined
    ) {
      net.query(
        "SELECT Id, Name, Account.Name, Dealer__r.Name, StageName, Enquiry_Date__c, Enquiry_Type__c, Likely_Purchase__c, Enquiry_Source__c, Usage_Area__c, Refer_By_Name__c, Next_Action__c, Enquiry_Number__c, Existing_Customer__c, DMS_Enquiry_Number__c, Contact__r.Name, Contact__r.MobilePhone, Contact__r.Email, Contact__r.Salutation, Contact__r.Phone, Contact__r.Customer_Type__c, Contact__r.Age__c, Contact__r.Communicate_To__c, Contact__r.Wedding_Anniversary_Date__c, Contact__r.MailingStreet, Contact__r.MailingPostalCode, Contact__r.Gender__c, Contact__r.Number_Of_Car_Owned__c, Contact__r.Family_Size__c, Contact__r.First_Time_User__c, (SELECT ID, Product2Id, Product2.name, Product2.color__c, Product2.Vehicle_Model__c, Product2.Variant__c, Product2.Fuel_Type__c, Quantity, UnitPrice, TotalPrice, PricebookEntry.Name, PricebookEntry.Product2.Family FROM OpportunityLineItems), (SELECT ID, Name, Booking_Amount__c, Amount_Received__c, Booking_Date__c,Booking_Name__r.Name, Delivery_Locations__c FROM Bookings__r), (SELECT ID, Name, Stage__c, Start_Date_Time__c,Product__r.Name,Place__c, Enquiry_Id__r.Name FROM Test_Drives__r), (SELECT ID, Name, ExpirationDate FROM Quotes), (Select Id, Subject,Owner.Name,ActivityDate,Status, TaskSubtype from Tasks where IsClosed= false) FROM Opportunity WHERE OwnerId = '" +
          this.state.ownerId +
          "' AND Id = '" +
          this.state.enquiryId +
          "'",
        response => {
          this.setState({ enquiryData: response });
        },
        err => {
          console.log("************1");
          console.log(err);
        }
      );
    }
  }


  renderViewMore(onPress) {
    return (
      <Button small style={styles.showMoreButton} onPress={onPress}>
        <Text>show more</Text>
      </Button>
    );
  }

  renderViewLess(onPress) {
    return (
      <Button small style={styles.showLessButton} onPress={onPress}>
        <Text>show less</Text>
      </Button>
    );
  }
  // _onRefresh = (callback) => {
  //     networkRequest().then(response => callback(response))
  // }

  openAccordian = () => {
    return <Timelinee />;
  };

  //......Callback function for the phone call......

  makeCall = phone => {
    const phoneNumber = this.state.enquiryData.records[0].Contact__r.Phone;
    let phonenumber = "";
    if (Platform.OS === "android") {
      phonenumber = "tel:${" + phoneNumber + "}";
    } else {
      phonenumber = "telprompt:${" + phoneNumber + "}";
    }
    Linking.openURL(phonenumber);
  };
  //................................................

  render() {
    const EnquiryId = "1234";
    if (this.state.enquiryData) {
      console.log(JSON.stringify(this.state.enquiryData));
    }

    // const data = [];
    // data.push(this.state.fullData);
    // for(let i = 0; i < this.state.fullData.length; i++) {
    //   alert(JSON.stringify(this.state.fullData[i].Name));
    // } this is

    if (this.state.enquiryData) {
      //  Show complete view of the information that is contained in enquiry data

      let keys = Object.keys(this.state.enquiryData.records[0].Contact__r);

      console.log("=== " + keys);

      return (
        <Container>
          <Header style={styles.header}>
            <Left>
              <Button transparent>
                <Icon
                  name="md-arrow-back"
                  onPress={() => this.props.navigation.goBack()}
                />
              </Button>
            </Left>
            <Body>
              <Text style={{ color: "white" }}>
                {this.state.enquiryData.records[0].Contact__r.Name}
              </Text>
            </Body>
            <Right>
              <IconButton
                icon="phone"
                color="white"
                onPress={this.makeCall}
              ></IconButton>
            </Right>
          </Header>
          <Content>
            <View style={styles.collapse}>
              <ViewMoreText
                style={{ flex: 1 }}
                numberOfLines={2}
                renderViewMore={this.renderViewMore}
                renderViewLess={this.renderViewLess}
                // textStyle={{textAlign: 'center'}}
              >
                <Thumbnail source={require("../assets/user.jpeg")}></Thumbnail>

                <Text style={{ fontSize: 18 }}>
                  {"\t\t"}
                  {this.state.enquiryData.records[0].Contact__r.Name}
                  {"\n"}
                  {"\t\t\t\t\t\t\t"}
                  {"Id : " + this.state.enquiryData.records[0].Contact__r.Name}
                  {"\n\n"}
                  <Text style={{ flex: 1, fontSize: 15, minWidth: "100%" }}>
                    {keys.map((information, index) => {
                      if (
                        typeof this.state.enquiryData.records[0].Contact__r[
                          information
                        ] == "string"
                      )
                        return (
                          information.replace("__c", "").replace("_", " ") +
                          " : " +
                          this.state.enquiryData.records[0].Contact__r[
                            information
                          ] +
                          "\n"
                        );
                    })}
                  </Text>
                </Text>

                {/* <Text>
                  {"\n"}Registered Name : {HeaderName} {"\n"}
                  Customer Id : 32483 {"\n"}
                  Age : 80 {"\n"}
                  Phone Number : 1234567890 {"\n"}
                  Address : Akola
                </Text> */}
              </ViewMoreText>
            </View>
            <ScrollableTabView
              refreshControlStyle={{ backgroundColor: "red" }}
              // pullToRefresh={this._onRefresh}
              renderTabBar={() => <ScrollableTabBar />}
            >
              {this.state.enquiryData.records[0].OpportunityLineItems.records.map(
                (product, index) => {
                  return (
                    <ScrollView tabLabel={product.Product2.Name}>
                      <View>
                        <Timelinee />
                      </View>
                    </ScrollView>
                  );
                }
              )}
            </ScrollableTabView>
          </Content>
          <FAB.Group
            fabStyle={{ backgroundColor: "#e53144" }}
            open={this.state.open}
            actions={[
              {
                icon: "diving-flippers",
                label: "Create Enquiry",
                color: "#E31837",
                onPress: () => {
                  console.log("::::::::::::::::");
                  this.props.navigation.navigate("Enquiry");
                }
              },
              {
                icon: "diving-flippers",
                label: "Convert To Enquiry",
                color: "#E31837",
                onPress: () => {
                  this.props.navigation.navigate("ConvertToEnquiry");
                }
              },
              {
                icon: "diving-flippers",
                label: "Create Followup",
                color: "#E31837",
                onPress: () => {
                  this.props.navigation.navigate("CreateFollowup");
                }
              },
              {
                icon: "car",
                label: "Test Drive",
                color: "#E31837",
                onPress: () => {
                  this.props.navigation.navigate("TestDrive");
                }
              },
              {
                icon: "notebook",
                label: "Booking",
                color: "#E31837",
                onPress: () => {
                  this.props.navigation.navigate("Booking");
                }
              },
              {
                icon: "check",
                label: "Quotation",
                color: "#E31837",
                onPress: () => {
                  this.props.navigation.navigate("Quotation", {enquiryId : this.state.enquiryId});
                }
              },
              {
                icon: "plus-circle",
                label: "Add Product",
                color: "#E31837",
                onPress: () => {
                  this.props.navigation.navigate("AddProduct");
                }
              }
            ]}
            icon="plus"
            //  onPress={() => this.props.navigation.navigate('Registration')}
            onStateChange={({ open }) => this.setState({ open })}
            onPress={() => {
              if (this.state.open) {
                // do something if the speed dial is open
              }
            }}
          />
        </Container>
      );
    } else {
      //  Show loading... please wait.
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator color="#E31837" size="large" animating />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#E31837"
  },
  collapse: {
    marginLeft: 20
  },
  showMoreButton: {
    width: 140,
    justifyContent: "center",
    alignSelf: "flex-end",
    marginTop: 5,
    backgroundColor: "#e53144"
  },
  showLessButton: {
    width: 140,
    justifyContent: "center",
    alignSelf: "flex-end",
    marginTop: 5,
    backgroundColor: "#e53144"
  },
  CustomerName: {
    fontSize: 20,
    fontFamily: "sance-serif",
    fontWeight: "bold"
  }
});
