import React, { Component } from 'react'
import axios from 'axios'

export default class viewProductComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: []
        }
    }

    componentDidMount() {
        axios.get("/product", {}, true)
            .then((response) => {
                this.setState({
                    product: response.data
                })

            })
            .catch(err => {

            })
    }
    editProduct = (id) => {

    }
    deleteProduct = (id, index) => {

    }



    render() {
        let tableContent = (this.state.product || []).map((item, index) => (
            <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>{item.createdAt}</td>
                <td>
                    <button onClick={() => this.state.editProduct(item._id)} className="btn btn-info">edit</button>
                    <button onClick={() => this.state.deleteProduct(item._id, index)} className="btn btn-danger">delete</button>
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
