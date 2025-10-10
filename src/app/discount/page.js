'use client'
import { useMemo } from "react";
import RestaurantCart from "../components/RestaurantCart/RestaurantCart"
import { HiMiniGiftTop } from "react-icons/hi2";
import './discountPage.sass'

export default function discountPage(){
    const discounts =[
        {
            id: 0,
            restaurant: 'Шашлычка',
            discountPrice: '5%',
            discountHeader: 'Скидки для вас и ваших друзей',
            discountDescription: 'Пригласите друга в приложение и поделитесь промокодом на скидку 500₽. А за его первый заказ мы подарим скидку 500₽ и вам.',
            discountCondition: 'Промокод сработает на заказы от 800₽',
            discountCode: 'swaga'
        },
        {
            id: 1,
            restaurant: 'Пельменная',
            discountPrice: '5%',
            discountHeader: 'Скидки для ваших друзей',
            discountDescription: 'А за его первый заказ мы подарим скидку 500₽ и вам.',
            discountCondition: 'Промокод сработает на заказы от 340₽',
            discountCode: 'ywfas8g3'
        },
    ]
    const restaurants = useMemo(() => {
        if (!discounts) return [];
        
        const arr = [];
        discounts.forEach((restaurantItem) => {
            arr.push(restaurantItem.restaurant);
        });
        
        return arr.filter((item, index) => arr.indexOf(item) === index);
    }, [discounts]);
    return(
        <div className="page page_discount">
            <h2 className="page_header">Промокоды</h2>
            <h3 className="page_subheader">Скопируйте и вставьте код при оплате заказа</h3>
            <div className="discount_wrapper">
                {restaurants.map((item)=>(
                    <div key={item} className="discount_wrapper__restaurant">
                        <h3 className="discount_restaurant_block__restaurant_name">{item}</h3>
                        <div className="discount_restaurant_block">
                            {
                                discounts.map((discount)=> { return discount.restaurant == item ?
                                    (<div key={discount.id} className="discount_restaurant_block__restaurant_item">
                                        <HiMiniGiftTop className="discount_restaurant_block__restaurant_item__ico"/>
                                        <h3 className="discount_restaurant_block__restaurant_item__header">{discount.discountHeader}</h3>
                                    </div>)
                                : null})
                            }
                        </div>
                    </div>
                ))}
                {/* {
                    discounts.map((discount)=>(
                        <div key={discount.id} className="discount_item">
                            <HiMiniGiftTop />
                            <h3>{discount.discountHeader}</h3>
                        </div>
                    ))
                } */}
            </div>
            <div className="modal">
                
            </div>
        </div>
    )
}