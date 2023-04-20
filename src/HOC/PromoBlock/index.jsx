import style from './style.module.scss';
import cn from 'classnames';
import img from '../../source/oppo.png'
import zarayd from '../../source/MainLogo.svg'
import imgone from '../../source/image29.png'
import imgtwo from '../../source/image21.png'
import Sale from '../../Components/Sale';




 
function PromoBlock() {
  return (
        <div className={cn(style.PromoBlock)}>
            <div className={cn(style.Header)}>
                <h2>Подберем Вашу идеальную клюшку</h2>
                <p>Пройдите тест и узнайте какая клюшкам подойдет именно вам</p>
            </div>
            <div className={cn(style.PhotoBlock)}>
                <div className={cn(style.bgEffect)}>
                  <div></div>
                  <div></div>
                </div>
                <img className={cn(style.back)} src={zarayd} alt="" />
                <img className={cn(style.top)} src={img} alt="" />
                <button>Пройти тест</button>
            </div>
            <div className={cn(style.AboutUs)}>
                <div className={cn(style.AboutTitle)}>
                    <h2>О бренде ЗаряД</h2>
                    <p>Первый завод в россии по производству полного ассортимента высококачественных хоккейных клюшек для всех возрастных категорий и уровней игры</p>
                    <button>Подробнее о компании</button>
                </div>
                <div className={cn(style.promo)}>
                <div className={cn(style.promoItem)}>
                        <h3>Космические технологии</h3>
                        <p>Первый завод в россии по производству полного ассортимента высококачественных хоккейных клюшек для всех возрастных категорий и уровней игры</p>
                        <img src={imgone} alt="" />
                </div>
                <div className={cn(style.promoItem)}>
                        <h3>Российский стиль</h3>
                        <p>Клюшки заряд специально спроектированы для точной игры в пас, первого длинного паса, максимального контроля шайбы и остроатакующей комбинационной игры</p>
                        <img src={imgtwo} alt="" />
                </div>
                </div>
            </div>
            <Sale/>
        </div>
  );
}

export default PromoBlock;
