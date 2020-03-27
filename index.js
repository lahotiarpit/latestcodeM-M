/* 9876543829
 * Copyright (c) 2015, salesforce.com, inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided
 * that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of conditions and the
 * following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and
 * the following disclaimer in the documentation and/or other materials provided with the distribution.
 *
 * Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or
 * promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
 * PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

import React, { Component } from "react";
import {
  AppRegistry,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text
} from "react-native";
import App from "./js/App";
import {
  forceUtil,
  mobilesync,
  oauth,
  net,
  smartstore
} from "react-native-force";

var SharedPreferences = require("react-native-shared-preferences");
SharedPreferences.setName("sales_genie");
SharedPreferences.getItem("OwnerId", function(value) {
  //  If you have the value, then do nothing, else set the correct value.
  if (value) {
  } else {
    oauth.getAuthCredentials(success_response => {
      SharedPreferences.setItem("OwnerId", success_response.userId);
    });
  }
});

const syncUp = forceUtil.promiserNoRejection(mobilesync.syncUp);
oauth.getAuthCredentials(
  success_response => {
    let usable_access_token = success_response.accessToken; //.replace('!', '\\!');
    //alert(JSON.stringify(success_response));
    let salesConsultantIds = [];
    salesConsultantIds.push(success_response.userId);
    SharedPreferences.setItem("OwnerId", success_response.userId);

    //     const fieldlist = ["FirstName", "LastName", "Title", "Email", "MobilePhone","Department"];
    //     console.log('======================== starting');
    //     syncUp(false, {}, "contacts", {mergeMode:mobilesync.MERGE_MODE.OVERWRITE, fieldlist})
    //    .then(() => {
    //       console.log("syncUp completed or failed");
    //       console.log('======================== ending')
    //    });

    /*fetch('https://mahindradealerworld--acedev.lightning.force.com/services/apexrest/getAllEnquiry', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
                 'Authorization': 'Bearer ' + success_response.accessToken
             },
             body: JSON.stringify({
                salesConsultantIds: salesConsultantIds
             })
          })
          .then((response) => response.json())
          .then((responseJson) => {
             alert(JSON.stringify(responseJson));
             //this.setState({
             //   data: responseJson
             //})
          })
          .catch((error) => {
             //alert('error');
          });*/

    //net.sendRequest('/services/data', 'getAllEnquiry', (response)=>{alert(response)}, (err)=>{alert('error - ' + err)}, "POST", {salesConsultantIds: salesConsultantIds}, {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + usable_access_token}, null, null, false);

    /* [{"userId": "0055D000002vFF5AM", "status": "error", "message": "Record not found", "enquiries": []}] */

    let enquiry1 = {
      name: "Arpit Test Opportunity",
      accountId: "0015D00000d0ew9QAA",
      enquiryDate: "2019-12-21",
      closeDate: "2019-12-21",
      contactId: "0035D00001IICFjQAP",
      stageName: "Enquiry",
      referByName: "Test Refer By Name",
      nextStep: "Next Step",
      enquiryType: "WLK",
      enquirySource: "NWP",
      nextAction: "T",
      usageArea: "City outskirt",
      likelyPurchase: "LT15",
      amount: 545000.0,
      ownerId: "userExtId123",
      dMSEnquiryNumber: "dmsEnquiryNumber",
      quotationType: "Type 1",
      custInterestedInLeasingVehicle: false,
      quotationRequired: true,
      leasingPolicyExpln: false,
      referralMobile: "1234567890"
    };

    let enquiries = [];
    enquiries.push(enquiry1);

    //net.sendRequest('/services/apexrest/', 'enquiry', (response)=>{console.log('enquiry response =  ' + response)}, (err)=>{alert('error - ' + JSON.stringify(err))}, "POST", enquiry1, {'Content-Type': 'application/json'}, null, null, false);

    // ############# WORKING SOQL for getting list of Enquiries and associated Followups , quotes, bookings, etc....
    //net.query("SELECT Id, Name, Account.Name, Dealer__r.Name, StageName, Enquiry_Date__c, Enquiry_Type__c, Likely_Purchase__c, Enquiry_Source__c, Usage_Area__c, Refer_By_Name__c, Next_Action__c, Enquiry_Number__c, Existing_Customer__c, DMS_Enquiry_Number__c, Contact__r.Name, Contact__r.MobilePhone, Contact__r.Email, Contact__r.Salutation, Contact__r.Phone, Contact__r.Customer_Type__c, Contact__r.Age__c, Contact__r.Communicate_To__c, Contact__r.Wedding_Anniversary_Date__c, Contact__r.MailingStreet, Contact__r.MailingPostalCode, Contact__r.Gender__c, Contact__r.Number_Of_Car_Owned__c, Contact__r.Family_Size__c, Contact__r.First_Time_User__c, (SELECT ID, Product2Id, Product2.name, Product2.color__c, Product2.Vehicle_Model__c, Product2.Variant__c, Product2.Fuel_Type__c, Quantity, UnitPrice, TotalPrice, PricebookEntry.Name, PricebookEntry.Product2.Family FROM OpportunityLineItems), (SELECT ID, Name, Booking_Amount__c, Amount_Received__c, Booking_Date__c,Booking_Name__r.Name, Delivery_Locations__c FROM Bookings__r), (SELECT ID, Name, Stage__c, Start_Date_Time__c,Product__r.Name,Place__c, Enquiry_Id__r.Name FROM Test_Drives__r), (SELECT ID, Name, ExpirationDate FROM Quotes), (Select Id, Subject,Owner.Name,ActivityDate,Status, TaskSubtype from Tasks where IsClosed= false) FROM Opportunity WHERE OwnerId = '" + success_response.userId + "'", (success_response)=>{console.log('************'); console.log(JSON.stringify(success_response));}, (err)=>{console.log('************1');console.log(err)});

    //  Query to request for a given enquiry number.
    // net.query("SELECT Id, Name, Account.Name, Dealer__r.Name, StageName, Enquiry_Date__c, Enquiry_Type__c, Likely_Purchase__c, Enquiry_Source__c, Usage_Area__c, Refer_By_Name__c, Next_Action__c, Enquiry_Number__c, Existing_Customer__c, DMS_Enquiry_Number__c, Contact__r.Name, Contact__r.MobilePhone, Contact__r.Email, Contact__r.Salutation, Contact__r.Phone, Contact__r.Customer_Type__c, Contact__r.Age__c, Contact__r.Communicate_To__c, Contact__r.Wedding_Anniversary_Date__c, Contact__r.MailingStreet, Contact__r.MailingPostalCode, Contact__r.Gender__c, Contact__r.Number_Of_Car_Owned__c, Contact__r.Family_Size__c, Contact__r.First_Time_User__c, (SELECT ID, Product2Id, Product2.name, Product2.color__c, Product2.Vehicle_Model__c, Product2.Variant__c, Product2.Fuel_Type__c, Quantity, UnitPrice, TotalPrice, PricebookEntry.Name, PricebookEntry.Product2.Family FROM OpportunityLineItems), (SELECT ID, Name, Booking_Amount__c, Amount_Received__c, Booking_Date__c,Booking_Name__r.Name, Delivery_Locations__c FROM Bookings__r), (SELECT ID, Name, Stage__c, Start_Date_Time__c,Product__r.Name,Place__c, Enquiry_Id__r.Name FROM Test_Drives__r), (SELECT ID, Name, ExpirationDate FROM Quotes), (Select Id, Subject,Owner.Name,ActivityDate,Status, TaskSubtype from Tasks where IsClosed= false) FROM Opportunity WHERE OwnerId = '" + success_response.userId + "' AND Id = '0065D0000053ZlsQAE'", (success_response)=>{console.log('************'); console.log(JSON.stringify(success_response));}, (err)=>{console.log('************1');console.log(err)});

    //net.resources((resources)=>{alert(Object.keys(resources))})

    //net.create('Enquiry', enquiry1, (res)=>{alert(res)}, (err)=>{alert(JSON.stringify(err))})

    //net.sendRequest('/services/oauth/', 'token', (response)=>{alert('enquiry response =  ' + response)}, (err)=>{alert('error - ' + JSON.stringify(err))}, "POST", {grant_type: 'refresh_token', client_id: success_response.clientId, client_secret: '', refresh_token: success_response.refreshToken}, {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + usable_access_token}, null, null, false);

    /***************** Get all the follow ups */
    //net.query("SELECT Id, Subject, Status, ActivityDate, Priority, OwnerId, Owner.Name, Owner.IsActive, Description, AccountId, Account.Name, WhoId, Who.Name, Who.Phone, WhatId, What.Name from task where what.type = 'Opportunity'", (success_response)=>{console.log('************'); console.log(JSON.stringify(success_response));}, (err)=>{console.log('************1');console.log(err)});

    //  net.query(" SELECT Id, Name, Account.Name, Dealer__r.Name, StageName, Enquiry_Date__c, Enquiry_Type__c, Likely_Purchase__c, Enquiry_Source__c, Usage_Area__c, Refer_By_Name__c, Next_Action__c, Enquiry_Number__c, Existing_Customer__c, DMS_Enquiry_Number__c, Contact__r.Name, Contact__r.MobilePhone, Contact__r.Email, Contact__r.Salutation, Contact__r.Phone, Contact__r.Customer_Type__c, Contact__r.Age__c, Contact__r.Communicate_To__c, Contact__r.Wedding_Anniversary_Date__c, Contact__r.MailingStreet, Contact__r.MailingPostalCode, Contact__r.Gender__c, Contact__r.Number_Of_Car_Owned__c, Contact__r.Family_Size__c, Contact__r.First_Time_User__c, (SELECT ID, Product2Id, Product2.name, Product2.color__c, Product2.Vehicle_Model__c, Product2.Variant__c, Product2.Fuel_Type__c, Quantity, UnitPrice, TotalPrice, PricebookEntry.Name, PricebookEntry.Product2.Family FROM OpportunityLineItems), (SELECT ID, Name, Booking_Amount__c, Amount_Received__c, Booking_Date__c,Booking_Name__r.Name, Delivery_Locations__c FROM Bookings__r), (SELECT ID, Name, Stage__c, Start_Date_Time__c,Product__r.Name,Place__c, Enquiry_Id__r.Name FROM Test_Drives__r),(SELECT ID, Name, ExpirationDate FROM Quotes), (Select Id, Subject,Owner.Name,ActivityDate,Status, TaskSubtype from Tasks where IsClosed= false) FROM Opportunity WHERE OwnerId = '" + success_response.userId + "' and Id = 'WhatId'", (success_response)=>{console.log('************'); console.log(JSON.stringify(success_response));}, (err)=>{console.log('************1');console.log(err)});

    // net.query(
    //   "SELECT ID, Name, Phone, MobilePhone, (SELECT Id, Dealer__c, StageName FROM Enquiries__r WHERE(StageName !='Delivered' AND StageName !='Lost')) FROM Contact WHERE Name like '%Brij%'",
    //   resp => {
    //     console.log('success response = ' + JSON.stringify(resp));
    //   },
    //   err => {
    //     console.log("this is my error = = " + JSON.stringify(err));
    //   }
    // );

    // net.sendRequest(
    //   "/services/data/v47.0/sobjects/ACE_Booking__C/",
    //   "describe",
    //   response => {
    //     console.log("############################" +JSON.stringify(response));
    //   },
    //   err => {
    //     alert("error - " + JSON.stringify(err));
    //   },
    //   "GET",
    //   { salesConsultantIds: salesConsultantIds },
    //   {
    //     "Content-Type": "application/json",
    //     Authorization: "Bearer " + usable_access_token
    //   },
    //   null,
    //   null,
    //   false
    // );

    // net.query("SELECT ID, Name, UnitPrice, Product2Id,Product2.Type__c, Product2.Name, Product2.Parent_Product__c FROM PriceBookEntry WHERE((Product2.Parent_Product__c = '01t5D000002cKdcQAE' OR Product2Id = '01t5D000002cKdcQAE') AND Product2.Type__c != 'Vehicle') ORDER BY Product2.Type__c Desc", (data) => {
    //   data.records.map((r) => {
    //     if(r.Product2.Type__c == 'RSA') {
    //       console.log(JSON.stringify(r.Product2.Name));
    //     }
    //   })
    // },
    // (err) => {
    //   console.log("Error : " + err);
    // });
  },
  failure => alert("oauth failure = " + failure)
);

/*************/

// SELECT ID, Name, Phone, MobilePhone, (SELECT Id, Dealer__c, StageName FROM Enquiries__r WHERE(StageName !=: 'Delivered' AND StageName !=: 'Lost')) FROM Contact WHERE Phone =: searchQuery OR MobilePhone =: searchQuery OR Name like: nameSearch

// import enquiryPickList  from './PicklistHelpers/EnquiryPickListHelper';

class Demo extends Component {
  render() {
    // const customData = require("./EnquiryPickList.json");
    // // console.log("custom data  : " + customData);
    // let picklistValues = {};

    // customData.fields.map((field, index) => {
    //   /*if (field.picklistValues.length) {
    //     //console.log('' + index + ' - ' + field.name);
    //     picklistValues[field.name] = field.picklistValues.map(pick => {
    //       return pick.label;
    //     });
    //   }*/
    //   console.log(index + ' - label = ' + field.label + ', name = ' + field.name);
    // });

    // console.log(JSON.stringify(picklistValues));

    // const customData = require("./RSAShieldAccessoriesPickList.json");

    // console.log(JSON.stringify(customData));
    // console.log("okay");

    return <View></View>;
  }
}

AppRegistry.registerComponent("sf_mahindra", () => App);
