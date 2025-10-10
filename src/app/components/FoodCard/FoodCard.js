'use client'
import { FaPlus, FaMinus } from "react-icons/fa6";
import styles from './style.module.sass'
import { HiMiniXMark } from "react-icons/hi2";
import { useEffect, useMemo, useState } from "react";
export default function FoodCard({foodInfo, foodCardStatus, setFoodCardStatus}){
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleOptionChange = (option, isChecked) => {
        if (isChecked) {
            setSelectedOptions(prev => [...prev, option]);
        } else {
            setSelectedOptions(prev => prev.filter(opt => opt.name !== option.name));
        }
    };
    const totalPrice = useMemo(() => {
        const basePrice = foodInfo?.foodPrice || 0;
        const optionsPrice = selectedOptions.reduce((sum, option) => sum + (option.price || 0), 0);
        return basePrice + optionsPrice;
    }, [foodInfo?.foodPrice, selectedOptions]);

    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(prev => prev < 99 ? prev + 1 : prev);
    };

    const handleDecrement = () => {
        setQuantity(prev => prev > 1 ? prev - 1 : prev);
    };
    return(
        <>
            <div className={`${styles.food_card} ${foodCardStatus ? styles.active : ''}`}>
                <HiMiniXMark className={styles.food_card__x_mark} onClick={()=>{setFoodCardStatus(false)}}/>
                <div className={`${styles.food_card__main} ${foodInfo?.foodOption.length == 0 ? styles.centered : ''}`}>
                    <div className={styles.food_card__main_img} style={{background: `url(${foodInfo?.foodImage}) center center/cover no-repeat`}}></div>
                    <div className={styles.food_card__main_info}>
                        <div className={styles.food_card__main_info__header}>
                            <h3 className={styles.name}>{foodInfo?.foodName}</h3>
                            <h4 className={styles.weight}>{foodInfo?.caloricСontent[0].weight} г</h4>
                        </div>
                        <div className={styles.food_card__main_info__control}>
                            {/* <h3 className={styles.price}>{selectedOptions == 0 ? foodInfo?.foodPrice : foodInfo?.foodPrice+()}p</h3> */}
                            <h3 className={styles.price}>{totalPrice}p</h3>
                            <div className={styles.counter}>
                                <div onClick={handleDecrement} className={`${styles.counter_control} ${quantity <= 1 ? styles.disabled : ''}`}><FaMinus /></div>
                                <div className={styles.count}>{quantity}</div>
                                <div onClick={handleIncrement} className={`${styles.counter_control} ${quantity >= 50 ? styles.disabled : ''}`}><FaPlus/></div>
                            </div>
                            <div className="button">Добавить</div>
                        </div>
                        {
                            foodInfo?.foodOption.length !== 0 ?
                            <div className={styles.optional}>
                                <h3 className={styles.optional_header}>Дополнительно</h3>
                                {foodInfo?.foodOption.map((option)=>(
                                    <label htmlFor={option.name} key={option.name} className={styles.food_option__block}>
                                            <h4 className={styles.food_option}>{option.name} ({option.weight}гр) +{option.price} ₽</h4>
                                            <input 
                                                id={option.name} 
                                                type="checkbox" 
                                                checked={selectedOptions.some(opt => opt.name === option.name)}
                                                onChange={(e) => handleOptionChange(option, e.target.checked)}/>
                                    </label>
                                ))}
                            </div>
                            : null
                        }
                    </div>
                </div>
                <div className={styles.food_card__descr}>
                    <p>{foodInfo?.foodDescription}</p>
                    <div className={styles.caloric_content}>
                        <h4 className={styles.caloric_content__header}>На 100 г</h4>
                        <div className={styles.caloric_content__wrapper}>
                            <div>
                                <h4>{foodInfo?.caloricСontent[0].kkal}</h4>
                                <h5>ккал</h5>
                            </div>
                            <div>
                                <h4>{foodInfo?.caloricСontent[0].protein}г</h4>
                                <h5>белки</h5>
                            </div>
                            <div>
                                <h4>{foodInfo?.caloricСontent[0].fats}г</h4>
                                <h5>жиры</h5>
                            </div>
                            <div>
                                <h4>{foodInfo?.caloricСontent[0].carbohydrates}г</h4>
                                <h5>углеводы</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`modal_overflow ${foodCardStatus ? 'active' : ''}`} onClick={()=>{setFoodCardStatus(false)}}></div>
        </>
    )
}