import './Contact.scss'

export function Contact({name, lastText, icon}) {
  return (
    <>
      <li>
        <img src={icon} alt="contact photo" />
        <div className="info">
          <strong>{name}</strong>
          <p>{lastText}</p>
        </div>
      </li>
    </>
  )
}