import React, { Component } from 'react'
const defaultForm={
    name:'',
    category:'',
    brand:'',
    description:'',
    color:'',
    tags:'',
    manuDate:'',
    expirydate:'',
    image:'',
    discountedItem:'',
    discountTpye:'',
    discount:'',
    warrantyItem:'',
    warrantyPeriod:''
}

export default class EditProductForm extends Component {
    constructor(){
        super();
        this.state={
            data:{},
            err:{},
            isSubmitting:false,
            isValidForm:false
        }
    }
    render() {
        let btn=this.state.isSubmitting
        ?<botton disabled={true} className="btn btn-info">submitting</botton>
        :<botton disabled={!this.state.isValidForm} type="submit" className="btn btn-primary">submit</botton>
        return (
            <>
            <h2>Edit Product </h2>
            <form className="form-group" onSubmit={this.handleSubmit}> 
           
            <label>Name</label>
            <input className="form-control" type="text" placeholder="Name" name="name" onChange={this.handleChange}></input>
            <label>Descrition </label>
            <input className="form-control" type="text" placeholder="Description" name="description" onChange={this.handleChange}></input>
            <label>Color</label>
            <input className="form-control" type="text" placeholder="Color" name="color" onChange={this.handleChange}></input>
            <label>Brand</label>
            <input className="form-control" type="text" placeholder="Brand" name="brand" onChange={this.handleChange}></input>
            <label>Price</label>
            <input className="form-control" type="number" placeholder="Price" name="price" onChange={this.handleChange}></input>
            <label>Tags</label>
            <input className="form-control" type="text" placeholder="Tags" name="tags" onChange={this.handleChange}></input>
            <label>Manu Date</label>
            <input className="form-control" type="date" placeholder="ManuDate" name="manuDate" onChange={this.handleChange}></input>
            <label>Expiry Date</label>
            <input className="form-control" type="date" placeholder="ExpiryDate" name="expirydate" onChange={this.handleChange}></input>
            <input  type="checkbox"  name="discountedItem" onChange={this.handleChange}></input>
            <label>DiscountedItem</label><br></br>
            <label>Discount Type</label>
            <input className="form-control" type="text" placeholder="DiscountType" name="discountType" onChange={this.handleChange}></input>
            <label>Discount</label>
            <input className="form-control" type="text" placeholder="Discount" name="discount" onChange={this.handleChange}></input>
            
            <input  type="checkbox"  name="warrantyItem" onChange={this.handleChange}></input>
            <label>warrantyItem</label><br></br>
            <label>warrantyPeriod</label>
            <input className="form-control" type="text" placeholder="WarrantyPeriod" name="warrantyPeriod" onChange={this.handleChange}></input>
            {btn}
            </form>

                
            </>
        )
    }
}
