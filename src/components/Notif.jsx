import './Notif.css'

/* eslint-disable react/prop-types */
export default function Notif(props){
    return (
        <section className={props.read ? 'notif' : "notif unread"} >
          <div className="notif__mainContent">
            <img className='notif__avatar' src={props.avatarUrl} />
            <div className="notif__content">
              <div className="notif__text">
                <h2 className='notif__user'>{props.username}</h2>
                <div className='notif__info'>{props.notification} 
                  <a className="notif__post" href="#">{props.post}</a> 
                  <a className="notif__link" href="#">{props.link}</a>
                  {props.read? '' : (<div className="unread-icon"></div>)}
                </div>
                <p className='notif__date'>{props.date} ago</p>
                {props.message? (<div className='notif__textArea'>{props.message}</div>) : ''}
              </div>
            </div>
          </div>
          {props.picture? (<img className='notif__image' src={props.picture}/>) : ''}
        </section>
    )
}