import {
  BookDemoRequestPayloadType,
  BookDemoRequestResponseType,
} from "../../typings/bookDemoReqest.types";

// need to replace after api creation
export const bookDemoRequest = async (
  payload: BookDemoRequestPayloadType
): Promise<BookDemoRequestResponseType> => {
  // const response = await fetch("http://localhost:3004/pramaan/api/v1/platform/demo-request/booking",{
  //     method : 'POST',
  //     headers : {'Content-Type':'application/json'},
  //     body : JSON.stringify(payload)
  // });
  // const jsonResponse = await response.json()
  // if (jsonResponse.message) {
  //   return jsonResponse;
  // }
  // return {message: "Failure"}

  console.log(payload);
  return { message: "Success" };
};
