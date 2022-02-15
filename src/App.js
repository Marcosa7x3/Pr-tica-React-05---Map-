import React, { Component } from 'react'

class App extends Component {
  
  state = {
    objetos: [
      {
        objeto: "Lápis"
      },

      {
        objeto: "Borracha"
      },

      {
        objeto: "Tesoura"
      },

      {
        objeto: "Caderno"
      },

      {
        objeto: "Caneta"
      },

      {
        objeto: "Corretivo líquido"
      }
    ]
  }

  render () {
    return (
      <div>
        {this.state.objetos.map((item) => (
          <div>
            <h2>Objeto: {item.objeto}</h2>
          </div>
        ))}
      </div>
    )
  }
}

export default App