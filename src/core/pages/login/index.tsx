import React from 'react';
import Section from '../../components/Login/Section';
import data from '../../data';
import SideMenu from '../../components/Login/SideMenu';
import MenuForm from '../../components/Login/MenuForm';

const Login: React.FC = () => (
  <>
    <Section
      variant="blue"
      title={data[0].title}
      description={data[0].description}
    />
    <Section
      variant="beige"
      title={data[1].title}
      description={data[1].description}
    />
    <Section
      variant="blue"
      title={data[2].title}
      description={data[2].description}
    />
    <Section
      variant="beige"
      title={data[3].title}
      description={data[3].description}
    />
    <SideMenu>
      <MenuForm />
    </SideMenu>
  </>
);

export default Login;
