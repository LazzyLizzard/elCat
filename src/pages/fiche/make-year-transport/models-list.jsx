import React from 'react';
import {map} from 'lodash';
import {Link} from 'react-router';

// import {FirstCharsList} from './first-chars-list';

export class ModelsList extends React.Component {

    render() {
        // console.log(this.props.modelsList);
        const {modelsList} = this.props;
        return (
            <div>
                {
                    map(modelsList.modelsList, item => (
                        <div>
                            {item.modelNameFirstChar}

                            {map(item.list, lst => (
                                <div>
                                    <Link to={`/fiche/model/${lst.model_id}`}>{lst.model_name}</Link>
                                </div>
                            ))}

                        </div>


                    ))

                }
                <hr />
            </div>
        );
    }

}
