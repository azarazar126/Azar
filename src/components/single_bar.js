import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBarData } from '../actions/index';

class SingleBar extends Component {
    constructor(props){
        super(props);
    }

    sendDataToDetails(title, total, bps, percentage){
        this.props.fetchBarData(title, total, bps, percentage);
    }

    deleteDataFromDetails(){
        this.props.barData;
        console.log(this.props.barData);
    }

    render(){
        const total = this.props.right.value + this.props.left.value;
        const rightPercentage = this.props.right.value/total * 100 + '%';
        const leftPercentage = this.props.left.value/total * 100 + '%';

        const styleLeft = {
            backgroundColor: this.props.left.color,
            width: leftPercentage, //not reall only have to convert to percentage (for later)
            display: 'inline-block',
            padding: '4px 0px 0px 0px'
        };

        const styleRight = {
            backgroundColor: this.props.right.color,
            width: rightPercentage,
            display: 'inline-block',
            padding: '4px 0px 0px 0px'
        };

        return(
            <div>
                <div className="data">
                    <h3 className="leftAlign">{this.props.title}</h3>
                    <h3 className="rightAlign">Total: {total}</h3>
                </div>

                <div className="block"></div>

                <div style={styleLeft} className="hovering"
                onMouseEnter={() => this.sendDataToDetails(this.props.title,total, this.props.left.value, leftPercentage)}
                onMouseLeave={() => this.props.barData.pop()}>
                    <h2 className="leftAlignP">{leftPercentage}</h2>
                </div>

                <div style={styleRight} className="hovering"
                onMouseEnter={() => this.sendDataToDetails(this.props.title,total, this.props.right.value, rightPercentage)}
                onMouseLeave={() => this.props.barData.pop()}>
                    <h2 className="rightAlignP">{rightPercentage}</h2>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ barData }){
    return { barData };
}

export default connect(mapStateToProps, { fetchBarData })(SingleBar);