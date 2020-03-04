import React, { Component } from 'react';

export default class Notfound extends Component {
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mx-auto text-center text-upper-case mt-5">
                        <div className="pt-5">
                            <h1><span className="font-weight-bold">404</span> - Wait, where is this!?</h1>
                            <h4>It seems like we can't find URL <span className="text-warning font-weight-bold">{ this.props.location.pathname }</span> anywhere.</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}