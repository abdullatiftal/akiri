'use client'

import React, { useState, useEffect, useRef, forwardRef } from 'react'

import Image from 'next/image'

interface CalendarProps {
    options: string[]
    placeholder?: string
    onSelect: (selected: string) => void
    type: string
    value?: string
}

const Calendar = forwardRef<HTMLInputElement, CalendarProps>(
    ({ options, placeholder = 'Select', onSelect, type, value = '' }, ref) => {
        const [isOpen, setIsOpen] = useState(false)
        const [searchTerm, setSearchTerm] = useState('')
        const [selected, setSelected] = useState(value)
        const dropdownButtonRef = useRef<HTMLButtonElement | null>(null)
        const dropdownMenuRef = useRef<HTMLDivElement | null>(null)

        const toggleDropdown = () => {
            setIsOpen(!isOpen)
        }

        useEffect(() => {
            const handleClickOutside = (event: { target: any }) => {
                if (
                    dropdownButtonRef.current &&
                    !dropdownButtonRef.current.contains(event.target) &&
                    dropdownMenuRef.current &&
                    !dropdownMenuRef.current.contains(event.target)
                ) {
                    setIsOpen(false)
                }
            }
            document.addEventListener('click', handleClickOutside)
            return () => {
                document.removeEventListener('click', handleClickOutside)
            }
        }, [])

        const filteredItems = options.filter((item) =>
            item.toLowerCase().includes(searchTerm.toLowerCase())
        )

        const handleItemClick = (item: string) => {
            setSelected(item)
            setSearchTerm('')
            setIsOpen(false)
            onSelect(item)
        }
        return (
            <div className='relative sm:min-w-[480px]'>
                <button
                    type='button'
                    ref={dropdownButtonRef}
                    onClick={toggleDropdown}
                    className='flex justify-between items-center w-[100%] border-[0.5px] border-solid border-[#101B2C36] rounded-[3px] bg-white pl-3 pr-[16px] py-[10px] placeholder-text ring-[0.5px] ring-inset ring-[#101B2C36] transition duration-200 ease-in-out hover:ring-primary/50 focus:border-primary focus:outline-none focus:ring-[0.5px] focus:ring-inset focus:ring-primary leading-6'
                >
                    <span className={selected ? 'text-textblack' : 'text-text'}>
                        {selected || placeholder}
                    </span>
                    <Image
                        src='/icons/arrow-down.svg'
                        width={24}
                        height={24}
                        alt='Arrow Down'
                    />
                </button>
                {isOpen && (
                    <div
                        ref={dropdownMenuRef}
                        className='mt-2 rounded-[3px] shadow-md bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1'
                    >
                        <input
                            type='text'
                            placeholder='Search items'
                            className='sm:max-w-[480px] min-w-[472px] placeholder-text'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            autoComplete='off'
                            id='industries'
                        />
                        {filteredItems.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => handleItemClick(item)}
                                className='block px-4 py-2 text-textBlack hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-[3px]'
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        )
    }
)

export default Calendar
