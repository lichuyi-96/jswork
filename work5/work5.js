//9x9的空表，
 str1 = "<table border='1'>"
 for(let i=9;i>0;--i){
     str1 += "<tr>"
     for(var j=9;j>0;--j){
         str1 += "<td>&nbsp;</td>"
     }
     str1 += "</tr>"
 }
 str1 += "</table>"
 document.getElementById('table1').innerHTML = str1
        

//倒九九乘法空表
str = '<table border="1">'
for(let i=9;i>0;--i){
    str += '<tr>'
    for(var j=i;j>0;--j){
        str +='<td>&nbsp;</td>'
    }
    str += '<tr>'
}
str +='</table>'
document.getElementById('table2').innerHTML = str

//倒九九乘法表
str3 = "<table border='1'>"
for(let i=9;i>0;--i){
    str3 += "<tr>"
    for(let j=i;j>0;--j){
     str3 += "<td>" + j + "*" + i + "=" + (j*i) + "</td>"   
    }    
    str3 += "</tr>"
}
document.getElementById('table3').innerHTML = str3

