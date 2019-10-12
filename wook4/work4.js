document.write("<p>金字塔</P>")
let level = prompt('请输入金字塔的层数')
level = parseFloat(level)&&Number(level)
if (isNAN(level)){
    alert('金字塔层数是数字')
}
for(let i=1;i<=level;++i){
    let blank = level - i;
    for(let k=0;k<blank;++k){
        document.write('&nbsp');
    }
//打印星星
let str = i * 2 - 1
for(let j=0;j<stre;++j){
    document.write('<br>')
}
//换行
document.write('<br>')
}

let str = '<table border="1">'
for(let i=1;i<10;++i){
    //接单元格
    str += '<td>' + j + '*' + i + '=' + ( j * i ) + '</td>'
}
str += '</tr>'
//设置div的html文档内容
document.getElementById('table').innerHTML = str
