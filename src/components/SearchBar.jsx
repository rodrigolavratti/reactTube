import React, {Component} from "react";
import {Segment, Input} from 'semantic-ui-react'

class SearchBar extends Component {

    pesquisaTermo = e => {
        if(e.keyCode === 13) {
            const termo = e.target.value
            console.log(termo)
        }
    }

    render() {
        return (
            <div className="search-bar">
                <Segment stacked>
                    <Input onKeyDown={(e) => this.pesquisaTermo(e)} icon="search" size="large" placeholder="Search..." />
                </Segment>
            </div>
        )
    }
}
export default SearchBar