import { tmpdir } from "os";

var inputs = document.getElementsByClassName('input');

for(var i =0;i < inputs.length - 1;++i){
    inputs[i].onblur = inputBlur;
}
function inputBlur() {
    var name = this.name;
    var val = this.value;
    var tips = this.placeholder;
    var tips_obj  = this.parentNode.nextElementSibling;

    val = val.trim();
   
    if(!val) {
        error(tips_obj,'输入框不能为空');
        return false;
    }

    var reg_mag = getRegMsg(name,tips);

    if (reg_mag['reg'].test(val)){

        success(tips_obj,reg_mag['msg']['success']);
    }else{

        error(tips_obj,reg_mag['msg']['error']);
    }
}
function getRegMsg(name,tips) {
    var reg = msg = '';
    switch (name) {
        case 'username':
            reg = /^[a-zA-Z]{4,12}$/;
            msg = {'success': '用户名输入正确','error': tips};
            break;
            case 'repwd':
                var con = document.getElementsByTagName('input')[1].value;
                reg = RegExp("^" + con + "$");
                msg = {'success': '两次密码输入正确', 'error': '两次输入密码不一致'};
                break;
                case 'tel':
                    reg = /^1[24578]\d{9}$/;
                    msg = {'success':'手机号码输入正确','error': tips};
                    break;
                    case 'tel':
                        reg  = /^1[34578]\d{9}$/;
                        msg  = {'success': '邮箱输入正确', 'error':tips};
    }
}