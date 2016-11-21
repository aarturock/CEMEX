/// <reference path="Base/TelstockBaseUI.js" />
/// <reference path="../../alertify/alertify.min.js" />
/// <reference path="../../WebAppInit.js" />
var TelstockBase = {};

(function () {

    //Codes***********************//
    this.Codes = {
        //Contiene los códigos de tipos de controles definidos para HTML
        HtmlControls: {
            InputText: 'text',
            InputDate: 'date',
            InputEmail: 'email',
            InputCheck: 'checkbox',
            InputRadio: 'radio',
            InputFile: 'file',
            Select: 'select-one',
            Image: 'image'
        },
        //Contiene los códigos de estado definidos para HTTP
        Server: {
            //Indica que la solicitud ha sido aceptada para su posterior procesamiento.
            Accepted: 202,
            //Indica que la solicitud tuvo éxito.
            OK: 200,
            //Indica que ha ocurrido un error genérico en el servidor.
            InternalServerError: 500,
            //Indica que el recurso solicitado requiere autenticación.
            Unauthorized: 401,
            //Indica que no se permite la solicitud en el recurso solicitado.
            MethodNotAllowed: 405,
            //Indica que el recurso solicitado no existe en el servidor.
            NotFound: 404,
            //Indica que el cliente no envió una solicitud en el intervalo de tiempo durante el cual el servidor la esperaba.
            RequestTimeout: 408,
            //Indica que el servidor rechaza atender la solicitud.
            Forbidden: 403,
            //Indica que la solicitud no puede ser entendida por el servidor o si se desconoce el error exacto o no tiene su propio código de error
            BadRequest: 400,
            //Indica que la solicitud se ha procesado correctamente y que la respuesta es en blanco intencionalmente
            NoContent: 204,
            //Indica que la solicitud no pudo ser procesada debido a un conflicto con el estado actual del recurso
            Conflict:409 
        },
        //Contiene los códigos definidos para el tipo de plataforma que interactuan con la aplicación.
        Plataforma: {
            BO: 1,
            Movil: 2
        },
        //Contiene los códigos de los status lógicos definidos para los registros en la aplicación
        Status: {
            Activo: 1,
            Inactivo: 2,
            Eliminado: 3
        },
    }

    //Dom************************//
    this.Dom = {
        Elements: {
            //Crea un elemento y lo adjunta al DOM actual
            Create: function (item) {
                document.body.innerHTML += item.HtmlSection;
            },
            CreateByHtml: function (htmlToAddToDom, Container) {
                if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(Container) || !typeof (Container) == "undefined") {
                    document.getElementById(Container).innerHTML += htmlToAddToDom;
                } else {
                    document.body.innerHTML += htmlToAddToDom;
                }
            },
            Remove: function (IdControlToRemove) {
                var itemDom = document.getElementById(IdControlToRemove);
                if (itemDom) {
                    var parentItem = itemDom.parentNode;
                    parentItem.removeChild(itemDom);
                }
            }
        },
        Html5: {
            Controls: {
                Type: {
                    Input: {
                        Button: {
                            GetHmtl: function (arrayAtributtes) {

                            }
                        },
                        Text: {
                            GetHtml: function (arrayAtributes) {
                                return "<input type='Text' >";
                            }
                        },
                        Submit: {},
                    },
                    Select: {},
                    Image: {}
                },
                Attributes: function (atrributeName, atributteValue) {
                    this.AtrrName = atrributeName;
                    this.AtributteValue = atributteValue;
                },
                Codes: {},
            },
        },
    };

    //Security************************//
    var auxPatterRegex = '';
    var patterRegex = '';
    var isPatterValid = false;
    var charCode;
    var regex;

    this.Security = {
        Regex: {
            Expressions: {
                //Proporciona un conjunto de métodos que regulan la entrada semántica de datos.
                Common: {
                    //Proporciona un método de comparación de una entrada datos ante un patrón especificado. [valor,patron]
                    Custom: function (inputValue, patternExpression) {
                        isPatterValid = false;
                        try {
                            regex = new RegExp(patternExpression);
                            isPatterValid = regex.test(inputValue);
                        } catch (e) {
                            isPatterValid = false;
                        }
                        return isPatterValid;
                    },

                    CustomNC: function (inputValue, patternExpression) {
                        return patternExpression.test(inputValue);
                    },

                    //Indica si la entrada de datos contiene un formato Fecha válido (Considera años biciestos). [dd/MM/aaaa]
                    Date: function (inputValue) {
                        isPatterValid = false;
                        isPatterValid = patterRegex = /^(?:(?:0?[1-9]|1\d|2[0-8])(\/|-)(?:0?[1-9]|1[0-2]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:31(\/|-)(?:0?[13578]|1[02]))|(?:(?:29|30)(\/|-)(?:0?[1,3-9]|1[0-2])))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(29(\/|-)0?2)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/.test(inputValue);
                        return isPatterValid;
                    },

                    //Indica si la entrada de datos contiene un formato de número decimal válido (Positivos[true], Negativos[false] [Ambos no especificando parametro] con separador coma y/o punto [0-9],[-[0-9],.[0-9]])
                    DecimalNumbers: function (inputValue, positiveOrNegativeValidation) {
                        auxPatterRegex = (typeof (positiveOrNegativeValidation) == "undefined") ? "^-?[0-9]+([,\.][0-9]*)?$" : ((typeof (positiveOrNegativeValidation) == "boolean") ? ((positiveOrNegativeValidation == true) ? "^[0-9]+([,\.][0-9]*)?$" : "^-[0-9]+([,\.][0-9]*)?$") : "");
                        if (!this.EmptyOrWithSpace(auxPatterRegex)) {
                            regex = new RegExp(auxPatterRegex);
                            isPatterValid = regex.test(inputValue)
                        }
                        else {
                            isPatterValid = false;
                        }

                        return isPatterValid;
                    },

                    //Indica si la entrada de datos contiene un formato Email válido. [example@dominio.com.mx]
                    Email: function (email) {
                        isPatterValid = false;
                        isPatterValid = patterRegex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email);
                        return isPatterValid;
                    },

                    //Indica si la entrada de datos es vacia o solo consta de caracteres de espacios.
                    EmptyOrWithSpace: function (inputValue) {
                        isPatterValid = false;
                        isPatterValid = patterRegex = /^\s*$/.test(inputValue);
                        return isPatterValid;
                    },

                    //Indica si la entrada de datos contiene un formato GUID válido
                    IsGuidValue: function (inputValue) {
                        isPatterValid = false;
                        isPatterValid = patterRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(inputValue);
                        return isPatterValid;
                    },

                    //Indica si la entrada es un tipo de archivo válido de acuerdo a extension(es) especificadas. param1("di.doc","doc"), param1("di.doc",["doc","pdf","xls"]) 
                    ExtensionFile: function (stringFileName, singleOrArrayExtensionFiles) {
                        var auxExtensions = '';
                        auxPatterRegex = '';
                        auxPatterRegex = "^.+\.(extensions)$";

                        if (typeof (singleOrArrayExtensionFiles) == typeof []) {
                            for (var extension = 0; extension < singleOrArrayExtensionFiles.length; extension++) {
                                //Si no esta vácio el string del parametro arrayExtensionFiles 
                                if (!this.EmptyOrWithSpace(singleOrArrayExtensionFiles[extension])) {
                                    if (this.LettersNumbersWithSpaceAndAcutes(singleOrArrayExtensionFiles[extension])) {
                                        auxExtensions += singleOrArrayExtensionFiles[extension] + '|';
                                    }
                                    else {
                                        console.error("La extensión del archivo " + singleOrArrayExtensionFiles[extension] + " es inválida, debe constar solo de caracteres alfa. P/E [gif]");
                                        return false;
                                    }
                                }
                                else {
                                    console.error("Algunas de las extensiones dentro de la colección singleOrArrayExtensionFiles son vacias.");
                                    return false;
                                }
                            }

                            //Se verifica que antes de cualquier punto tenga por lo menos algún caracter.
                            if (!this.EmptyOrWithSpace((stringFileName.split(".")[0] == "") ? "" : stringFileName.split(".")[0])) {
                                auxExtensions = auxExtensions.substring(0, auxExtensions.length - 1);
                                auxPatterRegex = auxPatterRegex.replace("extensions", auxExtensions);
                                regex = new RegExp(auxPatterRegex);
                                isPatterValid = regex.test(stringFileName);
                            } else {
                                console.log("El nombre del archivo es inválido");
                                return false;
                            }
                        }
                        else {
                            //Si no esta vácio el string del parametro arrayExtensionFiles 
                            if (!this.EmptyOrWithSpace(singleOrArrayExtensionFiles)) {
                                if (this.LettersNumbersWithSpaceAndAcutes(singleOrArrayExtensionFiles)) {
                                    //Se verifica que antes de cualquier punto tenga por lo menos algún caracter.
                                    if (!this.EmptyOrWithSpace((stringFileName.split(".")[0] == "") ? "" : stringFileName.split(".")[0])) {
                                        auxPatterRegex = auxPatterRegex.replace("extensions", singleOrArrayExtensionFiles);
                                        regex = new RegExp(auxPatterRegex);
                                        isPatterValid = regex.test(stringFileName);
                                    }
                                    else {
                                        console.log("El nombre del archivo es inválido");
                                        return false;
                                    }
                                }
                                else {
                                    console.error("La extensión del archivo " + singleOrArrayExtensionFiles + " es inválida, debe constar solo de caracteres alfa. P/E [gif]");
                                    return false;
                                }
                            }
                            else {
                                console.error("Debe de escribir el nombre de la extensión de algún tipo de archivo.");
                                return false;
                            }
                        }

                        return isPatterValid;
                    },

                    //Indica si la entrada de datos consta solo de caracteres Alfa. [A-Z-a-z]
                    Letters: function (inputValue) {
                        if (!this.EmptyOrWithSpace(inputValue)) {
                            isPatterValid = false;
                            isPatterValid = patterRegex = /^[a-zA-Z]*$/.test(inputValue);
                        }
                        else {
                            isPatterValid = false;
                        }

                        return isPatterValid;
                    },

                    //Indica si la entrada de datos consta solo de caracteres Alfa en relación a una longitud especificada. [A-Z-a-z]{LongitudMin,LongitudMax}
                    LettersLength: function (inputValue, LngMin, LngMax) {
                        isPatterValid = false;
                        try {
                            if (!this.EmptyOrWithSpace(inputValue)) {
                                auxPatterRegex = "^[a-zA-Z]{LongitudMin,LongitudMax}$";
                                auxPatterRegex = auxPatterRegex.replace("LongitudMin", LngMin);
                                auxPatterRegex = auxPatterRegex.replace("LongitudMax", LngMax);
                                regex = new RegExp(auxPatterRegex);
                                isPatterValid = regex.test(inputValue);
                            }
                            else {
                                isPatterValid = false;
                            }
                        }
                        catch (e) {
                            console.warn("Números de intervalo fuera de ordén.");
                            isPatterValid = false;
                        }
                        return isPatterValid;
                    },

                    //Indica si la entrada de datos consta solo de caracteres Alfa (c/s acento diacrítico). [A-ZÁÉÍÓÚÑ-a-záéíóúñ]
                    LettersAcutes: function (inputValue) {
                        if (!this.EmptyOrWithSpace(inputValue)) {
                            isPatterValid = false;
                            isPatterValid = patterRegex = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ]*$/.test(inputValue);
                        }
                        else {
                            isPatterValid = false;
                        }
                        return isPatterValid;
                    },

                    //Indica si la entrada de datos consta solo de caracteres Alfa (c/s acento diacrítico) en relación a una longitud especificada. [A-ZÁÉÍÓÚÑ-a-záéíóúñ]{LongitudMin,LongitudMax}
                    LettersAcutesLength: function (inputValue, LngMin, LngMax) {
                        isPatterValid = false;
                        try {
                            if (!this.EmptyOrWithSpace(inputValue)) {
                                auxPatterRegex = "^[a-zA-ZÁÉÍÓÚáéíóúñÑ]{LongitudMin,LongitudMax}$";
                                auxPatterRegex = auxPatterRegex.replace("LongitudMin", LngMin);
                                auxPatterRegex = auxPatterRegex.replace("LongitudMax", LngMax);
                                regex = new RegExp(auxPatterRegex);
                                isPatterValid = regex.test(inputValue);
                            }
                            else {
                                isPatterValid = false;
                            }
                        } catch (e) {
                            console.warn("Números de intervalo fuera de ordén.");
                            isPatterValid = false;
                        }
                        return isPatterValid;
                    },

                    //Indica si la entrada de datos consta solo de letras, números y espacios (c/s acento diacrítico). [a-z-A-Z-0-9[Spaces]ÁÉÍÓÚ-áéíóú-ñÑ]
                    LettersNumbersWithSpaceAndAcutes: function (inputValue) {
                        isPatterValid = false;
                        isPatterValid = patterRegex = /^[a-zA-Z_áéíóúñÑÁÉÓÚÑ0-9\s]*$/.test(inputValue);
                        return isPatterValid;
                    },

                    //Indica si la entrada de datos consta solo de letras, números y espacios  de acuerdo a una longitud especificada (c/s acento diacrítico). [a-z-A-Z-0-9[Spaces]ÁÉÍÓÚ-áéíóú-ñÑ] {LongitudMin,LongitudMax}
                    LettersNumbersWithSpaceAndAcutesLength: function (inputValue, LngMin, LngMax) {
                        isPatterValid = false;
                        try {
                            auxPatterRegex = '';
                            auxPatterRegex = "^[a-zA-Z_áéíóúñÑÁÉÍÓÚ0-9\s]{LongitudMin,LongitudMax}$";
                            auxPatterRegex = auxPatterRegex.replace("LongitudMin", LngMin);
                            auxPatterRegex = auxPatterRegex.replace("LongitudMax", LngMax);
                            regex = new RegExp(auxPatterRegex);
                            isPatterValid = regex.test(inputValue);
                        } catch (e) {
                            console.warn("Números de intervalo fuera de orden.");
                            isPatterValid = false;
                        }
                        return isPatterValid;
                    },

                    //Indica si la entrada de datos consta solo de letras, números y espacios. [a-z-A-Z-0-9[Spaces]]
                    LettersNumbersWithSpace: function (inputValue) {
                        isPatterValid = false;
                        isPatterValid = patterRegex = /^[a-zA-Z0-9\s]*$/.test(inputValue);
                        return isPatterValid;
                    },

                    //Indica si la entrada de datos consta solo de letras, números y espacios  de acuerdo a una longitud especificada. [a-z-A-Z-0-9[Spaces]] {LongitudMin,LongitudMax}
                    LettersNumbersWithSpaceLength: function (inputValue, LngMin, LngMax) {
                        isPatterValid = false;
                        try {
                            auxPatterRegex = "^[a-zA-Z0-9\s]{LongitudMin,LongitudMax}$";
                            auxPatterRegex = auxPatterRegex.replace("LongitudMin", LngMin);
                            auxPatterRegex = auxPatterRegex.replace("LongitudMax", LngMax);
                            regex = new RegExp(auxPatterRegex);
                            isPatterValid = regex.test(inputValue);
                        } catch (e) {
                            console.warn("Números de intervalo fuera de orden.");
                            isPatterValid = false;
                        }
                        return isPatterValid;
                    },

                    //Indica si la entrada de datos consta solo de letras y números. [a-z-A-Z-0-9ÁÉÍÓÚ-áéíóú-ñÑ]
                    LettersNumbersWithOutSpaceAcutes: function (inputValue) {
                        if (!this.EmptyOrWithSpace(inputValue)) {
                            isPatterValid = false;
                            isPatterValid = patterRegex = /^[a-zA-Z_áéíóúñÁÉÍÓÚÑ0-9]*$/.test(inputValue);
                        }
                        else {
                            isPatterValid = false;
                        }
                        return isPatterValid;
                    },

                    //Indica si la entrada de datos consta solo de letras y números de acuerdo a una longitud especificada. [a-z-A-Z-0-9ÁÉÍÓÚ-áéíóú-ñÑ] {LongitudMin,LongitudMax}
                    LettersNumbersWithOutSpaceAcutesLength: function (inputValue, LngMin, LngMax) {
                        isPatterValid = false;
                        try {
                            if (!this.EmptyOrWithSpace(inputValue)) {
                                auxPatterRegex = "^[a-zA-Z_áéíóúñÁÉÍÓÚÑ0-9]{LongitudMin,LongitudMax}$";
                                auxPatterRegex = auxPatterRegex.replace("LongitudMin", LngMin);
                                auxPatterRegex = auxPatterRegex.replace("LongitudMax", LngMax);
                                regex = new RegExp(auxPatterRegex);
                                isPatterValid = regex.test(inputValue);
                            }
                            else {
                                isPatterValid = false;
                            }
                        } catch (e) {
                            console.warn("Números de intervalo fuera de orden.");
                            isPatterValid = false;
                        }
                        return isPatterValid;
                    },

                    //Indica si la entrada de datos consta solo de letras y números. [a-z-A-Z-0-9]
                    LettersNumbersWithOutSpace: function (inputValue) {
                        if (!this.EmptyOrWithSpace(inputValue)) {
                            isPatterValid = false;
                            isPatterValid = patterRegex = /^[a-zA-Z0-9]*$/.test(inputValue);
                        }
                        else {
                            isPatterValid = false;
                        }
                        return isPatterValid;
                    },

                    //Indica si la entrada de datos consta solo de letras y números de acuerdo a una longitud especificada. [a-z-A-Z-0-9] {LongitudMin,LongitudMax}
                    LettersNumbersWithOutSpaceLength: function (inputValue, LngMin, LngMax) {
                        isPatterValid = false;
                        try {
                            if (!this.EmptyOrWithSpace(inputValue)) {
                                auxPatterRegex = "^[a-zA-Z0-9]{LongitudMin,LongitudMax}$";
                                auxPatterRegex = auxPatterRegex.replace("LongitudMin", LngMin);
                                auxPatterRegex = auxPatterRegex.replace("LongitudMax", LngMax);
                                regex = new RegExp(auxPatterRegex);
                                isPatterValid = regex.test(inputValue);
                            }
                            else {
                                isPatterValid = false;
                            }
                        } catch (e) {
                            console.warn("Números de intervalo fuera de orden.");
                            isPatterValid = false;
                        }
                        return isPatterValid;
                    },

                    //Indica si la entrada de datos consta de uno o más caracteres númericos en relación a una longitud especificada.[0-9]{LongitudMin,LongitudMax}
                    NumbersLength: function (inputValue, LngMin, LngMax) {
                        isPatterValid = false;
                        try {
                            if (!this.EmptyOrWithSpace(inputValue)) {
                                auxPatterRegex = "^[0-9]{LongitudMin,LongitudMax}$";
                                auxPatterRegex = auxPatterRegex.replace("LongitudMin", LngMin);
                                auxPatterRegex = auxPatterRegex.replace("LongitudMax", LngMax);
                                regex = new RegExp(auxPatterRegex);
                                isPatterValid = regex.test(inputValue);
                            }
                            else {
                                isPatterValid = false;
                            }
                        } catch (e) {
                            console.warn("Números de intervalo fuera de ordén.");
                            isPatterValid = false;
                        }
                        return isPatterValid;
                    },

                    //Indica si la entrada de datos consta solo de caracteres númericos. [0-9]
                    Numbers: function (inputValue) {
                        isPatterValid = false;
                        isPatterValid = patterRegex = /^\d+$/.test(inputValue);
                        return isPatterValid;
                    },

                    FileSize: function (InputFileSize) {
                        if (InputFileSize >= '5242880') { // 5MB
                            return isPatterValid = false;
                        }
                    
                    },
                    //Indica si la entrada de datos contiene una dirección URL válida.
                    Url: function (inputValue) {
                        isPatterValid = false;
                        isPatterValid = patterRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \?=.-]*)*\/?$/.test(inputValue);
                        return isPatterValid;
                    }
                },
                //Proporciona un conjunto de métodos para la región México que determinan si la(s) entrada(s) de dato(s) son válid(a/o)(s) de acuerdo a campo(s) semántico(s) especificado(s).
                Mex: {
                    //Indica si la entrada de datos contiene un formato de código postal válido.
                    ZipCode: function (codigoPostal) {
                        isPatterValid = false;
                        isPatterValid = patterRegex = /^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/.test(codigoPostal);
                        return isPatterValid;
                    },

                    //Indica si la entrada de datos contiene un formato RFC válido.
                    RFC: function (rfc) {
                        isPatterValid = false;
                        isPatterValid = patterRegex = /^[a-zA-Z]{3,4}(\d{6})((\D|\d){3})?$/.test(rfc);
                        return isPatterValid;
                    },

                    //Indica si la entrada de datos contiene un formato CURP (puede contener Ñ-ñ) válido.
                    CURP: function (curp) {
                        isPatterValid = false;
                        isPatterValid = patterRegex = /^[a-zA-Z_ñÑ]{4}\d{6}[a-zA-Z_ñÑ]{6}\d{2}$/.test(curp);
                        return isPatterValid;
                    },

                    //Indica si la entrada de datos contiene un formato de número teléfonico válido (8 a 10  caracteres númericos, sin separadores de dígitos).
                    PhoneNumber: function (number) {
                        isPatterValid = false;
                        isPatterValid = patterRegex = /^\d{8,10}$/.test(number);
                        return isPatterValid;
                    }
                },
            }
        },
        ControlEvents: {
            KeyPress: {
                //Indica que el control solo permitirá caracteres númericos como texto de entrada. [0-9]
                Numbers: function (event) {
                    charCode = (event.which) ? event.which : event.keyCode
                    if (charCode > 31 && (charCode < 48 || charCode > 57))
                        return false;
                    else
                        return true;
                },

                //Indica que el control solo permitirá caracteres Alfa como texto de entrada. [A-Z-a-z]
                Letters: function (event) {
                    charCode = (event.which) ? event.which : event.keyCode
                    if (charCode > 31) {

                        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122))
                            return true;
                        else
                            return false;

                    } else {
                        return true;
                    }
                },

                //Indica que el control solo permitirá caracteres Alfa como texto de entrada. [A-ZÁÉÍÓÚÑ-a-záéíóúñ]
                LettersAcutes: function (event) {
                    charCode = (event.which) ? event.which : event.keyCode
                    if (charCode > 31) {
                        //[A-Z]Ñ-ÁÉÍÓÚ
                        //[a-z]ñ-áéíóú
                        if ((charCode >= 65 && charCode <= 90 || charCode == 209 || charCode == 193 || charCode == 201 || charCode == 205 || charCode == 211 || charCode == 218) ||
                            (charCode >= 97 && charCode <= 122 || charCode == 241 || charCode == 225 || charCode == 233 || charCode == 237 || charCode == 243 || charCode == 250))
                            return true;
                        else
                            return false;

                    } else {
                        return true;
                    }
                },

                //Indica que el control solo permitirá caracteres Alfa y espacios como texto de entrada (c/s acento diacrítico). [A-ZÁÉÍÓÚÑ-a-záéíóúñ[Espaces]]
                LettersWithSpaceAndAcutes: function (event) {
                    charCode = (event.which) ? event.which : event.keyCode
                    if (charCode > 31) {
                        if ((charCode >= 65 && charCode <= 90 || charCode == 209 || charCode == 193 || charCode == 201 || charCode == 205 || charCode == 211 || charCode == 218 || charCode == 32) ||
                            (charCode >= 97 && charCode <= 122 || charCode == 241 || charCode == 225 || charCode == 233 || charCode == 237 || charCode == 243 || charCode == 250 || charCode == 32))
                            return true;
                        else
                            return false;

                    } else {
                        return true;
                    }
                },

                LettersWithOutSpace: function (event) {
                    charCode = (event.which) ? event.which : event.keyCode
                    if (charCode > 31) {
                        if ((charCode >= 48 && charCode <= 57 ||
                             charCode >= 65 && charCode <= 90 ||
                             charCode == 209 || charCode == 193 ||
                             charCode == 201 || charCode == 205 ||
                             charCode == 211 || charCode == 218 ) ||
                            (charCode >= 97 && charCode <= 122 ||
                             charCode >= 48 && charCode <= 57 ||
                             charCode == 241 || charCode == 225 ||
                             charCode == 233 || charCode == 237 ||
                             charCode == 243 || charCode == 250 ))

                            return true;
                        else
                            return false;

                    } else {
                        return true;
                    }
                },

                //Indica que el control solo permitirá caracteres Alfa y espacios. [A-Z-a-z[Espaces]]
                LettersWithSpace: function (event) {
                    charCode = (event.which) ? event.which : event.keyCode
                    if (charCode > 31) {
                        if ((charCode >= 65 && charCode <= 90 || charCode == 32) ||
                            (charCode >= 97 && charCode <= 122 || charCode == 32))
                            return true;
                        else
                            return false;

                    } else {
                        return true;
                    }
                },

                //Indica que el control solo permitirá caracteres Alfanúmericos y espacios como texto de entrada (c/s acento diacrítico). [A-ZÁÉÍÓÚÑ-a-záéíóúñ0-9[Espaces]]
                LettersNumbersWithSpaceAndAcutes: function (event) {
                    charCode = (event.which) ? event.which : event.keyCode
                    if (charCode > 31) {
                        if ((charCode >= 48 && charCode <= 57 ||
                             charCode >= 65 && charCode <= 90 ||
                             charCode == 209 || charCode == 193 ||
                             charCode == 201 || charCode == 205 ||
                             charCode == 211 || charCode == 218 ||
                             charCode == 32) ||
                            (charCode >= 97 && charCode <= 122 ||
                             charCode >= 48 && charCode <= 57 ||
                             charCode == 241 || charCode == 225 ||
                             charCode == 233 || charCode == 237 ||
                             charCode == 243 || charCode == 250 ||
                             charCode == 32))

                            return true;
                        else
                            return false;

                    } else {
                        return true;
                    }
                },

                //Indica que el control solo permitirá caracteres Alfanúmericos y espacios como texto de entrada. [A-Z-a-z0-9[Espaces]]
                LettersNumbersWithSpace: function (event) {
                    charCode = (event.which) ? event.which : event.keyCode
                    if (charCode > 31) {
                        if ((charCode >= 48 && charCode <= 57 ||
                             charCode >= 65 && charCode <= 90 ||
                             charCode == 32) ||
                            (charCode >= 97 && charCode <= 122 ||
                             charCode >= 48 && charCode <= 57 ||
                             charCode == 32))

                            return true;
                        else
                            return false;

                    } else {
                        return true;
                    }
                },

                //Indica que el control solo permitirá caracteres númericos y el separador / como texto de entrada. [02/04/1900]
                Date: function (event) {
                    //TODO
                    return true;
                },

                //Indica que el control solo permitirá caracteres númericos decimales (Positivos, Negativos con separador coma y/o punto [10.20],[-11,0001]).
                DecimalNumbers: function (event) {
                    charCode = (event.which) ? event.which : event.keyCode
                    if (charCode > 31) {
                        if ((charCode >= 48 && charCode <= 57 ||
                             charCode == 44 || charCode == 46 ||
                             charCode == 32))
                            return true;
                        else
                            return false;

                    } else {
                        return true;
                    }
                    //TODO
                    return true;
                },

                //Custom
                Custom: function (event, chars, IsToAcepted) {
                    //TODO
                    

                },

                // valida carcateres alfanumericos espacios acentos y PUNTOS.
                LettersWithPeriods: function (event) {
                    charCode = (event.which) ? event.which : event.keyCode
                    if (charCode > 31) {
                        if ((charCode >= 48 && charCode <= 57 ||
                             charCode >= 65 && charCode <= 90 ||
                             charCode == 32) ||
                            (charCode >= 97 && charCode <= 122 ||
                             charCode >= 48 && charCode <= 57 ||
                             charCode == 32 || charCode == 46 || charCode == 64))

                            return true;
                        else
                            return false;

                    } else {
                        return true;
                    }
                },

                OnlyCordinates: function (event) {
                    charCode = (event.which) ? event.which : event.keyCode
                    if (charCode > 31) {
                        if ((charCode >= 48 && charCode <= 57 ||
                             charCode == 44 || charCode == 46 ||
                             charCode == 32 || charCode == 45))
                            return true;
                        else
                            return false;

                    } else {
                        return true;
                    }
                    //TODO
                    return true;
                }
            }
        },
        Validation: {
            //Realiza la validación de una colección de campos de formulario, regresando como respuesta un informe de validación.
            ValidateCollection: function (arrayCollection, summaryName, arrayItemSummary) {
                var summary = new TelstockBase.Utilities.Summary.Summary();
                var itemToAddSummary;
                var isValidItem;
                var isValidFunction;
                var isValidToProcess = true;
                var auxMsgValidationCollectionItem;
                summary.Title = (TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(summaryName) || typeof (summaryName) == "undefined") ? "Results" : summaryName;
                try {
                    for (var a = 0; a < arrayCollection.length; a++) {
                        isValidItem = true;
                        for (var b = 0; b < arrayCollection[a].ValidationCollection.length; b++) {
                            isValidFunction = false;
                            if (typeof (arrayCollection[a].ValidationCollection[b].ValidationFunction) == "string") {
                                switch (String(arrayCollection[a].ValidationCollection[b].ValidationFunction)) {
                                    case "Date":
                                        isValidFunction = TelstockBase.Security.Regex.Expressions.Common.Date(TelstockBase.Security.Validation.GetValueControl(arrayCollection[a].Control));
                                        break;

                                    case "Email":
                                        isValidFunction = TelstockBase.Security.Regex.Expressions.Common.Email(TelstockBase.Security.Validation.GetValueControl(arrayCollection[a].Control));
                                        break;

                                    case "EmptyOrWithSpace":
                                        isValidFunction = TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(TelstockBase.Security.Validation.GetValueControl(arrayCollection[a].Control));
                                        isValidFunction = (isValidFunction ? false : true);
                                        break;

                                    case "Letters":
                                        isValidFunction = TelstockBase.Security.Regex.Expressions.Common.Letters(TelstockBase.Security.Validation.GetValueControl(arrayCollection[a].Control));
                                        break;

                                    case "LettersAcutes":
                                        isValidFunction = TelstockBase.Security.Regex.Expressions.Common.LettersAcutes(TelstockBase.Security.Validation.GetValueControl(arrayCollection[a].Control));
                                        break;

                                    case "LettersNumbersWithSpaceAndAcutes":
                                        isValidFunction = TelstockBase.Security.Regex.Expressions.Common.LettersNumbersWithSpaceAndAcutes(TelstockBase.Security.Validation.GetValueControl(arrayCollection[a].Control));
                                        break;

                                    case "LettersNumbersWithSpace":
                                        isValidFunction = TelstockBase.Security.Regex.Expressions.Common.LettersNumbersWithSpace(TelstockBase.Security.Validation.GetValueControl(arrayCollection[a].Control));
                                        break;

                                    case "LettersNumbersWithOutSpaceAcutes":
                                        isValidFunction = TelstockBase.Security.Regex.Expressions.Common.LettersNumbersWithOutSpaceAcutes(TelstockBase.Security.Validation.GetValueControl(arrayCollection[a].Control));
                                        break;

                                    case "LettersNumbersWithOutSpace":
                                        isValidFunction = TelstockBase.Security.Regex.Expressions.Common.LettersNumbersWithOutSpace(TelstockBase.Security.Validation.GetValueControl(arrayCollection[a].Control));
                                        break;

                                    case "Numbers":
                                        isValidFunction = TelstockBase.Security.Regex.Expressions.Common.Numbers(TelstockBase.Security.Validation.GetValueControl(arrayCollection[a].Control));
                                        break;

                                    case "IsChecked":
                                        isValidFunction = TelstockBase.Security.Validation.GetValueControl(arrayCollection[a].Control);
                                        break;

                                        /*Mex*/
                                    case "ZipCodeMx":
                                        isValidFunction = TelstockBase.Security.Regex.Expressions.Mex.ZipCode(TelstockBase.Security.Validation.GetValueControl(arrayCollection[a].Control));
                                        break;

                                    case "RFCMx":
                                        isValidFunction = TelstockBase.Security.Regex.Expressions.Mex.RFC(TelstockBase.Security.Validation.GetValueControl(arrayCollection[a].Control));
                                        break;

                                    case "CURPMx":
                                        isValidFunction = TelstockBase.Security.Regex.Expressions.Mex.CURP(TelstockBase.Security.Validation.GetValueControl(arrayCollection[a].Control));
                                        break;

                                    case "PhoneNumberMx":
                                        isValidFunction = TelstockBase.Security.Regex.Expressions.Mex.PhoneNumber(TelstockBase.Security.Validation.GetValueControl(arrayCollection[a].Control));
                                        break;

                                    default:
                                        //TODO Default: sera tomado como null or empt
                                }
                            }
                            else {
                                if (arrayCollection[a].ValidationCollection[b].ValidationFunction instanceof TelstockBase.Security.Codes.ValidationTypes.Common.Custom) {
                                    isValidFunction = TelstockBase.Security.Regex.Expressions.Common.Custom(TelstockBase.Security.Validation.GetValueControl(arrayCollection[a].Control), arrayCollection[a].ValidationCollection[b].ValidationFunction.PatternExpression);
                                }
                                else if (arrayCollection[a].ValidationCollection[b].ValidationFunction instanceof TelstockBase.Security.Codes.ValidationTypes.Common.ExtensionFile) {
                                    isValidFunction = TelstockBase.Security.Regex.Expressions.Common.ExtensionFile(TelstockBase.Security.Validation.GetValueControl(arrayCollection[a].Control), arrayCollection[a].ValidationCollection[b].ValidationFunction.SingleOrExtensionsFiles);
                                }
                                else if (arrayCollection[a].ValidationCollection[b].ValidationFunction instanceof TelstockBase.Security.Codes.ValidationTypes.Common.LettersLength) {
                                    isValidFunction = TelstockBase.Security.Regex.Expressions.Common.LettersLength(TelstockBase.Security.Validation.GetValueControl(arrayCollection[a].Control), arrayCollection[a].ValidationCollection[b].ValidationFunction.LngMin, arrayCollection[a].ValidationCollection[b].ValidationFunction.LngMax);
                                }
                                else if (arrayCollection[a].ValidationCollection[b].ValidationFunction instanceof TelstockBase.Security.Codes.ValidationTypes.Common.LettersAcutesLength) {
                                    isValidFunction = TelstockBase.Security.Regex.Expressions.Common.LettersAcutesLength(TelstockBase.Security.Validation.GetValueControl(arrayCollection[a].Control), arrayCollection[a].ValidationCollection[b].ValidationFunction.LngMin, arrayCollection[a].ValidationCollection[b].ValidationFunction.LngMax);
                                }
                                else if (arrayCollection[a].ValidationCollection[b].ValidationFunction instanceof TelstockBase.Security.Codes.ValidationTypes.Common.LettersNumbersWithSpaceAndAcutesLength) {
                                    isValidFunction = TelstockBase.Security.Regex.Expressions.Common.LettersNumbersWithSpaceAndAcutesLength(TelstockBase.Security.Validation.GetValueControl(arrayCollection[a].Control), arrayCollection[a].ValidationCollection[b].ValidationFunction.LngMin, arrayCollection[a].ValidationCollection[b].ValidationFunction.LngMax);
                                }
                                else if (arrayCollection[a].ValidationCollection[b].ValidationFunction instanceof TelstockBase.Security.Codes.ValidationTypes.Common.LettersNumbersWithSpaceLength) {
                                    isValidFunction = TelstockBase.Security.Regex.Expressions.Common.LettersNumbersWithSpaceLength(TelstockBase.Security.Validation.GetValueControl(arrayCollection[a].Control), arrayCollection[a].ValidationCollection[b].ValidationFunction.LngMin, arrayCollection[a].ValidationCollection[b].ValidationFunction.LngMax);
                                }
                                else if (arrayCollection[a].ValidationCollection[b].ValidationFunction instanceof TelstockBase.Security.Codes.ValidationTypes.Common.LettersNumbersWithOutSpaceAcutesLength) {
                                    isValidFunction = TelstockBase.Security.Regex.Expressions.Common.LettersNumbersWithOutSpaceAcutesLength(TelstockBase.Security.Validation.GetValueControl(arrayCollection[a].Control), arrayCollection[a].ValidationCollection[b].ValidationFunction.LngMin, arrayCollection[a].ValidationCollection[b].ValidationFunction.LngMax);
                                }
                                else if (arrayCollection[a].ValidationCollection[b].ValidationFunction instanceof TelstockBase.Security.Codes.ValidationTypes.Common.NumbersLength) {
                                    isValidFunction = TelstockBase.Security.Regex.Expressions.Common.NumbersLength(TelstockBase.Security.Validation.GetValueControl(arrayCollection[a].Control), arrayCollection[a].ValidationCollection[b].ValidationFunction.LngMin, arrayCollection[a].ValidationCollection[b].ValidationFunction.LngMax);
                                }
                                else if (arrayCollection[a].ValidationCollection[b].ValidationFunction instanceof TelstockBase.Security.Codes.ValidationTypes.Common.LettersNumbersWithOutSpaceLength) {
                                    isValidFunction = TelstockBase.Security.Regex.Expressions.Common.LettersNumbersWithOutSpaceLength(TelstockBase.Security.Validation.GetValueControl(arrayCollection[a].Control), arrayCollection[a].ValidationCollection[b].ValidationFunction.LngMin, arrayCollection[a].ValidationCollection[b].ValidationFunction.LngMax);
                                }
                                else if (arrayCollection[a].ValidationCollection[b].ValidationFunction instanceof TelstockBase.Security.Codes.ValidationTypes.Common.IsInitialValue) {
                                    isValidFunction = TelstockBase.Security.Validation.GetValueControl(arrayCollection[a].Control, arrayCollection[a].ValidationCollection[b].ValidationFunction.InitialValue);
                                    isValidFunction = (isValidFunction ? false : true);
                                }
                                else if (arrayCollection[a].ValidationCollection[b].ValidationFunction instanceof TelstockBase.Security.Codes.ValidationTypes.Common.DecimalNumbers) {
                                    isValidFunction = TelstockBase.Security.Regex.Expressions.Common.DecimalNumbers(TelstockBase.Security.Validation.GetValueControl(arrayCollection[a].Control), arrayCollection[a].ValidationCollection[b].ValidationFunction.PositiveNegativeOrNeutralValue);
                                }
                            }
                            if (!isValidFunction) {
                                auxMsgValidationCollectionItem = arrayCollection[a].ValidationCollection[b].Message;
                                if (isValidItem) {
                                    isValidItem = false;
                                }
                                //No iteramos las démas funciones
                                break;
                            }
                        }
                        //Construimos un item para el reporte en caso que no  haya pasado algunas de las pruebas de validación.
                        if (!Boolean(isValidItem)) {
                            itemToAddSummary = new TelstockBase.Utilities.Summary.ItemSummary();
                            itemToAddSummary.Field = arrayCollection[a].AliasFieldControl;
                            itemToAddSummary.Message = auxMsgValidationCollectionItem;
                            summary.CollectionItemsSummary.push(itemToAddSummary);
                            if (isValidToProcess) {
                                isValidToProcess = false;
                            }
                        }
                    }
                } catch (e) {
                    summary.CollectionItemsSummary = [];
                    itemToAddSummary = new TelstockBase.Utilities.Summary.ItemSummary();
                    itemToAddSummary.Field = "Configuración";
                    itemToAddSummary.Message = "Algunos elementos de la colección no se han configurado correctamente.";
                    summary.CollectionItemsSummary.push(itemToAddSummary);
                    console.error("Alguno elementos de la colección no se han configurado correctamente.");
                }

                return new TelstockBase.Security.Validation.ResponseValidation(isValidToProcess, TelstockBase.Utilities.Summary.MakeSummary(summary, arrayItemSummary));
            },
            //Obtiene el valor de un control especificado
            GetValueControl: function (control, initialValue) {
                var valueControl;
                switch (String(control.type.toLowerCase())) {
                    case String(TelstockBase.Codes.HtmlControls.InputText.toLowerCase()):
                        valueControl = control.value;
                        break;

                    case String(TelstockBase.Codes.HtmlControls.InputDate.toLocaleLowerCase()):
                        valueControl = (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(control.value) ? TelstockBase.Utilities.Formats.Date(control.value) : '');
                        break;

                    case String(TelstockBase.Codes.HtmlControls.InputEmail.toLowerCase()):
                        valueControl = control.value;
                        break;

                    case String(TelstockBase.Codes.HtmlControls.InputFile.toLowerCase()):
                        valueControl = control.value;
                        break;

                        //Almenos que uno o un grupo de controles este o no seleccionado
                    case String(TelstockBase.Codes.HtmlControls.InputCheck.toLowerCase()):
                        valueControl = (control.checked) ? true : false;
                        break;

                        //Almenos que la opcion inicial no este seleccionada
                    case String(TelstockBase.Codes.HtmlControls.Select.toLowerCase()):
                        valueControl = (String(control.options[control.selectedIndex].value) == String(initialValue)) ? true : false;
                        break;

                        //TODO Almenos que uno o un grupo de controles radio este o no seleccionado IMPLEMENTAR.
                        //case String(TelstockBase.Codes.HtmlControls.InputRadio.toLowerCase()):
                        //    valueControl = control.value;
                        //    break;

                    default:
                        valueControl = valueControl = control.value;
                        break;
                }
                return valueControl;
            },
            //Representa la estructura de un elemento de validación.
            ItemValidation: function () {
                //Control Html a validar.
                this.Control = "";
                //Para mostrar el nombre del campo en el informe.
                this.AliasFieldControl = "";
                //Colección de validaciones que seran aplicadas al control.
                this.ValidationCollection = [];
                //Especifica si el campo puede o no contener valor.
                this.CanBeFieldNullOrEmpty = false;
                //Especifica si el item es un grupo de los Mismos Controles.
                this.IsValidationGroup = false;
                //Especifica el el tipo de control del grupo de controles a validar. solo si la propiedad IsValidationGroup es true;
                this.TypeGroupControl = "";
            },
            //Representa una estructura de un elementos de la colección del objeto ItemValidation.ValidationCollection
            ItemValidationCollection: function () {
                //Nombre de la validación que se aplicara al elemento.
                this.ValidationFunction = "";
                //Especifica el mensaje en caso de error de la validación para el campo.
                this.Message = "";
            },
            //Representa la estructura de respuesta, despúes del procesamiento y evaluación de una colección de controles.
            ResponseValidation: function (isvalid, summaryHmtl) {
                this.IsValid = isvalid;
                this.Summary = summaryHmtl;
            },
        },
        Codes: {
            ValidationTypes: {
                Common: {
                    //[value,pattern]
                    Custom: function (patternExpression) {
                        this.PatternExpression = patternExpression;
                    },

                    //dd/MM/yyyy
                    Date: 'Date',

                    //[-[0-9],.[0-9]]
                    DecimalNumbers: function (positiveNegativeOrIndiferentValue) {
                        this.PositiveNegativeOrNeutralValue = positiveNegativeOrIndiferentValue;
                    },

                    //[email@dominion.com]
                    Email: 'Email',

                    //[NotEmptyOrSpaces]
                    EmptyOrWithSpace: 'EmptyOrWithSpace',

                    //[ext],['ext1','ext2','ext3',etc]
                    ExtensionFile: function (singleOrArrayExtensionFiles) {
                        this.SingleOrExtensionsFiles = singleOrArrayExtensionFiles;
                    },

                    //[a-z-A-Z]
                    Letters: 'Letters',

                    //[a-z-A-Z] n to n
                    LettersLength: function (lngMin, lngMax) {
                        this.LngMin = lngMin;
                        this.LngMax = lngMax;
                    },

                    //[a-z-A-ZáéíóúÁÉÍÓÚÑñ]
                    LettersAcutes: 'LettersAcutes',

                    //[a-z-A-ZáéíóúÁÉÍÓÚÑñ] n to n
                    LettersAcutesLength: function (lngMin, lngMax) {
                        this.LngMin = lngMin;
                        this.LngMax = lngMax;
                    },

                    //[a-z-A-Z-0-9[Spaces]ÁÉÍÓÚ-áéíóú-ñÑ]
                    LettersNumbersWithSpaceAndAcutes: 'LettersNumbersWithSpaceAndAcutes',

                    //[a-z-A-Z-0-9[Spaces]ÁÉÍÓÚ-áéíóú-ñÑ] n to n
                    LettersNumbersWithSpaceAndAcutesLength: function (lngMin, lngMax) {
                        this.LngMin = lngMin;
                        this.LngMax = lngMax;
                    },

                    //[a-z-A-Z-0-9[Spaces]]
                    LettersNumbersWithSpace: 'LettersNumbersWithSpace',

                    //[a-z-A-Z-0-9[Spaces]] n to n
                    LettersNumbersWithSpaceLength: function (lngMin, lngMax) {
                        this.LngMin = lngMin;
                        this.LngMax = lngMax;
                    },

                    //[a-z-A-Z-0-9ÁÉÍÓÚ-áéíóú-ñÑ]
                    LettersNumbersWithOutSpaceAcutes: 'LettersNumbersWithOutSpaceAcutes',

                    // [a-z-A-Z-0-9ÁÉÍÓÚ-áéíóú-ñÑ] n to n
                    LettersNumbersWithOutSpaceAcutesLength: function (lngMin, lngMax) {
                        this.LngMin = lngMin;
                        this.LngMax = lngMax;
                    },

                    //[a-z-A-Z-0-9]
                    LettersNumbersWithOutSpace: 'LettersNumbersWithOutSpace',

                    //[a-z-A-Z-0-9] n to n
                    LettersNumbersWithOutSpaceLength: function (lngMin, lngMax) {
                        this.LngMin = lngMin;
                        this.LngMax = lngMax;
                    },

                    //[0-9] n to n
                    NumbersLength: function (lngMin, lngMax) {
                        this.LngMin = lngMin;
                        this.LngMax = lngMax;
                    },

                    //[0-9]
                    Numbers: 'Numbers',

                    //Verifica si el control esta activo CheckBox
                    IsChecked: 'IsChecked',

                    //Verifica si el control SELECT contiene seleccionado un valor inicial
                    IsInitialValue: function (initialValue) {
                        this.InitialValue = initialValue;
                    },
                },
                Mex: {
                    //[0-9][0-9][0-9][0-9][0-9]
                    ZipCode: 'ZipCodeMx',

                    //RFC
                    RFC: 'RFCMx',

                    //CURP
                    CURP: 'CURPMx',

                    //[0-9] 8 to 10
                    PhoneNumber: 'PhoneNumberMx'
                },
            }
        }
    };

    //Utilities***************//
    this.Utilities = {
        //Proporciona un ambiente de creacion de informes de actividad.
        Summary: {
            //Crea y devuelve un reporte final de sucesos.
            MakeSummary: function (Summary, arrayItemSummary) {
                var htmlItems = '';
                var htmlSum = TelstockBase.Utilities.Summary.Templates.GetSummaryError();
                htmlSum = htmlSum.replace("TitleSummary", Summary.Title);
                for (var i = 0; i < Summary.CollectionItemsSummary.length; i++) {
                    htmlItems += TelstockBase.Utilities.Summary.Templates.GetItemError(Summary.CollectionItemsSummary[i].Message, Summary.CollectionItemsSummary[i].Field);
                }


                for (var iError = 0; iError < arrayItemSummary.length; iError++) {
                    htmlItems += TelstockBase.Utilities.Summary.Templates.GetItemError(arrayItemSummary[iError].Message, arrayItemSummary[iError].Field);
                }
                htmlSum = htmlSum.replace("ItemsSummaryError", htmlItems);
                return htmlSum;
            },
            //Representa un reporte principal de sucesos.
            Summary: function (title) {
                this.Title = (typeof (title) == "undefined" || typeof (title) == null) ? "" : title;
                this.CollectionItemsSummary = [];
            },
            //Representa un elemento de un reporte principal de sucesos.
            ItemSummary: function (field, message) {
                this.Field = (typeof (field) == "undefined" || typeof (field) == null) ? "" : field;
                this.Message = (typeof (message) == "undefined" || typeof (message) == null) ? "" : message;
            },
            //Representa un conjunto de estructuras HTML de elementos para informes.
            Templates: {
                //Devuelve una estructura de de un informe de sucesos de error.
                GetSummaryError: function () {
                    var summaryHtml = '';
                    summaryHtml += '<div class="row">';
                    summaryHtml += '<div class="col-md-12">';
                    summaryHtml += '<div id="DetailsSummary" class="alert alert-danger">';
                    //summaryHtml += '<h3>Antes de continuar verifica los siguientes errores :</h3>';
                    summaryHtml += 'ItemsSummaryError';
                    summaryHtml += '</div>';
                    summaryHtml += '</div>';
                    summaryHtml += '</div>';
                    return summaryHtml;
                },
                //Devuelve una estructura de de un informe de sucesos validos.
                GetSummarySucess: function () { },
                //Devuelve una estructura que corresponde a un elemento de un informe de sucesos de información.(En pruebas)
                GetSummaryInfo: function () { },
                //Devuelve una estructura que corresponde a un elemento de un informe de sucesos de error.
                GetItemError: function (message, fieldName) {
                    var itemError = '';
                    itemError += ' <div class="form-group">';
                    itemError += '<label class="text-danger">';
                    itemError += '<i class="gi-warning-sign"></i> <b>' + fieldName + ' : </b> ' + message + '.';
                    itemError += '</label>';
                    itemError += '</div>';
                    return itemError;
                },
                //Devuelve una estructura que corresponde a un elemento de un informe de sucesos validos.(En pruebas)
                GetItemSucess: function () { },
            }
        },

        Formats: {
            //Formatea una cadena de fecha a dd/MM/yyyy.
            Date: function (inputFormat) {
                function pad(s) {
                    return (s < 10) ? '0' + s : s;
                }
                var d = new Date(inputFormat);
                return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
            }
        },

        //Contiene un conjunto de estrucuturas base de ayuda para el procesamiento de solicitudes
        HelperStructures: {
            //Crea y devuelve un objeto de structura Json básica
            JsonStructureHelper: function (key, value) {
                this.Key = key;
                this.Value = value;
            },
            //Crea y devuelve un objeto de notificación de acción [Operaciones CRUD]
            ActionStructureHelper: function (typeAccion, status, mensaje) {
                this.TypeAction = typeAccion;
                //TelstockBase.Utilities.Codes.StatusAction
                this.StatusAction = status;
                //Mensaje que mostrara
                this.Mensaje = mensaje;
                //TelstockBase.Utilities.Codes.StatusAction
                this.Code = parseInt(TelstockBase.Utilities.Codes.HelperStructures.ActionStructureHelper);
            },
            //Crea y devuelve un objeto de sesión inválida
            ActionStructureInvalidSessionHelper: function (mensaje) {
                this.Mensaje = mensaje;
                this.Code = parseInt(TelstockBase.Utilities.Codes.HelperStructures.ActionStructureInvalidSessionHelper);
            },
            //Crea y devulve un objeto de sesión 
            ActionStructureResponseService: function (mensaje) {
                this.Mensaje = mensaje;
                this.Code = parseInt(TelstockBase.Utilities.Codes.HelperStructures.ActionStructureResponseService);
            }
        },

        Codes: {
            HelperStructures: {
                JsonStructureHelper: 1,
                ActionStructureHelper: 2,
                ActionStructureInvalidSessionHelper: 3,
                ActionStructureResponseService: 4
            },
            TypeAction: {
                Insert: 1,
                Update: 2,
                Delete: 3,
                Consult: 4,
            },
            StatusAction: {
                //La operación se completo correctamente
                Ok: 1,
                //La operación no completada
                Error: 0
            }
        },

        //Especifica un conjunto de mensajes que describen las acciones realizadas en la aplicacion
        ActionsModulesMessages: {
            Base: {
                Movil: {
                    Add: {
                        SucessMsg: '¡Móvil creado correctamente!',
                        ErrorMsg: 'Error!: Ha ocurrido un error al crear el movil',
                    },
                    Update: {
                        SucessMsg: '¡Móvil actualizado correctamente!',
                        ErrorMsg: 'Error!: Ha ocurrido un error al actualizar el móvil',
                    },
                    Delete: {
                        SucessMsg: 'Móvil eliminado correctamente!',
                        ErrorMsg: 'Error!: Ha ocurrido un error al eliminar el móvil',
                    }
                }
            },
            Session: {
                InvalidSession: {
                    SessionNotCorrectSecuence: 2,
                    KeysNullOrEmpty: 3,
                    KeysInvalidFormat: 4,
                    NotLogued: 'Necesita autenticarse para acceder al recurso solicitado. '
                }
            }
        }
    };

    //Request****************//
    this.Request = {
        //Proporciona un ambiente de configuración para peticiones XMLHttpRequest
        Ajax: {
            Petition: function () {
                this.TypePetition = "";
                this.Url = "";
                this.DataType = "";
                this.ContentType = "";
                this.HasHeaders = false;
                this.Headers = [];
                this.HasParemtersData = false;
                this.Data = null;
                //this.Async=false, 
                this.Send = function (ajaxPetition) {
                    try {
                        //JQUERY
                        if (window.jQuery) {
                            //TYPE 
                            if (String(ajaxPetition.TypePetition) === String(TelstockBase.Request.Ajax.Base.TypePetition.Get) ||
                                String(ajaxPetition.TypePetition) === String(TelstockBase.Request.Ajax.Base.TypePetition.Post) ||
                                String(ajaxPetition.TypePetition) === String(TelstockBase.Request.Ajax.Base.TypePetition.Put) ||
                                String(ajaxPetition.TypePetition) === String(TelstockBase.Request.Ajax.Base.TypePetition.Delete)) {
                                //DATA TYPE
                                if (String(ajaxPetition.DataType) === String(TelstockBase.Request.Ajax.Base.DataType.Html) ||
                                String(ajaxPetition.DataType) === String(TelstockBase.Request.Ajax.Base.DataType.Json) ||
                                String(ajaxPetition.DataType) === String(TelstockBase.Request.Ajax.Base.DataType.JsonP) ||
                                String(ajaxPetition.DataType) === String(TelstockBase.Request.Ajax.Base.DataType.Text)) {
                                    //CONTENT TYPE
                                    if (String(ajaxPetition.ContentType) === String(TelstockBase.Request.Ajax.Base.ContentType.Default) ||
                                        String(ajaxPetition.ContentType) === String(TelstockBase.Request.Ajax.Base.ContentType.Json) ||
                                        String(ajaxPetition.ContentType) === String(TelstockBase.Request.Ajax.Base.ContentType.JsonUTF8)) {
                                        //URI-URL
                                        if (String(ajaxPetition.Url) !== "") {
                                            //HEADERS
                                            if (Boolean(ajaxPetition.HasHeaders)) {
                                                $.ajaxSetup({
                                                    beforeSend: function (xhr) {
                                                        for (var headerIndex = 0; headerIndex < ajaxPetition.Headers.length; headerIndex++) {
                                                            xhr.setRequestHeader(ajaxPetition.Headers[headerIndex].HeaderName, ajaxPetition.Headers[headerIndex].Value);
                                                        }
                                                    }
                                                });
                                            }
                                            return $.ajax({
                                                url: ajaxPetition.Url,
                                                type: ajaxPetition.TypePetition,
                                                contentType: ajaxPetition.ContentType,
                                                // async: ajaxPetition.Async,
                                                data: (Boolean(ajaxPetition.HasParemtersData) == false) ? '' : ajaxPetition.Data
                                            });
                                        }
                                        else {
                                            throw "No ha especificado un recurso Uri/Url en la petición";
                                        }
                                    }
                                    else {
                                        throw "El tipo contenido en la solicitud actual (" + ajaxPetition.DataType + ") no corresponde a un tipo de contenido válido";
                                    }
                                }
                                else {
                                    throw "El tipo de dato esperado en la solicitud actual  (" + ajaxPetition.DataType + ") no corresponde a un tipo de devolución válido";
                                }
                            }
                            else {
                                throw "El valor que ha especificado (" + ajaxPetition.TypePetition + ") no corresponda a una petición válida";
                            }
                        }
                        else {
                            throw "Jquery no esta cargado...";
                        }
                    }
                    catch (e) {
                        console.error(e);
                    }
                }
            },
            Base: {
                HeaderItem: function (headerName, value) {
                    this.HeaderName = (typeof (headerName) !== "undefined" || typeof (headerName) !== null) ? headerName : "";
                    this.Value = (typeof (value) !== "undefined" || typeof (value) !== null) ? value : "";
                },
                TypePetition: {
                    Get: "GET",
                    Post: "POST",
                    Put: "PUT",
                    Delete: "DELETE"
                },
                DataType: {
                    JsonP: "jsonp",
                    Json: "json",
                    Html: "html",
                    Text: "Text"
                },
                ContentType: {
                    Json: "application/json",
                    JsonUTF8: "application/json; charset=utf-8",
                    Default: "application/x-www-form-urlencoded; charset=UTF-8"
                },
                Response: function (isError, objError, data) {
                    this.IsError = ((typeof (isError) == "undefined" || typeof (isError) == null) ? true : isError);
                    this.ObjError = ((typeof (objError) == "undefined" || typeof (objError) == null) ? null : objError);
                    this.Data = ((typeof (data) == "undefined" || typeof (data) == null) ? null : data);
                }
            }
        }
    };

    //API********************//
    this.API = {
        //Obtiene la dirección pública del servicio
        Authority: 'http://localhost:7883/api/',
        Uri: {
            Base: {
                Menu: 'Menu/ObtenerMenu',
                Usuarios: {
                    ScreenForm: 'Usuario/ScreenForm',
                    ScreenList: 'Usuario/ScreenList',
                    Register: 'Usuario/CreaUsuario',
                    Consult: 'Usuario/',         
                    Update: 'Usuario/',
                },
                Moviles: {
                    ScreenForm: 'Moviles/ScreenForm',
                    ScreenList: 'Moviles/ScreenList/',
                    ConsultAll: 'Moviles/Get',
                    ConsultBy: 'Moviles/Get/',
                    Register: 'Moviles/AddMovil',
                    Update: 'Moviles/',
                },
                Roles: {
                    ScreenList: 'Roles/ScreenList',
                    ScreenFormNew: 'Roles/ObtenerInformacionRol',
                    ScreenFormEdit: 'Roles/', ///Falta este servicio 
                    Register: 'Roles/CreaRol',
                    Update: 'Roles/EliminarRol'
                }
            },
            Catalogos: {
                Roles: 'Catalogos/Rol',
                Paises: 'Catalogos/Pais',
                Estados: 'Catalogos/Estado/',
                Municipios: 'Catalogos/Municipio/',
                Zonas: 'Catalogos/Zona/',
                Plazas: 'Catalogos/Plaza/'
            },
            Autenticacion: {
                LogIn: 'LogIn',
                LogOut: 'LogOut'
            }
        },
        Request: {
            //Devuelve el valor actual de un key definido en el session Storage del navegador.
            Token: (typeof (sessionStorage.getItem('Authorization')) == null) ? '' : sessionStorage.getItem('Authorization'),
            //Devuelve el valor actual de un key definido en el Session Storage, de lo contrario null.
            GetKeyValueFromStorage: function (keyStorage) {
                return (typeof (sessionStorage.getItem(keyStorage)) == null) ? null : sessionStorage.getItem(keyStorage);
            },
            //Determina si Session key storage es nulla o vácia.
            IsKeyStorageNullOrEmpty: function (keyStorage) {
                var auxKeyVal = window.sessionStorage.getItem(keyStorage);
                var IsEmptyOrNull = true;
                if (typeof (auxKeyVal) === "object") {
                    if (auxKeyVal === null) {
                        IsEmptyOrNull = true;
                    }
                    else if (typeof (auxKeyVal) === "undefined") {
                        IsEmptyOrNull = true;
                    }
                    else {
                        //Validamos que la cadena no sea vacia o conste de caracteres de espacios.
                        IsEmptyOrNull = TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(auxKeyVal);
                    }
                }
                else {
                    //Validamos que la cadena no sea vacia o conste de caracteres de espacios.    
                    IsEmptyOrNull = TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(auxKeyVal);
                }
                return IsEmptyOrNull;
            },
            //Contiene una colección de Headers válidos dentro de la aplicación
            Headers: {
                //Header de autorización
                Authorization: 'Authorization',
                //Header de página actual
                PageCurrent: 'PageCurrent',
                //Header de página solicitada
                PageToGo: 'PageToGo',
                //Header de plataforma de acceso
                Plataforma: 'Plataforma',
                //Header IdEmpresa actual
                Empresa: 'Empresa',
                //Header cualquier Id de edición
                CurrentId: 'CurrentId',
                //Header Tipo formulario [Edición,Consulta,Listado]
                TypeForm: 'TypeForm'
            }
        },
        Session: {
            //Crea una sesión con los elementos necesarios para el procesamiento de solicitudes al servicio API
            Create: function (objResponse) {
                window.sessionStorage.setItem('Authorization', String(objResponse.data));
                window.sessionStorage.setItem('PageCurrent', String(TelstockBase.Application.UrlDefaultPages.LogIn));
                window.sessionStorage.setItem('PageToGo', String(TelstockBase.Application.UrlDefaultPages.Home));
                window.sessionStorage.setItem('Plataforma', String(TelstockBase.Codes.Plataforma.BO));
                window.sessionStorage.setItem('Logued', 'true');
                window.sessionStorage.setItem('UsedMenuOrFunctionsForm', 'true');
                window.sessionStorage.setItem('CurrentId', null);
                window.sessionStorage.setItem('TypeForm', null);
                window.sessionStorage.setItem('Empresa', 1);
                window.sessionStorage.setItem('DataForm', null);
                window.location = "home.html";
            },
            //Limpia la colección de keys storage de la sesión actual
            Clear: function (urlToRedirect) {
                window.sessionStorage.clear();
                if (typeof (urlToRedirect) !== "undefined") {
                    if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(urlToRedirect))
                        window.location = urlToRedirect;
                } else {
                    window.location.href = TelstockBase.Application.UrlDefaultPages.LogIn;
                }
            },
            //Contiene un colección de Keys storage definidos para el procesamiento de solicitudes
            Keys: {
                //Key de autorización [String]
                Authorization: 'Authorization',
                //Key de página actual [String]
                PageCurrent: 'PageCurrent',
                //Key de página solicitada [String]
                PageToGo: 'PageToGo',
                //Key de plataforma de acceso [String]
                Plataforma: 'Plataforma',
                //Key que determina si la sesión actual accedio a los recursos por medio de autenticación [true-false-String]
                Logued: 'Logued',
                //Key que especifica si se uso el menú o algunas de las funciones naturales de página para dirigirse a un recurso especificado [true-false-String]
                UsedMenuOrFunctionsForm: 'UsedMenuOrFunctionsForm',
                //Key que especifica un el almacenamiento de un identificador único en cualquier rubro
                CurrentId: 'CurrentId',
                //Key que especifica el tipo formulario en el que se y/ o procesa una solicitud [Default,Edición,Consulta,Listado]
                TypeForm: 'TypeForm',
                //Key que especificael identificador de empresa del usuario actual
                Empresa: 'Empresa',
                //Key DataForm [Contiene información axuliary/o de ayuda entre sesiones]
                DataForm: 'DataForm'
            },
            //Determina si la solicitud actual es válida para su procesamiento
            IsValidSession: function () {

                /*
               Criterio de validación de sesión [Los siguiente escenarios]:
              1.-Que Logued se haya logueado
              1.-La colección de Keys session de sesión necesarios existan [Authorization, PageCurrent, PageToGo, Plataforma, Logued, UsedMenu]
              1. Validar si uso el menu para acceder al recurso
              2.-Key session storage Authorization sea un valor guid válido (No null, no vacio).
              3.-Anilizar si el valor para la pagina anterior y actual se validaran
                */
                var objValidateResult = new TelstockBase.API.Session.ValidateResult();

                
                var loguedValue = TelstockBase.API.Request.GetKeyValueFromStorage(String(TelstockBase.API.Session.Keys.Logued));
                if (String(loguedValue) === 'true') {
                    //Validar que todas las keys que se requiere para procesar una peticion existan  y contengan información
                    if (TelstockBase.API.Request.IsKeyStorageNullOrEmpty(String(TelstockBase.API.Session.Keys.Authorization)) == false){ // &&
                        //TelstockBase.API.Request.IsKeyStorageNullOrEmpty(String(TelstockBase.API.Session.Keys.PageCurrent)) == false &&
                        //TelstockBase.API.Request.IsKeyStorageNullOrEmpty(String(TelstockBase.API.Session.Keys.PageToGo)) == false &&
                        //TelstockBase.API.Request.IsKeyStorageNullOrEmpty(String(TelstockBase.API.Session.Keys.Plataforma)) == false &&
                        //TelstockBase.API.Request.IsKeyStorageNullOrEmpty(String(TelstockBase.API.Session.Keys.UsedMenuOrFunctionsForm)) == false &&
                        //TelstockBase.API.Request.IsKeyStorageNullOrEmpty(String(TelstockBase.API.Session.Keys.Empresa)) == false &&
                        //TelstockBase.API.Request.IsKeyStorageNullOrEmpty(String(TelstockBase.API.Session.Keys.TypeForm)) == false &&
                        //TelstockBase.API.Request.IsKeyStorageNullOrEmpty(String(TelstockBase.API.Session.Keys.Logued)) == false) {

                        if (TelstockBase.API.Request.GetKeyValueFromStorage(String(TelstockBase.API.Session.Keys.UsedMenuOrFunctionsForm)) === 'true') {
                            var authorizationValue = TelstockBase.API.Request.GetKeyValueFromStorage(String(TelstockBase.API.Session.Keys.Authorization));
                            var pageCurrent = TelstockBase.API.Request.GetKeyValueFromStorage(String(TelstockBase.API.Session.Keys.PageCurrent));
                            var pageToGo = TelstockBase.API.Request.GetKeyValueFromStorage(String(TelstockBase.API.Session.Keys.PageToGo));
                            var plataforma = TelstockBase.API.Request.GetKeyValueFromStorage(String(TelstockBase.API.Session.Keys.Plataforma));
                            var empresa = TelstockBase.API.Request.GetKeyValueFromStorage(String(TelstockBase.API.Session.Keys.Empresa));

                            if (TelstockBase.Security.Regex.Expressions.Common.IsGuidValue(authorizationValue) === true &&
                                TelstockBase.Security.Regex.Expressions.Common.ExtensionFile(pageCurrent, "html") === true &&
                                TelstockBase.Security.Regex.Expressions.Common.ExtensionFile(pageToGo, "html") === true &&
                                TelstockBase.Security.Regex.Expressions.Common.Numbers(plataforma) === true &&
                                TelstockBase.Security.Regex.Expressions.Common.Numbers(empresa) === true)
                            {
                                objValidateResult.IsSessionValid = true;

                            }
                            else {
                                objValidateResult.IsSessionValid = false;
                                objValidateResult.TypeInvalidSession = parseInt(TelstockBase.API.Codes.TypeInvalidSession.KeysInvalidFormat);
                            }
                        }
                        else {
                            objValidateResult.IsSessionValid = false;
                            objValidateResult.TypeInvalidSession = parseInt(TelstockBase.API.Codes.TypeInvalidSession.SessionNotCorrectSecuence);
                        }
                    }
                    else {
                        objValidateResult.IsSessionValid = false;
                        objValidateResult.TypeInvalidSession = parseInt(TelstockBase.API.Codes.TypeInvalidSession.KeysNullOrEmpty);
                    }
                }
                else {
                    objValidateResult.IsSessionValid = false;
                    objValidateResult.TypeInvalidSession = parseInt(TelstockBase.API.Codes.TypeInvalidSession.NotLogued);
                }

                return objValidateResult;
            },
            //Realiza el proceso de abandono de sessión cuando no es válida para su procesamiento [TelstockBase.API.Codes.TypeInvalidSession]
            Abandon: function (TypeInvalidSession) {
                /*
                Criterio de abandono de sesión [ Darse los siguiente escenarios]:
                1.- Que el usuario trate de acceder a la página sin loguearse.
                2.- Que el usuario este logueado pero no entre a esta página en una secuencia lógica de menú-recurso, es decir que entre desde la barra de navegación.
                3.- Que el usuario altere el las key de sesión de navegador eliminandolas limpiandoles el valor.
                4.- Que el usuario altere el valor y el formato de las key session.
                */
                switch (parseInt(TypeInvalidSession)) {
                    case parseInt(TelstockBase.API.Codes.TypeInvalidSession.NotLogued):
                        TelstockBase.API.Session.Clear(String(TelstockBase.Application.UrlDefaultPages.LogIn));
                        break;
                    case parseInt(TelstockBase.API.Codes.TypeInvalidSession.SessionNotCorrectSecuence):
                        TelstockBase.API.ErrorMessages.InvalidSession.SessionNotCorrectSecuence();
                        break;
                    case parseInt(TelstockBase.API.Codes.TypeInvalidSession.KeysNullOrEmpty):
                        TelstockBase.API.ErrorMessages.InvalidSession.KeysNullOrEmpty();
                        break;
                    case parseInt(TelstockBase.API.Codes.TypeInvalidSession.KeysInvalidFormat):
                        TelstockBase.API.ErrorMessages.InvalidSession.KeysInvalidFormat();
                        break;
                    default:
                        TelstockBase.API.ErrorMessages.InvalidSession.Default();
                        break;
                }
            },
            //Reestablece keys de sesión para el procesamiento de una nueva solicitud.
            RestartSession: function (pageCurrentValue, pageToGo, usedMenuOrFunctions, redirectoToPageToGo, dataForm) {
                sessionStorage.setItem(TelstockBase.API.Session.Keys.PageCurrent, pageCurrentValue);
                sessionStorage.setItem(TelstockBase.API.Session.Keys.PageToGo, pageToGo);
                sessionStorage.setItem(TelstockBase.API.Session.Keys.UsedMenuOrFunctionsForm, usedMenuOrFunctions);
                sessionStorage.setItem(TelstockBase.API.Session.Keys.CurrentId, null);
                if (typeof (dataForm) != "undefined") {
                    sessionStorage.setItem(String(TelstockBase.API.Session.Keys.DataForm), (typeof (dataForm) === "undefined") ? null : JSON.stringify(dataForm));
                }
                if (Boolean(redirectoToPageToGo) === true) {
                    window.location.href = pageToGo;
                }
            },
            //Reestablece un key de sessión especificado
            RestartSessionKey: function (keySession, value) {
                sessionStorage.setItem(keySession, value);
            },
            //Crea una instancia de un objeto de validación de sesión
            ValidateResult: function (isValid, typeInvalidSession) {
                this.IsSessionValid = isValid;
                this.TypeInvalidSession = typeInvalidSession;
            },
            //Establece los permisos de la sessión actual en el screen principal
            Permisos: {
                PermisosForm: function (ArrayPermisos, ArrayItemPermiso, ArrayItemPermisoCustom) {
                    if (ArrayPermisos instanceof Array) {
                        if (typeof (ArrayPermisos) !== 'undefined') {
                            if (ArrayPermisos.length > 0) {
                                if (ArrayItemPermiso instanceof Array) {
                                    if (typeof (ArrayItemPermiso) !== 'undefined') {
                                        if (ArrayItemPermiso.length > 0) {
                                            //Crea los elementos que son botones Guardar, Editar, Eliminar.
                                            for (var iItemPermiso = 0; iItemPermiso < ArrayItemPermiso.length; iItemPermiso++) {
                                                var Existe = $.grep(ArrayPermisos, function (e) { return parseInt(e.PermisoApp) === parseInt(ArrayItemPermiso[iItemPermiso].Permiso) });
                                                if (Existe.length > 0) {
                                                    $("#" + ArrayItemPermiso[iItemPermiso].Content).append('<button class="' + ArrayItemPermiso[iItemPermiso].ClassCss + '" onclick="' + ArrayItemPermiso[iItemPermiso].OnClickFunction + '" >'
                                                                                                              + '<i class="' + ArrayItemPermiso[iItemPermiso].Icono + '"></i>' + ArrayItemPermiso[iItemPermiso].TextControl
                                                                                                          + '</button>');
                                                }
                                            }
                                        }
                                    } else {
                                        console.info("ArrayItemPermiso es indefinido");
                                    }
                                }


                                if (ArrayItemPermisoCustom instanceof Array) {
                                    if (typeof (ArrayItemPermisoCustom) !== 'undefined') {
                                        if (ArrayItemPermisoCustom.length > 0) {
                                            //Crear los elementos personalidos.
                                            for (var iItemPermiso = 0; iItemPermiso < ArrayItemPermisoCustom.length; iItemPermiso++) {
                                                var Existe = $.grep(ArrayPermisos, function (e) { return parseInt(e.PermisoApp) === parseInt(ArrayItemPermisoCustom[iItemPermiso].Permiso) });
                                                if (Existe.length > 0) {
                                                    $("#" + ArrayItemPermisoCustom[iItemPermiso].Content).append(ArrayItemPermisoCustom[iItemPermiso].Html);
                                                }
                                            }
                                        }
                                    }
                                }

                                //Control Estatus
                                var ExistePermisoCambiarStatus = $.grep(ArrayPermisos, function (e) { return parseInt(e.PermisoApp) === parseInt(TelstockBase.API.Codes.Permisos.CambiarStatus) });

                                if (parseInt(ExistePermisoCambiarStatus.length) === 0) {
                                    $("#page-div-switch-control-status").hide();
                                    $("#page-control-chck-status").hide();
                                }

                            } else {

                                alertify.log("No cuentas con permisos para este recurso.");
                            }

                        } else {
                            console.error("ArrayPe undefined");
                        }
                    } else {
                        console.error("ArrayPe no array");
                    }


                },
                ItemPermiso: function (_Permiso, _TextControl, _Content, _ClassCss, _FunctionOnclik, _Icono) {
                    //Valor del Permiso del enum TelstockBase.API.Codes.Permisos
                    this.Permiso = _Permiso;
                    //Especifica el texto que tendra el botón.
                    this.TextControl = _TextControl;
                    //Especifica el Id donde se dibujara el control.
                    this.Content = _Content;
                    //Especifica la clase css del control.
                    this.ClassCss = _ClassCss;
                    //Especifica la función javascript que se ejecutara al dar click.
                    this.OnClickFunction = _FunctionOnclik;
                    //Especifica el icono que llevará el control.
                    this.Icono = _Icono;
                },
                ItemPermisoCustom: function (_Permiso, _Html, _Content) {
                    //Valor del Permiso del enum TelstockBase.API.Codes.Permisos
                    this.Permiso = _Permiso;
                    //Html del control.
                    this.Html = _Html;
                    //Id del contenedor donde se pintara el Control.
                    this.Content = _Content;
                }
            },
            //Ejecuta y restablece la información key de sesión DataForm [TelstockBase.Utilities.HelperStructures]
            ExecDataForm: function () {
                var dataFormValueStructureHelper = JSON.parse(TelstockBase.API.Request.GetKeyValueFromStorage(String(TelstockBase.API.Session.Keys.DataForm)));
                if (dataFormValueStructureHelper != null)
                {
                    switch (parseInt(dataFormValueStructureHelper.Code))
                    {
                        case parseInt(TelstockBase.Utilities.Codes.HelperStructures.ActionStructureHelper):
                            ////////////////////////////////////////////////////////////////////////////////////////
                            switch (parseInt(dataFormValueStructureHelper.TypeAction)) {
                                case parseInt(TelstockBase.Utilities.Codes.TypeAction.Insert):
                                    switch (parseInt(dataFormValueStructureHelper.StatusAction)) {
                                        case parseInt(TelstockBase.Utilities.Codes.StatusAction.Ok):
                                            alertify.success(dataFormValueStructureHelper.Mensaje);
                                            break;
                                        case parseInt(TelstockBase.Utilities.Codes.StatusAction.Error):
                                            alertify.error(dataFormValueStructureHelper.Mensaje);
                                            break;
                                    }
                                    break;

                                case parseInt(TelstockBase.Utilities.Codes.TypeAction.Update):
                                    switch (parseInt(dataFormValueStructureHelper.StatusAction)) {
                                        case parseInt(TelstockBase.Utilities.Codes.StatusAction.Ok):
                                            alertify.success(dataFormValueStructureHelper.Mensaje);
                                            break;
                                        case parseInt(TelstockBase.Utilities.Codes.StatusAction.Error):
                                            alertify.error(dataFormValueStructureHelper.Mensaje);
                                            break;
                                    }
                                    break;

                                case parseInt(TelstockBase.Utilities.Codes.TypeAction.Delete):
                                    switch (parseInt(dataFormValueStructureHelper.StatusAction)) {
                                        case parseInt(TelstockBase.Utilities.Codes.StatusAction.Ok):
                                            alertify.success(dataFormValueStructureHelper.Mensaje);
                                            break;
                                        case parseInt(TelstockBase.Utilities.Codes.StatusAction.Error):
                                            alertify.error(dataFormValueStructureHelper.Mensaje);
                                            break;
                                    }
                                    break;
                            }
                            ////////////////////////////////////////////////////////////////////////////////////////

                            break;


                            ////////////////////////////////////////////////////////////////////////////////////////


                        case parseInt(TelstockBase.Utilities.Codes.HelperStructures.ActionStructureResponseService):
                            alertify.success(dataFormValueStructureHelper.Mensaje);
                            break;
                            ////////////////////////////////////////////////////////////////////////////////////////

                        case parseInt(TelstockBase.Utilities.Codes.HelperStructures.ActionStructureInvalidSessionHelper):
                            alertify.success(dataFormValueStructureHelper.Mensaje);
                            break;

                        default:
                            console.log("Code Helper not found");
                            break;
                    }

                   TelstockBase.API.Session.RestartSessionKey(TelstockBase.API.Session.Keys.DataForm, null);
                }

            },
        },
        Codes: {
            TypeForm: {
                Default: 0,
                Nuevo: 1,
                Edicion: 2,
                Listado: 3
            },
            TipoConsulta: {
                All: 0,
                ById: 1
            },
            Status: {
                Todos: 0,
                Activo: 1,
                Inactivo: 2,
                Eliminado: 3
            },
            TypeInvalidSession: {
                //Secuencia no lógica de menú-recurso
                SessionNotCorrectSecuence: 2,
                //Keys existentes vacias o nullas
                KeysNullOrEmpty: 3,
                //Keys sin el formato correcto
                KeysInvalidFormat: 4,
                //No se logueo
                NotLogued: 5
            },
            Permisos: {
                Consultar: 1,
                Crear: 2,
                Editar: 3,
                CambiarStatus: 4,
                Eliminar: 5,
                Clonar: 6,
                Exportar: 7,
                CargaMasiva: 8,
                DescargarLayout: 9,
                Limpiar: 10,
                Salir: 11
            },
            PermisosListado: {
                ArrayPermisosListado: [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11
                ],
                Properties: {
                    Consultar: {
                        Id: 1,
                        Attribute: 'Consultar'
                    },
                    Crear: {
                        Id: 2,
                        Attribute: 'btnCrear'
                    },
                    Editar: {
                        Id: 3,
                        Attribute: 'Editar'
                    },
                    CambiarStatus: {
                        Id: 4,
                    },
                    Eliminar: {
                        Id: 5,
                        Attribute: 'Eliminar'
                    },
                    Clonar: {
                        Id: 6,
                        Attribute: 'Clonar'
                    },
                    Exportar: {
                        Id: 7,
                    },
                    CargaMasiva: {
                        Id: 8,
                    },
                    DescargarLayout: {
                        Id: 9,
                    },
                    Limpiar: {
                        Id: 10,
                    },
                    Salir: {
                        Id: 11
                    }
                }
            }
        },
        ErrorMessages: {
            InvalidSession: {
                //Key secuencia incorrecta de acceso a recurso
                SessionNotCorrectSecuence: function () {
                    alertify.alert("Secuencia inválida de acceso, utilice los elementos que se presentan en cada recurso para navegar en la aplicación ", function () {
                        var mensaje = new TelstockBase.Utilities.HelperStructures.ActionStructureInvalidSessionHelper();
                        mensaje.Code = TelstockBase.Utilities.Codes.HelperStructures.ActionStructureInvalidSessionHelper;
                        mensaje.Mensaje = "Evite estas alertas haciendo uso del menú de la aplicación.";
                        sessionStorage.setItem(TelstockBase.API.Session.Keys.DataForm, JSON.stringify(mensaje));
                        sessionStorage.setItem(TelstockBase.API.Session.Keys.UsedMenuOrFunctionsForm, 'true');
                        window.location.href = TelstockBase.Application.UrlDefaultPages.Home;
                    });
                },
                //Keys existentes vacias o nullas
                KeysNullOrEmpty: function () {
                    alertify.alert("Solicitud inválida, esto es debido a que la solicitud no cuenta con los parametros necesarios para su procesamiento, por seguridad deberá autenticarse nuevamente. ", function () {
                        TelstockBase.API.Session.Clear(TelstockBase.Application.UrlDefaultPages.LogIn);
                    });
                },
                //Keys sin el formato correcto
                KeysInvalidFormat: function () {
                    alertify.alert("Solicitud inválida, esto es debido a que los parametros necesarios para la ejecución han sido alterados, por seguridad deberá autenticarse nuevamente. ", function () {
                        TelstockBase.API.Session.Clear(TelstockBase.Application.UrlDefaultPages.LogIn);
                    });
                },
                //Default
                Default: function () {
                    alertify.alert("Solicitud inválida, por seguridad deberá autenticarse nuevamente. ", function () {
                        TelstockBase.API.Session.Clear(TelstockBase.Application.UrlDefaultPages.LogIn);
                    });
                }
            },
            ResponseService: {
                //Proporciona una colección  de Promps que se utilizan como mensajes de alerta al usuario [Req. ser invocado por ResponseMessageByResponseObj, ResponseMessageByResponseCode ]
                PrompsResponseCodes: {
                    Unauthorized: function () {
                        alertify.alert("El tiempo de sesión ha expirado, Necesita autenticarse nuevamente para acceder al recurso que ha solicitado. ", function () {
                            TelstockBase.API.Session.Clear();
                        });
                    },
                    BadRequest: function (msg) {
                        alertify.alert("La información del formulario que ha enviado contiene datos inválidos ", function () {
                            var auxMensaje = (typeof (msg) !== "undefined") ? msg : "Verifique que la información del formulario se válida antes de enviarla.";
                            alertify.log(auxMensaje);
                        });
                    },
                    Forbidden: function (msg) {
                        alertify.alert("Solicitud Incorrecta", function () {
                            var auxMensaje = (typeof (msg) !== "undefined") ? msg : "Estamos detectado anomalias en su sesión, por seguridad en la próxima incidencia su cuenta quedara bloqueada ";
                            alertify.error(auxMensaje);
                        });
                    },
                    MethodNotAllowed: function (msg) {
                        alertify.alert("No cuenta con los permisos necesarios para ejecutar la acción que ha solicitado ", function () {
                            $('#content').addClass('hide');
                            var auxMensaje = (typeof (msg) !== "undefined") ? msg : "Contacte a su administrador para obtener mas información sobre su acceso.";
                            var mensaje = new TelstockBase.Utilities.HelperStructures.ActionStructureResponseService();
                            mensaje.Mensaje = auxMensaje;
                            TelstockBase.API.Session.RestartSessionKey(TelstockBase.API.Session.Keys.DataForm, JSON.stringify(mensaje));
                            TelstockBase.API.Session.RestartSessionKey(TelstockBase.API.Session.Keys.UsedMenuOrFunctionsForm, 'true');
                            window.location.href = TelstockBase.Application.UrlDefaultPages.Home;
                        });
                    },
                    InternalServerError: function () {
                        alertify.alert("Imposible ejecutar la solicitud, estamos experimentado problemas en nuestro servicio, intente realizarla más tarde .", function () {
                            //Redirigir a error.
                        });
                    },
                    Default: function () {
                        alertify.alert("¡¡Error!! Estamos experimentado difucultades técnicas, intente acceder más tarde.", function () {
                            $('#content').addClass('hide');
                            TelstockBase.API.Session.Clear();
                        });
                    },
                    Conflict: function (msg) {
                        var auxMensaje = (typeof (msg) !== "undefined") ? msg : "Ya existe un registro con la información que ha especificado";
                        alertify.log(auxMensaje);
                    }
                },
                //Proporciona un método de respuesta al cliente en base un obj de respuesta del servidor.
                ResponseMessageByResponseObj: function (objResponse) {
                    if (typeof (objResponse) !== "undefined")
                    {
                        if (objResponse != null)
                        {
                            try {
                                var objRes = JSON.parse(objResponse.responseJSON.Message);
                                switch (parseInt(objRes.ResponseCode)) {
                                    case parseInt(TelstockBase.Codes.Server.Unauthorized):
                                        TelstockBase.API.ErrorMessages.ResponseService.PrompsResponseCodes.Unauthorized();
                                        break;
                                    case parseInt(TelstockBase.Codes.Server.BadRequest):
                                        TelstockBase.API.ErrorMessages.ResponseService.PrompsResponseCodes.BadRequest();
                                        break;
                                    case parseInt(TelstockBase.Codes.Server.Forbidden):
                                        TelstockBase.API.ErrorMessages.ResponseService.PrompsResponseCodes.Forbidden();
                                        break;
                                    case parseInt(TelstockBase.Codes.Server.MethodNotAllowed):
                                        TelstockBase.API.ErrorMessages.ResponseService.PrompsResponseCodes.MethodNotAllowed();
                                        break;
                                    case parseInt(TelstockBase.Codes.Server.InternalServerError):
                                        TelstockBase.API.ErrorMessages.ResponseService.PrompsResponseCodes.InternalServerError();
                                        break;
                                    case parseInt(TelstockBase.Codes.Server.Conflict):
                                        TelstockBase.API.ErrorMessages.ResponseService.PrompsResponseCodes.Conflict();
                                        break;
                                    default:
                                        //[500 > +]
                                        TelstockBase.API.ErrorMessages.ResponseService.PrompsResponseCodes.Default();
                                        break;
                                }
                            } catch (e)
                            {
                                //Err+>500
                                TelstockBase.API.ErrorMessages.ResponseService.PrompsResponseCodes.Default();
                            }
                        }
                    }
                },
                //Proporciona un método de respuesta al cliente en base a un código de respuesta recibido.
                ResponseMessageByResponseCode: function (responseCode) {
                    if (typeof (responseCode) !== "undefined") {
                        if (responseCode != null) {
                            try
                            {  
                                switch (parseInt(responseCode))
                                {
                                    case parseInt(TelstockBase.Codes.Server.Unauthorized):
                                        TelstockBase.API.ErrorMessages.ResponseService.PrompsResponseCodes.Unauthorized();
                                        break;
                                    case parseInt(TelstockBase.Codes.Server.BadRequest):
                                        TelstockBase.API.ErrorMessages.ResponseService.PrompsResponseCodes.BadRequest();
                                        break;
                                    case parseInt(TelstockBase.Codes.Server.Forbidden):
                                        TelstockBase.API.ErrorMessages.ResponseService.PrompsResponseCodes.Forbidden();
                                        break;
                                    case parseInt(TelstockBase.Codes.Server.MethodNotAllowed):
                                        TelstockBase.API.ErrorMessages.ResponseService.PrompsResponseCodes.MethodNotAllowed();
                                        break;
                                    case parseInt(TelstockBase.Codes.Server.Conflict):
                                        TelstockBase.API.ErrorMessages.ResponseService.PrompsResponseCodes.Conflict();
                                        break;
                                    case parseInt(TelstockBase.Codes.Server.InternalServerError):
                                        TelstockBase.API.ErrorMessages.ResponseService.PrompsResponseCodes.InternalServerError();
                                        break;
                                    default:
                                        //[500 > +]
                                        TelstockBase.API.ErrorMessages.ResponseService.PrompsResponseCodes.Default();
                                        break;
                                }
                            } catch (e) {
                                console.error("PData>Err");
                            }
                        }
                    }
                },
            },
        }
    }

    //Application***********//
    this.Application = {
        //Default pages.
        UrlDefaultPages: {
            LogIn: 'LogIn.html',
            Home: 'Home.html'
        },
        Modulos: {
            Home: {
                Name: 'BIENVENIDO',
                CssClass: 'modulo-home',
                Pages: [],
            },
            Configuracion: {
                Name: 'CONFIGURACIÓN',
                CssClass: 'modulo-configuracion',
                Pages: [
                    {
                        Name: "admonMoviles.html",
                        Allow: ["", "", ""]
                    },
                    {
                        Name: "altaMoviles.html",
                        Allow: ["", "", ""]
                    },
                    {
                        Name: "admonRoles.html",
                        Allow: ["","",""]
                    },
                    {
                        Name: "altaRoles.html",
                        Allow: ["","",""]
                    },
                    {
                        Name: "admonUsuarios.html",
                        Allow: ["","",""]
                    },
                    {
                        Name: "altaUsuario.html",
                        Allow: ["","",""]
                    }
                ],
            },
        }
    };

}).apply(TelstockBase);


