import Image from 'next/image'
import Link from 'next/link'

const NotificationIcon = () => {
    const hasNotification = true
    return (
        <Link href='/notifications'>
            <div className='w-[20px] h-[20px] relative'>
                <Image
                    src='/icons/notifications.svg'
                    width={0}
                    height={0}
                    alt='Notifications'
                    fill={true}
                    className='invert'
                />
                {hasNotification && (
                    <span className='rounded-full w-[5px] h-[5px] bg-[#F40000] absolute right-[3px] top-[1px]'></span>
                )}
            </div>
        </Link>
    )
}

export default NotificationIcon
