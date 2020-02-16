import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import Collectionpage from '../collection/collection.component';

const Shoppage = ({ match }) => {
        console.log(match);
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                <Route path={`${match.path}/:collectionId`} component={Collectionpage} />
            </div>
        )
}


export default Shoppage;