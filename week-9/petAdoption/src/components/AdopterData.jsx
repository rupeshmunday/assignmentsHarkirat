import React, { Component } from 'react'

export class AdopterData extends Component {
  render() {
    const {data, back} = this.props;
    return (
      <div className='table'>
        <table>
          <thead>
            <tr>
              <th>Pet Name</th>
              <th>Pet Type</th>
              <th>Breed</th>
              <th>Adopter Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item,index)=>(
                <tr key={index}>
                  <td>{item.petName}</td>
                  <td>{item.petType}</td>
                  <td>{item.breed}</td>
                  <td>{item.adopterName}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              ))
            }
          </tbody>

        </table>
        <div >
          <button style={{width: "auto", cursor:'pointer'}} onClick={back}>Go Back</button>
        </div>
      </div>
    )
  }
}

export default AdopterData