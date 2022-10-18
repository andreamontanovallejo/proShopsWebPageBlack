import React from 'react'
import { Link } from 'react-router-dom'

import MoreVertIcon from '@material-ui/icons/MoreVert'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import emptyImage from '../images/emptyImage.svg'

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

import { PageServices } from '../../services/index'

import {
  DivContainer,
  FirstLine,
  DivLogo,
  RightSpace,
  DivMenuSmallScreen,
  DivIconsSmallScreen,
  DivCar,
  DivNav,
} from './navBarStyles'

export default class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
    this.services = new PageServices()
    this.state = {
      logo: undefined,
      sections: [],
      anchorEl: null,
    }
  }

  componentDidMount() {
    this.getNavbarInformation()
  }

  getNavbarInformation = () => {
    this.services
      .getNavbarInformation(process.env.REACT_APP_COMPANYID)
      .then(response => {
        this.setState({
          logo: response.data.logo,
          sections: response.data.sections,
        })
      })
  }

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget,
    })
  }

  handleClose = () => {
    this.setState({
      anchorEl: null,
    })
  }

  render() {
    return (
      <DivContainer>
        <FirstLine>
          <DivMenuSmallScreen>
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={this.state.anchorEl}
              keepMounted
              open={Boolean(this.state.anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>
                <Link to={'/'}>Inicio</Link>
              </MenuItem>

              {this.state.sections.map(section => (
                <MenuItem onClick={this.handleClose} key={section._id}>
                  <Link to={`/products/${section._id}/0/0`}>
                    {section.name}
                  </Link>
                </MenuItem>
              ))}

              <MenuItem onClick={this.handleClose}>
                <Link to={'/contact'}>Contacto</Link>
              </MenuItem>
            </Menu>
          </DivMenuSmallScreen>
          <DivLogo>
            <Link to="/">
              <img
                src={this.state.logo ? this.state.logo.url : emptyImage}
                alt=""
              ></img>
            </Link>
          </DivLogo>
          <RightSpace>
            <DivIconsSmallScreen>
              <IconButton>
                <Link to={'/cart'}>
                  <ShoppingCartIcon />
                </Link>
              </IconButton>
            </DivIconsSmallScreen>
            <DivCar>
              <Link to={'/cart'}>
                <span>{`Carrito`}</span>
                <ShoppingCartIcon />
              </Link>
            </DivCar>
          </RightSpace>
        </FirstLine>
        <DivNav>
          <Link to={'/'}>Inicio</Link>
          {this.state.sections.map(section => (
            <Link key={section._id} to={`/products/${section._id}/0/0`}>
              {section.name}
            </Link>
          ))}
          <Link to={'/contact'}>Contacto</Link>
        </DivNav>
      </DivContainer>
    )
  }
}
