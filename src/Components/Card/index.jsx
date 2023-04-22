import style from './style.module.scss';
import cn from 'classnames';
import Photo from '../../source/itemPhoto.png'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {TbBrandGoogleAnalytics} from 'react-icons/tb'

function Card() {
  return (
        <div className={cn(style.Card)}>
            <img src={Photo} alt="" />
            <p>Хоккейная клюшка Заряд Т100</p>
            <p className={cn(style.Price)}>14 690 ₽</p>
            <div className={cn(style.btn)}>
                <button><TbBrandGoogleAnalytics/></button>
                <button>
                <div className={cn(style.moreBtn)}>
                    <p>Подробнее</p>
                    <p><MdKeyboardArrowRight/></p>
                </div>
                </button>
            </div>
        </div>
  );
}

export default Card;
