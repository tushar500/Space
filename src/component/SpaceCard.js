import React from 'react';

const SpaceCard = ({ app }) => (
    <div className="card ml-auto mr-auto mb-4" style={{ "width": "18rem" }}>
        <img className="card-img-top" src={app.links.mission_patch_small} />
        <div className="card-body">
            <h5 className="card-title">{app.mission_name} #{app.flight_number}</h5>
            <h5 className="card-title">Mission Id: {app.mission_id.map((id) => <ul key={id}><li>{id}</li></ul>)}</h5>
            <h5 className="card-title">Launch Year: {app.launch_year}</h5>
            <h5 className="card-title">Successful Launch: #{app.launch_success}</h5>
            <h5 className="card-title">Successful Landing: #{app.launch_landing}</h5>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
        </div>
    </div>
)

export default SpaceCard;
