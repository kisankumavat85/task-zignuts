import CryptoJS from "crypto-js";

const secretPassphrase = process.env.REACT_APP_PASS_KEY;

export const encryptData = (data) => {
  const result = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    secretPassphrase
  ).toString();

  return result;
};

export const decryptData = (data) => {
  const bytes = CryptoJS.AES.decrypt(data, secretPassphrase);
  const result = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  return result;
};
