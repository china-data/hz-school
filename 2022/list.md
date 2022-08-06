

# Source

Data come from: https://rxyj.hzedu.gov.cn/#/school

```sh
fetch("https://rxyj.hzedu.gov.cn/hzjyAppServer/api/AppSchoolInfo/custom/paginate", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7,pt;q=0.6",
    "cache-control": "no-cache",
    "content-type": "application/json;charset=UTF-8",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": "https://rxyj.hzedu.gov.cn/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"expressions\":{\"active\":{\"op\":\"eq\",\"value\":\"1\"},\"schoolType\":{\"op\":\"in\",\"value\":[2,5,6]},\"schoolName\":{\"op\":\"lk\",\"value\":\"\"},\"appXcFlag\":{\"op\":\"in\",\"value\":[\"0\",\"1\"]},\"xqbsm\":{\"op\":\"lk\",\"value\":\"\"},\"hideFlag\":{\"column\":\"hideFlag\",\"op\":\"eq\",\"value\":\"true\"}},\"start\":0,\"limit\":1000,\"orderByExpressions\":[{\"column\":\"id\",\"orderByType\":\"desc\"}]}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
```