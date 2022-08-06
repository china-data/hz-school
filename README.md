# hz-school
杭州学校数据


# HOW_TO

* SVG to DataUri: https://heyallan.github.io/svg-to-data-uri/
* Icon: https://www.iconfont.cn/search/index?searchType=icon&q=%E5%AE%9A%E4%BD%8D&page=2&fromCollection=1&fills=&tag=complex
* Baidu
  * http://api.map.baidu.com/lbsapi/getpoint/index.html
  * 
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