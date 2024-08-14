import Image from 'next/image'

const UserBadge = () => {
    const userDetails = {
        user_name: 'John Doe',
        user_email: 'Johndoe@example.com'
    }
    const isLogin = true
    return (
        <div className='flex flex-row gap-2'>
            <div className='flex flex-col justify-end text-right gap-1'>
                <h4 className='font-medium text-base'>
                    {userDetails.user_name}
                </h4>
                <p className='text-text text-xs'>{userDetails.user_email}</p>
            </div>
            <div className='flex relative'>
                <div className='w-[40px] h-[40px] rounded-full overflow-hidden relative flex'>
                    <Image
                        src='/images/user_image.png'
                        width={100}
                        height={100}
                        alt={userDetails.user_name}
                        className='object-cover'
                    />
                </div>
                {isLogin && (
                    <span className='rounded-full w-[10px] h-[10px] bg-[#21C179] absolute right-0 bottom-[10px] border-[1.5px] border-solid border-white'></span>
                )}
            </div>
        </div>
    )
}

export default UserBadge
