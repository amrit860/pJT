import React, { Component } from 'react'
import axios from 'axios';
import { httpClient } from '../../../utils/httpclient';
const defaultForm = {
    name: '',
    category: '',
    brand: '',
    description: '',
    color: '',
    tags: '',
    manuDate: '',
    expiryDate: '',
    image: '',
    discountedItem: '',
    discountTpye: '',
    discount: '',
    warrantyItem: '',
    warrantyPeriod: '',
    category: ''
}

export default class AddProductForm extends Component {
    constructor() {
        super();
        this.state = {
            data: {...defaultForm},
            err: {...defaultForm},
            isSubmitting: false,
            isValidForm: false
        }
    }
    handleChange = e => {
        let { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            value = checked
        }
        this.setState((pre) => ({
            data: {
                ...pre.data,
                [name]: value
            }
        }),()=>{
            this.validateForm(name);
        })
    }
    validateForm(fieldName){
        let errMsg;
        switch(fieldName){
            case "category":
                errMsg=this.state.data[fieldName]
                ?""
                :"category is required"
                break;
                default:
                    break;
        }
        this.setState((pre)=>({
           error:{
               ...pre.error,
               [fieldName]:errMsg
           }     
        }),()=>{
            this.checkFormValidity();
        })
         
    } 
    checkFormValidity(){
        const{error}=this.state;
        let errors=Object
        .values(error)
        .filter(err=>err);
        this.setState({
            isValidForm:errors.length ===0,
        })
    }
    handleSubmit=e=>{
        e.preventDefault();
        this.setState({
            isSubmitting:true
        });
        httpClient.post('/product',
        this.state.data)
    //         headers:{
    //         "content-Type":"application/json",
    //     },
    //     params:{},
    //     responseType:"json"
    // }
    // )

  .then(response => {
        // notify.showSuccess('welcome ${response.data.username}')
        console.log("success in axios call>>", response);
        // localStorage.setItem("token", response.data.token);
        // localStorage.setItem("user", JSON.stringify(response.data.product));
        this.props.history.push("/View product");
      })
      .catch(err => {
        console.log("error in axios call>>", err.response)
      })
      .finally(() => {
        this.setState({
          isSubmitting: false
        })
      })
  };

    render() {
        let discountContent = this.state.data.discountedItem
            ?
            <>
                <label>Discount Type</label>
                <input className="form-control" type="text" value={this.state.data.discountTpye} placeholder="DiscountType" name="discountType" onChange={this.handleChange}></input>
                <label>Discount</label>
                <input className="form-control" type="text" value={this.state.data.discount} placeholder="Discount" name="discount" onChange={this.handleChange}></input>
            </>
            : "";

        let warrantyContent = this.state.data.warrantyItem
            ?
            <>
                <label>warrantyPeriod</label>
                <input className="form-control" type="text" placeholder="WarrantyPeriod" name="warrantyPeriod" onChange={this.handleChange}></input>
            </>
            : "";

        let btn = this.state.isSubmitting
            ? <botton disabled={true} className="btn btn-info">submitting</botton>
            : <botton disabled={!this.state.isValidForm} type="submit" className="btn btn-primary">submit</botton>
        return (
            <>
                <h2>Add Product </h2>
                <form className="form-group" onSubmit={this.handleSubmit}>

                    <label>Name</label>
                    <input className="form-control" type="text" value={this.state.data.name} placeholder="Name" name="name" onChange={this.handleChange}></input>
                    <label>Descrition </label>
                    <input className="form-control" type="text" value={this.state.data.description} placeholder="Description" name="description" onChange={this.handleChange}></input>
                    <label>Color</label>
                    <input className="form-control" type="text" value={this.state.data.color} placeholder="Color" name="color" onChange={this.handleChange}></input>
                    <label>Category</label>
                    <input className="form-control" type="text" value={this.state.data.category} placeholder="Category" name="category" onChange={this.handleChange}></input>
                    <p className="danger">{this.state.category}</p>
                    <label>Brand</label>
                    <input className="form-control" type="text" value={this.state.data.brand} placeholder="Brand" name="brand" onChange={this.handleChange}></input>
                    <label>Price</label>
                    <input className="form-control" type="number" value={this.state.data.price} placeholder="Price" name="price" onChange={this.handleChange}></input>
                    <label>Tags</label>
                    <input className="form-control" type="text" value={this.state.data.tags} placeholder="Tags" name="tags" onChange={this.handleChange}></input>
                    <label>Manu Date</label>
                    <input className="form-control" type="date" value={this.state.data.manuDate} placeholder="ManuDate" name="manuDate" onChange={this.handleChange}></input>
                    <label>Expiry Date</label>
                    <input className="form-control" type="date" value={this.state.data.expiryDate} placeholder="ExpiryDate" name="expirydate" onChange={this.handleChange}></input>
                    <input type="checkbox" name="discountedItem" checked={this.state.data.discountedItem} onChange={this.handleChange}></input>
                    <label>DiscountedItem</label><br></br>

                    {discountContent}
                    <input type="checkbox" name="warrantyItem" checked={this.state.data.warrantyItem} onChange={this.handleChange}></input>
                    <label>warrantyItem</label><br></br>
                    {warrantyContent}
                    {btn}
                </form>


            </>
        )
    }
}