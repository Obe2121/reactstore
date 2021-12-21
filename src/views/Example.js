import React, { Component } from 'react'

export default class Example extends Component {
    constructor(){
        super();
        this.state={
            name: 'Pika',
            students:['Anu', 'McCall', 'Chris', 'Tim', 'Mike', 'David']
        }
        console.log("In Constructor")    
    }

    componentDidMount(){
        console.log("in Component Did Mount")
    }

    componentDidUpdate(){
        console.log("in Component Did Update")
    }

    componentWillUnmount(){
        console.log("in Component Will Unmount")
    }
    render() {
        const styles={
            button:{
                backgroundColor:'blue',
                color:'white',
            },
            text:{
                color:'green', 
                backgroundColor:'yellow',

            }
        }
        const handleSetName=(input_name)=>{
            this.setState({name:input_name}, ()=>console.log(`State has been changed now the name is : ${this.state.name}`))
            console.log("log the name after I do setState", this.state.name)
        }
        return (
            <div>
                {console.log("in render")}
                {this.state.name === 'Pika' ? `Lets play a game ${this.state.name}` : `Did I scare you ${this.state.name}?`}
                <br/>
                <span style={styles.text}>The name is {this.state.name}</span> 
                <br/>
                <button onClick={()=>handleSetName('Boo')} style={styles.button}>Set name to "Boo"</button>
                <button onClick={()=>handleSetName('Pika')} style={styles.button}>Set name to "Pika"</button>
                <div style={{backgroundColor:'red', color:'green', marginTop:'60px'}}>
                    Display a new list element for every item in array
                </div>


                <ul>
                    {this.state.students.map((student, index)=><li key={index}>{student}</li>)}
                </ul>
            </div>
        )
    }
}
