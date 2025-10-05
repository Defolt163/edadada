'use client'
import { useState } from 'react';
import './style.sass'
import { LiaInfoCircleSolid, LiaUserClockSolid } from "react-icons/lia";
import { info } from 'sass';
export default function RestaurantPage(){
    const data = {
        restaurantId: 1,
        name: 'Шашлычка',
        country: 'Русская',
        address: 'Российская Федерация, Самара, Ново-Садовая улица, 184А',
        rating: 4.5,
        info: 'Contractor (seller) ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ТКЕМАЛИ", 443124, 443124, Самара, ул Ново-Садовая, д184А ком52, INN 6319261760, reg. number 1236300025158',
        time: 'from 11:30 to 22:30',
        deliveryTime: '20-30min'
    }
    const [infoStatus, setInfoStatus] = useState(false)
    return(
        <div className="restaurant_page" onClick={infoStatus ? ()=>{setInfoStatus(false)}: null}>
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
        </div>
    )
}