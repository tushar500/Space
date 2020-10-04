import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateApp } from '../redux/actions'
class FilterCard extends Component {

    state = {
        year: '',
        launch: '',
        landing: '',
    }
    prevYear = "";
    prevLaunch = "";
    prevLanding = "";
    handleDispatch = () => {
        const { dispatch } = this.props
        dispatch(updateApp(this.state))
    }

    handleFilter = (event, filter) => {
        switch (filter) {
            case "year":
                if (event.target.value === this.prevYear) {
                    
                    console.log(event.target.className)
                    this.setState({ year: '' }, () => {
                        this.handleDispatch()
                        console.log("If cond")

                    })
                } else {
                    this.prevYear = event.target.value
                    this.setState({ year: this.prevYear }, () => {
                        this.handleDispatch()
                    })
                }
                break;
            case "launch":
                if (event.target.value === this.prevLaunch) {
                    this.setState({ launch: '' }, () => {
                        this.handleDispatch()
                        console.log("If cond")
                    })
                } else {
                    this.prevLaunch = event.target.value
                    this.setState({ launch: this.prevLaunch }, () => {
                        this.handleDispatch()
                    })
                }
                break;
            case "landing":
                if (event.target.value === this.prevLanding) {
                    this.setState({ landing: '' }, () => {
                        this.handleDispatch()
                        console.log("If cond")
                    })
                } else {
                    this.prevLanding = event.target.value
                    this.setState({ landing: this.prevLanding }, () => {
                        this.handleDispatch()
                    })
                }
        }
    }

    render() {
        const button = this.props.years.map((years, id) => <button type="button" style={{ "backgroundColor": this.state.backroundColor }} value={years} onClick={(e) => this.handleFilter(e, "year")} key={id}>{years}</button>)
        return (
            <div className="card ml-auto mr-auto mb-4" style={{ "width": "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">Filter</h5>
                    <div className="d-flex flex-column">
                        {button}
                    </div>
                    <div>
                        <h6>Successful Launch</h6>
                        <button type="button" value="true" onClick={(e) => this.handleFilter(e, "launch")}>True</button>
                        <button type="button" value="false" onClick={(e) => this.handleFilter(e, "launch")}>False</button>
                    </div>
                    <div>
                        <h6>Successful Landing</h6>
                        <button type="button" value="true" onClick={(e) => this.handleFilter(e, "landing")}>True</button>
                        <button type="button" value="false" onClick={(e) => this.handleFilter(e, "landing")}>False</button>
                    </div>
                </div>
            </div>
        )
    }

}
const mapStateToProps = ({ isFetching, apps }) => {
    return {
        isFetching,
        apps
    }
}
export default connect(mapStateToProps)(FilterCard);