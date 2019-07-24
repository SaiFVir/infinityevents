const Discord = require('discord.js');
const data = require('./words.json');
const bot = new Discord.Client();
const perfix = 'in';

bot.on('ready', ()=>{
    console.log('Ready !!!');
    bot.user.setActivity("SAIF",{type:"LISTENING"});
})

try{
// حاول مرة اخرى عسا وان تضبط معك
// bot.on('message', (message) =>{
//     var a = message.content.substring(perfix.length).split(" ");
//     var l18 = data["l18"];
//     //console.log(l18[message.content]);
//     var done = l18[message.content];
//     if(a[0]!=done){
//         console.log("error");
//     } else if(a[0]=done){
//         console.log(done)
//     }

// });

bot.on('message', async (message)=>{
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("`You Don't have pers!`");

    var a = message.content.substring(perfix.length).split(" ");
    var e = new Discord.RichEmbed();
    var m = message.channel;
    var mc = message.content;
    var u = 'http://i8.ae/';
    var f = Math.floor;
    var o = Math.random();
    var i;
    var l1=data["l1"],l2=data["l2"],l3=data["l3"],l4=data["l4"],l5=data["l5"],l6=data["l6"],l7=data["l7"],l8=data["l8"],
        l9=data["l9"],l10=data["l10"],l11=data["l11"],l12=data["l12"],l13=data["l13"],l14=data["l14"],l15=data["l15"],
        l16=data["l16"],l17=data["l17"],l18=data["l18"],l19=data["l19"],l20=data["l20"],l21=data["l21"],l22=data["l22"],
        l23=data["l23"],l24=data["l24"],l25=data["l25"],l26=data["l26"],l27=data["l27"],l28=data["l28"],l29=data["l29"],
        l30=data["l30"],l31=data["l31"],l32=data["l32"],l33=data["l33"],l34=data["l34"],l35=data["l35"],l36=data["l36"],
        l37=data["l37"],l38=data["l38"],l39=data["l39"],l40=data["l40"],l41=data["l41"],l42=data["l42"];

    var f1=f(o*l1.length),f2=f(o*l2.length),f3=f(o*l3.length),f4=f(o*l4.length),f5=f(o*l5.length),f6=f(o*l6.length),f7=f(o*l7.length),
        f8=f(o*l8.length),f9=f(o*l9.length),f10=f(o*l10.length),f11=f(o*l11.length),f12=f(o*l12.length),f13=f(o*l13.length),f14=f(o*l14.length),
        f15=f(o*l15.length),f16=f(o*l16.length),f17=f(o*l17.length),f18=f(o*l18.length),f19=f(o*l19.length),f20=f(o*l20.length),f21=f(o*l21.length),
        f22=f(o*l22.length),f23=f(o*l23.length),f24=f(o*l24.length),f25=f(o*l25.length),f26=f(o*l26.length),f27=f(o*l27.length),f28=f(o*l28.length),
        f29=f(o*l29.length),f30=f(o*l30.length),f31=f(o*l31.length),f32=f(o*l32.length),f33=f(o*l33.length),f34=f(o*l34.length),f35=f(o*l35.length),
        f36=f(o*l36.length),f37=f(o*l37.length),f38=f(o*l38.length),f39=f(o*l39.length),f40=f(o*l40.length),f41=f(o*l41.length),f42=f(o*l42.length);
    
    var b = ['-أسرع','-فكك','-مع-أو-ضد','-كت-تويت','-تكرار','-أغنية-سؤال','-أبيض-وأسود',
             '-تتفق','-لنفترض','-أوجد-الكـ','-بحرف-ال','-رتب-الكـ','-وصف-الكـ','-أسم-المنتج',
             '-أسم-الدولة','-النقطة-فق','-منشن-تكست','-Pubg','-المشهد-لك','-جمع-ومفرد','-أكمل-المثل',
             '-كلمة-وأغـ','-براند-وتـ','-صور-أعضاء','-كاريكتير','-English','-اللهجات','-فبركة',
             '-غير-متطابق','-كم-الساعة','-أسم-الفلتر','-أدمج-وأجب','-تضاد','-أسم-ف-غ',
             '-تساؤلات','-كم-بالمية','-أنطباعك-عن','-معنى-أسم','-أسم-الوجبة','-من-القائل','-أكمل-بِمنشن','-أسم-العا','-info-lap','-info-mob'];
    // switch(a[0]){
    //     case '-Pubg':
    //         for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){if(a[1]=mc){e.setImage(u+l18[mc]).setColor();m.sendEmbed(e);}}}
    //     }break;
    // }
    switch(a[0]){ // switch means ( cases قارين بين الـ )
        
        case '-c':
            if(!a[1]) return message.reply('Error please define sec arg');m.bulkDelete(a[1]);break;

        case '-أسرع':
            for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l1[f1]);m.sendEmbed(e);}}
        }break;
        case '-فكك':
            for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l2[f2]).setColor();m.sendEmbed(e);}}
        }break;
        case '-مع-أو-ضد':
            for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l3[f3]).setColor();m.sendEmbed(e);}}
        }break;
        case '-كت-تويت':
            for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l4[f4]).setColor();m.sendEmbed(e);}}
        }break;
        case '-تكرار':
            for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l5[f5]).setColor();m.sendEmbed(e);}}
        }break;
        case '-أغنية-سؤال':
            for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l6[f6]).setColor();m.sendEmbed(e);}}
        }break;
        case '-أبيض-وأسود':
            for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l7[f7]).setColor();m.sendEmbed(e);}}
        }break;
        case '-تتفق':
            for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l8[f8]).setColor();m.sendEmbed(e);}}
        }break;
        case '-لنفترض':
            for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l9[f9]).setColor();m.sendEmbed(e);}}
        }break;
        case '-أوجد-الكـ':
            for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l10[f10]).setColor();m.sendEmbed(e);}}
        }break;
        case '-بحرف-ال':
            for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l11[f11]).setColor();m.sendEmbed(e);}}
        }break;
        case '-رتب-الكـ':
            for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l12[f12]).setColor();m.sendEmbed(e);}}
        }break;
        // case '-وصف-الكـ':
        //     for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l13[f13]).setColor();m.sendEmbed(e);}}
        // }break;
        case '-أسم-المنتج':
            for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l14[f14]).setColor();m.sendEmbed(e);}}
        }break;
        case '-أسم-الدولة':
            for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l15[f15]).setColor();m.sendEmbed(e);}}
        }break;
        case '-جمع-ومفرد':
            for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l16[f16]).setColor();m.sendEmbed(e);}}
        }break;
        case '-أكمل-المثل':
            for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l17[f17]).setColor();m.sendEmbed(e);}}
        }break;
        case '-Pubg':
            for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l18[f18]).setColor();m.sendEmbed(e);}}
        }break;
        case '-المشهد-لك':
            for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l19[f19]).setColor();m.sendEmbed(e);}}
        }break;
        case '-النقطة-فق':
            for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l20[f20]).setColor();m.sendEmbed(e);}}
        }break;
        case '-منشن-تكست':
            for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l21[f21]).setColor();m.sendEmbed(e);}}
        }break;
        case '-اللهجات':
            for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l22[f22]).setColor();m.sendEmbed(e);}}
        }break;
        // case '-فبركة':
        //     for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l23[f23]).setColor();m.sendEmbed(e);}}
        // }break;
        case '-English':
            for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l24[f24]).setColor();m.sendEmbed(e);}}
        }break;
        // case '-كلمة-وأغـ':
        //     for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l25[f25]).setColor();m.sendEmbed(e);}}
        // }break;
        case '-براند-وتـ':
            for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l26[f26]).setColor();m.sendEmbed(e);}}
        }break;
        // case '-صور-أعضاء':
        //     for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l27[f27]).setColor();m.sendEmbed(e);}}
        // }break;
        case '-كاريكتير':
            for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l28[f28]).setColor();m.sendEmbed(e);}}
        }break;
        case '-غير-متطابق':
            for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l29[f29]).setColor();m.sendEmbed(e);}}
        }break;
        case '-كم-الساعة':
            for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l30[f30]).setColor();m.sendEmbed(e);}}
        }break;
        case '-أسم-الفلتر':
            for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l31[f31]).setColor();m.sendEmbed(e);}}
        }break;
        case '-أدمج-وأجب':
            for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l32[f32]).setColor();m.sendEmbed(e);}}
        }break;
        case '-تضاد':
            for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l33[f33]).setColor();m.sendEmbed(e);}}
        }break;
        // case '-أسم-ف-غ':
        //     for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l34[f34]).setColor();m.sendEmbed(e);}}
        // }break;
        case '-تساؤلات':
            for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l35[f35]).setColor();m.sendEmbed(e);}}
        }break;
        case '-كم-بالمية':
            for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l36[f36]).setColor();m.sendEmbed(e);}}
        }break;
        case '-أنطباعك-عن':
            for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l37[f37]).setColor();m.sendEmbed(e);}}
        }break;
        case '-معنى-أسم':
            for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l38[f38]).setColor();m.sendEmbed(e);}}
        }break;
        case '-أسم-الوجبة':
            for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l39[f39]).setColor();m.sendEmbed(e);}}
        }break;
        case '-من-القائل':
            for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l40[f40]).setColor();m.sendEmbed(e);}}
        }break;
        case '-أكمل-بمنشن':
            for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l41[f41]).setColor();m.sendEmbed(e);}}
        }break;
        case '-أسم-العا':
            for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l42[f42]).setColor();m.sendEmbed(e);}}
        }break;
        case '-info-lap':
            for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e
                //.setThumbnail("http://i8.ae/kpQs")
                .setDescription("**All departments are working with one perfix `!in-`**\n\n`!in-info-lap` : الصفحة الحالية لللابتوب\n`!in-info-mob` : الصفحة الحالية للموبايل")
                .addField("`القسم-الأول`","```md\n# -أسرع "+l1.length+"\n# -فكك "+l2.length+"\n# -مع-أو-ضد "+l3.length+"\n# -كت-تويت "+l4.length+"\n# -تكرار "+l5.length+"\n# -أغنية-سؤال "+l6.length+"\n# -أبيض-وأسود "+l7.length+"```", true)
                .addField("`القسم-الثاني`","```md\n# -تتفق "+l8.length+"\n# -لنفترض "+l9.length+"\n# -أوجد-الكـ "+l10.length+"\n# -بحرف-ال "+l11.length+"\n# -رتب-الكـ "+l12.length+"\n#\n# -أسم-المنتج "+l14.length+"```", true)
                .addField("`القسم-الثالث`","```md\n# -أسم-الدولة "+l15.length+"\n# -جمع-ومفرد "+l16.length+"\n# -أكمل-المثل "+l17.length+"\n# -"+l18.length+" Pubg\n# -المشهد-لك "+l19.length+"\n# -النقطة-فق "+l20.length+"\n# -منشن-تكست "+l21.length+"```", true)
                .addField("`القسم-الرابع`","```md\n# -اللهجات "+l22.length+"\n#\n# -"+l24.length+" English\n#\n# -براند-وتـ "+l26.length+"\n#\n# -كاريكتير "+l28.length+"```", true)
                .addField("`القسم-الخامس`","```md\n# -غير-متطابق "+l29.length+"\n# -كم-الساعة "+l30.length+"\n# -أسم-الفلتر "+l31.length+"\n# -أدمج-وأجب "+l32.length+"\n# -تضاد "+l33.length+"\n#\n# -تساؤلات "+l35.length+"```", true)
                .addField("`القسم-السادس`","```md\n# -كم-بالمية "+l36.length+"\n# -أنطباعك-عن "+l37.length+"\n# -معنى-أسم "+l38.length+"\n# -أسم-الوجبة "+l39.length+"\n# -من-القائل "+l40.length+"\n# -أكمل-بمنشن "+l41.length+"\n# -أسم-العا "+l42.length+"```", true)
                .setColor('RANDOM')
                .setFooter("Developed by SAIF",u+"CmsL");
                m.sendEmbed(e);}
        }}break;
        //http://i8.ae/tQfk
        case '-info-mob':
            for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage('http://i8.ae/tQfk').setColor('RANDOM');m.sendEmbed(e);}}
        }break;
   }
}) // for bot.24
}catch(err){throw(err)}
bot.login(process.env.BOT_TOKEN)
