import axios from "axios";
import React from "react";
import constants from '../lib/constants'

interface UserProps {}

interface UserState {
  isLoading: boolean,
  spinner: JSX.Element,
  userList: Array<UserListItem>
}

interface FetchUsersResponse {
  data: Array<any>
}

interface UserListItem {
  id: string,
  username: string, 
  email: string
}

// for images >> https://i.pinimg.com/originals/b0/2d/5e/b02d5efd37c7d2dd3f71d874d6bd15a7.jpg
// for api url >> GET https://jsonplaceholder.typicode.com/users

export default class Users extends React.Component<UserProps, UserState> {
  constructor(props: UserProps) {
    super(props)
    this.state = {
      isLoading: true,
      spinner: <div>...laoding</div>,
      userList: []
    }
  }

  componentDidMount() {
    // setTimeout(() => {
      this.fetchUsers()
    // }, 2000)
  }

  fetchUsers(): Promise<void | FetchUsersResponse> {
    this.setState({
      isLoading: true
    })
    return axios.get(constants.usersUrl)
      .then(res => {
        this.setState({
          userList: res.data,
          isLoading: false
        })
      })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>Spinner</div>
      )
    } else {
      const users: Array<JSX.Element> = this.state.userList.map(user => {
        return (
          <div key={user.id}>
            <img src={constants.imageUrl} alt="" />
            <div>{user.username}</div>
            <div>{user.email}</div>
          </div>
        )
      })
      return (
        <div>
          {users}
        </div>
      )
    }
  }
}