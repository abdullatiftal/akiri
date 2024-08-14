import { Dispatch, ReactNode, SetStateAction } from 'react'

export interface PageIndexProps {
    steps: number[]
    routeNameMapping: { [key: string]: string }
}

export interface DetailedFormProps {
    title: string
}

export interface GeneralInformationProps {
    title: string
}

export interface GeneralInformationFormValues {
    name: string
    date: Date | null
    business_types: string
    industries: string
    registration_number: string
    office_department: string
    jurisdiction_of_formation: string
    other_relevant_countries: string
    services: string
    corporate_groups: string
    purpose_of_business: string
    source_of_wealth_funds: string
    source_of_wealth_funds_notes: string
}
export interface ContactInformationProps {
    title: string
}

export interface ContactInformationFormValues {
    website: string
    address_types: string
    address_status_1: any
    address_status_2: any
    po_box: string
    address_line_1: string
    address_line_2: string
    address_line_3: string
    city: string
    province: string
    country: string
    postal_code: string
    phone_number: string
    fax: string
}

export interface InternalInformationProps {
    title: string
}

export interface InternalInformationFormValues {
    date_created: Date | null
    date_active: Date | null
    client_number: string
    compliance_staff_member: string
    responsible_professional: string
    profile_introduced: any
    introduced_by: string
    date_periodic_review: Date | null
    regulator_access_granted: any
    contact_profile_id: any
    notes: string
    confidential_notes: string
    suspicious_activity: any
    delivery_channel: string
}

export interface EntityInformationProps {
    title: string
}

export interface EntityInformationFormValues {
    rp_entity_type: string
    beneficial_ownership_regime: string
    rle_applicable_register: string
    exemption_utilised: string
    approved_person: string
    stock_exchange: string
    jurisdiction_of_stock_exchange: string
    relevant_regulator: string
    jurisdiction_of_regulator: string
    name_of_partnership: string
    name_of_exempted_parent: string
    name_of_license: string
}

export interface IndividualGeneralProps {
    title: string
}

export interface IndividualGeneralFormValues {
    name: string
    date: Date | null
    business_types: string
    industries: string
    registration_number: string
    office_department: string
    jurisdiction_of_formation: string
    other_relevant_countries: string
    services: string
    corporate_groups: string
    purpose_of_business: string
    source_of_wealth_funds: string
    source_of_wealth_funds_notes: string
}

export interface IndividualContactProps {
    title: string
}

export interface IndividualContactFormValues {
    website: string
    address_types: string
    address_status_1: any
    address_status_2: any
    po_box: string
    address_line_1: string
    address_line_2: string
    address_line_3: string
    city: string
    province: string
    country: string
    postal_code: string
    phone_number: string
    fax: string
}

export interface IndividualInternalProps {
    title: string
}

export interface IndividualInternalFormValues {
    date_created: Date | null
    date_active: Date | null
    client_number: string
    compliance_staff_member: string
    responsible_professional: string
    profile_introduced: any
    introduced_by: string
    date_periodic_review: Date | null
    regulator_access_granted: any
    contact_profile_id: any
    notes: string
    confidential_notes: string
    suspicious_activity: any
    delivery_channel: string
}

export interface FormContextType {
    formData: any
    setFormData: Dispatch<SetStateAction<any>>
    onHandlePrev: () => void
    onHandleNext: () => void
    step: number
    formType: string
    onHandleType: () => void
}

export interface ProviderType {
    children: ReactNode
}

export interface DropdownSearchProps {
    options: string[]
    placeholder?: string
    onSelect: (selected: string) => void
    type: string
    value?: string
}
