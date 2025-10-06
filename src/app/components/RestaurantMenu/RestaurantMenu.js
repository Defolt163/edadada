import './style.sass'
export default function RestaurantMenu({menu}){
    return(
        <section className='food_list'>
            <h2 className='food_list__header'>Популярное</h2>
            <div className='food_card_wrapper'>
            {
                menu?.map((card)=>(
                    <div key={card.foodId} className='food_card'>
                        <div className='card_image' style={{background: `url(${card.foodImage}) center center/cover no-repeat`}}></div>
                        <div className='card_info'>
                            <h3 className='card_info__price'>{card.foodPrice}₽</h3>
                            <h3 className='card_info__name'>{card.foodName}</h3>
                            <h3 className='card_info__caloric'>{card.caloricСontent[0].weight}г | {card.caloricСontent[0].kkal}ккал</h3>
                        </div>
                    </div>
                ))
            }
            </div>
        </section>
    )
}