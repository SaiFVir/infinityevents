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

bot.on('message', async msg =>{
    let a = msg.content.substring(perfix.length).split(" ");
    let e = new Discord.RichEmbed();
    let mch = msg.channel;
 
    switch(a[0]){
        case 'c':
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(msg => msg.delete(5000));
            if(!a[1]) return msg.reply('Error please define sec arg');mch.bulkDelete(a[1]);break;
        case 'اسرع':
        case 'أسرع':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(s => s.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 85 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/1/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`);
        break;
        case 'فكك':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(s => s.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 107 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/2/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`);
        break;
        case 'مع-او-ضد':
        case 'مع-أو-ضد':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(s => s.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 122 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/3/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`);
        break;
        case 'كت-تويت':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(s => s.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 156 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/4/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`)
        break;
        case 'المتكرر':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(msg => msg.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 58 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/5/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`);
        break;
        case 'اغنية-سؤال':
        case 'أغنية-سؤال':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(msg => msg.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 12 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/6/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`);
        break;
        case 'ابيض-واسود':
        case 'أبيض-وأسود':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(msg => msg.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 46 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/7/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`);
        break;
        case 'تتفق':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(msg => msg.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 103 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/8/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`);
        break;
        case 'لنفترض':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(msg => msg.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 42 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/9/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`);
        break;
        case 'اوجد-الكـ':
        case 'اوجد-الكلمة':
        case 'أوجد-الكلمة':
        case 'أوجد-الكـ':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(msg => msg.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 31 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/10/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`);
        break;
        case 'بحرف-ال':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(msg => msg.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 28 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/11/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`);
        break;
        case 'رتب-الكلمة':
        case 'رتب-الكـ':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(msg => msg.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 18 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/12/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`);
        break;
        case 'وصف-الكلمة':
        case 'وصف-الكـ':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(msg => msg.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 32 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/13/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`);
        break;
        case 'اسم-المنتج':
        case 'أسم-المنتج':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(msg => msg.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 16 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/14/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`);
        break;
        case 'اسم-الدولة':
        case 'أسم-الدولة':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(msg => msg.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 55 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/15/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`);
        break;
        case 'جمع-ومفرد':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(msg => msg.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 27 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/16/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`);
        break;
        case 'اكمل-المثل':
        case 'أكمل-المثل':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(msg => msg.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 37 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/17/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`);
        break;
        case 'PUBG':
        case 'pubg':
        case 'Pubg':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(msg => msg.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 14 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/18/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`);
        break;
        case 'المشهد-لك':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(msg => msg.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 49 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/19/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`);
        break;
        case 'النقطة-المفقودة':
        case 'النقطة-فق':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(msg => msg.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 25 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/20/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`);
        break;
        case 'منشن-تكست':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(msg => msg.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 84 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/21/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`);
        break;
        case 'اللهجات':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(msg => msg.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 39 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/22/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`);
        break;
        case 'ENGLISH':
        case 'english':
        case 'English':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(msg => msg.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 25 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/23/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`);
        break;
        case 'كلمة-واغنية':
        case 'كلمة-وأغنية':
        case 'كلمة-وأغـ':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(msg => msg.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 33 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/24/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`);
        break;
        case 'براند-وتطبيق':
        case 'براند-وتـ':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(msg => msg.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 31 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/25/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`);
        break;
        case 'كاريكتير':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(msg => msg.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 34 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/26/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`);
        break;
        case 'غير-متطابق':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(msg => msg.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 12 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/27/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`);
        break;
        case 'كم-الساعة':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(msg => msg.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 30 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/28/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`);
        break;
        case 'اسم-الفلتر':
        case 'أسم-الفلتر':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(msg => msg.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 14 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/29/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`);
        break;
        case 'ادمج-واجب':
        case 'أدمج-وأجب':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(msg => msg.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 26 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/30/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`);
        break;
        case 'تضاد':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(msg => msg.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 72 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/31/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`);
        break;
        case 'اسم-ف-غ':
        case 'أسم-ف-غ':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(msg => msg.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 38 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/32/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`);
        break;
        case 'تساؤلات':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(msg => msg.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 60 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/33/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`);
        break;
        case 'كم-بالمية':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(msg => msg.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 15 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/34/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`);
        break;
        case 'انطباعك-عن':
        case 'أنطباعك-عن':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(msg => msg.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 15 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/35/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`);
        break;
        case 'معنى-اسم':
        case 'معنى-أسم':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(msg => msg.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 22 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/36/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`);
        break;
        case 'أسم-الوجبة':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(msg => msg.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 17 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/37/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`);
        break;
        case 'من-القائل':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(msg => msg.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 15 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/38/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`);
        break;
        case 'اكمل-بمنشن':
        case 'أكمل-بمنشن':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(msg => msg.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 18 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/39/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`);
        break;
        case 'اسم-العاصمة':
        case 'اسم-العا':
        case 'أسم-العا':
            msg.delete();
            if(!msg.member.roles.find(r => r.name === "events"|| msg.member.hasPermission("ADMINISTRATOR"))) return mch.send("`ليس لديك الصلاحية لأستخدام هذا الأمر`").then(msg => msg.delete(5000));
            if(!a[1]) return mch.send("`!! 0 يُرجى أدخال رقم الصورة مع تجنب رقم`").then(d => d.delete(5000));
            if(a[1] == 0 || a[1] > 31 || a[1] == isNaN) return mch.send("`!!يُرجى كتابة رقم صحيح و مُساوي لِعدد الصور المُتواجدة في القسم`").then(d => d.delete(5000));
            await mch.sendFile(`./files/40/${a[1]}.png`);
            msg.channel.send(`**Sent By : ${msg.author.username}**, @everyone || @here`);
        break;
        case 'help':
            await mch.sendFile("./help.png");
        break;
   }
   
}); // for bot.24

bot.on("message",async msg => {
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

bot.on("message",async msg => {
	let args = msg.content.split(" ");

	if(args[0].startsWith(perfix + 'info')){
		if(msg.author.id !== ownerid) return;
		let e = new Discord.RichEmbed();

		e.setAuthor(`${msg.guild.name}`, `${msg.guild.iconURL}`)
		.addField('\u30FC\u30FC\u30FC\u30FC\u30FC\u30FC\u30FC\u30FC\u30FC\u30FC\u30FC', `(Channels/\`${msg.guild.channels.size}\`)\n(Roles/\`${msg.guild.roles.size}\`)\n(Members/\`${msg.guild.members.filter(m => !m.user.bot).size}\`)\n(Status :${msg.guild.emojis.find(f => f.name === 'online')}\`${msg.guild.members.filter(m => m.presence.status === 'online').size}\` -${msg.guild.emojis.find(f => f.name === 'offline')}\`${msg.guild.members.filter(m => m.presence.status === 'offline').size}\` -${msg.guild.emojis.find(f => f.name === 'Idle')}\`${msg.guild.members.filter(m => m.presence.status === 'idle').size}\` -${msg.guild.emojis.find(f => f.name === 'dnd')}\`${msg.guild.members.filter(m => m.presence.status === 'dnd').size}\`)\n(Bots/\`${msg.guild.members.filter(m => m.user.bot).size}\`)\n(Emojis/\`${msg.guild.emojis.size}\`)\n(Owner/${msg.guild.owner})\n(Region/\`${msg.guild.region}\`)\n(CreatedOn/\`${msg.guild.createdAt.getFullYear()+'/'+msg.guild.createdAt.getDay()+'/'+msg.guild.createdAt.getHours()}\`)`)
		.setThumbnail(`${msg.guild.iconURL}`)
		.setColor('#2a7bb5')
		.setDescription('**A collection of information**')
		.setFooter(`${msg.author.username}`, `${msg.author.displayAvatarURL}`)
		.setTimestamp()
		msg.channel.send(e);
	}
});  

}catch(err){throw(err)}
bot.login(process.env.BOT_TOKEN)
