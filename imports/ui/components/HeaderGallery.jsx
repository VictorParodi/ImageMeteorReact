import React, { Component } from 'react';

export default class HeaderGallery extends Component {
    addCard() {
        $('.ui.addCard.modal').modal('show');
    }

    render() {
        return (
            <div className="ui grid">
                <div className="one column row">
                    <div className="column">
                        <div className="ui text menu menu--customized">
                            <div className="header item"> Welcome </div>
                            <a href="/" className="item">
                                Home
                            </a>

                            <a href="/signup" className="item">
                                Sign up
                            </a>

                            <a href="/login" className="item">
                                Login
                            </a>

                            <a className="item" onClick={this.addCard}>
                                Add card
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}