import Divider from "./Divider"

interface ListProps {
  list: Array<string>
}

const List = (props: ListProps): JSX.Element => {
  const listItems = props.list.map( (listItem, idx) => {
    return <li key={idx}>{listItem}</li>
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