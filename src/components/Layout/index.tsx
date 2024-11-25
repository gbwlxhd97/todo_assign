import Aside from './aside'
import styles from './index.module.css'
import Navbar from './navbar'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.wrapper}>
        <Aside />
        {children}
      </div>
    </div>
  )
}

export default Layout
