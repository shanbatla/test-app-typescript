interface Props {
  list: Array<string>
}

const List: React.FC<Props> = ({ list }): JSX.Element => {
  const listItems = list.map(listItem => {
    return <li> {listItem} </li>
  })

  return (
    <ul>
      {listItems}
    </ul>
  )
}

export default List;