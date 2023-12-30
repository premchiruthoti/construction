import { Fragment } from 'react';
import MainNavigation from './navigation/MainNavigation';
import Footer from '../footer/footer';


function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      {props.children}
      <Footer />
    </Fragment>
  );
}

export default Layout;
