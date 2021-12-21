import React, { Component } from 'react'
import { Card, Col, Button } from 'react-bootstrap';

export default class ItemCard extends Component {

    constructor() {
        super();
        this.state={
            clicked:false
        };
    }

    handleRenderItem=()=>{
        this.setState({clicked:true})
    }

    handleAddToCart=(item)=>{
        this.props.addToUserCart(item);
    }

    render() {
        return (
            <Col>
            {/* come back for single item */}
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
                    <button style={{backgroundColor:"white", border:'none', color:'blue'}} onClick={()=>this.handleRenderItem()}>See More</button>
                    <a href="/cart"><Button   variant="primary" >Add To Cart</Button></a>
                    

                    <Button  style={{margin:"5px 0px"}} variant="success" onClick={()=>this.props.goToEditItem(this.props.item)} >Edit Item</Button>
                    <Button  style={{margin:"5px 0px"}} variant="danger" onClick={()=>this.props.deleteItem(this.props.item.id)} >Delete Item</Button>
                </Card.Body>
                </Card>
            </Col>
        )
    }
}