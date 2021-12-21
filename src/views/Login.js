import React, { Component } from 'react';
import * as Yup from 'yup';
import {Formik, Form, Field} from 'formik';
import Button from 'react-bootstrap/Button';
//import getToken from '../api/apiBasicAuth';
import { Navigate } from 'react-router';
//import axios from 'axios';

const FormSchema = Yup.object().shape({
    "username":Yup.string().required('Required'),
    
    "password": Yup.string().required('Required')
})

const initialValues={
    username:'',
    password:''
    
}



export default class Login extends Component {
    constructor(){
        super();
        this.state={
            // token:'',
            error:'',
            redirect:false
        };
    };



    handleSubmit = ({username, password}) => {
        console.log('clicked');
        this.props.setToken(); 
        
        fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                username: username,
                password: password
                
            })
        })
        .then(res=>res.json())
        .then(res=>{
            this.props.setToken(res.token)
            return res
        })
        .then(res=>{
            this.props.setName(username)

            

        })

    }
    

   

    render() {
        const styles={
            error: {color:'red'},
            formLabels:{
                color: "blue"
            },
            pageStyles:{
                backgroundColor: "green",
                padding:"120px",
            },
        
        }
        


        return (
            <div style={styles.pageStyles}>
                {this.state.redirect ? <Navigate to={{pathname:"/", props:{token:this.props.token}}}/> :''}
            <Formik
                initialValues={initialValues}
                validationSchema={FormSchema}
                // onSubmit={(values)=>{this.handleSubmit(values);}}
                onSubmit={(values)=>{console.log(values);this.handleSubmit(values)}}
            >
                {
                    ({errors, touched})=>(
                        <Form>
                            <label htmlFor="username" className="form-label">username</label>
                            <Field name="username" className="form-control"/>
                            {errors.username && touched.username ? (<div style={styles.error}>{errors.username}</div>) : null}

                            <label htmlFor="password" className="form-label">Password</label>
                            <Field name="password" className="form-control" type="password"/>
                            {errors.password && touched.password ? (<div style={styles.error}>{errors.password}</div>) : null}
                            <small style={styles.error}>{this.state.error}</small>
                            <br/>
                            <Button type="submit">Login</Button>
                        </Form>
                    )
                }

            </Formik>

            </div>
        );
    };
}