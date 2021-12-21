import React, { Component } from 'react';

class Cart extends Component {
    constructor() {
        super();
        this.state={
            cart:[]
        };
    };

    render() {
        const styles={
            pageStyles:{
                backgroundColor: "green",
                padding:" 80px",
               
            },

            itemImg:{
                maxHeight:"100px", 
                width:"130px", 
                objectFit:"contain", 
                marginTop:"10px", 
                marginLeft:"10px", 
                
            },
            cartTotal:{
                color: "azure"
            }
        };

        return (
            <div style={styles.pageStyles}>
                <center><h1>Cart</h1></center>
                {this.props.cart?.length>0 ?
                <>
                <p>Cart Total: <b>${this.props.cartTotal}</b></p>
                <ul >
                    {this.props.cart.map(item=>(
                        <li key={this.props.cart.indexOf(item)}>
                            {this.props.cart.indexOf(item)+1}. <b>{item.title.substring(0,40)}</b> <div style={{float:"right"}}><b>${item.price}</b></div>
                            <br/><img src={item.image} style={styles.itemImg} alt={item.title.substring(0,20)+"... image"}/>
                            {item.category}
                            <br/>
                        </li>
                    ))}
                </ul>
                </>
                : "Shopping cart is empty"}
            </div>
        );
    }
}

export default Cart;