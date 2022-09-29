import React from 'react'
import NavBar from '../navBar/navBar'
import Footer from '../footer/footer'
import Alert from 'react-bootstrap/Alert';
import './aboutus.css';
import Table from 'react-bootstrap/Table';


const aboutus = () => {
  return (
    <>
    <NavBar/>
    
    <div class='bienvenues'>
      <br />
    <Alert variant="secondary">
      <Alert.Heading>Hola, bienvenidx</Alert.Heading>
      <p>
        Nos alegra mucho tenerte por aquí, te presentamos algunas de las experiencias de nuestros clientes, también te invitamos a compartirnos tus comentarios ¡Crecemos juntxs, gracias!
      </p>
      <hr />
      <p className="mb-0">
        Cualquiera que sea tu idea, cuéntanos sobre esa fecha especial y cómo te gustaria celebrar ¡Podemos ayudarte!
      </p>
    </Alert>
    </div>

    <div class='coments'>
    <Table striped="columns">
      <thead>
        <tr>
          <th>Comentario</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>"Las bombas de chocolate, están riquísimas además de que el chocolate que utilizan es de buena calidad 🤤🤤"</td>
          <td>@AlmaHC</td>
        </tr>
        <tr>
          <td>"Las rosas eternas son preciosas! Los dulces son de buena calidad 👌 La entrega es perfecta 💗 gran detalle en la elaboración de los artículos. Bastante recomendable"</td>
          <td>@MariiShuyPe</td>
        </tr>
        <tr>
          <td>"Oye muchas gracias, otra vez. Le encanto, le facino, la maravillo 🤭😝"</td>
          <td>@JorgeCruz</td>
        </tr>
        <tr>
          <td>"Muchas gracias amigaaaaa!! Se ven super padres!!"</td>
          <td>@BrandonG</td>
        </tr>
      </tbody>
    </Table>
    </div>

    <Footer/>
    </>
  )
}

export default aboutus