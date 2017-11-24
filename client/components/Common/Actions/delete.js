import React, {Component} from 'react';
import SkyLight from 'react-skylight';


export default class Delete extends Component {

    deleteAction(e, type, entityId) {
        this.props.deleteEntity(type, entityId);
        this.refs.simpleDialog.hide();
    }

    render() {
        const { title, type, entity, entityId, children } = this.props;
        return (
            <span>
                <a onClick={() => this.refs.simpleDialog.show()} title={title}>
                    <span className='fa fa-trash'> </span>
                </a>
                <SkyLight hideOnOverlayClicked ref="simpleDialog" title="Project will be deleted, continue ?">
                    <div className="modal-footer">
                        <button type="button" className="btn btn-white" onClick={() => this.refs.simpleDialog.hide() }>No</button>
                        <button type="button" className="btn btn-primary" onClick={(e) => this.deleteAction(e, entity, entityId)}  >Yes</button>
                    </div>
                </SkyLight>
            </span>
        );
    }
}