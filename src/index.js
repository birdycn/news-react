import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter  as Router } from 'react-router-dom'
import 'antd/dist/antd.css';
import PCIndex from './components/pc_index.js';
import PCNewsDetails from './components/pc_news_details';
import MobileNewsDetails from './components/mobile_news_details';
import MobileIndex from './components/mobile_index';
import MediaQuery from 'react-responsive';
import PCUserCenter from './components/pc_usercenter'
import MobileUserCenter from './components/mobile_usercenter'
export default class Root extends React.Component {
    render() {
        return (
            
            <Router>
                <div>
                    <MediaQuery query='(min-device-width:1224px)'>
                        <Route path="/details/:uniquekey" component={PCNewsDetails}>
                        </Route>
                        <Route path="/usercenter" component={PCUserCenter}>
                        </Route>
                        <Route path="/" component={PCIndex}>
                        </Route>
                    </MediaQuery>
                    <MediaQuery query='(max-device-width:1224px)'>
                        <Route path="/details/:uniquekey" component={MobileNewsDetails}>
                        </Route>
                        <Route path="/usercenter" component={MobileUserCenter}>
                        </Route>
                        <Route path="/" component={MobileIndex}>
                        </Route>
                    </MediaQuery>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('mainContainer'));