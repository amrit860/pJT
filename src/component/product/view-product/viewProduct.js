import React, { Component } from 'react'
import axios from 'axios'
import notification from '../../../utils/notification';

export default class viewProductComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:2020/api/product", {
            headers:{
                'Content-Type':'application/json',
                'Authorization':localStorage.getItem('token')
            }
        })
            .then((response) => {
                this.setState({
                    product: response.data
                })

            })
            .catch(err => {
                console.log(err.response)
            })
    }
    editProduct = (id) => {
        this.props.history.push('/edit product/'+id)
    }
    deleteProduct = (id, index) => {
        const {product} = this.state;
        axios.delete(`http://localhost:2020/api/product/${id}`,{
            headers:{
                'Content-Type':'application/json',
                'Authorization':localStorage.getItem('token')
            }
        }).then((res)=>{
            notification.showInfo('Product Deleted Successfully')
            product.splice(index,1);
            this.setState({
                product
            })
        }).catch(err=>{
            notification.handleError(err)
        })
    }



    render() {
        let tableContent = (this.state.product || []).map((item, index) => (
            <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>{item.createdAt}</td>
                <td>
                    <button onClick={this.editProduct.bind(this,item._id)} style={{marginRight:'20px'}} className="btn btn-info">Edit <i className="fas fa-edit"></i></button>
                    <button onClick={() => this.deleteProduct(item._id, index)} className="btn btn-danger">Delete <i className="fa fa-trash" ></i></button>
                </td>
            </tr>
        ));
        return (
            <>
                <h2>View Product</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>S.N</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Created At</th>
                            <th>action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {tableContent}
                        </tbody>
                 
                </table>
            </>
        )
    }
}
