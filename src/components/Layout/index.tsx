import Aside from './aside'
import styles from './index.module.css'
import Navbar from './navbar'

type LayoutProps = {
  children: React.ReactNode
}
/**
 * 레이아웃 컴포넌트
 * @param children - 레이아웃에 포함될 Todo 컴포넌트
 * @returns 레이아웃 컴포넌트
 */
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
