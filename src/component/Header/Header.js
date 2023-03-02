import './Header.css'

function Header() {
    return (
      <div className="header">
        <div className="header_catalog">
        <div className="header_logo"></div>
        <a href="/Catalog">Каталог</a>
        </div>
        <div className="header_wrapper">
            <a href="/Categories">Категории</a>
            <a href="/Coupon">Купон</a>
            <a href="/Action">Акции</a>
            <a href="/Contacts">Контакты</a>
        </div>
      </div>
    );
  }
  
  export default Header