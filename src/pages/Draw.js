import React, { Component } from "react";
import Home from './Home';
import Perfil from './Perfil';
import Configuration from './Configuration';
import Exit from './Exit'; 

import SideBar from "./SideBar.js";
import { DrawerNavigator } from "react-navigation";
const Draw = DrawerNavigator(
  {
  Home: {
    name: 'Home',
    screen: Home,
  },
  Perfil: {
    name: 'Perfil',
    screen: Perfil,
  },
  Configuration: {
    name: 'Configuracoes',
    screen: Configuration,
  },
  Exit: {
    name: 'Sair',
    screen: Exit,
  },},
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default Draw;