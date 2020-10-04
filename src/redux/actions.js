
export const REQUEST_APPS = 'REQUEST_APPS'
export const RECEIVE_APPS = 'RECEIVE_APPS'
export const RECEIVE_FILTER_APPS = 'RECEIVE_FILTER_APPS'


function requestApps() {
  return {
    type: REQUEST_APPS
  }
}

function receiveApps(json) {
  return {
    type: RECEIVE_APPS,
    apps: json
  }
}
function receiveFilterApps(json) {
  return {
    type: RECEIVE_FILTER_APPS,
    apps: json
  }
}

function fetchApps() {
  return dispatch => {
    dispatch(requestApps())
    return fetch(`https://api.spaceXdata.com/v3/launches?limit=5`)
      .then(response => response.json())
      .then(json => dispatch(receiveApps(json)))
  }
}

function fetchFilterApps(filter) {
  return dispatch => {
    dispatch(requestApps())
    const url=`https://api.spaceXdata.com/v3/launches?limit=10&launch_year=${filter.year}&launch_success=${filter.launch}&land_success=${filter.landing}`
    console.log("url",url)
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receiveFilterApps(json)))
  }
}

function shouldFetchApps(state) {
  const apps = state.apps
  console.log("apssss",apps);
  if (apps.length==0) {
    return true
  } else if (state.isFetching) {
    return false
  }
}

export function fetchAppsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchApps(getState())) {
      return dispatch(fetchApps())
    }
  }
}
export function updateApp(filter) {
  return (dispatch) => {
      return dispatch(fetchFilterApps(filter))
  }
}
