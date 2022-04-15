import styled, { css } from 'styled-components';

import HomeIcon from '@material-ui/icons/Home';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import BuildIcon from '@material-ui/icons/Build';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MyLocationIcon from '@material-ui/icons/MyLocation';

export const Container = styled.div`
background-color: var(--color-primary);
@media(min-width: 500px) {
  display:flex;
  flex-direction: column;
  justify-content: space-between;

  position: sticky;
  top: 0;
  left: 0;
  padding: 9px 13px;
  min-height: 100vh;
}
a {
  text-decoration: none;
}
`;

export const Topside = styled.div`
display: flex;
flex-direction: column;
align-items: center;

@media(min-width: 1280px){
  align-items: flex-start;
}

@media(max-width: 499px){
  display: none;
}
`;

export const Logo = styled.div`
width: 41px;
height: 41px;
padding-bottom: 110px;
@media (max-width: 1280px){
  display: none;
}
> path {
  fill: var(--twitter);
}

margin-bottom: 20px;
`;

export const MenuButton = styled.button`
display: flex;
align-items: center;
flex-shrink: 0;

> span {
  display: none;
}

@media(min-width: 1280px){
  margin-top: 15px;
  > span {
    display: inline;
    margin-left: 19px;

    font-weight: bold;
    font-size: 19px;

    color: var(--color-tertiary);
  }
  padding-right: 15px;
}

padding: 8.25px 0;
outline: 0;

& + button {
  margin-top: 16.5px;
}

cursor: pointer;
border-radius: 25px;

  &:hover {
    background: var(--color-tertiary);
  }

  &:hover, &.active {
    span, svg {
      color: var(--color-quaternary);
      fill: var(--color-quaternary);
    }
  }
`;

const iconCSS = css`
flex-shrink: 0;

width: 30px;
height: 30px;
color: var(--white);
`;

export const IconHome = styled(HomeIcon)`${iconCSS}`;
export const IconUsers = styled(AssignmentIndIcon)`${iconCSS}`;
export const IconNotification = styled(NotificationsActiveIcon)`${iconCSS}`;
export const IconProfile = styled(PersonAddIcon)`${iconCSS}`;
export const IconConfiguration = styled(BuildIcon)`${iconCSS}`;
export const IconLogout = styled(PowerSettingsNewIcon)`${iconCSS}`;
export const IconLocal = styled(LocationOnIcon)`${iconCSS}`;
export const IconSetor = styled(MyLocationIcon)`${iconCSS}`;

export const Botside = styled.div`
margin-top: 10px;
display: flex;
align-items: center;

@media(max-width: 499px){
  display: none;
}
`;
export const Avatar = styled.div`
width: 49px;
height: 49px;

flex-shrink: 0;

border-radius: 30%;
background: var(--gray);
`;
export const ProfileData = styled.div`
display: none;

@media(min-width: 1280px){
  display: flex;
  flex-direction: column;

  margin-left: 14px;
  font-size: 18px;

  > span {
    padding-top: 5px;
    font-size: 13px;
  }
}

`;

export const BottomMenu = styled.div`
position: fixed;
bottom: 0;
left: 0;
right: 0;
z-index: 2;

background: var(--color-primary);
width: 100%;
border-top: 1px solid var(--outline);

display: flex;
justify-content: space-between;

padding: 8px min(16px, max(10vw, 10px));

@media (min-width: 500px){
  display: none;
}
`;
