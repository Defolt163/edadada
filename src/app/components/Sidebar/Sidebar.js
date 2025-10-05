import Image from 'next/image'
import './sidebar.sass'
import HomeIco from '../../../../public/icons/home.svg'
import { HomeIcon } from '../icons/HomeIco'
export default function Sidebar(){
    return(
        <aside className="sidebar">
            <ul>
                <li>
                    <div className='item logo'>
                        <div className='icon ico-logo'></div>
                    </div>
                </li>
                <li className='active'>
                    <div className='item active'>
                        <div className='icon ico-home active'></div>
                    </div>
                </li>
                <li>
                    <div className='item'>
                        <div className='icon ico-discount'></div>
                    </div>
                </li>
                <li>
                    <div className='item'>
                        <div className='icon ico-notification'></div>
                    </div>
                </li>
                <li>
                    <div className='item'>
                        <div className='icon ico-settings'></div>
                    </div>
                </li>
                <li>
                    <div className='item'>
                        <div className='icon ico-dashboard'></div>
                    </div>
                </li>
            </ul>
            <div className='logout'>
                <div className='ico'></div>
            </div>
        </aside>
    )
}