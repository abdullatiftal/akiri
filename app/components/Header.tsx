import Logo from './Logo'
import NotificationIcon from './NotificationIcon'
import UserBadge from './UserBadge'

const Header = () => {
    return (
        <div className='flex flex-row justify-between container mx-auto pt-[30px] pl-[25px] items-center relative'>
            <Logo />
            <div className='flex flex-row items-center justify-center gap-7'>
                <NotificationIcon />
                <UserBadge />
            </div>
        </div>
    )
}

export default Header
