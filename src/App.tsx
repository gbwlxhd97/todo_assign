import Layout from './components/Layout'
import Todo from './components/todo'
import { Toaster } from 'react-hot-toast'
import './global.css'

function App() {
  return (
    <>
      <Layout>
        <Todo />
      </Layout>
      <Toaster position="top-center" />
    </>
  )
}

export default App
