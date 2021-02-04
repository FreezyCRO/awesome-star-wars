import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: 'Jakov Mesić',
            initials: 'JM',
            info: [
                   { title: 'Birthday', text: 'Jan 1, 1980'},
                   { title: 'Adress', text: 'Velika Trnovitica 87'},
                   { title: 'Contact', text: '123-457-890'},
                   { title: 'e-Mail', text: 'mesicjakov@gmail.com'}
                
            ]
        }
    }
    render() {
    const {
         firstName,
         initials,
         info
        } = this.state
      return (
        <React.Fragment>
            <section className="card-container">
                <header className="card-header">
                    <span initials={initials}></span>
                    <h2>{ firstName }</h2>
                </header>

                <main>
                    <ul>
                      { info.map((row, index) => {
                          return (
                              <li key={index}>
                                <span> {row.title} </span>
                                {row.text ? row.text : 'n/a'}
                              </li>
                          )
                          }
                      )}
                    </ul>
                </main>
            </section>
        </React.Fragment>      
      )
    }
}


export default Card;