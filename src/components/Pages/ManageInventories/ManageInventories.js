import React from 'react';
import useInventories from '../../../hooks/useInventories';

const ManageInventories = () => {
    const [inventories, setInventories] = useInventories()
    
    return (
        <div>
            <h2>products : {inventories.length}</h2>
        </div>
    );
};

export default ManageInventories;