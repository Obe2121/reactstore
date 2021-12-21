import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap'
import ItemCard from '../components/ItemCard'
import axios from 'axios';
import {titleCase} from '../helpers'


class Home extends Component {
    constructor() {
        super();
        this.state={
            categories:[],
            items:[],
            itemStart: 0,
            itemEnd:15
            
        };
    };

    componentDidMount() {
        this.getAllCats();
        this.getAllItems();
    }

    getAllCats = async () =>{
        await axios.get('https://fakestoreapi.com/products/categories')
        .then(response=>{
            this.setState({categories:response.data})
        });
    }

    getAllItems = async () =>{
        await axios.get('https://fakestoreapi.com/products')
        .then(response=>{
            this.setState({items:response.data})
        });
    }

    resetItemCounts = () =>{
        this.setState({itemStart:0, itemEnd:15});
    }

    handleCat = async (id) =>{
        this.resetItemCounts()
        if (id===-1){
            return await this.getAllItems();
        }
        return await this.getCatsItems(id);
        
    }

    getCatsItems=async(id)=>{
        let cat = this.state.categories[id];
        await axios.get(`https://fakestoreapi.com/products/category/${cat}`)
        .then(response=>{
            this.setState({items:response.data})
        });
    }

    handlePrev=()=>{
        const oldStart=this.state.itemStart;
        const oldEnd=this.state.itemEnd;
        this.setState({itemStart:oldStart-15, itemEnd:oldEnd-15});
    }

    handleNext=()=>{
        const oldStart=this.state.itemStart;
        const oldEnd=this.state.itemEnd;
        this.setState({itemStart:oldStart+15, itemEnd:oldEnd+15});
    }

    goToEditItem = (item) => {
        this.setState({itemToEdit:item}, ()=>(
        localStorage.setItem('itemToEdit', JSON.stringify(item))
        ))
        this.setState({redirect:true});
    }

    deleteItem = (id) => {
        axios.delete(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.data)
        .then(json=>console.log(json))
        .then(()=>console.log(`Item number ${id} deleted.`))
    }


    render() {
        const styles = {
            catButton:{
                backgroundColor: "yellow",
                color:"green",
                width: '100%',
                border: '1px solid grey',
                borderRadius: '15px',
                marginBottom:'5px'
            
            },
            pageStyles:{
                backgroundColor: "green",
                padding:"20px",
                minHeight:"94vh"
            },
            
        
            
        }

        return (
            <div style={styles.pageStyles}>
                <Row>
                    <Col md={3}>
                        
                        <center><h3>Categories</h3></center>
                        <hr/>
                        <ul style={{listStyleType:'none'}}>
                           
                            <li>
                                <button style={styles.catButton} onClick={()=>this.handleCat(-1)}>All Items</button>
                            </li>
                            {this.state.categories.map(
                                (c)=><li key={this.state.categories.indexOf(c)}>
                                    <button style={styles.catButton} onClick={()=>this.handleCat(this.state.categories.indexOf(c))}>{titleCase(c)}</button>
                                </li>
                            )}

<li>
                                <a href="/createCats"><button  style={{margin:"5px 0px", color:"green"}} variant="info" >Create New Item</button></a>

                            </li>

                        </ul>
                    </Col>
                    <Col md={9}>
                        
                        <Row>
                            {this.state.items.slice(this.state.itemStart,this.state.itemEnd)
                                .map((i)=><ItemCard item={i} key={i.id} addToUserCart={this.props.addToUserCart} goToEditItem={this.goToEditItem} deleteItem={this.deleteItem}/>)}
                        </Row>
                        <div className="d-flex justify-content-center">
                            {/* <Button variant="danger" className={(this.state.itemStart===0?"disabled":'')} onClick={()=>this.handlePrev()}>{"<< Prev"}</Button>
                            <Button variant="success" className={(this.state.items?.length<=this.state.itemEnd?"disabled":'')} onClick={()=>this.handleNext()}>{"Next >>"}</Button> */}
                        </div>
                    </Col>

                </Row>

                
            </div>
        );
    }
}

export default Home;