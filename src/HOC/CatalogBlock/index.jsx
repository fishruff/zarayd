import Card from '../../Components/Card';
import style from './style.module.scss';
import cn from 'classnames';

function CatalogBlock() {
  return (
        <div className={cn(style.CatalogBlock)}>
            <div className={cn(style.Slider)}>
                <h2>Выбор наших клиентов</h2>
                <div className={cn(style.navBtn)}>
                    <button>a</button>
                    <button>b</button>
                </div>
            </div>
                <div className={cn(style.SliderItems)}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            <div className={cn(style.stripes)}>

            <div className={cn(style.marquee)}>
            <div className={cn(style.marqueeb)}>
               <p>Клюшки для маленьких чемпионов</p> 
               <p>Клюшки для маленьких чемпионов</p> 
               <p>Клюшки для маленьких чемпионов</p> 
               <p>Клюшки для маленьких чемпионов</p> 
            </div>            
            </div>            
            </div>
        </div>
  );
}

export default CatalogBlock;
