import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './content.styles.scss'
import Talk from '../talk/talk.component'
import Read from '../read/read.component'
import Edit from '../edit/edit.component'
import Article from '../article/article.component'

const Content = () => (
  <section className="page-content">
    <Switch>
      <Route exact path="/" component={Article} />
      <Route exact path="/article" component={Article} />
      <Route exact path="/talk" component={Talk} />
      <Route exact path="/read" component={Read} />
      <Route exact path="/edit" component={Edit} />
    </Switch>
  </section>
)

export default Content