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
  Title
} from "native-base";
class ConvertToEnquiry extends Component {
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
            <Text style={{ color: "white" }}>Convert To Enquiry</Text>
          </Body>
          <Right />
        </Header>
        <View>
          <Text>Convert To Enquiry</Text>
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

export default ConvertToEnquiry;
