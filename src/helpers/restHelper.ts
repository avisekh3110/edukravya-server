export class Info {
  code: number;
  message: string;
  type: string;

  constructor(code: number, message: string, type: string) {
    this.code = code;
    this.message = message;
    this.type = type;
  }

  getArray(): {
    code: number;
    message: string;
    type: string;
  } {
    return { code: this.code, message: this.message, type: this.type };
  }
  getCode(): number {
    return this.code;
  }
}

interface ResponseTypesInterface {
  _ERROR_: string;
  _INFO_: string;
}
export const ResponseTypes: ResponseTypesInterface = {
  _ERROR_: "ERROR",
  _INFO_: "INFO",
};

export const compareParams: (
  paramsReq: Array<string>,
  reqBody: Object
) => String[] = (paramsReq: Array<string>, reqBody: Object): String[] => {
  let errors: Array<String> = [];
  const keys: string[] = Object.keys(reqBody);
  paramsReq.forEach((val: string): void => {
    if (!keys.includes(val)) errors.push(val);
  });
  return errors;
};
