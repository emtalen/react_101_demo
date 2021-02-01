import React, { Component } from 'react'

class EmployeeList extends Component {
  state = {
    employees: []
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://reqres.in/api/users')
    xhr.onload = () => {
      this.setState({ employees: JSON.parse(xhr.responseText).data })
    }
    xhr.send()
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