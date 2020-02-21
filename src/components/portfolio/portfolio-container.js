import React, { Component } from "react";

import PortfolioItem from "./portfolio-item"

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        console.log("Portfolio container has renderd")
    }

    PortfolioItems() {
        const data = ["Quip", "Eventbrite", "Ministry Safe", "ME"];
        return data.map(item => {
            return <PortfolioItem />
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