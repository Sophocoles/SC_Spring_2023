import {useLocation} from 'react-router-dom';

 function ApptResources() {

    const location = useLocation();
   // const apptResourceList = location.state.resource[1];

    console.log(location.state.name, "name")
    console.log(location.state, "state")
    console.log(location.state.appointments, "state")
   
        return (

            <>
               
<div>{location.state.name}</div>

            </>
        )
    }

export default ApptResources;