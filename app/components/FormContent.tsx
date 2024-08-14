import { Fragment } from 'react'
import { useFormState } from '../context/FormContext'
import { PageIndex } from './PageIndex'
import { GeneralInformation } from './Corporate/GeneralInformation'
import { ContactInformation } from './Corporate/ContactInformation'
import { InternalInformation } from './Corporate/InternalInformation'
import { EntityInformation } from './Corporate/EntityInformation'
import { FormSide } from './FormSide'

export function FormContent({ routeNameMapping }: any) {
    const { step, formType, onHandleType } = useFormState()

    const handleTabClick = () => {
        onHandleType()
    }

    return (
        <div className='flex flex-row gap-[18px] items-start'>
            <div
                className={`p-9 rounded-lg bg-white min-h-screen shadow-[7px_7px_18px_0px_#D0D0D040] flex-grow`}
            >
                <div className='flex flow-row gap-5 pb-9 mb-8 border-b-[0.5px] border-b-[#DBDBDB] border-solid'>
                    <button
                        onClick={() => handleTabClick()}
                        className={`btn ${
                            formType === 'corporate' ? 'is-current' : ''
                        }`}
                    >
                        Corporate
                    </button>
                    <button
                        onClick={() => handleTabClick()}
                        className={`btn ${
                            formType === 'individual' ? 'is-current' : ''
                        }`}
                    >
                        Individual
                    </button>
                </div>

                <Fragment>
                    <PageIndex
                        steps={[1, 2, 3, 4]}
                        routeNameMapping={routeNameMapping}
                    />
                    {formType === 'corporate' && (
                        <CorporateFormComponent
                            key='corporate'
                            type='corporate'
                            routeNameMapping={routeNameMapping}
                        />
                    )}
                    {formType === 'individual' && (
                        <CorporateFormComponent
                            key='individual'
                            type='individual'
                            routeNameMapping={routeNameMapping}
                        />
                    )}
                </Fragment>
            </div>
            {(step === 2 || step === 3 || step === 4) && (
                <div className='flex flex-col gap-[25px] w-[40%]'>
                    <div
                        className={`p-9 rounded-lg bg-white shadow-[7px_7px_18px_0px_#D0D0D040]`}
                    >
                        {formType === 'corporate' && <FormSide />}
                        {formType === 'individual' && <FormSide />}
                    </div>
                    <div className='flex flex-row px-[5px] justify-between gap-[5px]'>
                        <div className='flex flex-row gap-2'>
                            <span className='w-[14px] h-[14px] bg-[#92D051] inline-block rounded-full'></span>
                            Low Risk
                        </div>
                        <div className='flex flex-row gap-2'>
                            <span className='w-[14px] h-[14px] bg-[#FFFF00] inline-block rounded-full'></span>
                            Medium Risk
                        </div>
                        <div className='flex flex-row gap-2'>
                            <span className='w-[14px] h-[14px] bg-[#FFBF00] inline-block rounded-full'></span>
                            Medium to High
                        </div>
                        <div className='flex flex-row gap-2'>
                            <span className='w-[14px] h-[14px] bg-[#C00000] inline-block rounded-full'></span>
                            High
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

function CorporateFormComponent({ routeNameMapping, type }: any) {
    const { step } = useFormState()

    switch (step) {
        case 1:
            return (
                <GeneralInformation
                    key={type}
                    type={type}
                    title={routeNameMapping[1]}
                />
            )
        case 2:
            return (
                <ContactInformation
                    key={type}
                    type={type}
                    title={routeNameMapping[2]}
                />
            )
        case 3:
            return (
                <InternalInformation
                    key={type}
                    type={type}
                    title={routeNameMapping[3]}
                />
            )
        case 4:
            if (type === 'corporate') {
                return (
                    <EntityInformation
                        key={type}
                        type={type}
                        title={routeNameMapping[4]}
                    />
                )
                return
            }
        default:
            return null
    }
}
