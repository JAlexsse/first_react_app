import React, {Component } from 'react';

export default class AppHeader extends Component {
    constructor(props){
        super(props);
        this.handlePostChange = this.handlePostChange.bind(this);
    }

    handlePostChange(posts){
        this.props.handlePostChange(posts);
    }
    render() {

        return (
            <div>
                <h1> { this.props.title } </h1>
                <h2> { this.props.subtitle } </h2>
                <p>State is { this.props.posts.length } items long. And here there is the list:</p>
            </div>
        );
    }
}