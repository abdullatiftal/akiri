import { FC } from 'react'
import {
    EntityInformationProps,
    EntityInformationFormValues
} from '../../types'
import DropdownSearch from '../DropdownSearch'
import { useForm, Controller } from 'react-hook-form'
import { useFormState } from '@/app/context/FormContext'

export const EntityInformation: FC<EntityInformationProps> = ({
    title,
    type
}) => {
    const { onHandlePrev, formData, setFormData } = useFormState()
    const { control, register, handleSubmit } =
        useForm<EntityInformationFormValues>({ defaultValues: formData })
    const onHandleFormSubmit = (data: EntityInformationFormValues) => {
        setFormData((prev: any) => ({ ...prev, ...data }))
        console.log(formData)
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
                    <label className='block'>RP/Entity Type</label>
                    <Controller
                        name='rp_entity_type'
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
                                type='rp_entity_type'
                                value={value}
                            />
                        )}
                    />
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>Beneficial Ownership Regime</label>
                    <Controller
                        name='beneficial_ownership_regime'
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
                                type='beneficial_ownership_regime'
                                value={value}
                            />
                        )}
                    />
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>RLE Applicable Register</label>
                    <Controller
                        name='rle_applicable_register'
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
                                type='rle_applicable_register'
                                value={value}
                            />
                        )}
                    />
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>Exemption Utilised</label>
                    <Controller
                        name='exemption_utilised'
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
                                type='exemption_utilised'
                                value={value}
                            />
                        )}
                    />
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>Approved Person</label>
                    <input
                        type='text'
                        id='approved_person'
                        className=''
                        placeholder='Type here'
                        {...register('approved_person')}
                    />
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>Stock Exchange</label>
                    <input
                        type='text'
                        id='stock_exchange'
                        className=''
                        placeholder='Type here'
                        {...register('stock_exchange')}
                    />
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>
                        Jurisdiction of Stock Exchange
                    </label>
                    <Controller
                        name='jurisdiction_of_stock_exchange'
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
                                type='jurisdiction_of_stock_exchange'
                                value={value}
                            />
                        )}
                    />
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>Relevant Regulator</label>
                    <input
                        type='text'
                        id='relevant_regulator'
                        className=''
                        placeholder='Type here'
                        {...register('relevant_regulator')}
                    />
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>Jurisdiction of Regulator</label>
                    <Controller
                        name='jurisdiction_of_regulator'
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
                                type='jurisdiction_of_regulator'
                                value={value}
                            />
                        )}
                    />
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>Name of Partnership</label>
                    <input
                        type='text'
                        id='name_of_partnership'
                        className=''
                        placeholder='Type here'
                        {...register('name_of_partnership')}
                    />
                </div>

                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>Name of Exempted Parent</label>
                    <input
                        type='text'
                        id='name_of_exempted_parent'
                        className=''
                        placeholder='Type here'
                        {...register('name_of_exempted_parent')}
                    />
                </div>

                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>Name of License</label>
                    <input
                        type='text'
                        id='name_of_license'
                        className=''
                        placeholder='Type here'
                        {...register('name_of_license')}
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
                    <button className={`btn btn-default`}>Submit</button>
                </div>
            </form>
        </div>
    )
}
