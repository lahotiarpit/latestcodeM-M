import React, { Component } from "react";
import {
  Text,
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  TextInput,
  RadioButton,
  Appbar
} from "react-native-paper";
import {
  Container,
  View,
  Header,
  Icon,
  Left,
  Body,
  DatePicker,
  Picker,
  Label,
  Row,
  Right
} from "native-base";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import { StyleSheet, BackHandler, Alert } from "react-native";

import { smartstore, mobilesync, forceUtil } from "react-native-force";
import { syncUp } from "react-native-force/src/react.force.mobilesync";
import enquiryPickList from "../PicklistHelpers/EnquiryPickListHelper";
import enquiryProduct2PickListHelper from '../PicklistHelpers/EnquiryProduct2PickListHelper';

const upsertSoupEntries = forceUtil.promiser(smartstore.upsertSoupEntries);

const MAX_CALENDAR_DAYS = 30 * 24 * 60 * 60 * 1000;

class Enquiry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDate: new Date(),
      checked: "first",
      FirstName: "",
      LastName: "",
      Age: "",
      ReferByName: "",
      MobileNumber: "",
      ReferralMobileNumber: "",
      Enquirytype: "",
      EnquirySource: "",
      LikelyPurchase: "",
      Quantity: "",
      next: false,
      UsageArea: "",
      ProductName: "",
      Variant: "",
      Color: "",
      FuelType: "",
      SeatCapacity: "",
      TransmissionType: "",
      isValid: false,
      errors: false,
      EnquiryType: "",
      ProspectType: "",
      State: "",
      City: "",
      PostalCode: "",
      Country: "",
      Street: ""
    };

    // .....FOR FOCUSING TO NEXT TEXTINPUT.....

    this.GotoFirstName = React.createRef();
    this.GoToLastName = React.createRef();
    this.GoToAge = React.createRef();
    this.GoToMobileNumber = React.createRef();
    this.GoToReferByName = React.createRef();
    this.GoToReferralMobileNumber = React.createRef();
    this.GoToLastName = React.createRef();
    this.GoToEnquiryDate = React.createRef();
    this.GoToEnquiryType = React.createRef();
    this.GoToEnquirySource = React.createRef();
    this.Street = React.createRef();
    this.State = React.createRef();
    this.City = React.createRef();
    this.Country = React.createRef();
    this.PostalCode = React.createRef();
    // .....BIND THE DATE TO THE SETDATE OBJECT.....

    this.setDate = this.setDate.bind(this);

    // HANDELING HARDWARE BACK BUTTON CONTROL

    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

    // ................................................
  }

  // HANDELING HARDWARE BACK BUTTON CONTROL

  // componentDidMount() {
  //   const fieldlist = ["Name","StageName","Enquiry_Date__c","Enquiry_Type__c","Enquiry_Source__c","Usage_Area__c","Likely_Purchase__c","Prospect_Type__c"
  //   ];

  //   syncUp(false, {}, 'opportunity', {mergeMode: [mobilesync.MERGE_MODE.OVERWRITE], fieldlist}).then(() => {
  //     console.log('syncup done');
  //   });
  // }

  componentWillMount() {
    BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
  }

  componentWillUnmount() {
    BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
  }

  handleBackButtonClick() {
    this.props.navigation.navigate("Home");
    return true;
  }
  // ----------------------------------------------------------

  DropdownUsageArea(value) {
    this.setState({
      UsageArea: value
    });
  }

  DropdownLikelyPurchase(value) {
    this.setState({
      LikelyPurchase: value
    });
  }

  DropdownProductName(value) {
    this.setState({
      ProductName: value
    });
  }
  DropdownVariant(value) {
    this.setState({
      Variant: value
    });
  }
  DropdownColor(value) {
    this.setState({
      Color: value
    });
  }
  DropdownFueltype(value) {
    this.setState({
      FuelType: value
    });
  }
  DropdownSeatCapacity(value) {
    this.setState({
      SeatCapacity: value
    });
  }
  DropdownTransmissionType(value) {
    this.setState({
      TransmissionType: value
    });
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  DropdownEnquiryType(value) {
    this.setState({
      EnquiryType: value
    });
  }

  DropdownProspectType(value) {
    this.setState({
      ProspectType: value
    });
  }

  DropdownEnquirySource(value) {
    this.setState({
      EnquirySource: value
    });
  }

  // .....VALIDATION PART.....

  onEnquirySubmit = () => {
    // if (this.state.FirstName == "") {
    //   alert("First name is blank goto step 1");
    // } else if (this.state.LastName == "") {
    //   alert("Last name is black goto step 1");
    // } else if (!this.state.Age) {
    //   alert("age must be between 20 - 100 goto step 1");
    // }
    // else if (this.state.MobileNumber.length < 10) {
    //   alert("Mobile number must be 10 digits goto step 1");
    // } else if (this.state.Enquirytype == "") {
    //   alert("Enquiry type is blank goto step 2");
    // } else if (this.state.EnquirySource == "") {
    //   alert("Enquiry source is blank goto step 2");
    // } else if (this.state.LikelyPurchase == "") {
    //   alert("Blank field likely purchase goto step 2");
    // } else {
    //   //this.props.navigation.navigate("Home");
    //   createNewEnquiry();
    // }
    this.createNewEnquiry();
    //  Add to soup here
  };

  createNewEnquiry = () => {
    let new_enquiry = {
      Name: 'Arpit New Opportunity',
      AccountId : '0015D00000d0ew9QAA',
      ContactId : '0035D00001IICFjQAP',
      StageName: 'Enquiry',
      Enquiry_Date__c: '2020-03-19',
      CloseDate : '2020-06-19',
      Enquiry_Type__c: 'Field',
      Enquiry_Source__c: 'DSA',
      Usage_Area__c: 'City outskirt',
      Likely_Purchase__c: '15-45 days',
      Prospect_Type__c: 'Commercial',
      attributes: {type: 'Opportunity'},
      __local__: true,
      __locally_created__: true,
      __locally_updated__: false,
      __locally_deleted__: false
    };

    console.log("Enquiry form : " + JSON.stringify(new_enquiry));

    const fieldlist = [
      "Name",
      "AccountId",
      "ContactId",
      "StageName",
      "Enquiry_Date__c",
      "CloseDate",
      "Enquiry_Type__c",
      "Enquiry_Source__c",
      "Usage_Area__c",
      "Likely_Purchase__c",
      "Prospect_Type__c"
    ];

    // const target = "SELECT * from opportunity";
    // smartstore.querySoup(
    //   false,
    //   "opportunity",
    //   target,
    //   (data) => {
    //     console.log("query soup result : " + JSON.stringify(data));
    //   },
    //   (err) => {
    //     console.log("Error in query soup");
    //     console.log(JSON.stringify(err));
    //   }
    // );

    upsertSoupEntries(
      false,
      "opportunity",
      [new_enquiry],
      data => {
        console.log("Upsert success = " + JSON.stringify(data))
        syncUp(false, {}, "opportunity", {
          mergeMode: mobilesync.MERGE_MODE.OVERWRITE,
          fieldlist
        }, 'Test8', (s)=>{console.log(JSON.stringify(s)); console.log('sync success');}, 
          (e)=>{console.log(JSON.stringify(e)); console.log('sync fail');});
      },
      err => {
        console.log("################");
        console.log("Upsert fail = " + err);
      }
    );
  };

  render() {
    const { checked } = this.state;
    const data = enquiryPickList();
    const productData = enquiryProduct2PickListHelper();
    console.log("Enquiry Json Feilds : " + JSON.stringify(productData));
    // console.log("okay===================================" + data);

    return (
      <View style={styles.EnquiryOverallView}>
        <Header style={{ backgroundColor: "#E31837" }}>
          <Left>
            <Button
              transparent
              style={{ backgroundColor: "#E31837" }}
              onPress={() => this.props.navigation.goBack()}
            >
              <Icon name="md-arrow-back" style={{ color: "white" }} />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "white", fontFamily : 'barlow', fontWeight : 'bold' }}>Enquiry</Title>
          </Body>
          <Right />
        </Header>
        <ProgressSteps
          disabledStepNumColor="black"
          style={styles.ProgressSteps}
        >
          <ProgressStep label="User Details">
            {/* <Card style={{ alignItems: 'center', marginRight: 10, marginLeft: 10, shadowColor: '#cccccc', shadowRadius: 10 }}> */}
            <View>
              <View
                style={{
                  borderWidth: 1,
                  margin: "5%",
                  borderColor: "#00000000",
                  borderRadius: 10,
                  elevation: 1,
                  backgroundColor: "#E3DFCE"
                }}
              >
                <View style={{ border: 20, margin: 20 }}>
                  <Row style={{ alignItems: "center" }}>
                    <RadioButton
                      color="black"
                      value="second"
                      status={checked === "first" ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: "first" });
                      }}
                    />
                    <Label>Mr</Label>

                    <RadioButton
                      color="black"
                      value="second"
                      status={checked === "second" ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: "second" });
                      }}
                    />
                    <Label>Mrs</Label>

                    <RadioButton
                      color="black"
                      value="second"
                      status={checked === "third" ? "checked" : "unchecked"}
                      onPress={() => {
                        this.setState({ checked: "third" });
                      }}
                    />
                    <Label>Ms</Label>
                  </Row>
                  <TextInput
                    style={styles.inputs}
                    type="outlined"
                    label="Name"
                    value={this.state.FirstName}
                    onChangeText={FirstName => this.setState({ FirstName })}
                    mode="outlined"
                    returnKeyType="next"
                    ref={this.GotoFirstName}
                    onSubmitEditing={() => this.GoToAge.current.focus()}
                    blurOnSubmit={false}
                    theme={{
                      colors: {
                        primary: "#272727",
                        underlineColor: "transparent"
                      }
                    }}
                  />
                  {/* <TextInput
                    style={styles.inputs}
                    type="outlined"
                    label="Last Name"
                    value={this.state.LastName}
                    onChangeText={LastName => this.setState({ LastName })}
                    mode="outlined"
                    returnKeyType="next"
                    ref={this.GoToLastName}
                    onSubmitEditing={() => this.GoToAge.current.focus()}
                    blurOnSubmit={false}
                    theme={{
                      colors: {
                        primary: "#272727",
                        underlineColor: "transparent"
                      }
                    }}
                  /> */}
                  <TextInput
                    style={styles.inputs}
                    type="outlined"
                    label="Age"
                    value={this.state.Age}
                    onChangeText={Age => this.setState({ Age })}
                    mode="outlined"
                    keyboardType="number-pad"
                    returnKeyType="next"
                    maxLength={3}
                    ref={this.GoToAge}
                    onSubmitEditing={() => this.GoToReferByName.current.focus()}
                    blurOnSubmit={false}
                    theme={{
                      colors: {
                        primary: "#272727",
                        underlineColor: "transparent"
                      }
                    }}
                  />
                  <TextInput
                    style={styles.inputs}
                    type="outlined"
                    label="Email"
                    value={this.state.ReferByName}
                    onChangeText={ReferByName => this.setState({ ReferByName })}
                    mode="outlined"
                    returnKeyType="next"
                    keyboardType="email-address"
                    ref={this.GoToReferByName}
                    blurOnSubmit={false}
                    onSubmitEditing={() =>
                      this.GoToMobileNumber.current.focus()
                    }
                    theme={{
                      colors: {
                        primary: "#272727",
                        underlineColor: "transparent"
                      }
                    }}
                  />
                  <TextInput
                    style={styles.inputs}
                    type="outlined"
                    label="Mobile Number"
                    value={this.state.MobileNumber}
                    onChangeText={MobileNumber =>
                      this.setState({ MobileNumber })
                    }
                    mode="outlined"
                    keyboardType="number-pad"
                    maxLength={10}
                    returnKeyType="next"
                    ref={this.GoToMobileNumber}
                    blurOnSubmit={false}
                    theme={{
                      colors: {
                        primary: "#272727",
                        underlineColor: "transparent"
                      }
                    }}
                  />
                  {/* <TextInput
                    style={styles.inputs}
                    type="outlined"
                    label="Referral Mobile Number"
                    value={this.state.ReferralMobileNumber}
                    onChangeText={ReferralMobileNumber =>
                      this.setState({ ReferralMobileNumber })
                    }
                    mode="outlined"
                    keyboardType="number-pad"
                    maxLength={10}
                    ref={this.GoToReferralMobileNumber}
                  /> */}
                </View>
              </View>
            </View>
            {/* </Card> */}
          </ProgressStep>
          <ProgressStep label="Address">
            <View style={styles.EnquiryProgressStepForUser}>
              <View
                style={{
                  borderWidth: 1,
                  margin: "5%",
                  borderColor: "#00000000",
                  borderRadius: 10,
                  elevation: 1,
                  backgroundColor: "#E3DFCE"
                }}
              >
                <View style={{ border: 20, margin: 20 }}>
                  <TextInput
                    style={styles.inputs}
                    type="outlined"
                    label="Street"
                    value={this.state.EnquirySource}
                    onChangeText={EnquirySource =>
                      this.setState({ EnquirySource })
                    }
                    ref={this.GoToStreet}
                    onSubmitEditing={() => this.City.current.focus()}
                    mode="outlined"
                    returnKeyType="next"
                    blurOnSubmit={false}
                    theme={{
                      colors: {
                        primary: "#272727",
                        underlineColor: "transparent"
                      }
                    }}
                  />

                  <TextInput
                    style={styles.inputs}
                    type="outlined"
                    label="City"
                    value={this.state.City}
                    onChangeText={City => this.setState({ City })}
                    mode="outlined"
                    returnKeyType="next"
                    ref={this.City}
                    onSubmitEditing={() => this.Country.current.focus()}
                    blurOnSubmit={false}
                    theme={{
                      colors: {
                        primary: "#272727",
                        underlineColor: "transparent"
                      }
                    }}
                  />

                  <TextInput
                    style={styles.inputs}
                    type="outlined"
                    label="State"
                    value={this.state.State}
                    onChangeText={State => this.setState({ State })}
                    mode="outlined"
                    returnKeyType="next"
                    ref={this.Country}
                    onSubmitEditing={() => this.PostalCode.current.focus()}
                    blurOnSubmit={false}
                    theme={{
                      colors: {
                        primary: "#272727",
                        underlineColor: "transparent"
                      }
                    }}
                  />

                  <TextInput
                    style={styles.inputs}
                    type="outlined"
                    label="Country"
                    value={this.state.Country}
                    onChangeText={Country => this.setState({ Country })}
                    mode="outlined"
                    returnKeyType="next"
                    ref={this.PostalCode}
                    onSubmitEditing={() => this.PostalCode.current.focus()}
                    theme={{
                      colors: {
                        primary: "#272727",
                        underlineColor: "transparent"
                      }
                    }}
                  />

                  <TextInput
                    style={styles.inputs}
                    type="outlined"
                    label="Postal Code"
                    value={this.state.PostalCode}
                    onChangeText={PostalCode => this.setState({ PostalCode })}
                    mode="outlined"
                    keyboardType="number-pad"
                    maxLength={6}
                    ref={this.PostalCode}
                    blurOnSubmit={false}
                    theme={{
                      colors: {
                        primary: "#272727",
                        underlineColor: "transparent"
                      }
                    }}
                  />
                </View>
              </View>
            </View>
          </ProgressStep>
          <ProgressStep label="Enquiry Data">
            <View style={styles.EnquiryProgressStepForUser}>
              <View
                style={{
                  borderWidth: 1,
                  margin: "5%",
                  borderColor: "#00000000",
                  borderRadius: 10,
                  elevation: 1,
                  backgroundColor: "#E3DFCE"
                }}
              >
                <View style={{ border: 20, margin: 20 }}>
                  <Row
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center"
                    }}
                  >
                    <Label style = {{color : 'black'}}>Enquiry Date :</Label>
                    <DatePicker
                      defaultDate={new Date(2020, 4, 4)}
                      minimumDate={new Date(2020, 1, 1)}
                      maximumDate={new Date(2020, 12, 31)}
                      locale={"en"}
                      timeZoneOffsetInMinutes={undefined}
                      modalTransparent={false}
                      animationType={"fade"}
                      androidMode={"default"}
                      placeHolderText={<Icon style = {{color : '#E31837'}} name = 'calendar' />} //"... Please select"
                      textStyle={{ color: "black" }}
                      placeHolderTextStyle={{ color: "#666666" }}
                      onDateChange={this.setDate}
                      disabled={false}
                    />
                  </Row>

                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    selectedValue={this.state.EnquiryType}
                    onValueChange={this.DropdownEnquiryType.bind(this)}
                  >
                    <Picker.Item label="Enquiry Type" />
                    {data.Enquiry_Type__c.map(EnquiryType => {
                      {
                        /* <Picker.Item label="Enquiry Type 1" value="Enquiry Type 1" />
                    <Picker.Item label="Enquiry Type 2" value="Enquiry Type 2" />
                    <Picker.Item label="Enquiry Type 3" value="Enquiry Type 3" />
                    <Picker.Item label="Enquiry Type 4" value="Enquiry Type 4" /> */
                      }
                      return (
                        <Picker.Item label={EnquiryType} value={EnquiryType} />
                      );
                    })}
                  </Picker>

                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    selectedValue={this.state.EnquirySource}
                    onValueChange={this.DropdownEnquirySource.bind(this)}
                  >
                    <Picker.Item label="Enquiry Source" />
                    {data.Enquiry_Source__c.map(EnquirySource => {
                      return (
                        <Picker.Item
                          label={EnquirySource}
                          value={EnquirySource}
                        />
                      );
                    })}
                  </Picker>

                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    selectedValue={this.state.UsageArea}
                    onValueChange={this.DropdownUsageArea.bind(this)}
                  >
                    <Picker.Item label="Usage Area" />
                    {data.Usage_Area__c.map(UsageArea => {
                      return (
                        <Picker.Item label={UsageArea} value={UsageArea} />
                      );
                    })}
                  </Picker>

                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    selectedValue={this.state.LikelyPurchase}
                    onValueChange={this.DropdownLikelyPurchase.bind(this)}
                  >
                    <Picker.Item label="Likely Purchase" />
                    {data.Likely_Purchase__c.map(LikelyPurchase => {
                      return (<Picker.Item
                        label={LikelyPurchase}
                        value={LikelyPurchase}
                      />);
                    })}
                  </Picker>

                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    selectedValue={this.state.ProspectType}
                    onValueChange={this.DropdownProspectType.bind(this)}
                  >
                    <Picker.Item label="Prospect Type" />
                    {data.Prospect_Type__c.map(ProspectType => {
                    return (<Picker.Item label={ProspectType} value={ProspectType} />);
                    })}
                  </Picker>
                </View>
              </View>
            </View>
          </ProgressStep>
          <ProgressStep label="Product" onSubmit={this.onEnquirySubmit}>
            <View
              style={{
                borderWidth: 1,
                margin: "5%",
                borderColor: "#00000000",
                borderRadius: 10,
                elevation: 1,
                backgroundColor: "#E3DFCE"
              }}
            >
              <View style={{ border: 20, margin: 20 }}>
                <View style={styles.EnquiryProgressStepForUser}>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    selectedValue={this.state.ProductName}
                    onValueChange={this.DropdownProductName.bind(this)}
                  >
                    <Picker.Item label="Product Name" />
                    <Picker.Item label="Product 1" value="Product 1" />
                    <Picker.Item label="Product 2" value="Product 2" />
                    <Picker.Item label="Product 3" value="Product 3" />
                    <Picker.Item label="Product 4" value="Product 4" />
                  </Picker>

                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    selectedValue={this.state.TransmissionType}
                    onValueChange={this.DropdownTransmissionType.bind(this)}
                  >
                    <Picker.Item label="Model" />
                    {productData.Model__c.map((Modal) => {
                    return (<Picker.Item label={Modal} value={Modal} />);
                  })}
                  </Picker>

                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    selectedValue={this.state.Variant}
                    onValueChange={this.DropdownVariant.bind(this)}
                  >
                    <Picker.Item label="Variant" />
                    {productData.Variant__c.map((Variant) => {
                    return (<Picker.Item label={Variant} value={Variant} />);
                  })}
                  </Picker>

                  <Picker
                    mode="dropdown"
                    placeholder="Select Fuel Type"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    selectedValue={this.state.FuelType}
                    onValueChange={this.DropdownFueltype.bind(this)}
                  >
                    <Picker.Item label="Fuel Type" />
                    {productData.Fuel_Type__c.map((FuelType) => {
                    return (<Picker.Item label={FuelType} value={FuelType} />);
                  })}
                  </Picker>

                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    selectedValue={this.state.Color}
                    onValueChange={this.DropdownColor.bind(this)}
                  >
                    <Picker.Item label="Color" />
                    {productData.Color__c.map((Color) => {
                    return (<Picker.Item label={Color} value={Color} />);
                  })}
                  </Picker>

                  <TextInput
                    style={styles.inputs}
                    label="Quantity"
                    value={this.state.Quantity}
                    onChangeText={Quantity => this.setState({ Quantity })}
                    mode="outlined"
                    keyboardType="number-pad"
                    theme={{
                      colors: {
                        primary: "#272727",
                        underlineColor: "transparent"
                      }
                    }}
                  />
                </View>
              </View>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  EnquiryOverallView: {
    flex: 1
  },
  inputs: {
    flex: 1,
    alignSelf: "stretch"
  }
});

export default Enquiry;
