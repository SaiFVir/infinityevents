const Discord = require('discord.js');
const data = require('./words.json');
const bot = new Discord.Client();
const perfix = '-';
const ownerid = "426010517484732416";

bot.on('ready', ()=>{
    console.log('Ready !!!');
    bot.user.setActivity("Soon",{type:"Playing"});
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
    var a = message.content.substring(perfix.length).split(" ");
    var e = new Discord.RichEmbed();
    var m = message.channel;
    var mc = message.content;
    var ms = message;
    var u = 'http://i8.ae/';
//     var f = Math.floor;
//     var o = Math.random();
    var i;
    var l1=data["l1"],l2=data["l2"],l3=data["l3"],l4=data["l4"],l5=data["l5"],l6=data["l6"],l7=data["l7"],l8=data["l8"],
        l9=data["l9"],l10=data["l10"],l11=data["l11"],l12=data["l12"],l13=data["l13"],l14=data["l14"],l15=data["l15"],
        l16=data["l16"],l17=data["l17"],l18=data["l18"],l19=data["l19"],l20=data["l20"],l21=data["l21"],l22=data["l22"],
        l23=data["l23"],l24=data["l24"],l25=data["l25"],l26=data["l26"],l27=data["l27"],l28=data["l28"],l29=data["l29"],
        l30=data["l30"],l31=data["l31"],l32=data["l32"],l33=data["l33"],l34=data["l34"],l35=data["l35"],l36=data["l36"],
        l37=data["l37"],l38=data["l38"],l39=data["l39"],l40=data["l40"],l41=data["l41"],l42=data["l42"];

//     var f1=f(o*l1.length),f2=f(o*l2.length),f3=f(o*l3.length),f4=f(o*l4.length),f5=f(o*l5.length),f6=f(o*l6.length),f7=f(o*l7.length),
//         f8=f(o*l8.length),f9=f(o*l9.length),f10=f(o*l10.length),f11=f(o*l11.length),f12=f(o*l12.length),f13=f(o*l13.length),f14=f(o*l14.length),
//         f15=f(o*l15.length),f16=f(o*l16.length),f17=f(o*l17.length),f18=f(o*l18.length),f19=f(o*l19.length),f20=f(o*l20.length),f21=f(o*l21.length),
//         f22=f(o*l22.length),f23=f(o*l23.length),f24=f(o*l24.length),f25=f(o*l25.length),f26=f(o*l26.length),f27=f(o*l27.length),f28=f(o*l28.length),
//         f29=f(o*l29.length),f30=f(o*l30.length),f31=f(o*l31.length),f32=f(o*l32.length),f33=f(o*l33.length),f34=f(o*l34.length),f35=f(o*l35.length),
//         f36=f(o*l36.length),f37=f(o*l37.length),f38=f(o*l38.length),f39=f(o*l39.length),f40=f(o*l40.length),f41=f(o*l41.length),f42=f(o*l42.length);
    
    var b = ['أسرع','اسرع','فكك','مع-أو-ضد','مع-او-ضد','كت-تويت','المتكرر','أغنية-سؤال','اغنية-سؤال','ابيض-واسود','أبيض-وأسود',
             'تتفق','لنفترض','أوجد-الكـ','أوجد-الكلمة','اوجد-الكلمة','اوجد-الكـ','بحرف-ال','رتب-الكـ','رتب-الكلمة','وصف-الكـ','وصف-الكلمة','اسم-المنتج','أسم-المنتج',
             'أسم-الدولة','اسم-الدولة','النقطة-فق','النقطة-المفقودة','منشن-تكست','pubg','PUBG','Pubg','اكمل-المثل','المشهد-لك','جمع-ومفرد','أكمل-المثل',
             'كلمة-وأغـ','براند-وتـ','صور-أعضاء','كاريكتير','english','ENGLISH','English','اللهجات','فبركة','براند-وتطبيق','اسم-ف-غ','اكمل-بمنشن','اسم-العا','اسم-العاصمة',
             'غير-متطابق','كلمة-واغنية','كلمة-وأغنية','انطباعك-عن','كم-الساعة','معنى-اسم','أسم-الفلتر','أدمج-وأجب','تضاد','أسم-ف-غ','اسم-الفلتر','ادمج-واجب',
             'تساؤلات','كم-بالمية','أنطباعك-عن','معنى-أسم','أسم-الوجبة','من-القائل','أكمل-بِمنشن','أسم-العا','info-lap','info-mob'];

    switch(a[0]){ // switch means ( cases قارين بين الـ )
        
        case 'c':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return message.channel.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(message => message.delete(5000));
            if(!a[1]) return message.reply('Error please define sec arg');m.bulkDelete(a[1]);break;
        case 'اسرع':
        case 'أسرع':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
            if(a[1] >= l1.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l1[a[1]]);m.sendEmbed(e);}}}
        break;
        case 'فكك':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
            if(a[1] >= l2.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l2[a[1]]);m.sendEmbed(e);}}}
        break;
        case 'مع-او-ضد':
        case 'مع-أو-ضد':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
            if(a[1] >= l3.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l3[a[1]]);m.sendEmbed(e);}}}
        break;
        case 'كت-تويت':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
            if(a[1] >= l4.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l4[a[1]]);m.sendEmbed(e);}}}
        break;
        case 'المتكرر':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
            if(a[1] >= l5.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l5[a[1]]);m.sendEmbed(e);}}}
        break;
        case 'اغنية-سؤال':
        case 'أغنية-سؤال':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
            if(a[1] >= l6.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l6[a[1]]);m.sendEmbed(e);}}}
        break;
        case 'ابيض-واسود':
        case 'أبيض-وأسود':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
            if(a[1] >= l7.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l7[a[1]]);m.sendEmbed(e);}}}
        break;
        case 'تتفق':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
            if(a[1] >= l8.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l8[a[1]]);m.sendEmbed(e);}}}
        break;
        case 'لنفترض':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
            if(a[1] >= l9.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l9[a[1]]);m.sendEmbed(e);}}}
        break;
        case 'اوجد-الكـ':
        case 'اوجد-الكلمة':
        case 'أوجد-الكلمة':
        case 'أوجد-الكـ':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
            if(a[1] >= l10.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l10[a[1]]);m.sendEmbed(e);}}}
        break;
        case 'بحرف-ال':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
            if(a[1] >= l11.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l11[a[1]]);m.sendEmbed(e);}}}
        break;
        case 'رتب-الكلمة':
        case 'رتب-الكـ':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
            if(a[1] >= l12.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l12[a[1]]);m.sendEmbed(e);}}}
        break;
        case 'وصف-الكلمة':
        case 'وصف-الكـ':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
            if(a[1] >= l13.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l13[a[1]]);m.sendEmbed(e);}}}
        break;
        case 'اسم-المنتج':
        case 'أسم-المنتج':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
            if(a[1] >= l14.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l14[a[1]]);m.sendEmbed(e);}}}
        break;
        case 'اسم-الدولة':
        case 'أسم-الدولة':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
            if(a[1] >= l15.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l15[a[1]]);m.sendEmbed(e);}}}
        break;
        case 'جمع-ومفرد':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
            if(a[1] >= l16.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l16[a[1]]);m.sendEmbed(e);}}}
        break;
        case 'اكمل-المثل':
        case 'أكمل-المثل':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
            if(a[1] >= l17.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l17[a[1]]);m.sendEmbed(e);}}}
        break;
        case 'PUBG':
        case 'pubg':
        case 'Pubg':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
            if(a[1] >= l18.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l18[a[1]]);m.sendEmbed(e);}}}
        break;
        case 'المشهد-لك':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
            if(a[1] >= l19.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l19[a[1]]);m.sendEmbed(e);}}}
        break;
        case 'النقطة-المفقودة':
        case 'النقطة-فق':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
            if(a[1] >= l20.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l20[a[1]]);m.sendEmbed(e);}}}
        break;
        case 'منشن-تكست':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
            if(a[1] >= l21.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l21[a[1]]);m.sendEmbed(e);}}}
        break;
        case 'اللهجات':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
            if(a[1] >= l22.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l22[a[1]]);m.sendEmbed(e);}}}
        break;
//         // case '-فبركة':
//         //     for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l23[f23]).setColor();m.sendEmbed(e);}}
//         // }break;
        case 'ENGLISH':
        case 'english':
        case 'English':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
            if(a[1] >= l24.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l24[a[1]]);m.sendEmbed(e);}}}
        break;
        case 'كلمة-واغنية':
        case 'كلمة-وأغنية':
        case 'كلمة-وأغـ':
                if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
                if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
                if(a[1] >= l25.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
                for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l25[a[1]]);m.sendEmbed(e);}}}
        break;
        case 'براند-وتطبيق':
        case 'براند-وتـ':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
            if(a[1] >= l26.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l26[a[1]]);m.sendEmbed(e);}}}
        break;
//         // case '-صور-أعضاء':
//         //     for(i in b){if(mc.includes(b[i])){if(a[0]=b[i]){e.setImage(u+l27[f27]).setColor();m.sendEmbed(e);}}
//         // }break;
        case 'كاريكتير':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
            if(a[1] >= l28.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l28[a[1]]);m.sendEmbed(e);}}}
        break;
        case 'غير-متطابق':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
            if(a[1] > l29.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l29[a[1]]);m.sendEmbed(e);}}}
        break;
        case 'كم-الساعة':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
            if(a[1] >= l30.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l30[a[1]]);m.sendEmbed(e);}}}
        break;
        case 'اسم-الفلتر':
        case 'أسم-الفلتر':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
            if(a[1] > l31.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l31[a[1]]);m.sendEmbed(e);}}}
        break;
        case 'ادمج-واجب':
        case 'أدمج-وأجب':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
            if(a[1] >= l32.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l32[a[1]]);m.sendEmbed(e);}}}
        break;
        case 'تضاد':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
            if(a[1] >= l33.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l33[a[1]]);m.sendEmbed(e);}}}
        break;
        case 'اسم-ف-غ':
        case 'أسم-ف-غ':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
            if(a[1] >= l34.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l34[a[1]]);m.sendEmbed(e);}}}
        break;
        case 'تساؤلات':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
            if(a[1] >= l35.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l35[a[1]]);m.sendEmbed(e);}}}
        break;
        case 'كم-بالمية':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
            if(a[1] >= l36.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l36[a[1]]);m.sendEmbed(e);}}}
        break;
        case 'انطباعك-عن':
        case 'أنطباعك-عن':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
            if(a[1] >= l37.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l37[a[1]]);m.sendEmbed(e);}}}
        break;
        case 'معنى-اسم':
        case 'معنى-أسم':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
            if(a[1] >= l38.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l38[a[1]]);m.sendEmbed(e);}}}
        break;
        case 'أسم-الوجبة':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
            if(a[1] >= l39.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l39[a[1]]);m.sendEmbed(e);}}}
        break;
        case 'من-القائل':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
            if(a[1] >= l40.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l40[a[1]]);m.sendEmbed(e);}}}
        break;
        case 'اكمل-بمنشن':
        case 'أكمل-بمنشن':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
            if(a[1] >= l41.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l41[a[1]]);m.sendEmbed(e);}}}
        break;
        case 'اسم-العاصمة':
        case 'اسم-العا':
        case 'أسم-العا':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            if(!a[1]) return m.send("`الرجاءأدخال رقم`").then(ms => ms.delete(5000));
            if(a[1] >= l42.length) return m.send("`!الرقم أكبر من عدد الصور الموجودة في القسم`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setImage(u+l42[a[1]]);m.sendEmbed(e);}}}
        break;
        case 'info-lap':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e
                //.setThumbnail("http://i8.ae/kpQs")
                .setDescription("**All departments are working with one perfix `-`**\n\n`-info-lap` : **الصفحة الحالية لللابتوب**\n`-info-mob` : **الصفحة الحالية للموبايل**\n`-للحصول على أجوبة الأقسام المُميزة بنقطة فقط قبل القسم أكتب ج`\n`مُلاحظة : يبدأ عرض الصور من رقم 0 والرقم الأخير لِكُل قسم لا يُحسب`")
                .addField("`القسم-الأول`","```md\n# أسرع "+l1.length+"\n# فكك "+l2.length+"\n# مع-أو-ضد "+l3.length+"\n# كت-تويت "+l4.length+"\n# المتكرر "+l5.length+"\n# أغنية-سؤال "+l6.length+"\n# أبيض-وأسود "+l7.length+"```", true)
                .addField("`القسم-الثاني`","```md\n# تتفق "+l8.length+"\n# لنفترض "+l9.length+"\n# أوجد-الكـ "+l10.length+"\n# بحرف-ال "+l11.length+"\n# رتب-الكـ "+l12.length+"\n# وصف-الكـ "+l13.length+"\u2022\n# أسم-المنتج "+l14.length+"\u2022```", true)
                .addField("`القسم-الثالث`","```md\n# أسم-الدولة "+l15.length+"\u2022\n# جمع-ومفرد "+l16.length+"\n# أكمل-المثل "+l17.length+"\u2022\n# "+l18.length+" Pubg\u2022\n# المشهد-لك "+l19.length+"\u2022\n# النقطة-فق "+l20.length+"\n# منشن-تكست "+l21.length+"```", true)
                .addField("`القسم-الرابع`","```md\n# اللهجات "+l22.length+"\n#\n# "+l24.length+" English\n# كلمة-وأغـ "+l25.length+"\u2022\n# براند-وتـ "+l26.length+"\n#\n# كاريكتير "+l28.length+"```", true)
                .addField("`القسم-الخامس`","```md\n# غير-متطابق "+l29.length+"\n# كم-الساعة "+l30.length+"\n# أسم-الفلتر "+l31.length+"\n# أدمج-وأجب "+l32.length+"\n# تضاد "+l33.length+"\n# أسم-ف-غ "+l34.length+"\u2022\n# تساؤلات "+l35.length+"```", true)
                .addField("`القسم-السادس`","```md\n# كم-بالمية "+l36.length+"\n# أنطباعك-عن "+l37.length+"\n# معنى-أسم "+l38.length+"\n# أسم-الوجبة "+l39.length+"\n# من-القائل "+l40.length+"\n# أكمل-بمنشن "+l41.length+"\n# أسم-العا "+l42.length+"```", true)
                .setColor('RANDOM')
                .setFooter("Developed by SAIF");
                m.sendEmbed(e);}
        }}break;
        //http://i8.ae/yBIB
        //http://i8.ae/aZWp
        case 'info-mob':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
            for(i in b){if(mc.includes(b[i])){if(a[0]==b[i]){e.setDescription("**All departments are working with one perfix `-`**\n\n`-info-lap` : **الصفحة الحالية لللابتوب**\n`-info-mob` : **الصفحة الحالية للموبايل**\n`-للحصول على أجوبة الأقسام المُميزة بنقطة فقط قبل القسم أكتب ج`\n`مُلاحظة : يبدأ عرض الصور من رقم 0 والرقم الأخير لِكُل قسم لا يُحسب`")
                .setImage('http://i8.ae/aZWp').setColor('RANDOM').setFooter("Developed by SAIF");m.sendEmbed(e);}}
        }break;
        case 'ج-كلمة-وأغـ':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
                e.setImage("http://i8.ae/Nokk").setColor('RANDOM');m.sendEmbed(e);
        break;
        case 'ج-وصف-الكـ':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
                e.setImage("http://i8.ae/1Eh4").setColor('RANDOM');m.sendEmbed(e);
        break;
        case 'ج-أسم-المنتج':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
                e.setImage("http://i8.ae/8RnN").setColor('RANDOM');m.sendEmbed(e);
        break;
        case 'ج-أسم-ف-غ':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
                e.setImage("http://i8.ae/cS3M").setColor('RANDOM');m.sendEmbed(e);
        break;
        case 'ج-أسم-الدولة':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
                e.setImage("http://i8.ae/kP1T").setColor('RANDOM');m.sendEmbed(e);
        break;
        case 'ج-أكمل-المثل':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
                e.setImage("http://i8.ae/zXI7").setColor('RANDOM');m.sendEmbed(e);
        break;
        case 'ج-المشهد-لك':
            if(!ms.member.roles.find(r => r.name === "events"|| ms.member.hasPermission("ADMINISTRATOR"))) return m.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(ms => ms.delete(5000));
                e.setImage("http://i8.ae/L5y1").setColor('RANDOM');m.sendEmbed(e);
        break;
        case 'cal':
            if(!a[1]) return m.send("`يرجى كتابة العنصر الأول لأتمام العملية`");
            if(!a[2]) return m.send("`يرجى وضع أحدى العمليات الحسابية لأتمام العملية`");
            if(!a[3]) return m.send("`يرجى كتابة العنصر الثاني لأتمام العملية`");
            if(isNaN(a[1])) return m.send("`!العنصر الأول لا يساوي رقم`");
            if(isNaN(a[3])) return m.send("`!العنصر الثاني لا يساوي رقم`");
            if(a[2]=="+"){
                var result = parseInt(a[1])+parseInt(a[3]);
                    e.setDescription(result)
                    .setColor("RANDOM");
                    m.sendEmbed(e);
                }else if(a[2]=="-"){
                    var result = parseInt(a[1])-parseInt(a[3]);
                    if(result<0) return m.send("`عملية حسابية خاطئة`");
                    e.setDescription(result)
                    .setColor("RANDOM");
                    m.sendEmbed(e);
                }else if(a[2]=="*"){
                    var result = parseInt(a[1])*parseInt(a[3]);
                    e.setDescription(result)
                    .setColor("RANDOM");
                    m.sendEmbed(e);
                }else if(a[2]=="/"){
                    var result = parseInt(a[1])/parseInt(a[3]);
                    if(result<0.99) return m.send("`عملية حسابية خاطئة`");
                    e.setDescription(result)
                    .setColor("RANDOM");
                    m.sendEmbed(e);
                }else if(a[2]=="%"){
                    var result = parseInt(a[1])%parseInt(a[3]);
                    if(result<0) return m.send("`عملية حسابية خاطئة`");
                    e.setDescription(result)
                    .setColor("RANDOM");
                    m.sendEmbed(e);
                }
        break;
   }
}); // for bot.24
    
bot.on("message", msg => {
	const args = msg.content.split(" ").slice(1);
	if (msg.content.startsWith(perfix + "eval")) {
	  if(msg.author.id !== ownerid) return;
	  try {
		function clean(text) {
			if (typeof(text) === "string")
			  return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
			else
				return text;
		  }
		const code = args.join(" ");
		let evaled = eval(code);
   
		if (typeof evaled !== "string")
		  evaled = require("util").inspect(evaled);
   
		msg.channel.send(clean(evaled), {code:"xl"});
	  } catch (err) {
		msg.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
	  }
	}
});
}catch(err){throw(err)}
bot.login(process.env.BOT_TOKEN)
