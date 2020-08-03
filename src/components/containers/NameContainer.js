import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

//imports
import * as actions from '../actions/index';

class NameContainer extends Component{
    render(){
        return(
            <div>

            </div>
        )
    }

    //ham xu ly
}

//PropType check du lieu
NameContainer.propTypes = {};

const mapStateToProps = (state) => {
    return {
        name : state.params   //state.name ()    props la name
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onName : (params) =>{
            dispatch(actions.action(params));   
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NameContainer);