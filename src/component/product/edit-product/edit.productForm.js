import React, { Component } from 'react'
import Axios from 'axios';
import notify from './../../../utils/notification';

const defaultForm = {
    name: '',
    category: '',
    brand: '',
    description: '',
    color: '',
    price: '',
    tags: '',
    manuDate: '',
    expirydate: '',
    image: '',
    discountedItem: '',
    discountType: '',
    discount: '',
    warrantyItem: '',
    warrantyPeriod: ''
}




export default class EditProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: { ...defaultForm },
            err: { ...defaultForm },
            isSubmitting: false,
            isValidForm: false
        }
    }

    componentDidMount() {
        const prodId = this.props.match.params.id
        Axios.get('http://localhost:2020/api/product/' + prodId, {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }).then((response) => {
            const data = response.data[0]
            if (typeof data.discount === 'object') {
                data.discountType = data.discount.discountType?data.discount.discountType:'';
                data.discountedItem = data.discount.discountedItem;
                data.discount = data.discount.discount?data.discount.discount:'';
            }
            if (typeof data.warranty === 'object') {
                data.warrantyItem = data.warranty.warrantyItem;
                data.warrantyPeriod = data.warranty.warrantyPeriod;
                data.warranty=null;
            }
            this.setState((prevState) => {
                return {
                    data: {
                        ...prevState.data,
                        ...data
                    }   
                }
            })
        }).catch(err => console.log(err))
    }

    handleChange = e => {

        let { name, value, type, checked } = e.target
        if (type === 'checkbox') {
            value = checked;
        }
        this.setState((prevState) => ({
            data: {
                ...prevState.data,
                [name]: value
            }
        }))
    }

    handleSubmit=e=>{
       e.preventDefault();
       console.log(this.state.data)
       Axios.put(`http://localhost:2020/api/product/${this.state.data._id}`,this.state.data,{
           headers:{
               "Content-Type":'application/json',
               "Authorization":localStorage.getItem('token')
           }
       }).then((response)=>{
            notify.showSuccess('Product updated succesfully')
            this.props.history.push('/View product')
       }).catch(err=>console.log(err));
    }

    render() {
        let btn = this.state.isSubmitting
            ? <button disabled={true} className="btn btn-info">submitting</button>
            : <button type="submit" className="btn btn-primary">submit</button>
        return (
            <>
                <h2>Edit Product </h2>
                <form className="form-group" onSubmit={this.handleSubmit}>

                    <label>Name</label>
                    <input className="form-control" type="text" placeholder="Name" name="name" value={this.state.data.name} onChange={this.handleChange} ></input>
                    <label>Descrition </label>
                    <input className="form-control" type="text" placeholder="Description" name="description" value={this.state.data.description} onChange={this.handleChange}></input>
                    <label>Color</label>
                    <input className="form-control" type="text" placeholder="Color" name="color" value={this.state.data.color} onChange={this.handleChange}></input>
                    <label>Brand</label>
                    <input className="form-control" type="text" placeholder="Brand" name="brand" value={this.state.data.brand} onChange={this.handleChange}></input>
                    <label>Price</label>
                    <input className="form-control" type="number" placeholder="Price" name="price" value={this.state.data.price} onChange={this.handleChange}></input>
                    <label>Tags</label>
                    <input className="form-control" type="text" placeholder="Tags" name="tags" value={this.state.data.value} onChange={this.handleChange}></input>
                    <label>Manu Date</label>
                    <input className="form-control" type="date" placeholder="ManuDate" name="manuDate" value={this.state.data.manuDate} onChange={this.handleChange}></input>
                    <label>Expiry Date</label>
                    <input className="form-control" type="date" placeholder="ExpiryDate" name="expirydate" value={this.state.data.expirydate} onChange={this.handleChange}></input>
                    <input type="checkbox" checked={this.state.data.discountedItem ? true : false} name="discountedItem" onChange={this.handleChange}></input>
                    <label>DiscountedItem</label><br></br>
                    <label>Discount Type</label>
                    <input className="form-control" type="text" placeholder="DiscountType" value={this.state.data.discountType} name="discountType" onChange={this.handleChange}></input>
                    <label>Discount</label>
                    <input className="form-control" type="text" placeholder="Discount" name="discount" value={this.state.data.discount} onChange={this.handleChange}></input>

                    <input type="checkbox" checked={this.state.data.warrantyItem ? true : false} name="warrantyItem" onChange={this.handleChange}></input>
                    <label>warrantyItem</label><br></br>
                    <label>warrantyPeriod</label>
                    <input className="form-control" type="text" value={this.state.data.warrantyPeriod} placeholder="WarrantyPeriod" name="warrantyPeriod" onChange={this.handleChange}></input>
                    {btn}
                </form>


            </>
        )
    }
}
