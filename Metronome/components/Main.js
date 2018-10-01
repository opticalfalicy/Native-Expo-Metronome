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

    componentDidMount(){
        this.setState({counting: false})
    }


    countingOn = () => {
        this.setState({ counting: true });
        let cntArr = this.state.countArr;
        let i = 0
        let repeat = false;

        // while(i < countArr.length){
        //     for(let j = 0; j < countArr.length; j++){
        //         i++
        //     }
        //     console.log(i)
            
        // }
        // console.log(i)

        // for(let i = 0; i < countArr.length + 1; i++){
        //     if(countArr[i] == countArr.length){
        //      i = 0;
        //     }
        //     console.log(i)
        // }
      
    

        const ubpm = 60000 / 120;
        // let i = 0;
        // this.setState({ counting: !this.state.counting });
        // console.log(this.state.counting)
        // this.counter();
        // while(this.state.countArr == true) {
        // arrLoop = () => {
        while(repeat == false){
            for (i; i < cntArr.length; i++) {
                (function (i) {
                    setTimeout(function () {
                        if(i == cntArr.length){
                            repeat = true;
                        }
                        console.log(cntArr[i]);
                }, ubpm*i);
            })(i);
            console.log('repeat');
        }
        
        //     // if(i == 4){countArr[i] == 0 }
        // };
        // }
    }
}

// arrLoop = (repeat) => {
    //     let cntArr = this.state.countArr;
        
    //     let i = 0;
    //     const ubpm = 60000 / 120;
    //     let reset = false;
    //     let count;
    
    //     for (i; i < cntArr.length; i++) {
    //         (function (i) {
    //             setTimeout(function () {
    //                 if(i == cntArr.length - 1){
    //                     reset = true;
    //                 }
    //                 return count = cntArr[i]
    //             }, ubpm*i);
    //         })(i);
    //         // return count
    //     }
    //     console.log(reset, cntArr[i]);
    //     console.log(count)
    // }


countingOff = () => {
    this.setState({counting: false});
    // console.log(this.state.counting)
}


counter = () => {
    // for (var i = 0; i < 5; i++) {
    //     (function (i) {
    //         setTimeout(function () {
    //             console.log("hello");
    //         }, 3000*i);
    //     })(i);
    // };  
    console.log(this.state.counting);
    if(this.state.counting == true){
        return console.log('yo')
    }
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
        // console.log(this.state.counting);

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

        if (this.state.counting == false){
            buttonToggle = (
        <TouchableOpacity onPress={this.countingOn} style={styles.container}>

                {textToggle}
                {/* <Text style={styles.maincolor} >Press To Start</Text> */}
            </TouchableOpacity>
            )}
        if (this.state.counting == true){
            buttonToggle = (
        <TouchableOpacity onPress={this.countingOff} style={styles.containerOn}>

                {textToggle}
                {/* <Text style={styles.maincolor} >Press To Start</Text> */}
            </TouchableOpacity>
            )}

        


        return(
            <TouchableOpacity >

               {buttonToggle}
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
    containerOn:{
        
        borderColor: 'rgb(250, 255, 255)',
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