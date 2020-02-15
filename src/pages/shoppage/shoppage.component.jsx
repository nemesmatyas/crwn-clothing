import React from 'react';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';

const Shoppage = ({ collections }) => {
        return(
            <div className="shop-page">
                <CollectionOverview />
            </div>
        )
}


export default Shoppage;