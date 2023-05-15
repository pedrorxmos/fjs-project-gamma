import { Contact } from "../components/contact/Contact"

export function Contacts() {

  const cts = [
    {
      name: 'Contact 1',
      lastText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      icon: 'https://placekitten.com/100/100'
    },
    {
      name: 'Contact 2',
      lastText: 'Placeat facilis dolorem delectus cum voluptatibus est distinctio sapiente quas.',
      icon: 'https://placekitten.com/100/101'
    },
    {
      name: 'Contact 3',
      lastText: 'Assumenda itaque minus, architecto officiis corporis odit veniam harum veritatis dolorem eum?',
      icon: 'https://placekitten.com/100/102'
    }
  ]
  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {
          cts.map(c => (
            <Contact name={c.name} lastText={c.lastText} icon={c.icon} />
          ))
        }
      </ul>
    </>
  )
}