export interface AppMenuOptions {
    icon: string;
    name: string;
    redirectTo: string;
}

export interface Patient {
    uid?: string
    dni?: string
    cip?: string
    name?: string
    lastName1?: string
    lastName2?: string
    location?: string
    status?: string
    admissionDate?: string
    dischargeDate?: string
    personalCode?: string
}
