import React, { Component } from 'react';

export default class AppContent extends Component {
    
    constructor(props) {
        super(props);
        this.handlePostChange = this.handlePostChange.bind(this);
    }

    handlePostChange(posts) {
        this.props.handlePostChange(posts);
    }

    fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then( ( response ) => response.json() )
            .then( json => {
                this.handlePostChange(json);
            })
    }

    clickedItem = x => {
        console.log("clicked: ", x);
    }

    render() {
        return (
            <div>
                { this.props.subject }
                
                <br />
                
                <div className="d-flex justify-content-center mt-2">
                    <button onClick={ this.fetchData } className="btn btn-warning" > Data </button>
                </div>

                <hr />

                <ul>
                    { this.props.posts.map( c => (
                        <li key= { c.id }>
                            <a href="#!" onClick={() => this.clickedItem(c.id)}>
                                { c.title }
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}