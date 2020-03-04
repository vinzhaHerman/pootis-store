import React from 'react';

export default function CartItem({item, value}) {
    const { id, title, img, price, total, count } = item;
    const { increment, decrement, removeItem } = value;
    return(
        <div className="card my-2">
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-2 col-sm-12">
                        <img 
                            src={img} 
                            alt="product" 
                            style={{width: "5rem", height: "5rem"}}
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-lg-7">
                        <h6 className="text-warning font-weight-bold">{ title }</h6>
                        <p className="text-muted">price: ${ price }</p>
                        <span className="text-bold">Item total: <span className="font-weight-bold">${ total }</span> </span>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 mx-auto">
                        <div className="d-flex justify-contents-center align-items-center mx-auto">
                            <button className="btn btn-sm btn-warning" onClick={() => decrement(id)}>-</button>
                            <span>{ count }</span>
                            <button className="btn btn-sm btn-warning" onClick={() => increment(id)}>+</button>
                        </div>
                        <button className="btn btn-sm btn-block btn-light" onClick={ () => removeItem(id) }>remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
}