import { useState, createContext } from 'react';

const Notification = ({message, type}) => {
    if (!message) {
      return null
    }
    return (
      <div>
        {message}
      </div>
    )
}

export const NotificationContext = createContext()

export const NotificationProvider = ({children}) =>{

    const [message, setMenssage] = useState('')

    const setNotification = (message) => {
        setMenssage(message)
    
        setTimeout(() => {
          setMenssage('')
        }, 2500);
    }

    return (
        <NotificationContext.Provider value={setNotification}>
            <Notification message={message}/>
            { children }
        </NotificationContext.Provider>
    )
    
}
