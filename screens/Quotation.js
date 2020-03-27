import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  View,
  Text,
  Container,
  Left,
  Header,
  Body,
  Right,
  Icon,
  Title,
  Row,
  DatePicker,
  Picker,
  Label,
  Item,
  Button
} from "native-base";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import {
  Avatar,
  Card,
  Paragraph,
  TextInput,
  RadioButton,
  Appbar
} from "react-native-paper";
import { forceUtil, oauth, net } from "react-native-force";

import RSAShieldAccessories from "../";
import RSAShieldAccessoriesPickList from "../PicklistHelpers/RSAShieldAccessoriesPickList";
import Customer360 from "../screens/Customer360";
class Quotation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDate: new Date(),
      checked: "first",
      Email: " ",
      Customer: " ",
      DealerEmails: " ",
      RSA: " ",
      Shield: " ",
      Accessory: " ",
      IncidentalCharges: " ",
      RegistrationCharges: " ",
      DealerDiscount: " ",
      RoadSafetyTaxCharges: " ",
      InsuranceCharges: " ",
      ZeroDepreciationInsuranceCostCharges: " ",
      Model: " ",
      EnquiryName: " ",
      EnquiryId: props.route.params.enquiryId,
      ModelData: " ",
      errors: false,
      IncidentalValidate: " ",
      RegistrationValidate: " ",
      DealerValidate: " ",
      RoadSafetyValidate: " ",
      InsuranceValidate: " ",
      ZeroDepreciationInsuranceCostValidate: " "
    };
    this.setDate = this.setDate.bind(this);

    this.Customer = React.createRef();
    this.DealerEmails = React.createRef();
    this.IncidentalCharges = React.createRef();
    this.RegistrationCharges = React.createRef();
    this.DealerDiscount = React.createRef();
    this.RoadSafetyTaxCharges = React.createRef();
    this.InsuranceCharges = React.createRef();
    this.ZeroDepreciationInsuranceCostCharges = React.createRef();
    this.EnquiryName = React.createRef();
    this.CustomerName = React.createRef();
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  GetValidate = () => {

    if (this.state.IncidentalCharges == " ") {
      this.setState({
        errors: true,
        IncidentalValidate: "this field is required"
      });
    } else {
      this.setState({ errors: false,IncidentalValidate: ""  });
    }
  }


  GetValidate1 = () => {
    if (this.state.RegistrationCharges == " ") {
      this.setState({
        errors: true,
        RegistrationValidate: "this field is required"
      });
    } else {
      this.setState({ errors: false,RegistrationValidate: "" });
    }
  }

  GetValidate2 = () => { 
    if (this.state.RoadSafetyTaxCharges == " ") {
      this.setState({
        errors: true,
        RoadSafetyValidate: "this field is required"
      });
    } else {
      this.setState({ errors: false, RoadSafetyValidate: ""  });
    }
  }

  GetValidate3 = () => { 
    if (this.state.ZeroDepreciationInsuranceCostCharges == " ") {
      this.setState({
        errors: true,
        ZeroDepreciationInsuranceCostValidate: "this field is required"
      });
    } else {
      this.setState({ errors: false,ZeroDepreciationInsuranceCostValidate: "" });
    }
  }

  GetValidate4 = () => {
    if (this.state.DealerDiscount == " ") {
      this.setState({
        errors: true,
        DealerValidate: "this field is required"
      });
    } else {
      this.setState({ errors: false,DealerValidate: "" });
    }
  }

  GetValidate5 = () => {
    if (this.state.InsuranceCharges == " ") {
      this.setState({
        errors: true,
        InsuranceValidate: "this field is required"
      });
    } else {
      this.setState({ errors: false,InsuranceValidate: "" });
    }
  }

  DropdownRSA(value) {
    this.setState({
      RSA: value
    });
  }

  DropdownShield(value) {
    this.setState({
      Shield: value
    });
  }

  DropdownAccessory(value) {
    this.setState({
      Accessory: value
    });
  }
  DropDownModel(value) {
    this.setState({
      Model: value
    });
  }

  componentDidMount() {
    const enquiryIdd = this.state.EnquiryId;
    net.query(
      "SELECT ID,(SELECT ID, Name, Product2Id FROM OpportunityLineItems),(SELECT Id, Name, Product__c FROM Product_Interests__r) FROM Opportunity WHERE ID = '" +
        this.state.EnquiryId +
        "' LIMIT 1",
      Data => {
        this.setState({
          ModelData: Data.records[0].OpportunityLineItems.records
        });
      },
      err => {
        console.log("Error : " + JSON.stringify(err));
      }
    );
  }
  render() {
    const data = RSAShieldAccessoriesPickList();
    const ModelName = this.state.ModelData;
    console.log(JSON.stringify(ModelName));
    return (
      <Container>
        <Header style={{ backgroundColor: "#E31837" }}>
          <Left>
            <Button transparent>
              <Icon
                style={{ color: "white" }}
                name="md-arrow-back"
                onPress={() => {
                  this.props.navigation.goBack();
                }}
              />
            </Button>
          </Left>
          <Body>
            <Text
              style={{
                color: "white",
                fontFamily: "barlow",
                fontWeight: "bold"
              }}
            >
              Quotation
            </Text>
          </Body>
          <Right />
        </Header>
        <ProgressSteps
          disabledStepNumColor="black"
          style={styles.ProgressSteps}
        >
          <ProgressStep label="Model">
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
                  <TextInput
                    style={styles.inputs}
                    type="outlined"
                    label="Enquiry Name"
                    value={this.state.EnquiryName}
                    onChangeText={EnquiryName => this.setState({ EnquiryName })}
                    mode="outlined"
                    returnKeyType="next"
                    ref={this.EnquiryName}
                    onSubmitEditing={() => this.CustomerName.current.focus()}
                    blurOnSubmit={false}
                    theme={{
                      colors: {
                        primary: "#272727",
                        underlineColor: "transparent"
                      }
                    }}
                  />
                  {this.state.EnquiryName.length == 0 ? (
                    <Text style={styles.OnErrorTextColor}>black field</Text>
                  ) : null}

                  <TextInput
                    style={styles.inputs}
                    type="outlined"
                    label="Customer Name"
                    value={this.state.CustomerName}
                    onChangeText={CustomerName =>
                      this.setState({ CustomerName })
                    }
                    mode="outlined"
                    returnKeyType="next"
                    maxLength={3}
                    ref={this.CustomerName}
                    blurOnSubmit={false}
                    theme={{
                      colors: {
                        primary: "#272727",
                        underlineColor: "transparent"
                      }
                    }}
                  />
                  <Item picker style={{ flexDirection: "row" }}>
                    <Label style={{ flex: 1 }}>Select Model : </Label>
                    <Picker
                      mode="dropdown"
                      iosIcon={<Icon name="arrow-down" />}
                      style={{ width: undefined }}
                      selectedValue={this.state.Model}
                      onValueChange={this.DropDownModel.bind(this)}
                    >
                      {/* {ModelName.records[0].map(model => {
                        return (
                          <Picker.Item
                            label={model.OpportunityLineItems.records.Name}
                            value={model.OpportunityLineItems.records.Name}
                          />
                        );
                      })} */}
                    </Picker>
                  </Item>
                </View>
              </View>
            </View>
            {/* </Card> */}
          </ProgressStep>

          <ProgressStep
            label="Charges"
            onNext={this.GetValidate}
            errors={this.state.errors}
          >
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
                  <TextInput
                    style={styles.inputs}
                    type="outlined"
                    label="Incidental Charges"
                    value={this.state.IncidentalCharges}
                    onChangeText={IncidentalCharges =>
                      this.setState({ IncidentalCharges })
                    }
                    mode="outlined"
                    returnKeyType="next"
                    keyboardType="number-pad"
                    ref={this.GoToIncidentalCharges}
                    onSubmitEditing={() =>
                      this.RegistrationCharges.current.focus()
                    }
                    blurOnSubmit={false}
                    theme={{
                      colors: {
                        primary: "#272727",
                        underlineColor: "transparent"
                      }
                    }}
                    onBlur={() => {
                      this.GetValidate();
                    }}
                  />
                  <Text style={styles.OnErrorTextColor}>
                    {this.state.IncidentalValidate}
                  </Text>

                  <TextInput
                    style={styles.inputs}
                    type="outlined"
                    label="Registration Charges"
                    value={this.state.RegistrationCharges}
                    onChangeText={RegistrationCharges =>
                      this.setState({ RegistrationCharges })
                    }
                    mode="outlined"
                    keyboardType="number-pad"
                    returnKeyType="next"
                    ref={this.RegistrationCharges}
                    onSubmitEditing={() => this.DealerDiscount.current.focus()}
                    blurOnSubmit={false}
                    theme={{
                      colors: {
                        primary: "#272727",
                        underlineColor: "transparent"
                      }
                    }}
                    onBlur={() => {
                      this.GetValidate1();
                    }}
                  />
                  <Text style={styles.OnErrorTextColor}>
                    {this.state.RegistrationValidate}
                  </Text>

                  <TextInput
                    style={styles.inputs}
                    type="outlined"
                    label="Dealer Discount"
                    value={this.state.DealerDiscount}
                    onChangeText={DealerDiscount =>
                      this.setState({ DealerDiscount })
                    }
                    mode="outlined"
                    returnKeyType="next"
                    keyboardType="number-pad"
                    ref={this.DealerDiscount}
                    onSubmitEditing={() =>
                      this.RoadSafetyTaxCharges.current.focus()
                    }
                    blurOnSubmit={false}
                    onSubmitEditing={() =>
                      this.RoadSafetyTaxCharges.current.focus()
                    }
                    theme={{
                      colors: {
                        primary: "#272727",
                        underlineColor: "transparent"
                      }
                    }}
                    onBlur={() => {
                      this.GetValidate4();
                    }}
                  />
                  <Text style={styles.OnErrorTextColor}>
                    {this.state.DealerValidate}
                  </Text>

                  <TextInput
                    style={styles.inputs}
                    type="outlined"
                    label="Road Safety Tax Charges"
                    value={this.state.RoadSafetyTaxCharges}
                    onChangeText={RoadSafetyTaxCharges =>
                      this.setState({ RoadSafetyTaxCharges })
                    }
                    mode="outlined"
                    keyboardType="number-pad"
                    maxLength={10}
                    returnKeyType="next"
                    ref={this.RoadSafetyTaxCharges}
                    onSubmitEditing={() =>
                      this.InsuranceCharges.current.focus()
                    }
                    blurOnSubmit={false}
                    theme={{
                      colors: {
                        primary: "#272727",
                        underlineColor: "transparent"
                      }
                    }}
                    onBlur={() => {
                      this.GetValidate2();
                    }}
                  />
                  <Text style={styles.OnErrorTextColor}>
                    {this.state.RoadSafetyValidate}
                  </Text>

                  <TextInput
                    style={styles.inputs}
                    type="outlined"
                    label="Insurance Charges"
                    value={this.state.InsuranceCharges}
                    onChangeText={InsuranceCharges =>
                      this.setState({ InsuranceCharges })
                    }
                    mode="outlined"
                    keyboardType="number-pad"
                    maxLength={10}
                    returnKeyType="next"
                    ref={this.InsuranceCharges}
                    onSubmitEditing={() =>
                      this.ZeroDepreciationInsuranceCostCharges.current.focus()
                    }
                    blurOnSubmit={false}
                    theme={{
                      colors: {
                        primary: "#272727",
                        underlineColor: "transparent"
                      }
                    }}
                    onBlur={() => {
                      this.GetValidate5();
                    }}
                  />
                  <Text style={styles.OnErrorTextColor}>
                    {this.state.InsuranceValidate}
                  </Text>

                  <TextInput
                    style={styles.inputs}
                    type="outlined"
                    label="Zero Depreciation Insurance Cost Charges"
                    value={this.state.ZeroDepreciationInsuranceCostCharges}
                    onChangeText={ZeroDepreciationInsuranceCostCharges =>
                      this.setState({ ZeroDepreciationInsuranceCostCharges })
                    }
                    mode="outlined"
                    keyboardType="number-pad"
                    maxLength={10}
                    returnKeyType="next"
                    ref={this.ZeroDepreciationInsuranceCostCharges}
                    blurOnSubmit={false}
                    theme={{
                      colors: {
                        primary: "#272727",
                        underlineColor: "transparent"
                      }
                    }}
                    onBlur={() => {
                      this.GetValidate3();
                    }}
                  />
                  <Text style={styles.OnErrorTextColor}>
                    {this.state.ZeroDepreciationInsuranceCostValidate}
                  </Text>
                </View>
              </View>
            </View>
            {/* </Card> */}
          </ProgressStep>

          <ProgressStep label="Shield and RSA">
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
                  <Item picker style={{ flexDirection: "row" }}>
                    <Label style={{ flex: 1 }}>RSA : </Label>
                    <Picker
                      mode="dropdown"
                      iosIcon={<Icon name="arrow-down" />}
                      style={{ width: undefined }}
                      selectedValue={this.state.RSA}
                      onValueChange={this.DropdownRSA.bind(this)}
                    >
                      {/* <Picker.Item label="RSA" /> */}
                      {data.records.map(RSA => {
                        if (RSA.Product2.Type__c == "RSA")
                          return (
                            <Picker.Item
                              label={RSA.Product2.Name}
                              value={RSA.Product2.Name}
                            />
                          );
                      })}
                    </Picker>
                  </Item>

                  <Item picker style={{ flexDirection: "row" }}>
                    <Label style={{ flex: 1 }}>Shield : </Label>
                    <Picker
                      mode="dropdown"
                      iosIcon={<Icon name="arrow-down" />}
                      style={{ width: undefined }}
                      selectedValue={this.state.Shield}
                      onValueChange={this.DropdownShield.bind(this)}
                    >
                      {/* <Picker.Item label="Shield" /> */}
                      {data.records.map(Shield => {
                        if (Shield.Product2.Type__c == "Shield")
                          return (
                            <Picker.Item
                              label={Shield.Product2.Name}
                              value={Shield.Product2.Name}
                            />
                          );
                      })}
                    </Picker>
                  </Item>

                  <Item picker style={{ flexDirection: "row" }}>
                    <Label style={{ flex: 1 }}>Accessories : </Label>
                    <Picker
                      mode="dropdown"
                      iosIcon={<Icon name="arrow-down" />}
                      style={{ width: undefined }}
                      selectedValue={this.state.Accessory}
                      onValueChange={this.DropdownAccessory.bind(this)}
                    >
                      {/* <Picker.Item label="Accessories" /> */}
                      {data.records.map(Accessories => {
                        if (Accessories.Product2.Type__c == "Accessories")
                          return (
                            <Picker.Item
                              label={Accessories.Product2.Name}
                              value={Accessories.Product2.Name}
                            />
                          );
                      })}
                    </Picker>
                  </Item>
                </View>
              </View>
            </View>
            {/* </Card> */}
          </ProgressStep>

          <ProgressStep label="T & C">
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
                <Button
                  style={{
                    backgroundColor: "#E31837",
                    marginVertical: "5%",
                    marginHorizontal: "10%",
                    alignSelf: "center"
                  }}
                >
                  <Text>Preview</Text>
                </Button>
                <View style={{ border: 20, margin: 20 }}>
                  <TextInput
                    style={styles.inputs}
                    type="outlined"
                    label="Consultant"
                    value={this.state.Email}
                    onChangeText={Email => this.setState({ Email })}
                    mode="outlined"
                    returnKeyType="next"
                    ref={this.Email}
                    onSubmitEditing={() => this.Customer.current.focus()}
                    blurOnSubmit={false}
                    keyboardType="email-address"
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
                    label="Customer"
                    value={this.state.Customer}
                    onChangeText={Customer => this.setState({ Customer })}
                    mode="outlined"
                    returnKeyType="next"
                    maxLength={3}
                    ref={this.Customer}
                    onSubmitEditing={() => this.DealerEmails.current.focus()}
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
                    label="Dealer"
                    value={this.state.DealerEmails}
                    onChangeText={DealerEmails =>
                      this.setState({ DealerEmails })
                    }
                    mode="outlined"
                    returnKeyType="next"
                    keyboardType="email-address"
                    ref={this.DealerEmails}
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
            {/* </Card> */}
          </ProgressStep>
        </ProgressSteps>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#34495E"
  },
  inputs: {
    flex: 1,
    alignSelf: "stretch"
  },
  OnErrorTextColor: {
    color: "red"
  }
});
export default Quotation;
