import React, { Component } from 'react';


class Main extends Component {

  render() {
    return (
        <div id="content ">
          <h2> Startup Marketplace</h2>
          <p>&nbsp;</p>

          <h4>Add Startup</h4>
          <form onSubmit={(event) => {
            event.preventDefault()
            const startupDescription = this.startupDescription.value
            const startupAmount = window.web3.utils.toWei(this.startupAmount.value.toString(), 'Ether')
            this.props.requestFunding(startupDescription, startupAmount)
          }}>
            <div className="form-group mr-sm-2">
              <input
                id="startupDescription"
                type="text"
                ref={(input) => { this.startupDescription = input }}
                className="form-control"
                placeholder="Startup Description"
                required />
            </div>
            <div className="form-group mr-sm-2">
              <input
                id="startupAmount"
                type="text"
                ref={(input) => { this.startupAmount = input }}
                className="form-control"
                placeholder="Fund Amount"
                required />
            </div>

            <button type="submit" className="btn btn-secondary">Add StartUp</button>
          </form>
          <p>&nbsp;</p>
          <h4>Fund Startup</h4>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Owner</th>
                <th scope="col">Startup Description</th>
                <th scope="col">Fund Amount</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody id="LoanList">
              { this.props.startups.map((startup, key) => {
                  return(
                    <tr key={key}>
                      <th scope="row">{startup.startupId.toString()}</th>
                      <td>{startup.owner}</td>
                      <td>{startup.startupDescription}</td>
                      <td>{window.web3.utils.fromWei(startup.startupAmount.toString(), 'Ether')} Eth</td>
                      <td>
                        { !startup.isActive
                          ? <button
                              id={startup.startupId}
                              value={startup.startupAmount}
                              //value={startup.price}
                              onClick={(event) => {
                                this.props.fundStartup(event.target.id,event.target.value)
                              }}
                            >
                              Fund
                            </button>
                          : <span>Funded</span>
                        }
                        </td>
                    </tr>
                  )
                })}
              </tbody>
             </table>
            </div>
          );
        }
      }

export default Main;

