import React, { Component } from 'react';

export default class DataTable extends Component {
    render(){
        return(
            <tr>
                <td>
                    {this.props.obj._id}
                </td>
                <td>
                    {this.props.obj.email}
                </td>
                <td>
                    {this.props.obj.password}
                </td>
            </tr>
        )
    }
}