import React, {Fragment,useState} from "react";
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import UsuarioContext from './UsuarioContext';

import LogoImg from "./LogoImg";

export default function NavBar() {

    let history = useHistory();
    const [tituloABuscar,setTituloABuscar] = useState("")

    function handleClick(event) {
        history.push(event.target.name);
    }

    function cambioTituloABuscar(event){
      setTituloABuscar(event.target.value)
    };

    function buscarLibro(){
        history.push("/libro/"+ tituloABuscar);
    }

    function salir(context){
        context.cerrarSesion()
        history.push("/");
    }


    return (
        <UsuarioContext.Consumer>
        {context =>  {return( 
            <Fragment>
                <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary m-3 " variant="dark">
                    <LogoImg/>
                    <Nav className="mr-auto">
                        <Nav.Link onClick={handleClick} name="/hojaderuta">Crear Hoja De Ruta</Nav.Link>
                        <Nav.Link onClick={handleClick} name="/colaborador"  >Crear Colaborador</Nav.Link>
                        <Nav.Link onClick={handleClick} name="/graficos"  >Graficos</Nav.Link>
                    </Nav>
                    <Form inline onSubmit={buscarLibro}>
                        <FormControl onChange={cambioTituloABuscar} value={tituloABuscar} type="text" placeholder="Nombre De Libro a Buscar" className="mr-sm-2"/>
                        <Button onClick={buscarLibro} variant="outline-light">Buscar</Button>
                    </Form>
                    <Button onClick={()=>{salir(context)}} className= "ml-3" variant="danger">Salir</Button>
                </Navbar>
            </Fragment>
        )}
        }

        </UsuarioContext.Consumer>
    );
}

