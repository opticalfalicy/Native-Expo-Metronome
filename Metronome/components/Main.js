import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { PlaySound, StopSound, PlaySoundRepeat, PlaySoundMusicVolume } from 'react-native-play-sound';

// const SOUNDLIST = [
//     new SoundlistItem(
//         'block',
        
//     )
// ]

export default class Main extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            // measure: 4,
            // count: 0,
            countArr: [1, 2, 3, 4],
            counting: false,
        };
        
         
    }


    // counter = () => {
    //     const countArr = this.state.countArr;
    //     while(this.state.counting != false){
    //         setTimeout(function(){
    //                 for(let i = i; i <= countArr.length; i++){
    //                 console.log([i],
    //                 this.ubpm
    //             )                
    //         }
    //     })};
        

    // }

    countingOn = () => {
        this.setState({ counting: !this.state.counting });
        console.log('toggle on', this.state.counting);
        // const ubpm = 60 / 120;
        // const countArr = this.state.countArr;
        // while(this.state.counting == true){
        //     for(let i = i; i <= countArr.length; i++){
        //     setTimeout(function(){
        //         console.log([i])},
        //             ubpm
        // )};
        // }
        
        
    }

    countingOff = () => {
        this.setState({ counting: false });
        console.log('countingOff');
    }

    // countingOff

    render(){

        let textToggle;
        let buttonToggle;

        // if (this.state.counting == false){
        //     textToggle = (
        //         <Text style={styles.maincolor} onPress={this.countingOn}>Press To Start</Text>
        //     );
            
        // } 
        // else {
        //     <Text style={styles.maincolor} onPress={this.countingOff}>Off</Text>
        // }
        

        return(
            <TouchableOpacity onPress={this.countingOn} style={styles.container}>

                {/* {textToggle} */}
                <Text style={styles.maincolor} >Press To Start</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        
        borderColor: 'rgb(225, 132, 195)',
        borderStyle: 'solid',
        borderWidth: 5,
        borderRadius: 100,
        width: 180,
        height: 180,
        paddingTop: 70,
    },
    maincolor: {
        color: 'rgb(225, 102, 205)',
        textAlign: 'center',
        
    }
})