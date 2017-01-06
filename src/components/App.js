/**
 * Created by TTND on 12/29/2016.
 * */
import React from 'react';

export default class Apps extends React.Component {

    render() {
      console.log('props on app page', this.props);
        return (
            <div>{this.props.children}</div>
        );
    }
}
