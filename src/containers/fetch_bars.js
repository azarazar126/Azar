import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBars } from '../actions/index';
import _ from 'lodash';
import SingleBar from '../components/single_bar';

class FetchBars extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchBars();
    }

    render(){
        const barz = _.map(this.props.bars, (bar) =>
            {return _.map(bar, (bar2) => {
                const provider = {color: "#007cff", value: bar2.provider};
                const user = {color: "#ffe944", value: bar2.user};
                return(
                    <SingleBar
                    key={bar2.name}
                    title={bar2.name}
                    left={provider}
                    right={user} />
                );
            })});

        if(!barz) return <p>Loading...</p>;

        return(
            <div>
              {barz}
            </div>
        );
    }
}

function mapStateToProps({bars}) {
    return { bars };
}

export default connect(mapStateToProps, { fetchBars })(FetchBars);