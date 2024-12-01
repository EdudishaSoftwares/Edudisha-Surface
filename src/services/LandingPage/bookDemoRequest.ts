import {
  BookDemoRequestPayloadType,
  BookDemoRequestResponseType,
} from "../../typings/bookDemoReqest.types";

// need to replace after api creation
export const bookDemoRequest = async (
  payload: BookDemoRequestPayloadType
): Promise<BookDemoRequestResponseType> => {
  // let response = await fetch("book demo request api url",{
  //     method : 'POST',
  //     headers : {'Content-Type':'application/json'},
  //     body : JSON.stringify(payload)
  // });
  // response = await JSON.parse(response);
  // return response;

  console.log(payload);
  return { ok: true, errorMessage: undefined };
};
