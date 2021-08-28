interface Props {
  list: Array<string>
}

const List: React.FC<Props> = (props): JSX.Element => {
  const listItems = props.list.map(listItem => {
    return <li> {listItem} </li>
  })

  return (
    <ul>
      {listItems}
    </ul>
  )
}

export default List;