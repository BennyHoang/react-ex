import React, { Component, PropTypes } from "react";

class Contest extends Component {
    render() {
        return (
            <div className="Contest">
                <div className="contest-description">
                    {this.props.description}
                </div>
                <div className="home-link link btn btn-primary"
                     onClick={this.props.contestListClick}>
                    Contest Link
                </div>
            </div>
        );
    }
}

Contest.propTypes = {
    description: PropTypes.string.isRequired,
    contestListClick: PropTypes.func.isRequired
};

export default Contest;