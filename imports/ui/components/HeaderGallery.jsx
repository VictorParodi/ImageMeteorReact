import React, { Component } from 'react';

export default class HeaderGallery extends Component {
    render() {
        return (
            <div className="ui grid">
                <div className="one column row">
                    <div className="column">
                        <div className="ui text menu menu--customized">
                            <div className="header item"> Welcome </div>
                            <a href="#" className="item">
                                Item 1
                            </a>

                            <a href="#" className="item">
                                Item 2
                            </a>

                            <a href="#" className="item">
                                Item 3
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}