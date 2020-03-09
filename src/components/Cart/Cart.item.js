import React from 'react';

export default function CartItem({item, value}) {
    const { id, title, img, price, total, count } = item;
    const { increment, decrement, removeItem } = value;
    return(
        // <div className="card my-2">
        //     <div className="card-body">
        //         <div className="row">
        //             <div className="col-lg-2 col-sm-12">
        //                 <img 
        //                     src={img} 
        //                     alt="product" 
        //                     style={{width: "5rem", height: "5rem"}}
        //                     className="img-fluid"
        //                 />
        //             </div>
        //             <div className="col-lg-7">
        //                 <h6 className="text-warning font-weight-bold">{ title }</h6>
        //                 <p className="text-muted">price: ${ price }</p>
        //                 <span className="text-bold">Item total: <span className="font-weight-bold">${ total }</span> </span>
        //             </div>
        //             <div className="col-lg-3 col-md-12 col-sm-12 mx-auto">
        //                 <div className="d-flex justify-contents-center align-items-center mx-auto">
        //                     <button className="btn btn-sm btn-warning" onClick={() => decrement(id)}>-</button>
        //                     <span>{ count }</span>
        //                     <button className="btn btn-sm btn-warning" onClick={() => increment(id)}>+</button>
        //                 </div>
        //                 <button className="btn btn-sm btn-block btn-light" onClick={ () => removeItem(id) }>remove</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
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
                    <div className="col-lg-10">
                        <div className="row">
                            <div className="col-lg-12">
                                <h6 className="deep-orange-text font-weight-bold">{ title }</h6>
                                <p className="text-muted">price: ${ price }</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-sm-12">
                                <span className="text-bold mx-auto">Item total: <span className="font-weight-bold">${ total }</span> </span>
                            </div>
                            <div className="col-lg-9 col-sm-12">
                                <div className="d-flex justify-contents-center align-items-center float-right">
                                    <button className="btn btn-link grey-text" onClick={ () => removeItem(id) }><i className="fas fa-trash"></i></button>
                                    <button className="btn btn-sm btn-deep-orange" onClick={() => decrement(id)}><i className="fas fa-minus-circle"></i></button>
                                    <span className="mx-2">{ count }</span>
                                    <button className="btn btn-sm btn-deep-orange" onClick={() => increment(id)}><i className="fas fa-plus-circle"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}