import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import './hello.css'; 
import store from './shopStore';

class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            qty:Number(this.props.quantity)
        }
    }

    increaseQuantity=(event) => {
        this.setState((prevState) => {return {qty:prevState.qty + 1}})
       
        var action= {
            type: 'INCREASE_QTY',
            data: {
                unitPrice: this.props.price,
                quantity: this.state.quantity
            }
        };
        store.dispatch(action);
     
    }

    render() {
        return (
            <div>
                <h6>Item id: {this.props.itemId}</h6>
                <h6>Item name: {this.props.itemName}</h6>
                <h6>Item price: {this.props.itemPrice}</h6>
            
                <div className="input-group">
                    <div className="input-group-prepend">
                        <button className="btn btn-danger" type="button">-</button>
                    </div>
                    <input type="text" value={this.state.qty} />
                    <div className="input-group-append">
                    <button className="btn btn-success" onClick={this.increaseQuantity} type="button">+</button>
                    </div>
                </div>
            
            </div>
        )
    }
}

class Checkout extends React.Component {
    constructor() {
        super();
        this.state= {
            totalPrice: 0
        }
    }

    render() {
        store.subscribe(() => this.setState({totalPrice:store.getState().price}) );
        return(
            <div>
                <h5>Total price is : </h5>
            </div>
        )
    }
}

function renderPage() {
    
    return (
        <div>
            <Item itemId="100" itemName="Mobile" price="100" quantity="0"/><hr/>
            <Item itemId="200" itemName="Shirt" price="20" quantity="0"/>
        </div>
    )
}



ReactDOM.render(
    renderPage(),
    document.getElementById('root')
  
  
  );


