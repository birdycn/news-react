import React from 'react';
import { Row, Col, BackTop } from 'antd';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import CommonComment from "./common_comment";
export default class MobileNewsDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            newsItem: ''
        }
    }

    componentDidMount() {
        var myFetchOptions = {
            method: 'GET'
        }
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.match.params.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
            this.setState({ newsItem: json });
            document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
        })
    }

    createMarkup() {
        return { __html: this.state.newsItem.pagecontent };
    }

    render() {

        return (
            <div>
                <MobileHeader />
                <div id="mobileDetailsContainer">

                <div id="ucmbileList">
                <Row>
                            <Col span={24} className="container">
                                <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
                                <hr />
                                <CommonComment uniquekey={this.props.match.params.uniquekey} />
                            </Col>

                        </Row>
                        <MobileFooter />
                        <BackTop />
                    </div>
                </div>
            </div>
        )
    }
}