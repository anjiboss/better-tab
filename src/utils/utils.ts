import { type Stick } from "@prisma/client";

const isURL = (url: string) => {
  const urlReg =
    /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
  return urlReg.test(url);
};

// const getIcon = async (stick: Stick) => {
//   const accessToken = window.localStorage.getItem("accessToken");
//   const resp = await axios(`${import.meta.env.VITE_API_URL}/api/v1/icon/?url=${stick.url}`, {
//     headers: {
//       Authorization: "Bearer " + accessToken,
//     },
//   });
//   if (resp.data.ok) {
//     return "data:image/png;base64," + resp.data.data.base64;
//   }
//   return undefined;
// };

export { isURL };
