export interface PersonVM {
    nombres: string
    apellidos: string
    fechaNacimiento: Date
    genero: string
    nacionalidad: string,
    token: string
}

export interface PaginationVM {
    totalCount: number
    pageSize: number
    currentPage: number
    totalPages: number
    previousPageLink: null
    nextPageLink: string
}

export interface SelectVM {
    value: string
    label: string
    isDisabled: boolean
}

export interface ExtraSelectVM extends SelectVM {
    addedValue: string
}

export class ProcessingEditVM {
    save = false;
    cancel = false;
    confirmSave = false;
}

export class ProcessingListVM {
    table = false;
    certification = false;
    declarationYes = false;
    declarationNo = false;
    audit = false;
    cancel = false;
    export = false;
}
