import React from 'react';
import {connect} from 'react-redux';
import {startlogin} from '../action/auth';

const Loginpage = ({startlogin}) =>(
    <div>
        <button onClick={startlogin}>Login</button>
    </div>
)

const mapDispatchToProps= (dispatch) =>({
    startlogin:() => dispatch(startlogin())
});

export default connect(undefined, mapDispatchToProps)(Loginpage);