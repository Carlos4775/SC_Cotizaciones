import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';

@Injectable()
export class ToolsServices {

  private mensajes: { [key: string]: { [key: string]: string } };

  constructor(private http: HttpClient) {
    this.mensajes = {
      //BC01 MODULE
      Bc01EditComponent_codigoBancoBc01N: {
        required: "Campo requerido"
      },
      Bc01EditComponent_codigoBicswiftV: {
        required: "Campo requerido",
        maxlength: 'El campo debe tener 15 caracteres máx'
      },
      Bc01EditComponent_nombreEntidadV: {
        required: "Campo requerido",
        maxlength: 'El campo debe tener 60 caracteres máx'
      },
      Bc01EditComponent_domicilioV: {
        maxlength: 'El campo debe tener 60 caracteres máx'
      },
      Bc01EditComponent_numeroTelefonoV: {
        required: "Campo requerido",
        maxlength: 'El campo debe tener 50 caracteres máx',
        pattern: 'Formato inválido'
      },
      Bc01EditComponent_emailV: {
        required: "Campo requerido",
        maxlength: 'El campo debe tener 50 caracteres máx',
        pattern: 'Formato inválido'
      },
      Bc01EditComponent_paginaWebV: {
        maxlength: 'El campo debe tener 60 caracteres máx'
      },
      Bc01EditComponent_codigoPaisV: {
        required: "Campo requerido"
      },
      Bc01EditComponent_tipoPersonaV: {
        required: "Campo requerido"
      },
      Bc01EditComponent_servicioContratado: {
        required: "Campo requerido"
      },
      Bc01EditComponent_tipoMoneda: {
        required: 'Campo requerido'
      },
      Bc01EditComponent_codigoTipoRelacionBancoCorresponsalV: {
        required: "Campo requerido"
      },
      Bc01EditComponent_fechaInicioD: {
        required: "Campo requerido"
      },
      Bc01EditComponent_nombreOficialCuentaV: {
        required: "Campo requerido"
      },
      Bc01EditComponent_idClienteCustodioV: {
        maxlength: 'El campo debe tener 15 caracteres máx'
      },
      //SI03 MODULE
      Si03EditComponent_typeOffice: {
        required: "Campo requerido"
      },
      Si03EditComponent_nameOffice: {
        required: "Campo requerido",
      },
      Si03EditComponent_address: {
        required: "Campo requerido",
        maxlength: 'El campo debe tener máximo 300 caracteres'
      },
      Si03EditComponent_codeOffice: {
        required: "Campo requerido"
      },
      Si03EditComponent_telephone1: {
        required: "Campo requerido",
        pattern: 'Formato invalido. Solo se permite (809, 809 o 849)'
      },
      Si03EditComponent_telephone2: {
        pattern: 'Formato invalido. Solo se permite (809, 849, 829)'
      },
      Si03EditComponent_faxNumber: {
        pattern: 'Formato invalido. Solo se permite (809, 849, 829)'
      },
      Si03EditComponent_apertureDate: {
        required: "Campo requerido",
      },
      Si03EditComponent_autorizationDate: {
        required: "Campo requerido",
      },
      Si03EditComponent_aprobationCode: {
        required: "Campo requerido",
        pattern: "Formato invalido"
      },
      Si03EditComponent_localityNumber: {
        pattern: "El campo debe tener máximo 6 caracteres",
      },
      Si03EditComponent_latitud: {
        required: "Campo requerido",
        max: "El valor máximo permitido es 20.0000000",
        min: "El valor mínimo permitido es 17.5000000"
      },
      Si03EditComponent_longitud: {
        required: "Campo requerido",
        min: "El valor máximo permitido es -71.9900000",
        max: "El valor mínimo permitido es -68.2600000"
      },
      Si03EditComponent_codeProvince: {
        required: "Campo requerido"
      },
      Si03EditComponent_codeMunicipio: {
        required: "Campo requerido",
      },
      Si03EditComponent_codeSector: {
        required: "Campo requerido",
      },
      Si03EditComponent_codeParaje: {
        required: "Campo requerido",
      },
      Si03EditComponent_postal: {
        required: "Campo requerido",
      },
      //SI05-ABOGADOS MODULE
      Si05AbogadosEditComponent_tipoIdentificacionV: {
        required: "Campo requerido"
      },
      Si05AbogadosEditComponent_numeroDocumentoIdentFunciV: {
        required: "Campo requerido",
        maxlength: 'El campo debe tener 12 caracteres máx',
        pattern: 'Formato inválido'
      },
      Si05AbogadosEditComponent_abogadoParcialId: {
        required: "Campo requerido",
        pattern: 'Formato inválido'
      },
      Si05AbogadosEditComponent_nombresEmpleadoV: {
        required: "Campo requerido",
      },
      Si05AbogadosEditComponent_apellidosEmpleadoV: {
        required: "Campo requerido"
      },
      Si05AbogadosEditComponent_domicilioV: {
        required: "Campo requerido"
      },
      Si05AbogadosEditComponent_numeroTelefonoV: {
        required: "Campo requerido",
        pattern: 'Formato invalido. Solo se permite (809, 809 o 849)'
      },
      Si05AbogadosEditComponent_emailV: {
        pattern: 'Formato invalido. Solo se permite (809, 849, 829)'
      },
      Si05AbogadosEditComponent_paginaWebV: {
        pattern: 'Formato invalido'
      },
      Si05AbogadosEditComponent_codigoPaisV: {
        required: "Campo requerido",
      },
      Si05AbogadosEditComponent_tipoCodigoV: {
        required: "Campo requerido",
      },
      Si05AbogadosEditComponent_tipoOficinaV: {
        required: "Campo requerido",
      },
      Si05AbogadosEditComponent_codigoOficinaV: {
        required: "Campo requerido",
      },
      Si05AbogadosEditComponent_tipoPersonaV: {
        required: "Campo requerido",
      },
      Si05AbogadosEditComponent_categoriaFuncionarioV: {
        required: "Campo requerido",
      },
      Si05AbogadosEditComponent_fechaIngresoD: {
        required: "Campo requerido",
      },
      Si05AbogadosEditComponent_codigoAreaBancoV: {
        required: "Campo requerido",
      },
      Si05AbogadosEditComponent_cargoActualFuncionarioV: {
        required: "Campo requerido",
      },
      Si05AbogadosEditComponent_profesionPrincFuncionarioV: {
        required: "Campo requerido",
      },
      Si05AbogadosEditComponent_responsabilidadFuncionarioV: {
        required: "Campo requerido",
      },
      Si05AbogadosEditComponent_miembroComiteCreditosV: {
        required: "Campo requerido",
      },
      Si05AbogadosEditComponent_flagActivoB: {
        required: "Campo requerido",
      },
      Si05AbogadosEditComponent_estadoV: {
        required: "Campo requerido",
      },
      Si05AbogadosEditComponent_categoriaReporteN: {
        required: "Campo requerido",
      },
      Si05AbogadosEditComponent_regionV: {
        required: "Campo requerido",
      },
      Si05AbogadosEditComponent_codigoBancoBc01V: {
        required: "Campo requerido",
      },
      Si05AbogadosEditComponent_codigoNacionalidadV: {
        required: "Campo requerido",
      },
      Si05AbogadosEditComponent_codigoGeneroV: {
        required: "Campo requerido",
      },
      Si05AbogadosEditComponent_fechaCreacionD: {
        required: "Campo requerido",
      },
      Si05AbogadosEditComponent_fechaEdicionD: {
        required: "Campo requerido",
      },
      Si05AbogadosEditComponent_codigoUsuarioCreacionV: {
        required: "Campo requerido",
      },
      Si05AbogadosEditComponent_codigoUsuarioEdicionV: {
        required: "Campo requerido",
      },
      Si05AbogadosEditComponent_fechaFinContratoD: {
        required: "Campo requerido",
      },
      Si05AbogadosEditComponent_fechaUltAuditoriaExtD: {
        required: "Campo requerido",
      },
      Si05AbogadosEditComponent_flagContratoIndefinidoN: {
        required: "Campo requerido",
      },
      Si05AbogadosEditComponent_flagEsClienteN: {
        required: "Campo requerido",
      },
      //SI05-ASESORES MODULE
      Si05AsesoresEditComponent_tipoIdentificacionV: {
        required: "Campo requerido"
      },
      Si05AsesoresEditComponent_numeroDocumentoIdentFunciV: {
        required: "Campo requerido",
        maxlength: 'El campo debe tener 12 caracteres máx',
        pattern: 'Formato inválido'
      },
      Si05AsesoresEditComponent_asesorParcialId: {
        required: "Campo requerido",
        pattern: 'Formato inválido'
      },
      Si05AsesoresEditComponent_nombresEmpleadoV: {
        required: "Campo requerido",
      },
      Si05AsesoresEditComponent_apellidosEmpleadoV: {
        required: "Campo requerido"
      },
      Si05AsesoresEditComponent_domicilioV: {
        required: "Campo requerido"
      },
      Si05AsesoresEditComponent_numeroTelefonoV: {
        required: "Campo requerido",
        pattern: 'Formato invalido. Solo se permite (809, 809 o 849)'
      },
      Si05AsesoresEditComponent_emailV: {
        pattern: 'Formato invalido. Solo se permite (809, 849, 829)'
      },
      Si05AsesoresEditComponent_paginaWebV: {
        pattern: 'Formato invalido'
      },
      Si05AsesoresEditComponent_codigoPaisV: {
        required: "Campo requerido",
      },
      Si05AsesoresEditComponent_tipoCodigoV: {
        required: "Campo requerido",
      },
      Si05AsesoresEditComponent_tipoOficinaV: {
        required: "Campo requerido",
      },
      Si05AsesoresEditComponent_codigoOficinaV: {
        required: "Campo requerido",
      },
      Si05AsesoresEditComponent_tipoPersonaV: {
        required: "Campo requerido",
      },
      Si05AsesoresEditComponent_categoriaFuncionarioV: {
        required: "Campo requerido",
      },
      Si05AsesoresEditComponent_fechaIngresoD: {
        required: "Campo requerido",
      },
      Si05AsesoresEditComponent_codigoAreaBancoV: {
        required: "Campo requerido",
      },
      Si05AsesoresEditComponent_cargoActualFuncionarioV: {
        required: "Campo requerido",
      },
      Si05AsesoresEditComponent_profesionPrincFuncionarioV: {
        required: "Campo requerido",
      },
      Si05AsesoresEditComponent_responsabilidadFuncionarioV: {
        required: "Campo requerido",
      },
      Si05AsesoresEditComponent_miembroComiteCreditosV: {
        required: "Campo requerido",
      },
      Si05AsesoresEditComponent_flagActivoB: {
        required: "Campo requerido",
      },
      Si05AsesoresEditComponent_estadoV: {
        required: "Campo requerido",
      },
      Si05AsesoresEditComponent_categoriaReporteN: {
        required: "Campo requerido",
      },
      Si05AsesoresEditComponent_regionV: {
        required: "Campo requerido",
      },
      Si05AsesoresEditComponent_codigoBancoBc01V: {
        required: "Campo requerido",
      },
      Si05AsesoresEditComponent_codigoNacionalidadV: {
        required: "Campo requerido",
      },
      Si05AsesoresEditComponent_codigoGeneroV: {
        required: "Campo requerido",
      },
      Si05AsesoresEditComponent_fechaCreacionD: {
        required: "Campo requerido",
      },
      Si05AsesoresEditComponent_fechaEdicionD: {
        required: "Campo requerido",
      },
      Si05AsesoresEditComponent_codigoUsuarioCreacionV: {
        required: "Campo requerido",
      },
      Si05AsesoresEditComponent_codigoUsuarioEdicionV: {
        required: "Campo requerido",
      },
      Si05AsesoresEditComponent_fechaFinContratoD: {
        required: "Campo requerido",
      },
      Si05AsesoresEditComponent_fechaUltAuditoriaExtD: {
        required: "Campo requerido",
      },
      Si05AsesoresEditComponent_flagContratoIndefinidoN: {
        required: "Campo requerido",
      },
      Si05AsesoresEditComponent_flagEsClienteN: {
        required: "Campo requerido",
      },
      //SI05-AUDITORES MODULE
      Si05AuditoresEditComponent_tipoIdentificacionV: {
        required: "Campo requerido"
      },
      Si05AuditoresEditComponent_numeroDocumentoIdentFunciV: {
        required: "Campo requerido",
        maxlength: 'El campo debe tener 12 caracteres máx',
        pattern: 'Formato inválido'
      },
      Si05AuditoresEditComponent_nombresEmpleadoV: {
        required: "Campo requerido",
      },
      Si05AuditoresEditComponent_apellidosEmpleadoV: {
        required: "Campo requerido"
      },
      Si05AuditoresEditComponent_domicilioV: {
        required: "Campo requerido"
      },
      Si05AuditoresEditComponent_numeroTelefonoV: {
        required: "Campo requerido",
        pattern: 'Formato invalido. Solo se permite (809, 809 o 849)'
      },
      Si05AuditoresEditComponent_emailV: {
        pattern: 'Formato invalido. Solo se permite (809, 849, 829)'
      },
      Si05AuditoresEditComponent_paginaWebV: {
        pattern: 'Formato invalido'
      },
      Si05AuditoresEditComponent_codigoPaisV: {
        required: "Campo requerido",
      },
      Si05AuditoresEditComponent_tipoCodigoV: {
        required: "Campo requerido",
      },
      Si05AuditoresEditComponent_tipoOficinaV: {
        required: "Campo requerido",
      },
      Si05AuditoresEditComponent_codigoOficinaV: {
        required: "Campo requerido",
      },
      Si05AuditoresEditComponent_tipoPersonaV: {
        required: "Campo requerido",
      },
      Si05AuditoresEditComponent_categoriaFuncionarioV: {
        required: "Campo requerido",
      },
      Si05AuditoresEditComponent_fechaIngresoD: {
        required: "Campo requerido",
      },
      Si05AuditoresEditComponent_codigoAreaBancoV: {
        required: "Campo requerido",
      },
      Si05AuditoresEditComponent_cargoActualFuncionarioV: {
        required: "Campo requerido",
      },
      Si05AuditoresEditComponent_profesionPrincFuncionarioV: {
        required: "Campo requerido",
      },
      Si05AuditoresEditComponent_responsabilidadFuncionarioV: {
        required: "Campo requerido",
      },
      Si05AuditoresEditComponent_miembroComiteCreditosV: {
        required: "Campo requerido",
      },
      Si05AuditoresEditComponent_flagActivoB: {
        required: "Campo requerido",
      },
      Si05AuditoresEditComponent_estadoV: {
        required: "Campo requerido",
      },
      Si05AuditoresEditComponent_categoriaReporteN: {
        required: "Campo requerido",
      },
      Si05AuditoresEditComponent_regionV: {
        required: "Campo requerido",
      },
      Si05AuditoresEditComponent_codigoBancoBc01V: {
        required: "Campo requerido",
      },
      Si05AuditoresEditComponent_codigoNacionalidadV: {
        required: "Campo requerido",
      },
      Si05AuditoresEditComponent_codigoGeneroV: {
        required: "Campo requerido",
      },
      Si05AuditoresEditComponent_fechaCreacionD: {
        required: "Campo requerido",
      },
      Si05AuditoresEditComponent_fechaEdicionD: {
        required: "Campo requerido",
      },
      Si05AuditoresEditComponent_codigoUsuarioCreacionV: {
        required: "Campo requerido",
      },
      Si05AuditoresEditComponent_codigoUsuarioEdicionV: {
        required: "Campo requerido",
      },
      Si05AuditoresEditComponent_fechaFinContratoD: {
        required: "Campo requerido",
      },
      Si05AuditoresEditComponent_fechaUltAuditoriaExtD: {
        required: "Campo requerido",
      },
      Si05AuditoresEditComponent_flagContratoIndefinidoN: {
        required: "Campo requerido",
      },
      Si05AuditoresEditComponent_flagEsClienteN: {
        required: "Campo requerido",
      },
      //SI05-TASADORES MODULE
      Si05TasadoresEditComponent_tipoIdentificacionV: {
        required: "Campo requerido"
      },
      Si05TasadoresEditComponent_numeroDocumentoIdentFunciV: {
        required: "Campo requerido",
        maxlength: 'El campo debe tener 12 caracteres máx',
        pattern: 'Formato inválido'
      },
      Si05TasadoresEditComponent_tasadorParcialPPId: {
        required: "Campo requerido"
      },
      Si05TasadoresEditComponent_nombresEmpleadoV: {
        required: "Campo requerido",
      },
      Si05TasadoresEditComponent_apellidosEmpleadoV: {
        required: "Campo requerido"
      },
      Si05TasadoresEditComponent_domicilioV: {
        required: "Campo requerido"
      },
      Si05TasadoresEditComponent_numeroTelefonoV: {
        required: "Campo requerido",
        pattern: 'Formato invalido. Solo se permite (809, 809 o 849)'
      },
      Si05TasadoresEditComponent_emailV: {
        pattern: 'Formato invalido. Solo se permite (809, 849, 829)'
      },
      Si05TasadoresEditComponent_paginaWebV: {
        pattern: 'Formato invalido'
      },
      Si05TasadoresEditComponent_codigoPaisV: {
        required: "Campo requerido",
      },
      Si05TasadoresEditComponent_tipoCodigoV: {
        required: "Campo requerido",
      },
      Si05TasadoresEditComponent_tipoOficinaV: {
        required: "Campo requerido",
      },
      Si05TasadoresEditComponent_codigoOficinaV: {
        required: "Campo requerido",
      },
      Si05TasadoresEditComponent_tipoPersonaV: {
        required: "Campo requerido",
      },
      Si05TasadoresEditComponent_categoriaFuncionarioV: {
        required: "Campo requerido",
      },
      Si05TasadoresEditComponent_fechaIngresoD: {
        required: "Campo requerido",
      },
      Si05TasadoresEditComponent_codigoAreaBancoV: {
        required: "Campo requerido",
      },
      Si05TasadoresEditComponent_cargoActualFuncionarioV: {
        required: "Campo requerido",
      },
      Si05TasadoresEditComponent_profesionPrincFuncionarioV: {
        required: "Campo requerido",
      },
      Si05TasadoresEditComponent_responsabilidadFuncionarioV: {
        required: "Campo requerido",
      },
      Si05TasadoresEditComponent_miembroComiteCreditosV: {
        required: "Campo requerido",
      },
      Si05TasadoresEditComponent_flagActivoB: {
        required: "Campo requerido",
      },
      Si05TasadoresEditComponent_estadoV: {
        required: "Campo requerido",
      },
      Si05TasadoresEditComponent_categoriaReporteN: {
        required: "Campo requerido",
      },
      Si05TasadoresEditComponent_regionV: {
        required: "Campo requerido",
      },
      Si05TasadoresEditComponent_codigoBancoBc01V: {
        required: "Campo requerido",
      },
      Si05TasadoresEditComponent_codigoNacionalidadV: {
        required: "Campo requerido",
      },
      Si05TasadoresEditComponent_codigoGeneroV: {
        required: "Campo requerido",
      },
      Si05TasadoresEditComponent_fechaCreacionD: {
        required: "Campo requerido",
      },
      Si05TasadoresEditComponent_fechaEdicionD: {
        required: "Campo requerido",
      },
      Si05TasadoresEditComponent_codigoUsuarioCreacionV: {
        required: "Campo requerido",
      },
      Si05TasadoresEditComponent_codigoUsuarioEdicionV: {
        required: "Campo requerido",
      },
      Si05TasadoresEditComponent_fechaFinContratoD: {
        required: "Campo requerido",
      },
      Si05TasadoresEditComponent_fechaUltAuditoriaExtD: {
        required: "Campo requerido",
      },
      Si05TasadoresEditComponent_flagContratoIndefinidoN: {
        required: "Campo requerido",
      },
      Si05TasadoresEditComponent_flagEsClienteN: {
        required: "Campo requerido",
      },
      Si05TasadoresEditComponent_tipoIdentTasadPrincV: {
        required: "Campo requerido"
      },
      Si05TasadoresEditComponent_membershipCountryPPIdentification: {
        required: "Campo requerido"
      },
      Si05TasadoresEditComponent_membresiaTasadorParcialId: {
        required: "Campo requerido"
      },
      Si05TasadoresEditComponent_numeroDocumentoIdentidadV: {
        required: "Campo requerido"
      },
      Si05TasadoresEditComponent_nombreTasadorPrincipalV: {
        required: "Campo requerido"
      },
      Si05TasadoresEditComponent_apellidoTasadorPrincipalV: {
        required: "Campo requerido"
      },
      Si05TasadoresEditComponent_profesionTasadorPrincipalV: {
        required: "Campo requerido"
      },
      Si05TasadoresEditComponent_codigoTipoMembresiaV: {
        required: "Campo requerido"
      },
      //SI08 MODULE
      Si08EditComponent_nombreEntidadV: {
        required: "Campo requerido"
      },
      Si08EditComponent_nombreAbreviadoV: {
        required: "Campo requerido",
        maxlength: 'El campo debe tener 12 caracteres máx',
        pattern: 'Formato inválido'
      },
      Si08EditComponent_identificacionEmpresaV: {
        required: "Campo requerido",
      },
      Si08EditComponent_cantidadEmpleadosN: {
        required: "Campo requerido"
      },
      Si08EditComponent_cantidadSucursalesN: {
        required: "Campo requerido"
      },
      Si08EditComponent_capitalAutorizadoN: {
        required: "Campo requerido",
        pattern: 'Formato permitido: decimales(2,2)'
      },
      Si08EditComponent_capitalPreferidoN: {
        required: "Campo requerido",
        pattern: 'Formato permitido: decimales(2,2)'
      },
      Si08EditComponent_capitalAutorizadoPagadoN: {
        required: "Campo requerido",
        pattern: 'Formato permitido: decimales(2,2)'
      },
      Si08EditComponent_capitalPreferidoPagadoN: {
        required: "Campo requerido",
        pattern: 'Formato permitido: decimales(2,2)'
      },
      Si08EditComponent_valorAccionesNoEmitidasN: {
        required: "Campo requerido",
        pattern: 'Formato permitido: decimales(2,2)'
      },
      Si08EditComponent_cantidadAccionesEmitidasN: {
        required: "Campo requerido",
      },
      Si08EditComponent_cantidadAccionesAEmitirN: {
        required: "Campo requerido",
      },
      Si08EditComponent_totalAccionistasN: {
        required: "Campo requerido",
      },
      Si08EditComponent_fechaUltimaAuditoriaExtD: {
        required: "Campo requerido",
      },
      //SI09 MODULE
      Si09EditComponent_idSi08N: {
        required: "Campo requerido"
      },
      Si09EditComponent_typePerson: {
        required: "Campo requerido"
      },
      Si09EditComponent_numeroCedula: {
        required: "Campo requerido"
      },
      Si09EditComponent_identification: {
        required: "Campo requerido",
      },
      Si09EditComponent_codeEntity: {
        required: "Campo requerido"
      },
      Si09EditComponent_codeRegion: {
        required: "Campo requerido"
      },
      Si09EditComponent_countryId: {
        required: "Campo requerido"
      },
      Si09EditComponent_isNational: {
        required: "Campo requerido"
      },
      Si09EditComponent_genere: {
        required: "Campo requerido"
      },
      Si09EditComponent_nature: {
        required: "Campo requerido"
      },
      Si09EditComponent_name: {
        required: "Campo requerido"
      },
      Si09EditComponent_lastName: {
        required: "Campo requerido"
      },
      Si09EditComponent_stockQty: {
        required: "Campo requerido",
        min: "Valor requerido"
      },
      Si09EditComponent_adquisitionValue: {
        required: "Campo requerido",
        min: "Valor requerido"
      },
      Si09EditComponent_nominalValue: {
        required: "Campo requerido",
        min: "Valor requerido"
      },
      Si09EditComponent_adquisitionDate: {
        required: "Campo requerido"
      },
      Si09EditComponent_participationPorcent: {
        required: "Campo requerido",
        min: "Valor requerido"
      },
      Si09EditComponent_typeStock: {
        required: "Campo requerido"
      },
      Si09EditComponent_tipoAccionistaV: {
        required: "Campo requerido"
      },
      //AUDIT MODULE
      AuditComponent_codigoEmpleado: {
        required: "Campo requerido"
      },
      OA23EditComponent_operationType: {
        required: "Campo requerido"
      },
      OA23EditComponent_clientIdentification: {
        required: "Campo requerido"
      },
      OA23EditComponent_creditNumber: {
        required: "Campo requerido",
        pattern: "Formato invalido"
      },
      OA23EditComponent_creditCurrencyType: {
        required: "Campo requerido"
      },
      OA23EditComponent_warrantyType: {
        required: "Campo requerido"
      },
      OA23EditComponent_idType: {
        required: "Campo requerido"
      },
      OA23EditComponent_identification: {
        required: "Campo requerido",
        pattern: "Formato invalido"
      },
      OA23EditComponent_typePerson: {
        required: "Campo requerido"
      },
      OA23EditComponent_name: {
        required: "Campo requerido",
        pattern: "Formato invalido"
      },
      OA23EditComponent_lastName: {
        required: "Campo requerido",
        pattern: "Formato invalido"
      },
      OA23EditComponent_directDebtor: {
        required: "Campo requerido"
      },
      OA23EditComponent_countryId: {
        required: "Campo requerido"
      },
      OA23EditComponent_sex: {
        required: "Campo requerido"
      },
      OA23EditComponent_codeOa03: {
        required: "Campo requerido"
      },
      OA23EditComponent_ledgerAccount: {
        required: "Campo requerido"
      },
      OA23EditComponent_description: {
        required: "Campo requerido",
        pattern: "La descripción no puede iniciar ni terminar con espacios, tampoco debe poseer dos espacios seguidos."
      },
      OA23EditComponent_tasationValue: {
        required: "Campo requerido",
        min: "Valor requerido",
        pattern: "Formato invalido"
      },
      OA23EditComponent_codeClasificationRisk: {
        required: "Campo requerido"
      },
      OA23EditComponent_codeTypeProvition: {
        required: "Campo requerido"
      },
      OA23EditComponent_provitionRequire: {
        required: "Campo requerido",
        pattern: "Formato invalido"
      },
      OA23EditComponent_reference: {
        required: "Campo requerido"
      },
      OA23EditComponent_draggedProvition: {
        required: "Campo requerido",
        pattern: "Formato invalido"
      },
      OA23EditComponent_provitionConstituted: {
        required: "Campo requerido"
      },
      OA23EditComponent_adjudicationDationDate: {
        required: "Campo requerido"
      },
      OA23EditComponent_lastTasationDate: {
        required: "Campo requerido"
      },
      OA23EditComponent_creationState: {
        required: "Campo requerido"
      },
      OA23EditComponent_referenceNumber: {
        required: "Campo requerido"
      },
      OA23EditComponent_typeMoviment: {
        required: "Campo requerido"
      },
      OA23EditComponent_auxiliarName: {
        required: "Campo requerido"
      },
      OA23EditComponent_documentDate: {
        required: "Campo requerido"
      },
      OA23EditComponent_descriptionReference: {
        required: "Campo requerido"
      },
      OA23EditComponent_adjudicationDation: {
        required: "Campo requerido"
      },
      OA23EditComponent_adjudicationDationValue: {
        required: "Campo requerido",
        min: "Valor minimo 0.00",
        pattern: "Formato invalido"
      },
      OA23EditComponent_codeOffice: {
        required: "Campo requerido"
      },
      OA23EditComponent_stateType: {
        required: "Campo requerido"
      },
      OA23EditComponent_parcialId: {
        required: "Campo requerido",
        pattern: "Formato invalido"
      },
      //RML01
      Rml01EditComponent_valorActivosContingentes: {
        required: "Campo requerido",
        pattern: "Formato invalido."
      },

      //MV11
      Mv11EditComponent_identification: {
        required: "Campo requerido",
        maxlength: 'El campo debe tener 9 caracteres',
        minlength: 'El campo debe tener 9 caracteres',
        pattern: 'Formato inválido'
      },
      Mv11EditComponent_nameRep: {
        required: "Campo requerido",
        pattern: "El nombre solo debe contener letras"
      },
      Mv11EditComponent_lastNameRep: {
        required: "Campo requerido",
        pattern: "El apellido solo debe contener letras"
      },
      Mv11EditComponent_countryId: {
        required: "Campo requerido"
      },
      Mv11EditComponent_countryIdRep: {
        required: "Campo requerido"
      },

      Mv11EditComponent_entityCode: {
        required: "Campo requerido",
        pattern: 'El campo debe tener 4 caracteres'
      },

      Mv11EditComponent_regionCode: {
        required: "Campo requerido",
        pattern: 'El campo debe tener 2 caracteres'
      },
      Mv11EditComponent_positionRep: {
        required: "Campo requerido"
      },
      Mv11EditComponent_isNationalRep: {
        required: "Campo requerido"
      },
      Mv11EditComponent_isNational: {
        required: "Campo requerido"
      },
      Mv11EditComponent_identificationRep: {
        required: "Campo requerido",
        pattern: 'Formato inválido'
      },
      Mv11EditComponent_name: {
        required: "Campo requerido"
      },
      Mv11EditComponent_nature: {
        required: "Campo requerido"
      },
      Mv11EditComponent_participationPorcent: {
        required: "Campo requerido",
        min: "El porcentaje debe ser mayor a 0",
        max: "El porcentaje no puede ser  mayor a 100",
        pattern: "Formato invalido"
      },
      Mv11EditComponent_activity: {
        required: "Campo requerido"
      },
      Mv11EditComponent_state: {
        required: "Campo requerido"
      },
      Mv11EditComponent_parcialId: {
        required: "Campo requerido",
        pattern: 'Solo se permiten números (13)'
      },
      Mv11EditComponent_genereRep: {
        required: "Campo requerido"
      },
      Mv11EditComponent_typePerson: {
        required: "Campo requerido"
      },
      Mv11EditComponent_typePersonRep: {
        required: "Campo requerido"
      },
      //MV12
      Mv12EditComponent_identificationMv11: {
        required: "Campo requerido"
      },
      Mv12EditComponent_identification: {
        required: "Campo requerido",
        maxlength: 'El campo debe tener 9 caracteres',
        minlength: 'El campo debe tener 9 caracteres',
        pattern: 'Formato inválido'
      },
      Mv12EditComponent_name: {
        required: "Campo requerido",
        pattern: "El nombre solo debe contener letras"
      },
      Mv12EditComponent_lastName: {
        required: "Campo requerido",
        pattern: "El apellido solo debe contener letras"
      },
      Mv12EditComponent_countryId: {
        required: "Campo requerido"
      },
      Mv12EditComponent_entityCode: {
        required: "Campo requerido",
        pattern: 'El campo debe tener 4 letras'
      },
      Mv12EditComponent_regionCode: {
        required: "Campo requerido",
        pattern: 'El campo debe tener 2 caracteres'
      },
      Mv12EditComponent_isNational: {
        required: "Campo requerido"
      },
      Mv12EditComponent_nature: {
        required: "Campo requerido"
      },
      Mv12EditComponent_participationPorcent: {
        required: "Campo requerido",
        min: "El porcentaje debe ser mayor a 0",
        max: "El porcentaje no puede ser  mayor a 100",
        pattern: "Formato invalido"
      },
      Mv12EditComponent_activity: {
        required: "Campo requerido"
      },
      Mv12EditComponent_parcialId: {
        required: "Campo requerido",
        pattern: 'Solo se permiten números (13)'
      },
      Mv12EditComponent_genere: {
        required: "Campo requerido"
      },
      Mv12EditComponent_typePerson: {
        required: "Campo requerido"
      },
      Mv12EditComponent_type: {
        required: "Campo requerido"
      },
      //Mv13
      Mv13EditComponent_identificationMv12: {
        required: "Campo requerido"
      },
      Mv13EditComponent_identification: {
        required: "Campo requerido",
        maxlength: 'El campo debe tener 9 caracteres',
        minlength: 'El campo debe tener 9 caracteres',
        pattern: 'Formato inválido'
      },
      Mv13EditComponent_name: {
        required: "Campo requerido",
        pattern: "El nombre solo debe contener letras"
      },
      Mv13EditComponent_lastName: {
        required: "Campo requerido",
        pattern: "El apellido solo debe contener letras"
      },
      Mv13EditComponent_countryId: {
        required: "Campo requerido"
      },
      Mv13EditComponent_entityCode: {
        required: "Campo requerido",
        pattern: 'El campo debe tener 4 letras'
      },
      Mv13EditComponent_regionCode: {
        required: "Campo requerido",
        pattern: 'El campo debe tener 2 caracteres'
      },
      Mv13EditComponent_isNational: {
        required: "Campo requerido"
      },
      Mv13EditComponent_nature: {
        required: "Campo requerido"
      },
      Mv13EditComponent_participationPorcent: {
        required: "Campo requerido",
        min: "El porcentaje debe ser mayor a 0",
        max: "El porcentaje no puede ser  mayor a 100",
        pattern: "Formato invalido"
      },
      Mv13EditComponent_activity: {
        required: "Campo requerido"
      },
      Mv13EditComponent_parcialId: {
        required: "Campo requerido",
        pattern: 'Solo se permiten números (13)'
      },
      Mv13EditComponent_genere: {
        required: "Campo requerido"
      },
      Mv13EditComponent_typePerson: {
        required: "Campo requerido"
      },
      Mv13EditComponent_type: {
        required: "Campo requerido"
      },
      //Mv14
      Mv14EditComponent_identificationEmp: {
        required: "Campo requerido",
        maxlength: 'El campo debe tener 9 caracteres',
        minlength: 'El campo debe tener 9 caracteres',
        pattern: 'Formato inválido'
      },
      Mv14EditComponent_nameRep: {
        required: "Campo requerido",
        pattern: "El nombre solo debe contener letras"
      },
      Mv14EditComponent_lastNameRep: {
        required: "Campo requerido",
        pattern: "El apellido solo debe contener letras"
      },
      Mv14EditComponent_countryIdEmp: {
        required: "Campo requerido"
      },
      Mv14EditComponent_countryIdRep: {
        required: "Campo requerido"
      },
      Mv14EditComponent_entityCode: {
        required: "Campo requerido",
        pattern: 'El campo debe tener 4 caracteres'
      },
      Mv14EditComponent_regionCode: {
        required: "Campo requerido",
        pattern: 'El campo debe tener 2 caracteres'
      },
      Mv14EditComponent_positionRep: {
        required: "Campo requerido"
      },
      Mv14EditComponent_isNationalRep: {
        required: "Campo requerido"
      },
      Mv14EditComponent_isNationalEmp: {
        required: "Campo requerido"
      },
      Mv14EditComponent_identificationRep: {
        required: "Campo requerido",
        pattern: 'Formato inválido'
      },
      Mv14EditComponent_nameEmp: {
        required: "Campo requerido"
      },
      Mv14EditComponent_natureEmp: {
        required: "Campo requerido"
      },
      Mv14EditComponent_participationPorcent: {
        required: "Campo requerido",
        min: "El porcentaje debe ser mayor a 0",
        max: "El porcentaje no puede ser  mayor a 100",
        pattern: "Formato invalido"
      },
      Mv14EditComponent_activityEmp: {
        required: "Campo requerido"
      },
      Mv14EditComponent_stateEmp: {
        required: "Campo requerido"
      },
      Mv14EditComponent_parcialIdEmp: {
        required: "Campo requerido",
        pattern: 'Formato inválido',
        maxlength: 'Solo se permiten 13 dígitos'
      },
      Mv14EditComponent_parcialId: {
        required: "Campo requerido",
        pattern: 'Formato inválido',
        maxlength: 'Solo se permiten 13 dígitos'
      },
      Mv14EditComponent_genereRep: {
        required: "Campo requerido"
      },
      Mv14EditComponent_typePersonEmp: {
        required: "Campo requerido"
      },
      Mv14EditComponent_typePersonRep: {
        required: "Campo requerido"
      },
      Mv14EditComponent_typeEmpAllied: {
        required: "Campo requerido"
      },
      Mv14EditComponent_nameAllied: {
        required: "Campo requerido"
      },
      Mv14EditComponent_identificationEmpAllied: {
        required: "Campo requerido",
        pattern: 'Formato inválido'
      },
      Mv14EditComponent_isNationEmpAllied: {
        required: "Campo requerido"
      },
      Mv14EditComponent_natureEmpAllied: {
        required: "Campo requerido"
      },
      Mv14EditComponent_countryIdEmpAllied: {
        required: "Campo requerido"
      },
      Mv14EditComponent_entityCodeEmpAllied: {
        required: "Campo requerido",
        pattern: 'El campo debe tener 4 caracteres'
      },
      Mv14EditComponent_regionCodeEmpAllied: {
        required: "Campo requerido",
        pattern: 'El campo debe tener 2 caracteres'
      },
      Mv14EditComponent_parcialIdEmpAllied: {
        required: "Campo requerido",
        pattern: 'Formato inválido',
        maxlength: 'Solo se permiten 13 dígitos'
      },
      //Mv15
      Mv15EditComponent_identification: {
        required: "Campo requerido",
        maxlength: 'El campo debe tener 9 caracteres',
        minlength: 'El campo debe tener 9 caracteres',
        pattern: 'Formato inválido'
      },
      Mv15EditComponent_name: {
        required: "Campo requerido",
        pattern: "El nombre solo debe contener letras"
      },
      Mv15EditComponent_lastName: {
        required: "Campo requerido",
        pattern: "El apellido solo debe contener letras"
      },
      Mv15EditComponent_countryId: {
        required: "Campo requerido"
      },
      Mv15EditComponent_entityCode: {
        required: "Campo requerido",
        pattern: 'El campo debe tener 4 caracteres'
      },
      Mv15EditComponent_regionCode: {
        required: "Campo requerido",
        pattern: 'El campo debe tener 2 caracteres'
      },
      Mv15EditComponent_position: {
        required: "Campo requerido"
      },
      Mv15EditComponent_isNational: {
        required: "Campo requerido"
      },
      Mv15EditComponent_identificationMv31: {
        required: "Campo requerido"
      },
      Mv15EditComponent_nature: {
        required: "Campo requerido"
      },
      Mv15EditComponent_participationPorcent: {
        required: "Campo requerido",
        min: "El porcentaje debe ser mayor a 0",
        max: "El porcentaje no puede ser  mayor a 100",
        pattern: "Formato invalido"
      },
      Mv15EditComponent_parcialId: {
        required: "Campo requerido",
        pattern: 'Formato inválido',
        maxlength: 'Solo se permiten 13 dígitos'
      },
      Mv15EditComponent_genere: {
        required: "Campo requerido"
      },
      Mv15EditComponent_typePerson: {
        required: "Campo requerido"
      },
      Mv15EditComponent_linkedType: {
        required: "Campo requerido"
      },
      //Mv32
      Mv32EditComponent_identification: {
        required: "Campo requerido",
        maxlength: 'El campo debe tener 9 caracteres',
        minlength: 'El campo debe tener 9 caracteres',
        pattern: 'Formato inválido'
      },
      Mv32EditComponent_name: {
        required: "Campo requerido",
        pattern: "El nombre solo debe contener letras"
      },
      Mv32EditComponent_lastName: {
        required: "Campo requerido",
        pattern: "El apellido solo debe contener letras"
      },
      Mv32EditComponent_countryId: {
        required: "Campo requerido"
      },
      Mv32EditComponent_entityCode: {
        required: "Campo requerido",
        pattern: 'El campo debe tener 4 caracteres'
      },
      Mv32EditComponent_regionCode: {
        required: "Campo requerido",
        pattern: 'El campo debe tener 2 caracteres'
      },
      Mv32EditComponent_position: {
        required: "Campo requerido"
      },
      Mv32EditComponent_isNational: {
        required: "Campo requerido"
      },
      Mv32EditComponent_identificationMv31: {
        required: "Campo requerido"
      },
      Mv32EditComponent_nature: {
        required: "Campo requerido"
      },
      Mv32EditComponent_participationPorcent: {
        required: "Campo requerido",
        min: "El porcentaje debe ser mayor a 0",
        max: "El porcentaje no puede ser  mayor a 100",
        pattern: "Formato invalido"
      },
      Mv32EditComponent_parcialId: {
        required: "Campo requerido",
        pattern: 'Formato inválido',
        maxlength: 'Solo se permiten 13 dígitos'
      },
      Mv32EditComponent_genere: {
        required: "Campo requerido"
      },
      Mv32EditComponent_typePerson: {
        required: "Campo requerido"
      },
      Mv32EditComponent_type: {
        required: "Campo requerido"
      },
      Mv32EditComponent_linkedType: {
        required: "Campo requerido"
      },
      //Mv33
      Mv33EditComponent_identification: {
        required: "Campo requerido",
        maxlength: 'El campo debe tener 9 caracteres',
        minlength: 'El campo debe tener 9 caracteres',
        pattern: 'Formato inválido'
      },
      Mv33EditComponent_name: {
        required: "Campo requerido",
        pattern: "El nombre solo debe contener letras"
      },
      Mv33EditComponent_nameLinked: {
        required: "Campo requerido",
        pattern: "El nombre solo debe contener letras"
      },
      Mv33EditComponent_lastNameLinked: {
        required: "Campo requerido",
        pattern: "El apellido solo debe contener letras"
      },
      Mv33EditComponent_countryId: {
        required: "Campo requerido"
      },
      Mv33EditComponent_countryIdLinked: {
        required: "Campo requerido"
      },
      Mv33EditComponent_isNationalLinked: {
        required: "Campo requerido"
      },
      Mv33EditComponent_isNational: {
        required: "Campo requerido"
      },
      Mv33EditComponent_identificationLinked: {
        required: "Campo requerido"
      },
      Mv33EditComponent_genereLinked: {
        required: "Campo requerido"
      },
      Mv33EditComponent_typePersonLinked: {
        required: "Campo requerido"
      },
      Mv33EditComponent_type: {
        required: "Campo requerido"
      },
      Mv33EditComponent_linkedType: {
        required: "Campo requerido"
      },
    };
  }

  //------------------------------------- Validaciones y control de formularios------------------------------------
  validateInputs(prefix: string, container: AbstractControl, controlName: string | null = null): { [key: string]: { [key: string]: string } } {
    let message = {} as { [key: string]: { [key: string]: string } };

    if (container instanceof FormGroup) {
      const group = (container as FormGroup);

      for (const field in group.controls) {
        const control = group.controls[field];

        let childMessages = this.validateInputs(prefix, control, field);
        Object.assign(message, childMessages);
      }
    }
    else if (container instanceof FormArray) {
      const group = (container as FormArray);

      for (const field in group.controls) {
        const control = group.controls[field];

        let childMessages = this.validateInputs(prefix, control, field);
        Object.assign(message, childMessages);
      }
    }

    if (this.mensajes[prefix + controlName]) {
      message[prefix + controlName] = {};
      const control = (container as FormControl);

      if ((control.dirty || control.touched) && control.errors) {
        Object.keys(control.errors).forEach(messagekey => {
          if (this.mensajes[prefix + controlName][messagekey]) {
            message[prefix + controlName] = this.mensajes[prefix + controlName][messagekey] as {};
          }
        });
      }
    }

    return message;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);

      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
        control.markAsDirty({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      } else {
        if (control instanceof FormArray) {
          control.controls.forEach((A: any) => {
            this.validateAllFormFields(<FormGroup>A);
          });
        }
      }
    });
  }

  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field)?.valid && form.get(field)?.touched && form.get(field)?.dirty;
  }

  public canLoadModule(moduleName: string): boolean {
    if (sessionStorage.getItem('MenuOptions') == null) return false;

    return JSON.parse(sessionStorage.getItem('MenuOptions')!).some((x: any) => x.actions.some((a: any) => a.menuName == moduleName));
  }

  public IsAuthorized(permissions: string): boolean {
    if (sessionStorage.getItem('MenuOptions') == null) return false;

    return JSON.parse(sessionStorage.getItem('MenuOptions')!).some((x: any) => x.actions.some((a: any) => permissions.indexOf(a.name) != -1));
  }
}
