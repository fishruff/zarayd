import style from './style.module.scss';
import cn from 'classnames';
import logo from '../../source/logo.svg'
import {FiSearch} from 'react-icons/fi'
import {BsTelephone , BsPerson, BsCart2} from 'react-icons/bs'
import {TbBrandGoogleAnalytics} from 'react-icons/tb'

function Header() {
  return (
        <div className={cn(style.Header)}>
            <div className={cn(style.Logo, style.block)}>
                <img src={logo} alt="" />
                <div className={cn(style.lang)}>
                    <button className={cn(style.langActive)}>Ru</button>
                    <p> / </p>
                    <button>En</button>
              </div>
            </div>   
            <div className={cn(style.HeaderNav, style.block)}>
              <a href='#' className={cn(style.active)}>Клюшки</a>
              <a href='#'>Одежда</a>
              <a href='#'>Аксессуары</a>
              <a href='#'>Кастомизация</a>
              <a href='#'>Отследить заказ</a>
              </div> 
              <div className={cn(style.otherBtn, style.block)}>
                <a href="#"><FiSearch/></a>
                <a href="#"><BsTelephone/></a>
                <a href="#"><TbBrandGoogleAnalytics/></a>
                <a href="#"><BsPerson/></a>
                <div className={cn(style.Cart)}>
                <a href="#"><BsCart2/></a>
                </div>
              </div>
        </div>
  );
}

export default Header;
