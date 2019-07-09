<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,height=device-height,inital-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <title>Title</title>
  <style>
    *{
      margin: 0;
      padding: 0;
    }
    .zhifu{
      width:100%;
      height: 100%;
      position: fixed;
      z-index: 99999;
      top:0;
      left:0;
      background-color: rgba(0,0,0,0.1);
    }
    .zhifu_com{
      position: absolute;
      bottom:0;
      margin:0 3%;
      width:94%;
      height:300px;
      padding:15px 20px;
      box-sizing: border-box;
      color: #fff;
      font-weight: 200;
      font-family: "Helvetica Neue Light", "HelveticaNeue-Light", "Helvetica Neue", Calibri, Helvetica, Arial;
    }
    li{
      list-style: none;
      line-height: 58px;
      vertical-align: middle;
      font-size: 17px;
      color:rgb(112,112,112);
    }
    span{
      display: inline-block;
    }
    .one{
      background: url("http://paynew.pokerjoin.com/images/thirdpay/zfb.png") no-repeat;
      background-size: 100% 100%;
      width:40px;
      height:40px;
      vertical-align: middle;
      margin-right: 5px;
    }
    .two{
      background: url("http://paynew.pokerjoin.com/images/thirdpay/tj.png") no-repeat;
      width:58px;
      height:32px;
      vertical-align: middle;background-size: 100% 100%;
      width:29px;
      height:16px;

    }
    .therr{
      background: url("http://paynew.pokerjoin.com/images/thirdpay/wx.png") no-repeat;
      background-size: 100% 100%;
      width:40px;
      height:40px;
      vertical-align: middle;
      margin-right: 5px;
    }
    .four{
      background: url("http://paynew.pokerjoin.com/images/thirdpay/yhk.png") no-repeat;
      background-size: 100% 100%;
      width:40px;
      height:40px;
      vertical-align: middle;
      margin-right: 5px;
    }
    .com_one{
      background-color: rgb(13,181,1);
      border-radius: 5px 5px 0 0;
      position: relative;
      padding-top:10px;
    }
    .list{
      background: url("http://paynew.pokerjoin.com/images/thirdpay/yq.png") no-repeat;
      background-size: 100% 100%;
      width:40px;
      height:40px;
      vertical-align: middle;
      float: right;
    }
    .com_two{
      background-color: #fff;
      border-radius: 5px 5px 0 0;
      color: #000;
      padding: 0 15px ;
    }
    .monny{
      margin: 0 auto;
      background-color: rgb(13,181,1);
      width:100%;
      height:40px;
      text-align: center;
      line-height: 40px;
      color: #fff;
      border-radius: 10px;
      font-size:20px;
    }
    .fy{
      color: #ccc;
      margin:5px 0;
      font-size: 14px;
      text-align: center;
    }
    .sc{
      background: url("http://paynew.pokerjoin.com/images/thirdpay/sc.png") no-repeat;
      background-size: 100% 100%;
      width:30px;
      height:30px;
      position: absolute;
      right:0;
      top:0;
    }
    .com_one p{
      font-size: 16px;
      text-align: center;
      height:35px;
      line-height: 35px;
    }
    input.ones{
      background: url("http://paynew.pokerjoin.com/images/thirdpay/xz.png") no-repeat;
      background-size: 100% 100%;
    }
    input{
      outline:none;
      border: 0px;
    }
  </style>
</head>
<body>
<div class="zhifu">
  <div class="zhifu_com">
  <div class="com_one">
    <h2 class="sc" onclick="window.apay.onMyClose();"></h2>
    <p class="jd"><?php echo $vcode ?></p>
    <p>需支付 <span style="font-size: 24px" class="qian"><?php echo $money ?></span> </p>
  </div>
    <div class="com_two">
      <ul>
        <li class="father"><span class="therr"></span>微信支付<span class="two"></span><input class="list ones" name="wx" disabled></li>
        <li class="father"><span class="one"></span> 支付宝 <input class="list" name="zfb" disabled></li>
      </ul>
      <p class="monny">去支付</p>
      <p class="fy"><?php echo $desc ?></span></p>
    </div>
  </div>
</div>
<script src="http://paynew.pokerjoin.com/js/jquery-1.8.0.min.js"></script>
<script>
  let canApply = true
  // 获得链接指定参数
   function getQueryString(name) {
       var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
       var r = window.location.search.substr(1).match(reg);
       if (r != null) {
           return unescape(r[2]);
       }
       return null;
  };
   var userid = getQueryString("userid");
   var productId = getQueryString("productId");
   var channelId = getQueryString("channelId");
  console.log(productId);
  console.log(userid);
  console.log(channelId);
  
  $(".father").click(function(){
    $(this).children("input.list").addClass("ones").parent().siblings().find("input.list").removeClass("ones");
  });

  $(".monny").click(function(){
    if (!canApply) { return }
    canApply = false
    var payment=$("input.ones").attr("name");
    localStorage.setItem('lastChoose', payment)
    window.location.href= "<?php echo $payurl ?>&payment="+payment;
    setTimeout(() => {
      canApply = true
    }, 3000);
  });

  const getPayType = localStorage.getItem('lastChoose')
  if (getPayType === 'wx') {
    $('input[name=wx]').addClass("ones");
    $('input[name=zfb]').removeClass("ones");
  } else if (getPayType === 'zfb') {
    $('input[name=zfb]').addClass("ones");
    $('input[name=wx]').removeClass("ones");
  }

</script>
</body>
</html>