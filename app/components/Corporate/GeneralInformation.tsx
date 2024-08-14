import { FC, useEffect } from 'react'
import {
    GeneralInformationProps,
    GeneralInformationFormValues
} from '../../types'
import DropdownSearch from '../DropdownSearch'
import { useForm, Controller, useFormContext } from 'react-hook-form'
import { useFormState } from '@/app/context/FormContext'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export const GeneralInformation: FC<GeneralInformationProps> = ({
    title,
    type
}) => {
    const { onHandleNext, formData, setFormData } = useFormState()

    const { control, register, handleSubmit } =
        useForm<GeneralInformationFormValues>({ defaultValues: formData })

    const onHandleFormSubmit = (data: GeneralInformationFormValues) => {
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
                    <label className='block'>Name</label>
                    <input
                        type='text'
                        id='name'
                        className=''
                        placeholder='Enter your name'
                        {...register('name')}
                    />
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>Date</label>
                    <Controller
                        name='date'
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <DatePicker
                                showIcon
                                selected={value}
                                onChange={onChange}
                                dateFormat='dd/MM/yyyy'
                                popperClassName='input-calendar'
                                icon='input-calendar_icon'
                                placeholderText='MM/DD/YYYY'
                            />
                        )}
                    />
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>Business Types</label>
                    <Controller
                        name='business_types'
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
                                type='business_types'
                                value={value}
                            />
                        )}
                    />
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>Industries</label>
                    <Controller
                        name='industries'
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
                                type='industries'
                                value={value}
                            />
                        )}
                    />
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>
                        Registration Number<span className='required'>*</span>
                    </label>
                    <input
                        type='text'
                        id='registration_number'
                        className=''
                        placeholder='Type here'
                        required
                        {...register('registration_number')}
                    />
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>Office/Department</label>
                    <Controller
                        name='office_department'
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
                                type='office_department'
                                value={value}
                            />
                        )}
                    />
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>Jurisdiction of Formation</label>
                    <Controller
                        name='jurisdiction_of_formation'
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
                                type='jurisdiction_of_formation'
                                value={value}
                            />
                        )}
                    />
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>Other Relevant Countries</label>
                    <Controller
                        name='other_relevant_countries'
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
                                type='other_relevant_countries'
                                value={value}
                            />
                        )}
                    />
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>Services</label>
                    <Controller
                        name='services'
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
                                type='services'
                                value={value}
                            />
                        )}
                    />
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>Corporate Groups</label>
                    <Controller
                        name='corporate_groups'
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
                                type='corporate_groups'
                                value={value}
                            />
                        )}
                    />
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>Purpose of Business</label>
                    <input
                        type='text'
                        id='purpose_of_business'
                        className=''
                        placeholder='Type here'
                        {...register('purpose_of_business')}
                    />
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>Source of Wealth/Funds</label>
                    <Controller
                        name='corporate_groups'
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
                                type='source_of_wealth_funds'
                                value={value}
                            />
                        )}
                    />
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>
                        Source of Wealth/Funds Notes
                    </label>
                    <textarea
                        rows={4}
                        id='source_of_wealth_funds_notes'
                        className=''
                        placeholder=''
                        {...register('source_of_wealth_funds_notes')}
                    ></textarea>
                </div>
                <div className='mt-[32px] pt-[31px] border-t-[0.5px] border-t-[#DBDBDB] border-solid flex flex-col w-full items-end'>
                    <button className={`btn btn-default`}>Next</button>
                </div>
            </form>
        </div>
    )
}
