import React, { Component } from "react";

import PortfolioItem from "./portfolio-item"

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "welcome to my portfolio",
            data: [
                {ttile: "Quip"},
                {title: "Eventbrite"},
                {title: "Ministry Safe"},
                {title: "SwingAway"}
            ]
        }
    }

    PortfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"}/>
        })

    }

    render() {
        return (
            <div>
                <h2>Portfolio items go here updated...</h2>

                {this.PortfolioItems()}
            </div>
        )
    }
}