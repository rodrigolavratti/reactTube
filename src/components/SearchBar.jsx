import React, {Component} from "react";
import {Segment, Input} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {buscaVideo} from '../store/actions/BuscaVideo'

class SearchBar extends Component {

    constructor(props) {
        super(props)

        //onLoad
        this.props.buscaVideo('Reactjs')
    }

    pesquisaTermo = e => {
        if(e.keyCode === 13) {
            const termo = e.target.value
            console.log(termo)
            this.props.buscaVideo(termo)
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

const mapDispatchToProps = (dispatch) => {
    return {
        buscaVideo: (termo) => dispatch(buscaVideo(termo))
    }
}

export default connect(null, mapDispatchToProps)(SearchBar)