import React from "react";



class Book extends React.Component{

    constructor() {
        super();
    }

    

    render = () => {
        var note = null;
        var element = 
        <div key={this.props.book.prodId} className="book" style={{"width": 200}}>
            <div className="book-body">
            <h5 className="book-title text-center">{this.props.book.title}</h5>
            <ol className="book-text">
                <li>Price: {this.props.book.price}</li><br/>
                <li>Publisher: {this.props.book.publisher}</li>{note}<br/>
                <li>Authory: {this.props.book.author}</li><br/>
            </ol>
            </div>
        </div>
        return (
           element
        );
    }
}


export default Book;