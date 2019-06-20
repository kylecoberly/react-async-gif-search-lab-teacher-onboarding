import React, { Component } from "react"

export default class GifSearch extends Component {
    state = {
        searchTerm:""
    }
    handleSubmit = event => {
        event.preventDefault()
        this.props.handleSearch(this.state.searchTerm)
    }
    updateSearchTerm = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }
    render(){
        return <form onSubmit={this.handleSubmit}>
            <input onChange={this.updateSearchTerm} placeholder="Search for gif" value={this.state.searchTerm} />
            <input type="submit" value="Search" />
        </form>
    }
}
