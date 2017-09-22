import React from 'react';
import { Card } from 'antd';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

export default class PCNewsImageBlock extends React.Component {
    constructor() {
        super();
        this.state = {
            news: ''
        }
    }

    componentWillMount() {
        var myFetchOptions = {
            method: 'GET'
        }
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions).
            then(response => response.json()).then(json => this.setState({ news: json }));

    }

    render() {
        const styleImage = {
            display: "block",
            width: this.props.imageWidth,
            height: "98px"
        };
        const styleH3 = {
            width: this.props.imageWidth,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: 'nowrap'
        };
        const { news } = this.state;
        const newsList = news.length ?
            news.map((newsItem, index) => (
                <div key={index} class="imageblock">
                    <Router>
                        <Link to={`details/${newsItem.uniquekey}`} target="_blank">
                            <div class="custom-image">
                                <img alt="" style={styleImage} src={newsItem.thumbnail_pic_s} />
                            </div>
                            <div class="custom-card">
                                <h3 style={styleH3}>{newsItem.title}</h3>
                                <p>{newsItem.antuor_name}</p>
                            </div>
                        </Link>
                    </Router>
                </div>

            ))

            : "没有加载到任何新闻";

        return (
            <div class="topNewsList" style={{width:'100%'}}>
                <Card title={this.props.cardTitle} bordered={true} style={{ width: this.props.width }}>
                    {newsList}
                </Card>
            </div>
        )
    }
}