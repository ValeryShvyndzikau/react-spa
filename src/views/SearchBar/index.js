import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SearchBar.scss';

class Search extends Component {
    render() {
        return (
            <input
                type="text"
                placeholder="Search by tags"
            />
        );
    }
}

const mapStateToProps = (store) => {
    return {
        posts: store.posts.items,
        status: store.posts.status
    };
};

export default connect(mapStateToProps)(Search);
