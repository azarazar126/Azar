import React, { Component } from 'react';
import SingleBar from './single_bar';

class MultiBar extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const SingleBarsCollection = this.props.values.map((value) => {
            return (
                <SingleBar
                key={value.title}
                title={value.title}
                left={value.left}
                right={value.right} />
            );
        });

        return(
            <div>
                {SingleBarsCollection}
            </div>
        );
    }
}

export default MultiBar;