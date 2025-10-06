import './style.sass'
import { FaPlus, FaMinus } from "react-icons/fa6";
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
    return(
        <div className='restaurant_cart'>
            <h2>Корзина</h2>
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
    )
}