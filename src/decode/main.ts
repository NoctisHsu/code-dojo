
// https://ashu1227.notion.site/Auth-Decode-Encode-70ab81f64214442aa16b7841bd9eb8b5
// https://gist.github.com/siwalikm/8311cf0a287b98ef67c73c1b03b47154
// private static string Decode(string inputData, string keyVersion)
// {
//     string key = Key(keyVersion);
//     if (key.IsNullOrEmpty())
//     {
//         return null;
//     }

//     var keyAndIVCacheName = string.Format("AES-KeyVersion-{0}-keyAndIV", KeyVersion);

//     var keyAndIV = GetCache<Tuple<byte[], byte[]>>(keyAndIVCacheName, () =>
//         {
//             Rfc2898DeriveBytes rfc = new Rfc2898DeriveBytes(key, new byte[256 / 8]);
//             var aesKey = rfc.GetBytes(aes.KeySize / 8);
//             var aesIV = rfc.GetBytes(aes.BlockSize / 8);
//             return new Tuple<byte[], byte[]>(aesKey, aesIV);
//         }, 60);

//     aes.Key = keyAndIV.Item1;
//     aes.IV = keyAndIV.Item2;

//     byte[] cipherText = Convert.FromBase64String(inputData);
//     byte[] plainText = null;
//     using (MemoryStream ms = new MemoryStream())
//     {
//         try
//         {
//             using (CryptoStream cs = new CryptoStream(ms, aes.CreateDecryptor(), CryptoStreamMode.Write))
//             {
//                 cs.Write(cipherText, 0, cipherText.Length);
//             }
//         }
//         catch
//         {
//             ////無法解密
//             return null;
//         }

//         plainText = ms.ToArray();
//     }

//     string s = Encoding.Unicode.GetString(plainText);
//     return s;
// }

import crypto from 'crypto';
const rawAuth = '/R4I/oz+YFZCn2fvY9N9bXxDmckRKzGlfMLY5Ua+viSim+H7tZ2HxPUI7LlOGv8qV+CQbItl0vG7T67bq3++UHnRr/sJI5e8fZMfKvp+t+Dzp8FDkyWuOPvGe9nd6eGLIOBEsdxWXDuZRjcNn6MI2bKv3zErleM0Zlf8QZriqWmmr7qugZV/XstDKWwWHNr/1WqW/urr3j+Fw/KoINbdLaolq8u17DsPZrmaRmEHfk7VZbq/EVPdEClX8vLqWYG7DBVHSzmyVigaWJaQqW4ITGNQ4FY5nf64jlWmxOPFPdVbm8TOUP0eIQt9VFPVMQFGqsvcskz8lZKtnKrQJAc0REdSa86LXYTgYDNyMh72QFGxDBLs3Ea1ky/vivvDC7r2YLV1RgxD6PY//4H7VLmSz8/2+BBzzt/YFvMNSxLB7pKQNBYosrK8CbDNsORWoGF340e6CEtWQCTdDzDbkH0f3MN/esMC8SVJDzyY5w4YR/LyyXyU4biua/jPPQRcJgPfHiqzxfg9dPC6lr0Yn4+9QT4rG6gZEGu3AHf6fMfIfuzP/sdjBXfrKQa4PIqoNToyp957a4flS1MnVVtPCwg+Y/JGpKSAi5LApzuZplh1Km/tURS6+qJgx+G0rcQ6jWkD9Cg3Ukxu1Mrd/rKeJW3ntxcBFXxzG1tJXMgyHdWQuOBIb5XlXqtD2THEGsTfLz9d';
let password = '7167b887e6b30cbb553cdf7fdd62e602e96f9c54';
// const salt = crypto.randomBytes(32);
const salt = Buffer.from(crypto.randomBytes(32));
// const salt = crypto.pseudoRandomBytes(32);
// const salt = new ArrayBuffer(32);
// var iv = new Buffer(crypto.randomBytes(32))
// var ivstring = iv.toString('hex');
const AES_KEY_LEN = 256; // aes.KeySize / 8 where KeySize is 256
const AES_IV_LEN = 128; // aes.BlockSize / 8 where BlockSize is 128
const KEY_LEN = rawAuth.length;
const ENCODE_TYPE = "utf16le";
//const ALGORITHM = "aes-192-cbc";
const ALGORITHM = "aes-256-cbc"
// sageToDecrypt = Buffer.from(rawAuth, "base64")

const encodingUnicodeBytes = (str: string) => {
    var myBuffer = [];
    var buffer = Buffer.from(str, ENCODE_TYPE);
    for (var i = 0; i < buffer.length; i++) {
        myBuffer.push(buffer[i]);
    }
    return myBuffer;
}
// console.log(encodingUnicodeBytes(word));

const encode = ((input: string) => {
    const rfc = crypto.pbkdf2Sync(password, salt, 1000, KEY_LEN, 'sha1');
    const ENC_KEY = rfc.slice(0, AES_KEY_LEN / 8);
    const IV = rfc.slice(0, AES_IV_LEN / 8);
    console.log(ENC_KEY);
    console.log(IV);
    let cipher = crypto.createCipheriv(ALGORITHM, ENC_KEY, IV);
    return cipher.update(input, ENCODE_TYPE, 'base64') + cipher.final('base64');
});

const decode = ((encrypted: string) => {
    const rfc = crypto.pbkdf2Sync(password, salt, 1000, KEY_LEN, 'sha1');
    console.log(rfc)
    const ENC_KEY = rfc.slice(0, AES_KEY_LEN / 8);
    const IV = rfc.slice(0, AES_IV_LEN / 8);
    console.log(ENC_KEY);
    console.log(IV);
    let decipher = crypto.createDecipheriv(ALGORITHM, ENC_KEY, IV);
    return decipher.update(encrypted, 'base64', ENCODE_TYPE) + decipher.final(ENCODE_TYPE);
});
// const word = "who let the dogs out";
// const x = encode(word);
// console.log(x);
// const y = decode(x);
// console.log(y);
// ENC_KEY and IV can be generated as crypto.randomBytes(32).toString('hex');
// const testEncode = encode(JSON.stringify({ "Id": 224400, "Email": null, "FullName": null, "CountryProfileId": 1, "CountryCode": "886", "CellPhone": "0966666666", "Type": "NineYi", "OuterId": null, "OperatorUserName": "224400", "IsImpersonateUser": false, "Status": null, "IsVipMemberCellPhone": true, "SessionExpireKey": null }));
//console.log(testEncode)
//console.log(testEncode.length); // same as rawAuth
const ori = decode(rawAuth);  
// const ori = decode(testEncode);