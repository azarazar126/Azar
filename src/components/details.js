import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const data = this.props.barData.map(data => {
            return(
            <div key={data.title}>
                <h4>{data.title}</h4>
                <h5>{data.bps} bps</h5>
                <h5>{data.percentage} of total {data.total}</h5>
            </div>
            );
        });

        return(
            <div>
                {data}
            </div>
        );
    }
}

function mapStateToProps({ barData }){
    return { barData };
}

export default connect(mapStateToProps, null)(Details);