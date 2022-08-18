import Menu from "./Components/Menu/Menu";
import './index.css'
import Logo from './img/logoNCC_1.png'
import cssIcon from './img/css-icon 1.png'
import htmlIcon from './img/html-icon 1.png'
import urlIcon from './img/url-icon 1.png'
import Footer from "./Components/Footer/footer";
function App() {
  return (
    <header>
      <Menu />
      <div className='container'>
        <div className="header__container">
          <img src={Logo} alt="" />
        </div>
        <div className="title__container">
          <h3>Lorem ipsum dolor sit asmet?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.</p>
        </div>
        <div className="content_container">
          <article className="content_container_child">
            <div className="title_content">
              <h3>Lorem ipsum dolor sit amet</h3>
            </div>
            <div className="square">
              <div>
                <img src={cssIcon} alt='' />
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at </p>
            </div>
          </article>
          <article className="content_container_child">
            <div className="title_content">
              <h3>Lorem ipsum dolor sit amet</h3>
            </div>
            <div className="square">
              <div>
                <img src={htmlIcon} alt='' />
              </div>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at </p>
            </div>
          </article>
          <article className="content_container_child">
            <div className="title_content">
              <h3>Lorem ipsum dolor sit amet</h3>
            </div>
            <div className="square">
              <div>
                <img src={urlIcon} alt='' />
              </div>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at </p>
            </div>
          </article>
        </div>
        <Footer />
      </div>

    </header>
  );
}

export default App;
