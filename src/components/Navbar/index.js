import React from 'react'
import { useTheme } from 'styled-components'
import { HiAcademicCap } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { Bio } from '../../data/constants';
import { Nav, NavContainer, NavLogo, MobileIcon, NavItems, NavLink, ButtonContainer, GithubButton, Span, MobileMenu, MobileMenuLinks } from './NavbarStyle'

const Navbar = () => {
    const [open, setOpen] = React.useState(false)
    const theme = useTheme()
    return (
        <Nav>
            <NavContainer>
                <NavLogo to="/">
                    <a
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            color: 'white',
                            marginBottom: '20',
                            cursor: 'pointer',
                        }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <HiAcademicCap size="3rem" />
                        <Span>Harsha</Span>
                    </a>
                </NavLogo>
                <MobileIcon>
                    <FaBars 
                        onClick={() => setOpen(!open)}
                    />
                </MobileIcon>
                <NavItems>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#experience">Experience</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#education">Education</NavLink>
                    <NavLink href="#contact">Contact</NavLink>
                </NavItems>
                <ButtonContainer>
                    <GithubButton
                        href={Bio.github} target="_blank"
                    >GitHub Profile</GithubButton>
                </ButtonContainer>
            </NavContainer>
            {
                open && (
                    <MobileMenu open={open}>
                        <MobileMenuLinks href="#about">About</MobileMenuLinks>
                        <MobileMenuLinks href="#skills">Skills</MobileMenuLinks>
                        <MobileMenuLinks href="#experience">Experience</MobileMenuLinks>
                        <MobileMenuLinks href="#projects">Projects</MobileMenuLinks>
                        <MobileMenuLinks href="#education">Education</MobileMenuLinks>
                        <MobileMenuLinks href="#contact">Contact</MobileMenuLinks>
                        <GithubButton
                            style={{
                                width: 'max-content',
                                padding: '10px 16px',
                                background: `${theme.primary}`,
                                color: 'white',
                            }}
                            href={Bio.github} target="_blank"
                        >GitHub Profile</GithubButton>
                    </MobileMenu>
                )
            }
        </Nav>
    )
}

export default Navbar
