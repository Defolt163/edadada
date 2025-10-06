'use client'
import { useEffect, useMemo, useState } from 'react';
import './style.sass'
import { LiaInfoCircleSolid, LiaUserClockSolid } from "react-icons/lia";
import { info } from 'sass';
import RestaurantMenu from '../components/RestaurantMenu/RestaurantMenu';
import RestaurantCart from '../components/RestaurantCart/RestaurantCart';
export default function RestaurantPage(){
    const data = {
        restaurantId: 1,
        name: 'Шашлычка',
        country: 'Русская',
        address: 'Российская Федерация, Самара, Ново-Садовая улица, 184А',
        rating: 4.5,
        info: 'Contractor (seller) ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ТКЕМАЛИ", 443124, 443124, Самара, ул Ново-Садовая, д184А ком52, INN 6319261760, reg. number 1236300025158',
        time: 'from 11:30 to 22:30',
        deliveryTime: '20-30min',
        menu: [
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
    }
    const [infoStatus, setInfoStatus] = useState(false)
    const [category, setCategory] = useState(false)
    //let category = []
    const categories = useMemo(() => {
        if (!data?.menu) return [];
        
        const arr = [];
        data.menu.forEach((categoryItem) => {
            arr.push(categoryItem.foodCategory);
        });
        
        return arr.filter((item, index) => arr.indexOf(item) === index);
    }, [data?.menu]);
    return(
        <div className="restaurant_page" onClick={infoStatus ? ()=>{setInfoStatus(false)}: null}>
            <div className='restaurant_page__wrapper'>
                <div className='restaurant_info'>
                    <h1>{data.name}</h1>
                    <h2>{data.address}</h2>
                    <div className='restaurant_info__other'>
                        <div className='other_rating'>
                            <div className='rating_ico'></div>
                            {data.rating}
                        </div>
                        <div className='other_delivery'>
                            <LiaUserClockSolid className='delivery_time__ico'/>
                            {data.deliveryTime}
                            </div>
                        <div className='other_info' onClick={()=>{setInfoStatus(true)}} >
                            <LiaInfoCircleSolid />
                            {infoStatus ? 
                                <div className='other_info__block'>
                                    <h3>{data.name}</h3>
                                    <h4>{data.address}</h4>
                                    <hr/>
                                    <p>{data.info}</p>
                                    <hr/>
                                    <p>{data.time}</p>
                                </div> : null
                            }
                        </div>
                    </div>
                </div>
                <ul className='restaurant_menu_category'>
                        <li className='restaurant_menu_category__item active'>Популярное</li>
                    {categories?.map((categoryItem)=>(
                        <li className='restaurant_menu_category__item' key={categoryItem}>{categoryItem}</li>
                    ))}
                </ul>
                <RestaurantMenu menu={data.menu}/>
            </div>
            <RestaurantCart/>
        </div>
    )
}