import Image from 'next/image'

const Logo = () => {
    return (
        <div className=''>
            <Image src='logo.svg' width={120} height={43} alt='Logo' priority />
        </div>
    )
}

export default Logo
