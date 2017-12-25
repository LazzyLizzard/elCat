/**
 * Entry point for pick form
 */
import React from 'react';
import {connect} from 'react-redux';
import {find, isNil} from 'lodash';
import * as actions from '../actions';
// import PickForm from './pick-form';
// import {showResults} from './../show-results';
import {NAMESPACE} from '../reducer';

/**
 *
 * @param {string} name
 * @param {array} data Array of objects
 * @return {null}
 */
const getGroupIdByName = (name, data) => {
    const result = find(data, item => item.groupNameTransformed === name);
    return result ? result.id : null;
};

class PickList extends React.Component {
    componentDidMount() {
        const {
            [NAMESPACE]: {pickList, pickListGroup},
            routeParams: {pickGroupName}
        } = this.props;

        // console.warn(pickList);
        // console.warn(id);

        // // https://canti.pw/articles/2016-12-11-javascript-promises-for-dummies.html
        // const isMomHappy = true;
        //
        // // Обещание
        // const willIGetNewPhone = new Promise(
        //     (resolve, reject) => {
        //         if (isMomHappy) {
        //             const phone = {
        //                 brand: 'Samsung',
        //                 color: 'black'
        //             };
        //             resolve(phone);
        //         } else {
        //             const reason = new Error('Мама не довольна');
        //             reject(reason);
        //         }
        //     }
        // );
        //
        // const showOff = function (phone) {
        //     const message = `Привет друг, у меня есть новый ${phone.color} телефон ${phone.brand}`;
        //     return Promise.resolve(message);
        // };
        //
        // // Вызываем наше обещание
        // const askMom = function () {
        //     willIGetNewPhone
        //         .then(showOff)
        //         .then(fulfilled => console.log(fulfilled))
        //         .catch(error => console.log(error.message));
        // };
        //
        // askMom();

        const dataPr = new Promise((resolve, reject) => {
            if (!pickList) {
                this.props.requestPickList();
                resolve(pickList);
            } else {
                reject(new Error('fail 1'));
            }
        });

        const ask = () => {
            dataPr
                .then(dataFirst => dataFirst)
                .then((dataSecond) => {
                    console.log(dataSecond);
                    // TODO [sf] 26.12.2017
                    const idd = getGroupIdByName(pickGroupName, dataSecond);
                    this.props.getOptionsByGroupId(idd);
                    return pickListGroup;
                });
        };

        ask();

        // if (!pickList) {
        //
        //     // this.props.requestPickList(this.props.getOptionsByGroupId, {id});
        // } else {
        //     this.props.getOptionsByGroupId({id});
        // }
    }

    componentWillUnmount() {
        this.props.resetGroupsList();
    }

    render() {
        console.log('render list');

        // return <PickForm onSubmit={showResults} />;
        return (
            <div>
                q
            </div>
        );
    }
}

export default connect(
    state => state,
    dispatch => ({
        requestPickList: (operation, options) => dispatch(actions.requestPickList(operation, options)),
        getOptionsByGroupId: id => dispatch(actions.getOptionsByGroupId(id)),
        resetGroupsList: () => dispatch(actions.resetGroupsList())
    }))(PickList);
