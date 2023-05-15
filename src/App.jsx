import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Chat, Contacts, Settings } from './views'

function App() {

  return (
    <>
    <header>
      <h1>Proyecto Gamma</h1>
    </header>
    <main>
      <Routes>
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="/chat/:id" element={<Chat/>} />
        <Route path="/settings" element={<Settings/>} />
      </Routes>
    </main>
    </>
  )
}

export default App
