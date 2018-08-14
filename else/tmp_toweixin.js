function toweixin(){
   // window.location.href = "weixin://dl/business/?ticket=t9ba684a4097dbc0782a7242ad851c346";
    //window.open("weixin://dl/business/?ticket=t9ba684a4097dbc0782a7242ad851c346", "_self");
    if(!/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){ 
            if(/ baiduboxapp/i.test(navigator.userAgent)){ 
                window.location.replace('bdbox://utils?action=sendIntent&minver=7.4&params=%7B%22intent%22%3A%22weixin://dl/business/?ticket=t9ba684a4097dbc0782a7242ad851c346%23wechat_redirect%23Intent%3Bend%22%7D');
            }else{ 
                window.location.replace('weixin://dl/business/?ticket=t9ba684a4097dbc0782a7242ad851c346#wechat_redirect');
            }
        }else{ 
            window.location.replace('weixin://dl/business/?ticket=t9ba684a4097dbc0782a7242ad851c346#wechat_redirect');        
        }

}