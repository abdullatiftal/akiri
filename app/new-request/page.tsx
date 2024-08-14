'use client'

import { FormProvider } from '../context/FormContext'
import { FormContent } from '../components/FormContent'

export default function NewRequest() {
    const routeNameMapping: { [k: string]: string } = {
        '1': 'General Information',
        '2': 'Contact Information',
        '3': 'Internal Information',
        '4': 'Entity Information'
    }

    return (
        <>
            <FormProvider>
                <FormContent routeNameMapping={routeNameMapping} />
            </FormProvider>
        </>
    )
}
