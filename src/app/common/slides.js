import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Slides extends Component {
    render() {
        var slidesStyle = {
            container: {},
            slide: {
                hide: {
                    'display': 'none'
                },
                show: {
                    'display': 'block'
                }
            },
            img: {
                'width': '100%',
                'height': '200px'
            }
        }

        return (
            <div style={slidesStyle.container}>
                <div style={slidesStyle.slide.show}>
                    <img style={slidesStyle.img} src={require("../../images/flat.jpg")}/>
                </div>
                <div style={slidesStyle.slide.hide}>
                    <img style={slidesStyle.img} src={require("../../images/fly.jpg")}/>
                </div>
            </div>
        );
    }
};

if(module.hot) {
     module.hot.accept();
 }
