import Link from 'next/link'
import './style.sass'
export default function RestaurantsList(){
    const data = [
        {
            name: 'Шашлычка',
            link: 'link',
            country: 'Русская',
            image: 'https://image.winudf.com/v2/image/bW9iaS5hbmRyb2FwcC5wcm9zcGVyaXR5YXBwcy5jNTExMV9zY3JlZW5fN18xNTI0MDQxMDUwXzAyMQ/screen-7.jpg?fakeurl=1&type=.jpg'
        },
        {
            name: 'Иньянь',
            link: 'link',
            country: 'Японская',
            image: 'https://i.pinimg.com/736x/ff/1b/bf/ff1bbffc7465d6799b47f1686a424d86.jpg'
        },
        {
            name: 'Пельменная',
            link: 'link',
            country: 'Русская',
            image: 'https://www.sunhome.ru/i/wallpapers/241/afrikanskii-lev.orig.jpg'
        },
        {
            name: 'Мушмула',
            link: 'link',
            country: 'Грузия',
            image: 'https://images.steamusercontent.com/ugc/17854221424440595525/543783B601D5A853E3F50907B9722A314DFD92B6/?imw=512&amp;imh=320&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true'
        },
    ]
    return(
        <div className="restaurant">
            {data.map((restaurant)=>(
                <Link href={restaurant.link} className="restaurant_item" key={restaurant.name} style={{background: `url(${restaurant.image}) center center/cover no-repeat`}}>
                    <div className="restaurant_info">
                        <h2>{restaurant.name}</h2>
                        <h4>{restaurant.country} кухня</h4>
                    </div>
                </Link>
            ))}
        </div>
    )
}