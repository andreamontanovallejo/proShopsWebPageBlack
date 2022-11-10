import { Divider } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import React from 'react'
import { Link } from 'react-router-dom'
import { PageServices } from '../../services/index'
import {
  DivAdress,
  DivContainer,
  DivCopyRight,
  DivEachLink,
  DivIcon,
  DivLeft,
  DivMenu,
  DivMiddle,
  DivNeighborhood,
  DivNone,
  DivPhone,
  DivRight,
  DivSocialNetworks,
  DivTitle,
} from './footerStyles'

export default class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.services = new PageServices()
    this.state = {
      address: '',
      comunaOrNeighborhood: '',
      facebookUrl: '',
      instagramUrl: '',
      logoUrl: '',
      phone: '',
      phoneOnlyNumbers: '',
    }
  }

  componentDidMount() {
    this.getInitialInformation()
  }

  getInitialInformation = () => {
    this.services
      .getFooterInformation(process.env.REACT_APP_COMPANYID)
      .then(res => {
        this.setState({
          address: res.data.address,
          comunaOrNeighborhood: res.data.comunaOrNeighborhood,
          facebookUrl: res.data.facebookUrl,
          instagramUrl: res.data.instagramUrl,
          logoUrl: res.data.logoUrl.cloudinaryUrl,
          phone: res.data.phone,
          phoneOnlyNumbers: res.data.phoneOnlyNumbers,
        })
      })
  }

  render() {
    return (
      <DivContainer>
        <DivLeft>
          ©2022 ProShops <br /> Todos los derechos reservados <br /> Software a
          medida y Webs autoadministrables. <br /> Creado por{' '}
          <a
            href="https://www.proshops.cl"
            target="_blank"
            rel="noopener noreferrer"
          >
            proshops.cl
          </a>
        </DivLeft>
        <DivMiddle>
          <Link to="/">
            <img src={this.state.logoUrl} alt=""></img>
          </Link>
          <DivAdress>{this.state.address}</DivAdress>
          <DivNeighborhood>{this.state.comunaOrNeighborhood}</DivNeighborhood>
          <DivPhone>{`Tel: ${this.state.phone}`}</DivPhone>
        </DivMiddle>
        <DivRight>
          <DivTitle>Menú</DivTitle>
          <DivMenu>
            <DivEachLink>
              <Link to={`/`}>Inicio</Link>
            </DivEachLink>

            <DivEachLink>
              <Link to={`/contact`}>Contacto</Link>
            </DivEachLink>

            <DivEachLink>
              <Link to={`/cart`}>Carrito</Link>
            </DivEachLink>
          </DivMenu>
          <Divider />
          <DivSocialNetworks>
            <DivIcon>
              <a
                href={this.state.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </a>
            </DivIcon>
            <DivIcon>
              <a
                href={this.state.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
            </DivIcon>
            <DivIcon>
              <a
                href={`https://api.whatsapp.com/send?phone=${this.state.phoneOnlyNumbers}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
              </a>
            </DivIcon>
          </DivSocialNetworks>
          Síguenos en redes sociales
          <DivNone>
            <Divider />
          </DivNone>
        </DivRight>
        <DivCopyRight>
          ©2022 ProShops <br /> Todos los derechos reservados <br /> Software a
          medida y Webs autoadministrables. <br /> Creado por{' '}
          <a
            href="https://www.proshops.cl"
            target="_blank"
            rel="noopener noreferrer"
          >
            proshops.cl
          </a>
        </DivCopyRight>
      </DivContainer>
    )
  }
}
