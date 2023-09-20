import React from 'react';

function ItemListContainer({ greeting }) {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-8 text-center">
          <p className="h4">{greeting}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;
