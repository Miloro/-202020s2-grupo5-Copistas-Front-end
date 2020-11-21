import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../images/logo_copistas1.png";

export default function LogoImg(){

        return (
            <a href="/home" className="navbar-brand">
                <img src={logo} width="30" height="30"
                     className="rounded-circle mr-1 d-inline-block align-top" alt=""/>
                Libraille
            </a>
        );
    }


