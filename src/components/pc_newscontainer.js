import React from 'react';
import { Row, Col, Tabs, Carousel } from 'antd';
import PCNewsBlock from "./pc_news_block";
import PCNewsImageBlock from "./pc_news_image_block";
import PCProduct from './pc_products';
import img1 from '../images/carousel_1.jpg';
import img2 from '../images/carousel_2.jpg';
import img3 from '../images/carousel_3.jpg';
import img4 from '../images/carousel_4.jpg';
const TabPane = Tabs.TabPane;

export default class PCNewsContainer extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            sepped: 500,
            slidesToShow: 1,
            autoplay: true
        }
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="container">
                        <div className="leftContainer">
                            <div className="carousel">
                                <Carousel {...settings}>
                                    <div><img src={img1} alt="img1" /></div>
                                    <div><img src={img2} alt="img2" /></div>
                                    <div><img src={img3} alt="img3" /></div>
                                    <div><img src={img4} alt="img4" /></div>
                                </Carousel>
                            </div>
                            <PCNewsImageBlock count={6} type="guoji" width="400px" cardTitle="国际头条" imageWidth="112px" />
                        </div>
                        <Tabs className="tabs_news">
                            <TabPane tab="新闻" key="1">
                                <PCNewsBlock count={22} type="top" width="100%" bordered="false" />
                            </TabPane>
                            <TabPane tab="国际" key="2">
                                <PCNewsBlock count={22} type="guoji" width="100%" bordered="false" />
                            </TabPane>
                        </Tabs>
                        <Tabs className="tabs_product">
                            <TabPane tab="ReactNews 产品" key="1">
                                <PCProduct />
                            </TabPane>

                        </Tabs>
                        <PCNewsImageBlock count={8} type="guonei" width="100%" cardTitle="国内新闻" imageWidth="120px" />

                        <PCNewsImageBlock count={16} type="yule" width="100%" cardTitle="娱乐新闻" imageWidth="120px" />


                    </Col>

                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}