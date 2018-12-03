// Imports
import React from 'react'
import PropTypes from 'prop-types'

// UI Imports
import Toolbar from '@material-ui/core/Toolbar/Toolbar'
import Typography from '@material-ui/core/Typography/Typography'
import { withStyles } from '@material-ui/core/styles/index'
import styles from './styles'

// App Imports
import Layout from '../../common/Layout'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import Section from '../../common/Section'

// Component
const Dashboard = ({ classes }) => (
  <Layout>
    <Header title={'Dashboard'} />

    <Section>
      <Typography>Classis germanus habena est. Quadra de grandis bromium, imitari rector!</Typography>
    </Section>

    <Footer />
  </Layout>
)

// Component Properties
Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Dashboard)

