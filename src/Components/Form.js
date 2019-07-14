import React, {Component} from 'react';

import PropTypes from 'prop-types';

class Form extends Component {
    render(){
        return (
            <div>
                <form>
                    <input name="name" id="name" placeholder="enter a name"/>
                    <br/>
                    <input name="phone" id="phone" placeholder="enter a phone"/>
                <button>Add</button>
                </form>
            </div>
        );
    }
}

export default Form;