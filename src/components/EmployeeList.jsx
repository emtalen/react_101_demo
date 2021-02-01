import React, { Component } from 'react'
// import axios from 'axios'

class EmployeeList extends Component {
  state = {
    employees: []
  }

  async componentDidMount() {
    // for XMLHttpRequest
    // const xhr = new XMLHttpRequest();
    // xhr.open('GET', 'https://reqres.in/api/users')
    // xhr.onload = () => {
    //   this.setState({ employees: JSON.parse(xhr.responseText).data })
    // }
    // xhr.send()
    // for Axios
    // let response = await axios.get('https://reqres.in/api/users')
    // for fetch

    let response = await (await fetch(`https://reqres.in/api/users`)).json()

    this.setState({ employees: response.data })

  }


  render() {
    let employeeList
    employeeList = this.state.employees.map(employee => {
      return (
        <li key={employee.id}>
          {`${employee.first_name} ${employee.last_name}`}
        </li>
      )
    })
    return (
      <ul role="list">
        {employeeList}
      </ul>
    )
  }
}

export default EmployeeList;