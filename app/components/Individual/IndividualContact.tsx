import { FC } from 'react'
import {
    IndividualContactProps,
    IndividualContactFormValues
} from '../../types'
import DropdownSearch from '../DropdownSearch'
import { useForm, Controller } from 'react-hook-form'
import { useFormState } from '@/app/context/FormContext'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export const IndividualContact: FC<IndividualContactProps> = ({ title }) => {
    const { onHandleNext, onHandlePrev, formData, setFormData } = useFormState()
    const { control, register, handleSubmit } =
        useForm<IndividualContactFormValues>({ defaultValues: formData })
    const onHandleFormSubmit = (data: IndividualContactFormValues) => {
        setFormData((prev: any) => ({ ...prev, ...data }))
        onHandleNext()
    }
    return (
        <div className=''>
            <h2 className='font-body font-medium text-2xl leading-7'>
                {title}
            </h2>
            <form
                onSubmit={handleSubmit(onHandleFormSubmit)}
                className='w-full mt-[23px] flex flex-col items-stretch sm:items-start justify-start gap-[23px] text-textBlack'
            >
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>Website</label>
                    <input
                        type='text'
                        id='website'
                        className=''
                        placeholder='Type here'
                        {...register('website')}
                    />
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>Address Type</label>
                    <Controller
                        name='address_types'
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <DropdownSearch
                                options={[
                                    'United States',
                                    'Lowercase',
                                    'France',
                                    'Kebab Case'
                                ]}
                                placeholder='Select'
                                onSelect={onChange}
                                type='address_types'
                                value={value}
                            />
                        )}
                    />
                </div>
                <div className='flex flex-row items-start leading-5 gap-[42px]'>
                    <label className='checkbox-container'>
                        <input
                            type='checkbox'
                            id='address_status_1'
                            className='checkbox'
                            checked
                            {...register('address_status_1')}
                        />
                        Default
                    </label>
                    <label className='checkbox-container'>
                        <input
                            type='checkbox'
                            id='address_status_2'
                            className='checkbox'
                            {...register('address_status_2')}
                        />
                        Inactive
                    </label>
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>Po Box</label>
                    <input
                        type='text'
                        id='po_box'
                        className=''
                        placeholder='Type here'
                        {...register('po_box')}
                    />
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>Address Line 1</label>
                    <input
                        type='text'
                        id='address_line_1'
                        className=''
                        placeholder='Type here'
                        {...register('address_line_1')}
                    />
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>Address Line 2</label>
                    <input
                        type='text'
                        id='address_line_2'
                        className=''
                        placeholder='Type here'
                        {...register('address_line_2')}
                    />
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>Address Line 3</label>
                    <input
                        type='text'
                        id='address_line_3'
                        className=''
                        placeholder='Type here'
                        {...register('address_line_3')}
                    />
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>City</label>
                    <input
                        type='text'
                        id='city'
                        className=''
                        placeholder='Type here'
                        {...register('city')}
                    />
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>Province</label>
                    <input
                        type='text'
                        id='province'
                        className=''
                        placeholder='Type here'
                        {...register('province')}
                    />
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>Country</label>
                    <Controller
                        name='country'
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <DropdownSearch
                                options={[
                                    'United States',
                                    'Lowercase',
                                    'France',
                                    'Kebab Case'
                                ]}
                                placeholder='Select'
                                onSelect={onChange}
                                type='country'
                                value={value}
                            />
                        )}
                    />
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>Postal Code</label>
                    <input
                        type='text'
                        id='postal_code'
                        className=''
                        placeholder='Type here'
                        {...register('postal_code')}
                    />
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>Phone number</label>
                    {/* <input
                        type='text'
                        id='phone_number'
                        className=''
                        placeholder='Type here'
                        {...register('phone_number')}
                    /> */}
                    <Controller
                        name='phone_number'
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <PhoneInput
                                country={'ae'}
                                value={value}
                                onChange={onChange}
                                countryCodeEditable={false}
                                placeholder=''
                            />
                        )}
                    />
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>Fax</label>
                    <input
                        type='text'
                        id='fax'
                        className=''
                        placeholder='Type here'
                        {...register('fax')}
                    />
                </div>
                <div className='mt-[32px] pt-[31px] border-t-[0.5px] border-t-[#DBDBDB] border-solid flex flex-row w-full justify-end gap-[19px]'>
                    <button
                        type='button'
                        onClick={onHandlePrev}
                        className={`btn btn-default`}
                    >
                        Back
                    </button>
                    <button
                        // onClick={() => onHandleFormSubmit}
                        className={`btn btn-default`}
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>
    )
}
