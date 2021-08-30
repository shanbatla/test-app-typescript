import Divider from "./Divider"

interface Props {
  list: Array<string>
}

const List = (props: Props): JSX.Element => {
  const listItems = props.list.map(listItem => {
    return <li> {listItem} </li>
  })

  return (
    <>
      <h2>List</h2>
      <div>
        <ul>
          {listItems}
        </ul>
      </div>
      <Divider/>
    </>
  )
}

export default List;