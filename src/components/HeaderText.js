import React, { Component } from 'react'

export default class HeaderText extends Component {
    render() {
        return (
            
            <h1 style={{color:"yellow"}}>{this.props.children}</h1>
            
        )
    }
}