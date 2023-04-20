import style from './style.module.scss';
import cn from 'classnames';
import MainPhoto from '../../source/MainPhoto.png'
import { HiOutlineLightningBolt } from "react-icons/hi";
import { TbDiscount2 } from "react-icons/tb";

function Sale() {
  return (
        <div className={cn(style.saleMail)}>
        <div className={cn(style.saleMailTitle)}>
            <h3>Получи скидку</h3>
            <div className={cn(style.line)}>
            <HiOutlineLightningBolt/>
            <h4>500 ₽</h4> 
            <TbDiscount2/>
            </div> 
            <h3>за подписку</h3>
            <div className={cn(style.mail)}>
                <p>Никакого спама и рекламы, только полезная информация, скидки и персональные предложения</p>
                <input type="email" name="" id="" placeholder='Ваш Email' />
                <button type='submit'>Подписаться</button>
            </div>
        </div>
        <img src={MainPhoto} alt="" />
    </div>
  );
}

export default Sale;
