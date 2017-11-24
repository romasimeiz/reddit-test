import * as actions from "../actions/actions";

const initialState = {
    permanentNotification: false,
    message:"Notification",
    title:"Title!",
};

const notification = (state = initialState, action) => {
    switch (action.type) {
        case actions.NOTIFICATION_SHOW:
            return Object.assign({}, state, action.response, {isActive: true});
        case actions.NOTIFICATION_HIDE:
            return Object.assign({}, state, action.response, {isActive: false});
        default:
            return state
    }
};

export default notification;