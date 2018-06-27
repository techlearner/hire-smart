// Imports
import React from 'react'
import PropTypes from 'prop-types'

// App Imports
import params from '../../../setup/config/params'

// Component
const AccountCreatedOrVerified = ({ to, message  }) => (
  <React.Fragment>
    <p>Hi { to },</p>

    <p>{ message }</p>

    <p><a href={params.site.url+params.web.routes.dashboard}>Open Dashboard</a></p>

    <p>
      What's next? <br />
      <ol>
        <li>Start inviting your teammates</li>
        <li>Add your clients and candidates</li>
        <li>Schedule interviews and track progress</li>
        <li>Receive feedback from interviewers</li>
      </ol>
    </p>

    <p>
      Thanks, <br/>
      { params.site.name }
    </p>
  </React.Fragment>
)

// Component Properties
AccountCreatedOrVerified.propTypes = {
  to: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
}

export default AccountCreatedOrVerified

