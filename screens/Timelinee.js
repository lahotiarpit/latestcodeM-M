import React, { Component } from 'react';
import Timeline from 'react-native-timeline-flatlist'

export default class Timelinee extends Component {
    constructor(props){
        super(props);
        this.data = [
          {time: '09:00', title: 'FollowUp 1', description: 'FollowUp 1 Description'},
          {time: '10:45', title: 'FollowUp 2', description: 'FollowUp 2 Description'},
          {time: '12:00', title: 'FollowUp 3', description: 'FollowUp 3 Description'},
          {time: '14:00', title: 'FollowUp 4', description: 'FollowUp 4 Description'},
          {time: '16:30', title: 'FollowUp 5', description: 'FollowUp 5 Description'}
        ]
      } 
      
    render() {
        return(
            <Timeline
            style = {{marginTop : 10}}
            data={this.data}
            circleColor  = 'green'
            separator = {true}
            seperatorColor = 'voilet'
            lineColor = '#5920CB'
          />
        )
    }
}