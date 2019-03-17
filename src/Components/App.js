import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <section className='container is-fullhd'>
        <nav className="navbar is-dark">

            <a className="navbar-brand">
              <div className="navbar-item">
                <span className="icon is-medium navbar-item">
                    <i className="fas fa-hockey-puck fa-stack-1x fa-inverse"></i>
                </span>
                <p>Tennis Club Jerry</p>
              </div>
            </a>

            <div className="navbar-end">
              <div className="navbar-item">
                <a className="has-text-white">
                  <figure className="image is-32x32">
                    <img className="is-rounded" alt="头像" style={{'maxHeight':"100%"}} src="https://lqzhgood.github.io/bulma-docs-cn/images/placeholders/32x32.png" />
                  </figure>
                </a>
              </div>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  Admin
                </a>
                <div className="navbar-dropdown is-boxed">
                  <a className="navbar-item">
                    修改密码
                  </a>
                  <a className="navbar-item">
                    退出
                  </a>
                </div>
              </div>

            </div>
        </nav>




      </section>
    )
  }
}
