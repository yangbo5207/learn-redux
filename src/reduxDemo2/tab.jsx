import React, { Component } from 'react';
import './style.scss';

const navs = [1, 2, 3];

class Tab extends Component {
    render() {
        const { index, clickHander  } = this.props;
        return (
            <div id="wrapper">
                <nav>
                    {navs.map((item, i) => <div className={index == i ? 'nav-item active' : 'nav-item'} onClick={clickHander.bind(null, i)} key={i}>{item}</div>)}
                </nav>
                <div className="content">
                    {navs.map((item, i) => <div className={index == i ? 'content-item active' : 'content-item'} key={i}>{item}</div>)}
                </div>
            </div>
        )
    }
}

export default Tab;
