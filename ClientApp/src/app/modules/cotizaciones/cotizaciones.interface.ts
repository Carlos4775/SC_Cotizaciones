import { ExtraSelectVM, SelectVM } from "src/app/shared/shared.model";

export interface CotizacionVM {
    seqCertificacion: number;
    fechaCotizacion: Date;
    idTipoRamo: string;
    numeroCotizacion: string;
    sumaAsegurada: number;
    valorCotizacion: number;
}

export interface CotizacionesVM {
}

export interface CotizacionesResolveVM {
    cotizacion: CotizacionVM;
    tipoRamos: ExtraSelectVM[];
}
