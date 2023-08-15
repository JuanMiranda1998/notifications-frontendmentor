import { useState } from 'react'
import './App.css'
import Notif from './components/Notif'
import data from './data.json'

function App() { 
  const [notifs,setNotifs] = useState(data)
  const [unread,setUnread] = useState(notifs.filter(notif=>!(notif.read)))

  function clickHandler(){
    setUnread([])
    setNotifs(markRead(notifs))
  }

  function markRead(array){
    const readNotifs = array
    readNotifs.forEach(notif=> notif.read = true)
    return readNotifs
  }


  return ( 
    <>
      <header className='header'>
        <div className='header__text'>
          <h1 className='header__title'>Notifications</h1>
          <div className='notif-number'><span>{unread.length}</span></div>
        </div>
        <button className='read-button' onClick={()=>clickHandler()}>Mark all as read</button>
      </header>  
      <div className='notifications-container'>
        {notifs.map((notif, i)=> (<Notif read={notif.read} avatarUrl={notif.avatarUrl} username={notif.username} notification={notif.notification} link={notif.link} post={notif.post} date={notif.date} message={notif.message} picture={notif.picture} key={i}/>)) }
      </div> 
    </>
  )
}

export default App; 