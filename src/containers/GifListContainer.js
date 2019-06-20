import React, { Component } from "react"
import GifList from "../components/GifList"
import GifSearch from "../components/GifSearch"

export default class GifListContainer extends Component {
    state = {
        gifList: [],
    }
    search = searchTerm => {
        const url = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`
        fetch(url)
            .then(response => response.json())
            .then(response => {
                response.data.length = response.data.length > 3
                    ? 3
                    : response.data.length

                const gifList = response.data.map(image => {
                    return {
                        id: image.id,
                        image: image.images.original.url,
                    }
                })

                this.setState({ gifList })
            })
    }
    render(){
        return (<div>
            <GifSearch handleSearch={this.search} />
            <GifList gifList={this.state.gifList} />
        </div>)
    }
}
