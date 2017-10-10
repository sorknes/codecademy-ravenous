/* path to file: ./components/business
*
*  description: 
*  ------------------------------------------------------------------------------------
*/


// import React
import React from 'react'

// import styling
import './Business.css'

class Business extends React.Component {
	render() {
		return(
			<div className="Business">
				<div className="image-container">
					{ /* must add this.props to access the business prop BusinessList.js */ }
					<img src={ this.props.business.imageSrc } alt={ this.props.business.name } />
				</div>
				<h2>{ this.props.business.name }</h2>
				<div className="Business-information">
					<div className="Business-address">
						<p>{ this.props.business.address }</p>
						<p>{ this.props.business.city }</p>
						<p>{ this.props.business.zipCode }</p>
					</div>
					<div className="Business-reviews">
						<h3>{ this.props.business.category }</h3>
						<h3 className="rating">{ this.props.business.rating }</h3>
						<p>{ this.props.business.reviewCount }</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Business;