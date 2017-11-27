import React, {Component} from 'react';

class Pagination extends Component {
    constructor(props) {
        super(props);
    }

    getMore() {
        this.props.getMoreNews(this.props.after);
    }

    getLast() {
        this.props.getLastNews();
    }

    render() {
        return(
            <div className="row">
                <div className="col-md-12">
                    <div className="btn-group-xs">
                        <button type="button" onClick={::this.getLast} className="btn btn-default">Last news</button>
                        <button type="button" onClick={::this.getMore} className="btn btn-default">Get More</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pagination;

