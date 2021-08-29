interface Props {
  list: Array<string>
}

const List: React.FC<Props> = ({ list }): JSX.Element => {
  const listItems = list.map(listItem => {
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
    </>
  )
}

export default List;