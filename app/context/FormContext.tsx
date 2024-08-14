import { createContext, useContext, useState } from 'react'
import { FormContextType, ProviderType } from '../types'

const FormContext = createContext<FormContextType>({
    formData: {},
    onHandleNext: () => {},
    onHandlePrev: () => {},
    setFormData: () => {},
    step: 0,
    formType: '',
    onHandleType: () => {}
})

export function FormProvider({ children }: ProviderType) {
    const [formData, setFormData] = useState()
    const [formType, setFormType] = useState('corporate')
    const [step, setStep] = useState(1)

    function onHandleNext() {
        setStep((prev) => prev + 1)
    }
    function onHandlePrev() {
        setStep((prev) => prev - 1)
    }

    function onHandleType() {
        resetForm()
        setFormType((prev) =>
            prev === 'corporate' ? 'individual' : 'corporate'
        )
    }
    const resetForm = () => {
        setStep(1)
        setFormData(undefined)
    }

    return (
        <FormContext.Provider
            value={{
                formData,
                setFormData,
                onHandleNext,
                onHandlePrev,
                step,
                formType,
                onHandleType
            }}
        >
            {children}
        </FormContext.Provider>
    )
}

export function useFormState() {
    return useContext(FormContext)
}
