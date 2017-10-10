/* path to file: ./components/businessList
*
*  description: 
*  ------------------------------------------------------------------------------------
*/


// import React
import React from 'react'

// import styling
import './BusinessList.css'

// import business
import Business from '../Business/Business'

class BusinessList extends React.Component {
	render() {
		return (
			<div className="BusinessList">
				{ /* callback function with one parameter */ }
        { this.props.businesses.map((business) => {
					// return needs (); because <Business /> instance have multiple lines
          return (
            <Business business={ business }/>
          );
        }) }
      </div>			
		);
	}
}

export default BusinessList;