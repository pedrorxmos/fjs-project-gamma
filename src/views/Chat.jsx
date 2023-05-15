import { useParams } from "react-router-dom"

export function Chat() {

  const {id} = useParams();

  return (
    <>
      <h1>Chats {id}</h1>
    </>
  )
}