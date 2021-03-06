import React from 'react'
import { connect } from 'react-redux'

// Components
import ProjectsList from '../ProjectsList'

// Stlyes
import './Sidebar.scss'

const SideBar = () => (
  <div className="sidebar">
    <div className="blanko">Blanko.</div>
    <div className="blanko-small">B.</div>

    <ProjectsList isFavorite className="favorite" label="favorites" />
    <ProjectsList label="projects" />

    {/* eslint-disable */}
    <span className="logout-icon">
      <svg width="31px" height="32px" viewBox="0 0 31 32" version="1.1">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g className="logout-icon-path" fill="#7A848F" fillRule="nonzero">
            <path d="M15.9999806,0 L15.9999806,2.28569346 L2.2857116,2.28569346 L2.2857116,29.7142417 L15.9999806,29.7142417 L15.9999806,32 L-3.55271368e-14,32 L-3.55271368e-14,0 L15.9999806,0 Z M10.7142495,14.0571397 L24.7142486,14.0571397 L18.7142486,8.01427065 L20.714249,6 L30.7142495,16.0713818 L20.714249,26.1428492 L18.7142494,24.1285786 L24.7142492,18.0857381 L10.7142495,18.0857381 L10.7142495,14.0571397 Z" transform="translate(15.357125, 16.000000) scale(-1, 1) translate(-15.357125, -16.000000)" />
          </g>
        </g>
      </svg>
    </span>
    {/* eslint-enable */}
  </div>
)

const mapStateToProps = ({ projectReducer }) => ({
  projects: projectReducer.projects
})

export default connect(mapStateToProps)(SideBar)
