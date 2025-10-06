import { useState } from 'react';
import './style.sass'
import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdOutlineDeliveryDining  } from "react-icons/md";
import { LiaInfoCircleSolid, LiaShoppingBagSolid } from "react-icons/lia";
import { BiSolidCircle } from "react-icons/bi";
import { HiMiniXMark } from "react-icons/hi2";
import { motion } from "motion/react"
export default function RestaurantCart(){
    let cart = [
        {
            foodId: 1,
            foodImage: 'https://eda.yandex/images/14739469/2f883bfa20d96534147bec5a3dfd928a-400x400nocrop.jpeg',
            foodName: 'Шашлык',
            foodCategory: 'Горячее',
            foodPrice: 1200,
            foodDescription: 'Lorem Ispnum',
            caloricСontent: [
                {
                    weight: 445,
                    kkal: 1200,
                    protein: 122,
                    fats: 11,
                    carbohydrates: 15
                }
            ]
        },
        {
            foodId: 2,
            foodImage: 'https://eda.yandex/images/3784951/531c9e607944f7386a4463b766357db7-400x400nocrop.jpeg',
            foodName: 'Люля кебаб',
            foodCategory: 'Горячее',
            foodPrice: 1200,
            foodDescription: 'Lorem Ispnum',
            caloricСontent: [
                {
                    weight: 445,
                    kkal: 1200,
                    protein: 122,
                    fats: 11,
                    carbohydrates: 15
                }
            ]
        },
        {
            foodId: 3,
            foodImage: 'https://eda.yandex/images/14739469/2f883bfa20d96534147bec5a3dfd928a-400x400nocrop.jpeg',
            foodName: 'Кетчуп',
            foodCategory: 'Соусы',
            foodPrice: 1200,
            foodDescription: 'Lorem Ispnum',
            caloricСontent: [
                {
                    weight: 445,
                    kkal: 1200,
                    protein: 122,
                    fats: 11,
                    carbohydrates: 15
                }
            ]
        },
    ]
    const [deliveryMode, setDeliveryMode] = useState(false)
    const [modalOption, setModalOption] = useState(false)

    return(
        <div className='restaurant_cart'>
            <div className='cart'>
                <div className='cart_header'>
                    <h2>Корзина</h2>
                    <h3>Очистить</h3>
                </div>
                <div className='cart_delivery-option'>
                    <div onClick={()=>{setDeliveryMode(false)}} className={`pickup button ${!deliveryMode ? 'active' : null}`}>Самовывоз</div>
                    <div onClick={()=>{setDeliveryMode(true)}} className={`delivery button ${deliveryMode ? 'active' : null}`}>Доставка</div>
                </div>
                <div className='restaurant_cart__wrapper'>
                    {cart.map((item)=>(
                        <div key={item.foodId} className='cart_item'>
                            <div className='cart_item__wrapper'>
                                <div className='cart_item__image' style={{background: `url(${item.foodImage}) center center/cover no-repeat`}}></div>
                                <div className='cart_item__info'>
                                    <div>
                                        <h3 className='info_food__name'>{item.foodName}</h3>
                                        <h4 className='info_food__type'>{item.foodDescription}</h4>
                                    </div>
                                    <h4 className='info_food__price'>{item.foodPrice}р | {item.caloricСontent[0].weight}г</h4>
                                </div>
                            </div>
                            <div className='cart_counter'>
                                <div className='counter_control'><FaMinus /></div>
                                <div className='count'>1</div>
                                <div className='counter_control'><FaPlus/></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='cart_option'>
                <div className='pickup_option'>
                            <div className='pickup_option__item'>
                                <div className='pickup_option__item__info'>
                                    {
                                        deliveryMode ?
                                        <>
                                            <MdOutlineDeliveryDining className='item_ico'/>
                                            <h3>Доставка +99р</h3>
                                        </> :
                                        <>
                                            <LiaShoppingBagSolid className='item_ico' />
                                            <h3>Самовывоз <br/> <span>Бесплатно</span></h3>
                                        </>
                                    }
                                    
                                </div>
                                <LiaInfoCircleSolid onClick={()=>{setModalOption(true)}} className='info_ico' />
                            </div>
                </div>
                <div className='button'><div>Продолжить</div> <div>{deliveryMode ? 1000 + 99 : 1000}р</div></div>
            </div>
            <div className={`option_modal_window ${modalOption ? ' active' : ''}`}>
                <HiMiniXMark onClick={()=>{setModalOption(false)}} className='x_mark'/>
                <h2>Текущие условия</h2>
                {
                    deliveryMode ?
                    <div className='pickup_contract first'>
                        <div className='option_header'>
                            <span>
                                <MdOutlineDeliveryDining className='item_ico'/>
                                <h3>Доставка</h3>
                            </span>
                            <h3>99р</h3>
                        </div>
                    </div>
                    :
                    <div className='pickup_contract first'>
                        <div className='option_header'>
                            <span>
                                <LiaShoppingBagSolid className='item_ico' />
                                <h3>Самовывоз</h3>
                            </span>
                            <h3>0р</h3>
                        </div>
                        <div className='option_descr'>
                            <h3>Куда идти:</h3>
                            <h4>Российская Федерация, Самара, Московское шоссе, 56</h4>
                        </div>
                    </div>
                }
                <div className='pickup_contract second'>
                    <div className='option_header'>
                        <span>
                            <BiSolidCircle className='item_ico'/>
                            <h3>Сервисный сбор</h3>
                        </span>
                        <h3>39р</h3>
                    </div>
                    <div className='option_descr'>
                        <h4>Сбор составляет 5% от корзины, не меньше 29₽. Этот сбор помогает нам покрыть расходы на обработку заказов, поддержку клиентов и улучшения нашего сервиса.</h4>
                    </div>
                </div>
            </div>
            <div className={`modal_overflow ${modalOption ? ' active' : ''}`} onClick={()=>{setModalOption(false)}}></div>
        </div>
    )
}