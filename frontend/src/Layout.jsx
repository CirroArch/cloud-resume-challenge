import Header from 'components/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />
      <div className="content_wrap">
        <div className="content">
          <article>
            <Outlet />
          </article>
        </div>
      </div>
    </>
  )
}

export default Layout
