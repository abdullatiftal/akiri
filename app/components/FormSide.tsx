import { Controller, useForm } from 'react-hook-form'
import DropdownSearch from './DropdownSearch'
import { Fragment } from 'react'

function riskColor(value) {
    // let bgColor = '';
    if (value <= 30) {
        return 'red'
    } else if (value <= 50) {
        return 'orange'
    } else if (value <= 70) {
        return 'yellow'
    } else {
        return 'green'
    }
}

export const FormSide = () => {
    const risk = {
        total: 45,
        notableRisk: 35,
        simplifiedDueDiligence: '34256',
        dueDiligenceStatus: '76453',
        dueDiligenceMethod: '34526'
    }
    const { control, register, handleSubmit } = useForm()

    const onHandleFormSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className='flex flex-col items-stretch gap-[19px] form-side'>
            <h2 className='font-body font-medium text-2xl leading-7'>
                Risk Management
            </h2>
            <div className='flex flex-row justify-between items-end'>
                <div className='flex flex-col gap-[10px]'>
                    <div className='flex flex-row items-end gap-[10px]'>
                        <h5 className='text-xs'>
                            Total
                            <br />
                            Score
                        </h5>
                        <p
                            className={`text-[54px] font-bold leading-[0.8] risk-color-${riskColor(
                                risk.total
                            )}`}
                        >
                            {risk.total}
                        </p>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <span className='w-[14px] h-[14px] bg-[#FFBF00] inline-block rounded-full'></span>
                        Medium to High
                    </div>
                </div>
                <div className='flex flex-col text-right'>
                    <h5 className='text-xs'>Notable Risk</h5>
                    <p className=''>
                        Score
                        <span
                            className={`ml-[5px] text-[25px] font-semibold leading-[0.8] risk-color-${riskColor(
                                risk.notableRisk
                            )}`}
                        >
                            {risk.notableRisk}
                        </span>
                    </p>
                </div>
            </div>
            <div className='flex flex-col gap-[11px]'>
                <p>
                    Simplified Due Diligence :{' '}
                    <span>{risk.simplifiedDueDiligence}</span>
                </p>
                <p>
                    Due Diligence Status :{' '}
                    <span>{risk.dueDiligenceStatus}</span>
                </p>
                <p>
                    Due Diligence Method :{' '}
                    <span>{risk.dueDiligenceMethod}</span>
                </p>
            </div>
            <form
                onSubmit={handleSubmit(onHandleFormSubmit)}
                className='w-full flex flex-col items-stretch gap-[23px] text-textBlack'
            >
                <div className='flex flex-col gap-[11px]'>
                    <h5>Political Exposure Note</h5>
                    <div className='flex flex-col items-start gap-[12px] leading-5'>
                        <textarea
                            rows={4}
                            id='political_exposure_note'
                            className='formside-textarea'
                            placeholder='Type here'
                            {...register('political_exposure_note')}
                        ></textarea>
                    </div>
                </div>
                <div className='flex flex-col items-start gap-[12px] leading-5'>
                    <label className='block'>
                        Senior Manager Approving PEP Relationship
                    </label>
                    <Controller
                        name='approving_pep_relationship'
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
                                type='approving_pep_relationship'
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
                            {...register('address_status_1')}
                        />
                        Is a client/customer?
                    </label>
                </div>
            </form>
        </div>
    )
}
