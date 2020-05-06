/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { render } from 'react-dom'
import Styles from './Styles'
import { Form, Field } from 'react-final-form'


const onSubmit = async values => {  
  fetch('http://localhost:4000',{
    method:'POST',
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      query:`
      mutation {
        createUser(
          nome:${JSON.stringify(values.nome)},
          cep:${JSON.stringify(values.cep)},
          rua:${JSON.stringify(values.rua)},
          numero:${JSON.stringify(values.numero)},
          bairro:${JSON.stringify(values.bairro)},
          cidade:${JSON.stringify(values.cidade)},
          uf:${JSON.stringify(values.uf)},
        ){
          id
        }
      }
      `
    })
  })
  .then(res => res.json())
  .then(data => {
    alert('Dados inseridos com sucesso!')
    window.location.reload()
  })
  .catch(error => console.log(error))
}

const App = () => (
    <Styles>
      <h1>Formulário de teste para Digi</h1>    
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Nome</label>
              <Field
                name="nome"
                component="input"
                type="text"
                placeholder="Nome"
              />
            </div>
            <div>
              <label>CEP</label>
              <Field
                name="cep"
                component="input"
                type="text"
                placeholder="69000-000"
              />
            </div>                 
            <div>
              <label>Rua</label>
              <Field
                name="rua"
                component="input"
                type="text"
                placeholder="Nome da rua"
              />
            </div>                 
            <div>
              <label>Número</label>
              <Field
                name="numero"
                component="input"
                type="text"
                placeholder="ex.: 00"
              />
            </div>                 
            <div>
              <label>Bairro</label>
              <Field
                name="bairro"
                component="input"
                type="text"
                placeholder="Bairro"
              />
            </div>                 
            <div>
              <label>Cidade</label>
              <Field
                name="cidade"
                component="input"
                type="text"
                placeholder="Cidade"
              />
            </div>                 
            <div>
              <label>UF</label>
              <Field
                name="uf"
                component="input"
                type="text"
                placeholder="UF"
              />
            </div>                 
            
            <div className="buttons">
              <button type="submit" disabled={submitting || pristine}>
                Enviar
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
          </form>
        )}
      />
    </Styles>
)

render(<App />, document.getElementById('root'))

