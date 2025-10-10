'use client'
import { useState } from 'react'
import { CiDiscount1 } from "react-icons/ci";
import './style.sass'
export default function Payment({setPayOpen, payOpen}){
    const [activeInput, setActiveInput] = useState(null)
    const [formData, setFormData] = useState({
        city: '',
        street: '',
        house: '',
        apart: '',
        part: '',
        floor: ''
    });

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };
    const [deliveryMode, setDeliveryMode] = useState(false)
    return(
        payOpen ?
        <div className={`payment_block`}>
            <h2 className='payment_block__header'>Оформление заказа</h2>
            <div className='payment_method__block'>
                <h3>Способ оплаты</h3>
                <div className='payment_method'>
                    <div className='payment_method__item'></div>
                    <div className='payment_method__item'></div>
                </div>
            </div>
            <h3>Способ получения</h3>
            <div className='payment_delivery-option'>
                <div onClick={()=>{setDeliveryMode(false)}} className={`pickup button ${!deliveryMode ? 'active' : null}`}>Самовывоз</div>
                <div onClick={()=>{setDeliveryMode(true)}} className={`delivery button ${deliveryMode ? 'active' : null}`}>Доставка</div>
            </div>
            {deliveryMode ?
                <div className='delivery'>
                    <h3>Куда доставить?</h3>
                    <form className='delivery_form'>
                        <div className='delivery_form__input' onClick={()=>{setActiveInput(1)}}>
                            <label htmlFor='city' className={activeInput == 1 || formData.city ? 'active' : 'disable'}>Населеный пункт</label>
                            <input onFocus={() => setActiveInput(1)}
                                    onBlur={() => setActiveInput(null)} 
                                    id='city'
                                    onChange={(e) => handleChange('city', e.target.value)}
                                    required
                            />
                        </div>
                        <div className='delivery_form__input'>
                            <label htmlFor='street' className={activeInput == 2 || formData.street ? 'active' : 'disable'}>Улица</label>
                            <input id='street'
                                    onFocus={() => setActiveInput(2)}
                                    onBlur={() => setActiveInput(null)}
                                    onChange={(e) => handleChange('street', e.target.value)}
                                    required
                            />
                        </div>
                        <div className='delivery_form__input__block'>
                            <div className='delivery_form__input delivery_form__input__block_item'>
                                <label htmlFor='house' className={activeInput == 3 || formData.house ? 'active' : 'disable'}>Дом</label>
                                <input id='house'
                                    onFocus={() => setActiveInput(3)}
                                    onBlur={() => setActiveInput(null)}
                                    onChange={(e) => handleChange('house', e.target.value)}
                                    required
                                />
                            </div>
                            <div className='delivery_form__input delivery_form__input__block_item'>
                                <label htmlFor='part' className={activeInput == 4 || formData.part ? 'active' : 'disable'}>Подъезд</label>
                                <input id='part'
                                    onFocus={() => setActiveInput(4)}
                                    onBlur={() => setActiveInput(null)}
                                    onChange={(e) => handleChange('part', e.target.value)}
                                />
                            </div>
                            <div className='delivery_form__input delivery_form__input__block_item'>
                                <label htmlFor='apart' className={activeInput == 5 || formData.apart ? 'active' : 'disable'}>Квартира</label>
                                <input id='apart'
                                    onFocus={() => setActiveInput(5)}
                                    onBlur={() => setActiveInput(null)}
                                    onChange={(e) => handleChange('apart', e.target.value)} 
                                />
                            </div>
                            <div className='delivery_form__input delivery_form__input__block_item'>
                                <label htmlFor='floor' className={activeInput == 6 || formData.floor ? 'active' : 'disable'}>Этаж</label>
                                <input id='floor'
                                    onFocus={() => setActiveInput(6)}
                                    onBlur={() => setActiveInput(null)}
                                    onChange={(e) => handleChange('floor', e.target.value)} 
                                />
                            </div>
                        </div>
                    </form>
                </div> :
                <div className='pick_up'>
                    <h3>Куда идти:</h3>
                    <h4>Российская Федерация, Самара, Московское шоссе, 56</h4>
                </div>
                
            }
            <div className='about_price'>
                <h3>Что включено</h3>
                <div className='about_price__block'>
                    <div className='about_price__block_item'>
                        <h4>Товары в заказе</h4>
                        <h4 className='price'>100p</h4>
                    </div>
                    <div className='about_price__block_item'>
                        <h4>Доставка</h4>
                        <h4 className='price'>99р</h4>
                    </div>
                    <div className='about_price__block_item'>
                        <h4>Сервисный сбор</h4>
                        <h4 className='price'>100p</h4>
                    </div>
                </div>
            </div>
            <div className='discount'>
                <div className='discount_block'>
                    <input placeholder='У меня есть промокод'/>
                    <div className='button'>Применить</div>
                </div>
                <div className='discount_item'>
                    <h3 className='discount_item__text discount_item__name'>Бесплатная доставка – при заказе от 800₽</h3>
                    <h3 className='discount_item__text discount_item__price'>-100p</h3>
                </div>
            </div>
            <div className='payment_accept'>
                <div className='button'>Оплатить</div>
                <h3>1200p</h3>
            </div>
        </div> : null
    )
}