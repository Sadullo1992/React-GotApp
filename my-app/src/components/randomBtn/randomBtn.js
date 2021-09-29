import React, {Component} from 'react';
import { Button } from 'reactstrap';


export default class RandomBtn extends Component {
    render() {
        const {onFresh} = this.props
        return (
            <Button 
                color="secondary"
                onClick={onFresh}
            >Refresh Char</Button>
        )
    }
}

