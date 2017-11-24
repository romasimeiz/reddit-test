import React, {Component} from 'react';
import './spinner.scss';


export default class Profile extends Component {
    render() {
        const { name, email, phone } = this.props.user;
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="ibox float-e-margins">
                        <div className="ibox-title">
                            <h5>Profile Detail</h5>
                        </div>
                        <div>
                            <div className="ibox-content no-padding border-left-right">
                                <img alt="image" className="img-responsive" src="/assets/img/profile_big.jpg" />
                            </div>
                            <div className="ibox-content profile-content">
                                <h4><strong>{name}</strong></h4>
                                <p><i className="fa fa-map-marker"/> Riviera State 32/106</p>
                                <h5>
                                    About me
                                </h5>
                                <p>
                                    <strong>My phone is </strong> {phone}
                                </p>
                                <p>
                                    <strong>My email is </strong> {email}
                                </p>
                                <div className="user-button">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <button type="button" className="btn btn-primary btn-sm btn-block"><i
                                                className="fa fa-envelope"/> Send Message
                                            </button>
                                        </div>
                                        <div className="col-md-6">
                                            <button type="button" className="btn btn-default btn-sm btn-block"><i
                                                className="fa fa-coffee"/> Buy a coffee
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Profile.displayName = 'Profile';
