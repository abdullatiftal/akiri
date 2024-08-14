import { FC } from 'react'
import {
    InternalInformationProps,
    InternalInformationFormValues
} from '../../types'
import DropdownSearch from '../DropdownSearch'
import { useForm, Controller } from 'react-hook-form'
import { useFormState } from '@/app/context/FormContext'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export const InternalInformation: FC<InternalInformationProps> = ({
    title,
    type
}) => {
    const { onHandleNext, onHandlePrev, formData, setFormData } = useFormState()
    const { control, register, handleSubmit } =
        useForm<InternalInformationFormValues>({ defaultValues: formData })
    const onHandleFormSubmit = (data: InternalInformationFormValues) => {
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
                    <label className='block'>Date Created:</label>
                    <Controller
                        name='date_created'
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
                    <label className='block'>Active Date:</label>
                    <Controller
                        name='date_active'
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
                    <label className='block'>Client Number</label>
                    <input
                        type='text'
                        id='client_number'
                        className=''
                        placeholder='Type here'
                        {...register('client_number')}
                    />
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>Compliance Staff Member</label>
                    <Controller
                        name='compliance_staff_member'
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
                                type='compliance_staff_member'
                                value={value}
                            />
                        )}
                    />
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>Responsible Professional</label>
                    <Controller
                        name='responsible_professional'
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
                                type='responsible_professional'
                                value={value}
                            />
                        )}
                    />
                </div>
                <div className='flex flex-row items-start leading-5 gap-[42px]'>
                    <label className='checkbox-container'>
                        <input
                            type='checkbox'
                            id='profile_introduced'
                            className='checkbox'
                            {...register('profile_introduced')}
                        />
                        Profile introduced/Referred?
                    </label>
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>Introduced by</label>
                    <Controller
                        name='introduced_by'
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
                                type='introduced_by'
                                value={value}
                            />
                        )}
                    />
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>Periodic Review Due</label>
                    <Controller
                        name='date_periodic_review'
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
                <div className='flex flex-row items-start leading-5 gap-[42px]'>
                    <label className='checkbox-container'>
                        <input
                            type='checkbox'
                            id='regulator_access_granted'
                            className='checkbox'
                            {...register('regulator_access_granted')}
                        />
                        Regulator Access Granted?
                    </label>
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>Contact Profile ID</label>
                    <input
                        type='text'
                        id='contact_profile_id'
                        className=''
                        placeholder='Type here'
                        {...register('contact_profile_id')}
                    />
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>Notes</label>
                    <textarea
                        rows={4}
                        id='notes'
                        className=''
                        placeholder=''
                        {...register('notes')}
                    ></textarea>
                </div>
                <div className='flex flex-row items-start leading-5 gap-[42px]'>
                    <label className='checkbox-container'>
                        <input
                            type='checkbox'
                            id='suspicious_activity'
                            className='checkbox'
                            {...register('suspicious_activity')}
                        />
                        Suspicious Activity?
                    </label>
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>Confidential Notes Field</label>
                    <textarea
                        rows={4}
                        id='confidential_notes'
                        className=''
                        placeholder=''
                        {...register('notes')}
                    ></textarea>
                </div>

                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>Delivery Channel</label>
                    <Controller
                        name='delivery_channel'
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
                                type='delivery_channel'
                                value={value}
                            />
                        )}
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
                    <button className={`btn btn-default`}>Next</button>
                </div>
            </form>
        </div>
    )
}
