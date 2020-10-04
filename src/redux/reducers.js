import { REQUEST_APPS,  RECEIVE_APPS,RECEIVE_FILTER_APPS } from './actions';

const apps =( state = {isFetching: false, apps: []}, action)=> {
  switch (action.type) {
    case REQUEST_APPS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_APPS:
      return Object.assign({}, state, {
        isFetching: false,
        apps: action.apps
      });
    case RECEIVE_FILTER_APPS:
        return  Object.assign({}, state, {
            isFetching: false,
            apps: action.apps
          });
    default:
      return state
  }
}

export default apps
