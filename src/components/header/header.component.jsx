import React from 'react'

import './header.styles.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Link } from 'react-router-dom'

import { setActiveIndex } from '../../redux/page/page.actions'
import { selectActiveIndex } from '../../redux/page/page.selectors'

const Header = ({ index, setIndex, match}) => {
  console.log(match)
  return (
  <header className="header">
    <div className="signin-singup">
      <span role="img" aria-label="asd">👤Not Logged in</span><a href="#a">Talk</a> <a href="#a">Contributions</a> <a href="#a">Create account</a> <a href="#a">Lig in</a>
    </div>
    <nav className="content-menu">
      <div className="left-menu">
        <Link to="/" className={`menu-item${index === 0 ? ' active' : ''}`} onClick={() => setIndex(0)}>
          Article
        </Link>
        <Link to="/talk" className={`menu-item${index === 1 ? ' active' : ''}`} onClick={() => setIndex(1)}>
          Talk
        </Link>
      </div>
      <div className="searchfield">
        <input type="search" placeholder="Search Wikipedia" />
        <label htmlFor="search"><span role="img" aria-label="asd">🔍</span></label>
      </div>
      <div className="right-menu">
        <Link to="/read" className={`menu-item ${index === 2 && 'active'}`} onClick={() => setIndex(2)}>
          Read
        </Link>
        <Link to="/edit" className={`menu-item ${index === 3 && 'active'}`} onClick={() => setIndex(3)}>
          Edit
        </Link>
      </div>
    </nav>
  </header>
)}


const mapStateToProps = createStructuredSelector({
  index: selectActiveIndex
})

const mapDispatchToProps = dispatch => ({
  setIndex: index => dispatch(setActiveIndex(index))
})


export default connect(mapStateToProps, mapDispatchToProps)(Header)