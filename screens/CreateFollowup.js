import React, { Component } from "react";
import { StyleSheet, BackHandler } from "react-native";
import {
  View,
  Text,
  Container,
  Left,
  Header,
  Body,
  Right,
  Icon,
  Title
} from "native-base";
class CreateFollowup extends Component {
  // HANDELING HARDWARE BACK BUTTON CONTROL

  // componentWillMount() {
  //     BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  // }

  // componentWillUnmount() {
  //     BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  // }

  // handleBackButtonClick() {
  //     this.props.navigation.navigate('Customer360');
  //     return true;
  // }

  // ----------------------------------------------------------

  render() {
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
            <Text style={{ color: "white" }}>Create Followup</Text>
          </Body>
          <Right />
        </Header>
        <View>
          <Text>create followup</Text>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#34495E"
  }
});
export default CreateFollowup;
