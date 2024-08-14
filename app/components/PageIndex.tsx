import { FC } from 'react'
import { PageIndexProps } from '../types'
import { useFormState } from '../context/FormContext'

export const PageIndex: FC<PageIndexProps> = ({ steps, routeNameMapping }) => {
    const { step } = useFormState()

    return (
        <div className=' flex flex-row items-start justify-start mb-[37px]'>
            {steps.map((eachStep, index, steps) => (
                <div
                    key={eachStep}
                    className='flex flex-col items-start gap-[11px]'
                >
                    <div className='relative flex flex-row gap-0 items-center'>
                        <div
                            className={`${
                                step === eachStep || step > eachStep
                                    ? 'theme-gradient-border'
                                    : 'bg-grey'
                            } rounded-full`}
                        >
                            <div
                                className={`w-[47px] h-[47px] flex items-center justify-center rounded-full m-[2px] ${
                                    step > eachStep
                                        ? 'bg-theme-gradient-border'
                                        : 'bg-grey'
                                }`}
                            >
                                <span
                                    className={`text-lg leading-5 ${
                                        step > eachStep
                                            ? 'text-white'
                                            : 'text-secondary'
                                    }`}
                                >
                                    {eachStep}
                                </span>
                            </div>
                        </div>
                        {eachStep !== steps.length && (
                            <hr
                                className={`${
                                    step === eachStep || step > eachStep
                                        ? 'border-t-secondary'
                                        : 'border-t-grey'
                                } w-[40px] border-t border-solid`}
                            />
                        )}
                        {eachStep !== steps.length && index < eachStep && (
                            <hr
                                className={`${
                                    step > eachStep
                                        ? 'border-t-secondary'
                                        : 'border-t-grey'
                                } w-[40px] border-t border-solid`}
                            />
                        )}
                    </div>
                    <div className='max-w-[84px]'>
                        <span className='text-xs text-left capitalize'>
                            {routeNameMapping[eachStep]}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}
