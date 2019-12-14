import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
  <header id='header' style={props.timeout ? { display: 'none' } : {}}>
    <div className='logo'>
      <img src='./images/emblem_white.png' height='80' className='icon' />
    </div>
    <div className='content'>
      <div className='inner'>
        <h1>自由が丘ランゲージスクールへようこそ。</h1>
        <h2>自由が丘駅徒歩３０秒。</h2>
        <h3>お問合せ・お申込みは 0120-009-035 (フリーダイアル)</h3>
      </div>
    </div>
    <nav>
      <ul>
        <li><a href='javascript:;' onClick={() => { props.onOpenArticle('intro') }}>Intro</a></li>
        <li><a href='javascript:;' onClick={() => { props.onOpenArticle('work') }}>Work</a></li>
        <li><a href='javascript:;' onClick={() => { props.onOpenArticle('about') }}>About</a></li>
        <li><a href='javascript:;' onClick={() => { props.onOpenArticle('contact') }}>Contact</a></li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Header
