import { FaPlus, FaMinus } from "react-icons/fa6";
export default function FoodCard(){
    return(
        <div className="food_card">
            <div className="food_card__main">
                <div className="food_card__main_img"></div>
                <div className="food_card__main_info">
                    <div className="food_card__main_info__header">
                        <h3 className="name"></h3>
                        <h4 className="weight"></h4>
                    </div>
                    <div className="food_card__main_info__control">
                        <h3 className="price"></h3>
                        <div className="counter">
                            <div className='counter_control'><FaMinus /></div>
                            <div className='count'>1</div>
                            <div className='counter_control'><FaPlus/></div>
                        </div>
                        <div className="button">Добавить</div>
                    </div>
                    <div className="optional">
                        <h3>Дополнительно</h3>

                    </div>
                </div>
            </div>
            <div className="food_card__descr">
                <p>Сочная курица халяль, свежие помидоры и огурцы, ароматный лук, пикантная пекинская капуста и морковь по-корейски - попробуйте это сочетание ингредиентов в фирменном соусе, завёрнутым в лаваш</p>
                <div className="caloric_content">
                    <h4>На 100 г</h4>
                    <div className="caloric_content__wrapper">
                        <div>
                            <h4>440</h4>
                            <h5>ккал</h5>
                        </div>
                        <div>
                            <h4>60г</h4>
                            <h5>белки</h5>
                        </div>
                        <div>
                            <h4>6г</h4>
                            <h5>жиры</h5>
                        </div>
                        <div>
                            <h4>60г</h4>
                            <h5>углеводы</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}