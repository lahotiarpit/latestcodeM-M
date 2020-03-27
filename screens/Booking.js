import React, { Component } from "react";
import { StyleSheet, Vibration, BackHandler } from "react-native";
import aceBookingPickList from '../PicklistHelpers/ACE_BookingPickList';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  DatePicker,
  View,
  Row,
  Label,
  Input,
  Picker
} from "native-base";
import { TextInput, Card } from "react-native-paper";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.Scheme_Name = React.createRef();
    this.Consumer_Scheme = React.createRef();
    this.Dealer_Discount_Special_Discount = React.createRef();
    this.Mode_Of_Payment = React.createRef();
    this.Expected_EMI = React.createRef();
    this.Exchange_Bonus = React.createRef();
    this.Drawn_On = React.createRef();
    this.Down_Payment = React.createRef();
    this.Cheque_DD_PO_Details = React.createRef();
    this.RSA = React.createRef();
    this.Road_Safety_Tax = React.createRef();
    this.Remarks = React.createRef();
    this.Registration_Types = React.createRef();
    this.Registration_Place = React.createRef();
    this.Registration_By = React.createRef();
    this.Registration = React.createRef();
    this.Usage = React.createRef();
    this.Tenure = React.createRef();
    this.Status = React.createRef();
    this.Shield_Warrant = React.createRef();
    this.Shield = React.createRef();
    this.Sales_Type = React.createRef();
    this.Owner_Id = React.createRef();
    this.Otf_No = React.createRef();
    this.Order_ID = React.createRef();
    this.Enquiry_Id = React.createRef();
    this.Zero_Depreciation_Insurance_Cost = React.createRef();
    this.Interest_Rates = React.createRef();
    this.Insurance_Types = React.createRef();
    this.Insurance_Company = React.createRef();
    this.Insurance_By = React.createRef();
    this.Insurance = React.createRef();
    this.Loan_Amount = React.createRef();
    this.Finance_Company = React.createRef();
    this.Finance_Arranged_By = React.createRef();
    this.Mobile_App_Id = React.createRef();
    this.Booking_Name = React.createRef();
    this.Delivery_Location = React.createRef();
    this.Reasons_For_Cancellation = React.createRef();
    this.Price_Type = React.createRef();
    this.Customer_Id = React.createRef();
    this.Booking_Amount = React.createRef();
    this.Amount_Received = React.createRef();
    this.Amount = React.createRef();
    this.Corporate_Bonus = React.createRef();
    this.Tenure = React.createRef();

    this.state = {
      Scheme_Name_state_var: "",
      Consumer_Scheme_state_var: "",
      Dealer_Discount_Special_Discount_state_var_state_var: "",
      Mode_Of_Payment_state_var: "",
      Expected_EMI_state_var: "",
      Exchange_Bonus_state_var: "",
      Drawn_On_state_var: "",
      Down_Payment_state_var: "",
      Cheque_DD_PO_Details_state_var: "",
      RSA_state_var: "",
      Road_Safety_Tax_state_var: "",
      Remarks_state_var: "",
      Registration_Types_state_var: "",
      Registration_Place_state_var: "",
      Registration_By_state_var: "",
      Registration_state_var: "",
      Usage_state_var: "",
      Tenure_state_var: "",
      Status_state_var: "",
      Shield_Warrant_state_var: "",
      Shiel_state_var: "",
      Sales_Type_state_var: "",
      Owner_Id_state_var: "",
      Otf_No_state_var: "",
      Order_ID_state_var: "",
      Enquiry_Id_state_var: "",
      Zero_Depreciation_Insurance_Cost_state_var: "",
      Interest_Rates_state_var: "",
      Insurance_Types_state_var: "",
      Insurance_Company_state_var: "",
      Insurance_By_state_var: "",
      Insurance_state_var: "",
      Loan_Amount_state_var: "",
      Finance_Company_state_var: "",
      Finance_Arranged_By_state_var: "",
      Mobile_App_Id_state_var: "",
      Booking_Name_state_var: "",
      Delivery_Location_state_var: "",
      Reasons_For_Cancellation_state_var: "",
      Price_Type_state_var: "",
      Customer_Id_state_var: "",
      Booking_Amount_state_var: "",
      Amount_Received_state_var: "",
      Amount_state_var: "",
      Corporate_Bonus_state_var: "",
      Stage: "",
      ReasonForCancellation: "",
      RegistrationBy: "",
      RegistrationType: "",

    };
    // HANDELING HARDWARE BACK BUTTON CONTROL

    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

    // ................................................
  }

  // HANDELING HARDWARE BACK BUTTON CONTROL

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

  DropdownStage(value) {
    this.setState({
      Stage: value
    });
  }

  DropdownReasonForCancellation(value) {
    this.setState({
      ReasonForCancellation: value
    });
  }
  handleBackButtonClick() {
    this.props.navigation.navigate("Home");
    return true;
  }
  // ----------------------------------------------------------

  DropdownDelivery_Location(value) {
    this.setState({
      Delivery_Location_state_var: value
    });
  }
  DropdownOrder_Id(value) {
    this.setState({
      Order_ID_state_var: value
    });
  }
  DropdownInsurance_Types(value) {
    this.setState({
      Insurance_Types_state_var: value
    });
  }
  DropdownMode_Of_Payment(value) {
    this.setState({
      Mode_Of_Payment_state_var: value
    });
  }

  DropdownRegistrationBy(value) {
    this.setState({
      RegistrationBy: value
    });
  }

  DropdownRegistrationType(value) {
    this.setState({
      RegistrationType : value
    })
  }
  render() {
    const data = aceBookingPickList();
    console.log(("$$$$$$$$$$$$$$ : " + JSON.stringify(data)));
    return (
      <Container>
        <Header style={{ backgroundColor: "#E31837" }}>
          <Left>
            <Button transparent>
              <Icon
                style={{ color: "white" }}
                name="md-arrow-back"
                onPress={() => this.props.navigation.goBack()}
              />
            </Button>
          </Left>
          <Body>
            <Text style={{ color: "white", fontFamily : 'barlow', fontWeight : 'bold' }}>Booking</Text>
          </Body>
          <Right />
        </Header>
        <ProgressSteps
          disabledStepNumColor="black"
          style={styles.ProgressSteps}
        >
          <ProgressStep label="Booking">
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
                    <Label style = {{color : 'black'}}>Order Date :</Label>
                    <DatePicker
                      defaultDate={new Date(2020, 4, 4)}
                      minimumDate={new Date(2020, 1, 1)}
                      maximumDate={new Date(2020, 12, 31)}
                      locale={"en"}
                      timeZoneOffsetInMinutes={undefined}
                      modalTransparent={false}
                      animationType={"fade"}
                      androidMode={"default"}
                      placeHolderText={<Icon style = {{color : '#E31837'}} name = 'calendar' />} //"Order Date"
                      textStyle={{ color: "black" }}
                      placeHolderTextStyle={{ color: "#d3d3d3" }}
                      onDateChange={this.setDate}
                      disabled={false}
                    />
                  </Row>

                  <Picker
                    label="Stage"
                    onChangeText={text => this.setState({ text })}
                    ref={this.Delivery_Location}
                    returnKeyType="next"
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    selectedValue={this.state.Stage}
                    onValueChange={this.DropdownStage.bind(this)}
                  >
                    <Picker.Item label="Stage"/>
                    {data.Stage__c.map((Stage) => {
                    return (<Picker.Item label={Stage} value={Stage} />);
                  })}
                  </Picker>

                  <Row
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center"
                    }}
                  > 
                    <Label style = {{color : 'black'}}>Booking Date :</Label>
                    <DatePicker
                      defaultDate={new Date(2020, 4, 4)}
                      minimumDate={new Date(2020, 1, 1)}
                      maximumDate={new Date(2020, 12, 31)}
                      locale={"en"}
                      timeZoneOffsetInMinutes={undefined}
                      modalTransparent={false}
                      animationType={"fade"}
                      androidMode={"default"}
                      placeHolderText={<Icon style = {{color : '#E31837'}} name = 'calendar' />} //"Booking Date"
                      textStyle={{ color: "black" }}
                      placeHolderTextStyle={{ color: "#d3d3d3" }}
                      onDateChange={this.setDate}
                      disabled={false}
                      onSubmitEditing={() => this.a.current.focus()}
                    />
                  </Row>

                  <Picker //1
                    label="Mode Of Payment"
                    onChangeText={text => this.setState({ text })}
                    ref={this.Delivery_Location}
                    returnKeyType="next"
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    selectedValue={this.state.Mode_Of_Payment_state_var}
                    onSubmitEditing={() =>
                      this.Dealer_Discount_Special_Discount.current.focus()
                    }
                    onValueChange={this.DropdownMode_Of_Payment.bind(this)}
                  >
                    <Picker.Item label="Mode Of Payment"/>
                    {data.Mode_OF_Payment__c.map((ModeOfPayment) => {
                    return (<Picker.Item label={ModeOfPayment} value={ModeOfPayment} />);
                  })}
                  </Picker>

                  <TextInput //1
                    style={styles.inputs}
                    label="Cheque DD PO Details"
                    mode="outlined"
                    onChangeText={text => this.setState({ text })}
                    ref={this.Booking_Amount}
                    onSubmitEditing={() => this.Booking_Amount.current.focus()}
                    returnKeyType="next"
                    blurOnSubmit={false}
                    theme={{ colors: { primary: '#272727',underlineColor:'transparent',}}}
                  />

                  <TextInput
                    style={styles.inputs}
                    keyboardType="number-pad"
                    label="Booking Amount"
                    mode="outlined"
                    onChangeText={text => this.setState({ text })}
                    ref={this.Booking_Amount}
                    onSubmitEditing={() => this.Amount_Received.current.focus()}
                    returnKeyType="next"
                    blurOnSubmit={false}
                    theme={{ colors: { primary: '#272727',underlineColor:'transparent',}}}
                  />

                  <TextInput
                    style={styles.inputs}
                    keyboardType="number-pad"
                    label="Amount Received"
                    mode="outlined"
                    onChangeText={text => this.setState({ text })}
                    ref={this.Amount_Received}
                    onSubmitEditing={() => this.Down_Payment.current.focus()}
                    returnKeyType="next"
                    blurOnSubmit = {false}
                    theme={{ colors: { primary: '#272727',underlineColor:'transparent',}}}
                  />

                  <TextInput //1
                    style={styles.inputs}
                    keyboardType="number-pad"
                    label="Down Payment"
                    mode="outlined"
                    onChangeText={text => this.setState({ text })}
                    ref={this.Down_Payment}
                    blurOnSubmit={false}
                    theme={{ colors: { primary: '#272727',underlineColor:'transparent',}}}
                  />

                  <Label style = {{color : 'black'}}>Customer Expected Delivery Date :</Label>
                  <DatePicker
                    defaultDate={new Date(2020, 4, 4)}
                    minimumDate={new Date(2020, 1, 1)}
                    maximumDate={new Date(2020, 12, 31)}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText={<Icon style = {{color : '#E31837'}} name = 'calendar' />} //"Customer Expected Delivery Date"
                    textStyle={{ color: "black" }}
                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                    onDateChange={this.setDate}
                    disabled={false}
                  />

                  <Picker //2
                    label="Reason For Cancellation"
                    onChangeText={text => this.setState({ text })}
                    ref={this.Insurance_Types}
                    returnKeyType="next"
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    onSubmitEditing={() => this.Interest_Rates.current.focus()}
                    selectedValue={this.state.ReasonForCancellation}
                    onValueChange={this.DropdownReasonForCancellation.bind(
                      this
                    )}
                  >
                    <Picker.Item label="Reason for cancellation" />
                    {data.Reasons_For_Cancellation__c.map((ReasonForCancellation) => {
                    return (<Picker.Item label={ReasonForCancellation} value={ReasonForCancellation} />);
                    })}
                  </Picker>

                  <Picker
                    label="Delivery Location"
                    onChangeText={text => this.setState({ text })}
                    ref={this.Delivery_Location}
                    returnKeyType="next"
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    selectedValue={this.state.Delivery_Location_state_var}
                    onValueChange={this.DropdownDelivery_Location.bind(this)}
                  >
                    <Picker.Item label="Delivery Location" value="key0" />
                    <Picker.Item label=" Delivery Location1" value="key1" />
                    <Picker.Item label="Delivery Location2" value="key2" />
                    <Picker.Item label="Delivery Location3" value="key3" />
                    <Picker.Item label="Delivery Location4" value="key4" />
                  </Picker>

                  <TextInput //Dp
                    style={styles.inputs}
                    label="Reasons For Cancellation"
                    mode="outlined"
                    onChangeText={text => this.setState({ text })}
                    ref={this.Reasons_For_Cancellation}
                    blurOnSubmit={false}
                    theme={{ colors: { primary: '#272727',underlineColor:'transparent',}}}
                  />
                </View>
              </View>
            </View>
            {/* </Card > */}
          </ProgressStep>

          <ProgressStep label="Insurance">
            {/* <Card style={{ marginTop: 10, alignItems: 'center', marginRight: 10, marginLeft: 10, shadowColor: '#cccccc', shadowRadius: 10 }}>
             */}
            <View style={styles.EnquiryProgressStepForUser}>
              <View
                style={{
                  borderWidth: 1,
                  margin: 20,
                  borderColor: "#00000000",
                  borderRadius: 10,
                  elevation: 1,
                  backgroundColor: "#E3DFCE"
                }}
              >
                <View style={{ border: 20, margin: 20 }}>
                  <TextInput //2
                    style={styles.inputs}
                    keyboardType="number-pad"
                    label="Insurance "
                    mode="outlined"
                    onChangeText={text => this.setState({ text })}
                    ref={this.Insurance}
                    blurOnSubmit={false}
                    theme={{ colors: { primary: '#272727',underlineColor:'transparent',}}}
                  />

                  <Picker //2
                    label="Insurance Types"
                    onChangeText={text => this.setState({ text })}
                    ref={this.Insurance_Types}
                    returnKeyType="next"
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    onSubmitEditing={() => this.Interest_Rates.current.focus()}
                    selectedValue={this.state.Insurance_Types_state_var}
                    onValueChange={this.DropdownInsurance_Types.bind(this)}
                  >
                    <Picker.Item label="Insurance_Types" />
                    {data.Insurance_Types__c.map((InsuranceType) => {
                    return (<Picker.Item label={InsuranceType} value={InsuranceType} />);
                  })}
                  </Picker>

                  <TextInput //2
                    style={styles.inputs}
                    label="Insurance Company"
                    mode="outlined"
                    onChangeText={text => this.setState({ text })}
                    ref={this.Insurance_Company}
                    onSubmitEditing={() => this.Insurance_By.current.focus()}
                    returnKeyType="next"
                    blurOnSubmit={false}
                    theme={{ colors: { primary: '#272727',underlineColor:'transparent',}}}
                  />

                  <TextInput //2
                    style={styles.inputs}
                    label="Insurance By"
                    mode="outlined"
                    onChangeText={text => this.setState({ text })}
                    ref={this.Insurance_By}
                    onSubmitEditing={() =>
                      this.Zero_Depreciation_Insurance_Cost.current.focus()
                    }
                    returnKeyType="next"
                    blurOnSubmit={false}
                    theme={{ colors: { primary: '#272727',underlineColor:'transparent',}}}
                  />

                  <TextInput //2
                    style={styles.inputs}
                    keyboardType="number-pad"
                    label="Zero Depreciation Insurance Cost"
                    mode="outlined"
                    onChangeText={text => this.setState({ text })}
                    ref={this.Zero_Depreciation_Insurance_Cost}
                    blurOnSubmit={false}
                    theme={{ colors: { primary: '#272727',underlineColor:'transparent',}}}
                  />
                  {/* <Row
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center"
                    }}
                  >
                    <Label>Loyalty Bonus</Label>
                    <DatePicker //2  textinput
                      defaultDate={new Date(2020, 4, 4)}
                      minimumDate={new Date(2020, 1, 1)}
                      maximumDate={new Date(2020, 12, 31)}
                      locale={"en"}
                      timeZoneOffsetInMinutes={undefined}
                      keyboardType={<Icon style = {{color : '#E31837'}} name = 'calendar' />} //"number-pad"
                      label="Loyalty Bonus"
                      mode="outlined"
                      blurOnSubmit={false}
                      onChangeText={text => this.setState({ text })}
                    />
                  </Row> */}

                  <TextInput //2
                    style={styles.inputs}
                    keyboardType="number-pad"
                    label="Exchange Bonus"
                    mode="outlined"
                    ref={this.Exchange_Bonus}
                    onSubmitEditing={() => this.Corporate_Bonus.current.focus()}
                    onChangeText={text => this.setState({ text })}
                    blurOnSubmit = {false}
                    returnKeyType="next"
                    theme={{ colors: { primary: '#272727',underlineColor:'transparent',}}}
                  />

                  <TextInput //2
                    style={styles.inputs}
                    keyboardType="number-pad"
                    label="Corporate Bonus"
                    mode="outlined"
                    ref={this.Corporate_Bonus}
                    onSubmitEditing={() => this.Dealer_Discount_Special_Discount.current.focus()}
                    onChangeText={text => this.setState({ text })}
                    returnKeyType="next"
                    blurOnSubmit={false}
                    theme={{ colors: { primary: '#272727',underlineColor:'transparent',}}}
                  />

                  <TextInput //2
                    style={styles.inputs}
                    keyboardType="number-pad"
                    label="Dealer Discount Special Discount"
                    mode="outlined"
                    onChangeText={text => this.setState({ text })}
                    ref={this.Dealer_Discount_Special_Discount}
                    blurOnSubmit={false}
                    theme={{ colors: { primary: '#272727',underlineColor:'transparent',}}}
                  />
                </View>
              </View>
            </View>
            {/* </Card> */}
          </ProgressStep>

          <ProgressStep label="Govt">
            {/* <Card style={{ marginTop: 10, alignItems: 'center', marginRight: 10, marginLeft: 10, shadowColor: '#cccccc', shadowRadius: 10 }}> */}
            <View style={styles.EnquiryProgressStepForUser}>
              <View
                style={{
                  borderWidth: 1,
                  margin: 20,
                  borderColor: "#00000000",
                  borderRadius: 10,
                  elevation: 1,
                  backgroundColor: "#E3DFCE"
                }}
              >
                <View style={{ border: 20, margin: 20 }}>
                  <TextInput //3
                    style={styles.inputs}
                    keyboardType="number-pad"
                    label="Registration"
                    mode="outlined"
                    onChangeText={text => this.setState({ text })}
                    ref={this.Registration}
                    blurOnSubmit={false}
                    theme={{ colors: { primary: '#272727',underlineColor:'transparent',}}}
                  />

                  <Picker //2
                    label="Registration By"
                    onChangeText={text => this.setState({ text })}
                    ref={this.Insurance_Types}
                    returnKeyType="next"
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    onSubmitEditing={() => this.Registration_Place.current.focus()}
                    selectedValue={this.state.RegistrationBy}
                    onValueChange={this.DropdownRegistrationBy.bind(this)}
                  >
                    <Picker.Item label="Registration By" />
                    {data.Registration_By__c.map((RegistrationBy) => {
                    return (<Picker.Item label={RegistrationBy} value={RegistrationBy} />);
                  })}
                  </Picker>

                  <TextInput //3
                    style={styles.inputs}
                    label="Registration Place"
                    mode="outlined"
                    onChangeText={text => this.setState({ text })}
                    ref={this.Registration_Place}
                    blurOnSubmit={false}
                    theme={{ colors: { primary: '#272727',underlineColor:'transparent',}}}
                  />
                  <Picker //2
                    label="Registration Types"
                    onChangeText={text => this.setState({ text })}
                    ref={this.Insurance_Types}
                    returnKeyType="next"
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    onSubmitEditing={() => this.Interest_Rates.current.focus()}
                    selectedValue={this.state.RegistrationType}
                    onValueChange={this.DropdownRegistrationType.bind(this)}
                  >
                    <Picker.Item label="Registration Types" />
                    {data.Registration_Types__c.map((RegistrationType) => {
                    return (<Picker.Item label={RegistrationType} value={RegistrationType} />);
                  })}
                  </Picker>
                  <TextInput //3
                    style={styles.inputs}
                    label="Remarks"
                    mode="outlined"
                    onChangeText={text => this.setState({ text })}
                    ref={this.Remarks}
                    onSubmitEditing={() => this.Road_Safety_Tax.current.focus()}
                    returnKeyType="next"
                    blurOnSubmit={false}
                    theme={{ colors: { primary: '#272727',underlineColor:'transparent',}}}
                  />
                  <TextInput //3
                    style={styles.inputs}
                    keyboardType="number-pad"
                    label="Road Safety Tax"
                    mode="outlined"
                    onChangeText={text => this.setState({ text })}
                    ref={this.Road_Safety_Tax}
                    onSubmitEditing={() => this.Shield.current.focus()}
                    returnKeyType="next"
                    blurOnSubmit={false}
                    theme={{ colors: { primary: '#272727',underlineColor:'transparent',}}}
                  />

                  <TextInput //3
                    style={styles.inputs}
                    keyboardType="number-pad"
                    label="Shield"
                    mode="outlined"
                    onChangeText={text => this.setState({ text })}
                    ref={this.Shield}
                    blurOnSubmit={false}
                    theme={{ colors: { primary: '#272727',underlineColor:'transparent',}}}
                  />

                  <Picker //2
                    label="Shield Warranty"
                    onChangeText={text => this.setState({ text })}
                    ref={this.Insurance_Types}
                    returnKeyType="next"
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    selectedValue={this.state.Insurance_Types_state_var}
                    onValueChange={this.DropdownInsurance_Types.bind(this)}
                  >
                    <Picker.Item label="Shield Warranty" />
                    {data.Shield_Warranty__c.map((ShieldWarranty) => {
                    return (<Picker.Item label={ShieldWarranty} value={ShieldWarranty} />);
                  })}
                  </Picker>
                </View>
              </View>
            </View>
          </ProgressStep>
          <ProgressStep label="Finance">
            <View style={styles.EnquiryProgressStepForUser}>
              <View
                style={{
                  borderWidth: 1,
                  margin: 20,
                  borderColor: "#00000000",
                  borderRadius: 10,
                  elevation: 1,
                  backgroundColor: "#E3DFCE"
                }}
              >
                <View style={{ border: 20, margin: 20 }}>
                  <TextInput //4
                    style={styles.inputs}
                    label="Finance Arranged By"
                    mode="outlined"
                    onChangeText={text => this.setState({ text })}
                    ref={this.Finance_Arranged_By}
                    onSubmitEditing={() => this.Finance_Company.current.focus()}
                    returnKeyType="next"
                    blurOnSubmit={false}
                    theme={{ colors: { primary: '#272727',underlineColor:'transparent',}}}
                  />
                  <TextInput //4
                    style={styles.inputs}
                    label="Finance Company"
                    mode="outlined"
                    onChangeText={text => this.setState({ text })}
                    ref={this.Finance_Company}
                    onSubmitEditing={() => this.Loan_Amount.current.focus()}
                    returnKeyType="next"
                    blurOnSubmit={false}
                    theme={{ colors: { primary: '#272727',underlineColor:'transparent',}}}
                  />
                  <TextInput //4
                    style={styles.inputs}
                    keyboardType="number-pad"
                    label="Loan Amount"
                    mode="outlined"
                    onChangeText={text => this.setState({ text })}
                    ref={this.Loan_Amount}
                    onSubmitEditing={() => this.Tenure.current.focus()}
                    returnKeyType="next"
                    blurOnSubmit={false}
                    theme={{ colors: { primary: '#272727',underlineColor:'transparent',}}}
                  />

                  <TextInput //4
                    style={styles.inputs}
                    keyboardType="number-pad"
                    label="Tenure"
                    mode="outlined"
                    onChangeText={text => this.setState({ text })}
                    ref={this.Tenure}
                    onSubmitEditing={() => this.Interest_Rates.current.focus()}
                    returnKeyType="next"
                    blurOnSubmit={false}
                    theme={{ colors: { primary: '#272727',underlineColor:'transparent',}}}
                  />
                  <TextInput //4
                    style={styles.inputs}
                    keyboardType="number-pad"
                    label="Interest Rates"
                    mode="outlined"
                    onChangeText={text => this.setState({ text })}
                    ref={this.Interest_Rates}
                    onSubmitEditing={() =>
                      this.Expected_EMI.current.focus()
                    }
                    returnKeyType="next"
                    blurOnSubmit={false}
                    theme={{ colors: { primary: '#272727',underlineColor:'transparent',}}}
                  />

                  <TextInput //4
                    style={styles.inputs}
                    keyboardType="number-pad"
                    label="Expected EMI"
                    mode="outlined"
                    onChangeText={text => this.setState({ text })}
                    ref={this.Expected_EMI}
                    blurOnSubmit={false}
                    theme={{ colors: { primary: '#272727',underlineColor:'transparent',}}}
                  />
                </View>
              </View>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  inputs: {
    flex: 1,
    alignSelf: "stretch"
  },
  container: {
    margin: 5
  },
  text: {
    fontWeight: "bold",
    marginTop: 10
  },
  EnquiryOverallView: {
    flex: 1
  },
  EnquiryProgressStepForUser: {}
});

export default Booking;
