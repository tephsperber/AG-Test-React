import React from 'react'

const detail = ({match}) => {
console.log("match", match);

let productoID = match.params.id;
return (
        <div>
            {productoID}
        </div>
    )
}

export default detail
