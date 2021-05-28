import React from 'react';
import { buyCake } from '../redux/cake/CakeAction';
import { connect } from 'react-redux';

function CakeContainer(props) {
    return (
        <div>
            <h1>no of cake - {props.noOfCake}</h1>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        noOfCake: state.cake.noOfCake
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

