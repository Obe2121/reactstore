import React, { Component } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import {Navigate} from 'react-router-dom';
import {axios} from 'axios'
import {addToUserCart} from '../views/Shop';


export default class ItemCard extends Component {

    constructor() {
        super();
        this.state={
            clicked:false
        };
    }

    addToUserCart = (id) => {
        axios.add(`https://fakestoreapi.com/carts/user/2`)
        .then(res=>res.data)
        .then(json=>console.log(json))
        .then(()=>console.log(`Item number ${id} added to cart`))
    }

    handleRenderItem=()=>{
        this.setState({clicked:true})
    }

    handleAddToCart=(id)=>{
        this.props.addToUserCart(id);
    }

    render() {
        return (
            <Col>
            {this.state.clicked ? <Navigate to={`/item/${this.props.item.id}`}/>:""}
                <Card style={{ width: '150px', marginBottom:"25px" }}>
                <Card.Img variant="top" style={{maxHeight:"100px", width:"130px", objectFit:"contain", marginTop:"10px", marginLeft:"10px"}} alt={this.props.item.name+" image"}
                    src={this.props.item.image ?? 'https://res.cloudinary.com/cae67/image/upload/v1629310111/fakebook_shop/no-image_nkau78.png' } />
                <Card.Body>
                    <Card.Title>{this.props.item.title.substring(0,20) ?? "Generic Item"}</Card.Title>
                    <Card.Text>
                    {this.props.item.description.substring(0,50) ?? "Sorry No Description"}
                    </Card.Text>.
                    <Card.Subtitle className="float-end">${this.props.item.price ?? '?.??'} </Card.Subtitle>
                    <br/>
                    <Button style={{backgroundColor:"white", border:'none', color:'blue'}} onClick={()=>this.handleRenderItem()}>See More</Button>
                     <Button variant="primary" type="submit" onClick={()=>this.props.handleAddToCart(this.props.id)}> Add To Cart</Button>
                    

                    <Button  style={{margin:"5px 0px"}} type="submit" variant="success" onClick={()=>this.props.goToEditItem(this.props.item)} >Edit Item</Button>
                    <Button  style={{margin:"5px 0px"}} type="submit" variant="danger" onClick={()=>this.props.deleteItem(this.props.item.id)} >Delete Item</Button>
                </Card.Body>
                </Card>
            </Col>
        )
    }
}