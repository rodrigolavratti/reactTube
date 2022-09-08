import {Component} from "react";
import React from "react";
import {connect} from 'react-redux'
import {List, Image} from 'semantic-ui-react'

class VideoList extends Component {

    renderVideo(video) {
        return (
            <List animated verticalAlign="middle">
                <List.Item>
                    <Image src={video.snippet.thumbnails.default.url} />
                    <List.Content>
                        <List.Header>{video.snippet.title}</List.Header>
                    </List.Content>
                </List.Item>
            </List>
        )
    }

    render() {
        return (
            <div className="video-list">
                {
                    this.props.videos.map(video => {
                        console.log("meu vídeo", video)
                        return this.renderVideo(video)
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        videos: state.Busca.videos,
        carregando: state.Busca.carregando,
        erro: state.Busca.erro
    }
}

export default connect(mapStateToProps, null)(VideoList)