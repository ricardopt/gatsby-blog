import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Mario Hernandez"
      meta={[
        { name: 'description', content: 'Mario Hernandez is a front-end developer from Los Angeles' },
        { name: 'keywords', content: 'web developer, front-end web developer, public speaker' },
      ]}
    />
    <Header />

    <section>
      {children()}
    </section>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
