/**
 * Created by Administrator on 16-3-9.
 */
var game=[
    {chanceText1:"消费新体验套餐",chanceText2:"龙卡云闪付，掌上“芯”生活，",chanceText3:"建行邀您感受最新潮的消费体验！"},
    {chanceText1:"便捷汇款套餐",chanceText2:"无处不省！",chanceText3:"建行“结算通”满足您支付结算、投资理财、贷款融资等全方位、多层次金融需求。"},
    {chanceText1:"荷包满满套餐",chanceText2:"三免•六赠•九尊享",chanceText3:"建行“薪享通”为您提供一站式代发薪金服务"},
    {chanceText1:"出行无忧套餐",chanceText2:"随时随地，出行无忧！",chanceText3:"龙行无忧保险计划保障您出行安全,手机银行让您随时随地享受全面金融服务"},
    {chanceText1:"金猴送福套餐",chanceText2:"猴年压岁，俺老孙来也！",chanceText3:"建行独家发售“猴年压岁金”，来看悟空72变！"},
    {chanceText1:"温暖归乡套餐",chanceText2:"归乡暖暖，情谊满满",chanceText3:"建行惠福龙卡转账优惠、存款增值，让您归乡途中温暖满满。"}
]
var gameText={}

$(window).ready(function (){
    //点击抢红包显示活动页面
    $('.index_hongbao_btn').bind('click',function(){
        $('.play_bg').show();
        redboxFly();
    });
    //点击X关闭返回主页面
    $('.play_back').bind('click',function(){
        $('.play_bg').hide();
        redboxinit();
    });
    //点击玩法介绍显示
    $('.index_huodong_btn').bind('click',function(){
        $('.rule_bg').show();
    })
    //点击X关闭返回主页面
    $('.rule_back').bind('click',function(){
        $('.rule_bg').hide();
    });
    //点击已抢到显示中奖奖品
    $('.index_rule_btn').bind('click',function(){
        $('.huodong_bg').show();
    })
    //点击X关闭返回主页面
    $('.huodong_back').bind('click',function(){
        $('.huodong_bg').hide();
    });
    $('.red_close').bind('click',function(){
        $('.red_bg').hide();
        $('.red_mask').hide();
    });
    //点击不同的图片显示不同的文字
    $('.play_hongbao_btn').bind('click',function(){
        $('.red_bg').show();
        $('.red_mask').show();
        var btnState=$(this).attr('value');
        gameText=game[btnState];
        $('.red_top').text(gameText.chanceText1);
        $('.red_title').text(gameText.chanceText2);
        $('.red_content').text(gameText.chanceText3);
    })
    //抢红包点击
    $('.red_hongbao').bind('click',function(){
        $('.prize_bg').show();
        $('.red_bg').hide();
    })
    $('.prize_hongbao,.prize_close').bind('click',function(){
        $('.prize_bg').hide();
        $('.red_mask').hide();
        $('.play_bg').show();
    })
    $('.prize_fenxiang').bind('click',function(){
        $('.share_bg').show();
    })
    $('.share_bg').bind('click',function(){
        $('.share_bg').hide();
        $('.prize_bg').show();
    })
})
function redboxFly(){
    $(".play_bg>ul").animate({
        top:265+"px"
    },1000)
}
function redboxinit(){
    $(".play_bg>ul").css("top","1136px")
}