import React from 'react'

const category = ({match}) => {
    console.log("match", match);
    
    let productoID = match.params.id;

return (
        <div>
            {productoID}
        </div>
    )
}

export default category
