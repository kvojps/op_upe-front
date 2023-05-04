import { NavLink, useNavigate } from "react-router-dom";
import { HeaderContainer, HeaderContent, HeaderMain } from "./styles";
import logo from '../../assets/logo.svg'
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { List } from '@phosphor-icons/react'

const ITEM_HEIGHT = 48;

export function Header() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const navigate = useNavigate()

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const options = [
        {
            name: 'Home',
            navigate: () => navigate('/')
        },
        {
            name: 'Dashboard',
            navigate: () => navigate('/dashboard')
        },
        {
            name: 'Projetos',
            navigate: () => navigate('/projetos')
        },
        {
            name: 'Contato',
            navigate: () => navigate('/contato')
        },
        {
            name: 'Sobre',
            navigate: () => navigate('/sobre')
        }
    ];

    function renderDropDownMenu() {
        return (
            <div>
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
              >
                <List />
              </IconButton>
              <Menu
                id="long-menu"
                MenuListProps={{
                  'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '20ch',
                  },
                }}
              >
                {options.map((option) => (
                  <MenuItem 
                    key={option.name} 
                    onClick={() => {
                      handleClose()
                      option.navigate()
                    }}
                  >
                    {option.name}
                  </MenuItem>
                ))}
              </Menu>
            </div>
        );
    }
    
    return (
        <HeaderContainer>
            <HeaderContent>
                <HeaderMain>
                    <NavLink to={"/"} >
                        <img src={logo} alt="" />
                    </NavLink>
                    <nav>
                        <NavLink to={"/"} >
                            <h1>Início</h1>
                        </NavLink>

                        <NavLink to={"/dashboard"} >
                            <h1>Dashboard</h1>
                        </NavLink>

                        <NavLink to={"/projetos"} >
                            <h1>Projetos</h1>
                        </NavLink>

                        <NavLink to={"/contato"} >
                            <h1>Contato</h1>
                        </NavLink>

                        <NavLink to={"/sobre"} >
                            <h1>Sobre</h1>
                        </NavLink>

                        {renderDropDownMenu()}
                    </nav>

                    <NavLink to={"/entrar"} >
                        <button>
                            ENTRAR
                        </button>
                    </NavLink>
                </HeaderMain>
            </HeaderContent>
        </HeaderContainer>
    )
}
