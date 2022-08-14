# hz-school
杭州学校数据

1. 新建 2022 年份目录，并进入
2. 获取所有学校列表 list.json 并存放至 2022
3. node index.js 获取
  * 学校位置列表
  * 学校明细数据
  * 学区列表名称
4. 跑 public/convert.html
  * 将小区转经纬度


* http://m.creditsailing.com/XiaoXuePaiMing/718248.html
* https://rxyj.hzedu.gov.cn/
* http://api.map.baidu.com/lbsapi/getpoint/index.html
* https://hangzhou.anjuke.com/

# Online

https://china-data.github.io/hz-school/public/bmap.html

# HOW_TO

* SVG to DataUri: https://heyallan.github.io/svg-to-data-uri/
* Icon: https://www.iconfont.cn/search/index?searchType=icon&q=%E5%AE%9A%E4%BD%8D&page=2&fromCollection=1&fills=&tag=complex
* Baidu
  * http://api.map.baidu.com/lbsapi/getpoint/index.html
  
  
  
<div style="display: none">


* sqllite: https://www.sqlite.org/download.html
  * https://www.sqlite.org/cli.html

```sh
sqlite> create table tbl1(one text, two int);
sqlite> insert into tbl1 values('hello!',10);
sqlite> insert into tbl1 values('goodbye', 20);
sqlite> select * from tbl1;
hello!|10
goodbye|20
sqlite>
sqllite> .save test.db
```

```sh
sqlite> .open test.db
sqlite> .tables
tbl1
sqlite> select * from tbl1;
hello!|10
goodbye|20
```

</div>
