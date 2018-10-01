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
    counter = () => {
        for (var i = 0; i < 5; i++) {
            (function (i) {
                setTimeout(function () {
                    console.log("hello");
                }, 3000*i);
            })(i);
        };  
    }

    countingOn = () => {
        const ubpm =  120;
        const countArr = this.state.countArr;
        let count = 0;
        this.setState({ counting: !this.state.counting });
        // while(this.state.countArr == true) {
        for (let i = 1; i <= countArr.length; i++) {
            (function (i) {
                setTimeout(function () {
                    console.log(i);
                }, 3000*i);
            })(i);
        };
    // }  
}

        
        
        
        // }
        
    // countingOn = () => {
    //     this.setState({ counting: !this.state.counting });
        
    //     const ubpm = 60 / 120;
    //     let count = 0;
    //     const countArr = this.state.countArr;
    //     for(let i = 0; i < countArr.length; i++){
    //         setTimeout(function(){
    //             ++count
    //             console.log('toggle on', count);
    //         },
    //             500
    //         )
    //     }
        
    
        // while(this.state.counting == true){
        //         for(let i = i; i <= countArr.length; i++){
        //             setTimeout(function(){
        //                     return console.log([i])},
        //                     ubpm
        //             )};
        //         //    return console.log('1');
        //         }
                
                
    // }

    // countingOff = () => {
    //     this.setState({ counting: false });
    //     console.log('countingOff');
    // }

    // countingOff

    render(){

        let textToggle;
        let buttonToggle;

        if (this.state.counting == false){
            textToggle = (
                <Text style={styles.maincolor}>Touch To Start</Text>
            );
            
        } 
        if (this.state.counting == true) {
            textToggle = (
            <Text style={styles.maincolor}>Touch To Stop</Text>
            );
        }
        

        return(
            <TouchableOpacity onPress={this.countingOn} style={styles.container}>

                {textToggle}
                {/* <Text style={styles.maincolor} >Press To Start</Text> */}
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