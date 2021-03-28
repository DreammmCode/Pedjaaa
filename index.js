const Discord = require("discord.js")
const client = new Discord.Client()

const config = require("./config.json")
const ms = require("ms");
const command = require("./command")
const { prefix } = require("./config.json");
const antiAd = require("./anti-ad");
const antiCom = require("./anti-com");
const { ruznerijeci } = require("./filter.json") 
const { cirilica } = require("./cirilica.json")
const { smijeh } = require("./smijeh")
const { admin } = require("./admin.json")
const { adnan } = require("./adnan.json")

/* Osnovno */
client.on("ready", () => {
  console.log("Pedja je online!")
})

command(client, "status", (message) => {
  if(message.author.id === "427163736520917011") {
  const content = message.content.replace("/status ", "")

  client.user.setPresence({
    activity: {
      name: content,
      type: 0,
    },
  })
  message.delete()
  message.channel.send(`${message.author} status uspješno promijenjen.`)
} else {
  message.delete()
  message.channel.send(`${message.author} ti nisi moj gospodar.`)
}
})
/* Osnovno */


command(client, "roleinfo", (message) => {
  const { guild } = message
  const ikonica = guild.iconURL()
  const imeservera = guild.name
  
  const exampleEmbed = new Discord.MessageEmbed()
  .setAuthor(imeservera, ikonica)
  .setTitle("          INFORMACIJE O ROLOVIMA          ")
  .setColor("#0099ff")
  .setDescription()

  message.channel.send(exampleEmbed)
})



/*================================================= H E L P  K O M A N D E ================================================================*/
command(client, "help", (message) => {
  var clientEmbed = new Discord.MessageEmbed()
  .setAuthor(client.user.username, client.user.displayAvatarURL())
  .setColor("#F8F8FF")
  .addFields(
    {name: 'Zabava', value: '/helpzabava'},
    {name: 'Linkovi', value: '/helplinkovi'},
    {name: 'Informacije', value: '/helpinformacije'},
    {name: 'Prijedlozi', value: '/helpprijedlozi'},
    {name: 'Verifikacija', value: '/helpverifikacija'},
    {name: 'Report', value: '/helpreport'},
    {name: 'Moderacija', value: '/helpmoderacija'},
  )
  .setDescription("Odaberite područje u kojem trebate pomoć:")
  .setFooter(message.author.username, message.author.displayAvatarURL())
  .setTimestamp()
  return message.channel.send(clientEmbed);
})

{
  command(client, "helpzabava", (message) => {
    var clientEmbed = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.displayAvatarURL())
    .setTitle("KOMANDE ZA ZABAVU:")
    .setColor("#F8F8FF")
    .setDescription("/pedja, /smecar, /smecarrate, /iqtest, /reci, /bs")
    .setFooter(message.author.username, message.author.displayAvatarURL())
    .setTimestamp()
    message.channel.send(clientEmbed);
  })
  }

  {
    command(client, "helplinkovi", (message) => {
      var clientEmbed = new Discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.displayAvatarURL())
      .setTitle("KOMANDE ZA LINKOVE:")
      .setColor("#F8F8FF")
      .setDescription("/samp, /ts3, /forum")
      .setFooter(message.author.username, message.author.displayAvatarURL())
      .setTimestamp()
      message.channel.send(clientEmbed);
    })
    }

    {
      command(client, "helpinformacije", (message) => {
        var clientEmbed = new Discord.MessageEmbed()
        .setAuthor(client.user.username, client.user.displayAvatarURL())
        .setTitle("KOMANDE ZA INFORMACIJE:")
        .setColor("#F8F8FF")
        .setDescription("/pravila, /pitanje, /pitajpedju, /opedji, /serverinfo, /avatar")
        .setFooter(message.author.username, message.author.displayAvatarURL())
        .setTimestamp()
        message.channel.send(clientEmbed);
      })
      }

      {
        command(client, "helpmoderacija", (message) => {
          var clientEmbed = new Discord.MessageEmbed()
          .setAuthor(client.user.username, client.user.displayAvatarURL())
          .setTitle("KOMANDE ZA MODERACIJU:")
          .setColor("#F8F8FF")
          .setDescription("/mute, /unmute, /kick, /ban, /clear")
          .setFooter(message.author.username, message.author.displayAvatarURL())
          .setTimestamp()
          message.channel.send(clientEmbed);
        })
        }
  
        {
          command(client, "helpprijedlozi", (message) => {
            var clientEmbed = new Discord.MessageEmbed()
            .setAuthor(client.user.username, client.user.displayAvatarURL())
            .setTitle("KOMANDA ZA PRIJEDLOGE:")
            .setColor("#F8F8FF")
            .setDescription("/prijedlog")
            .setFooter(message.author.username, message.author.displayAvatarURL())
            .setTimestamp()
            message.channel.send(clientEmbed);
          })
          }

          {
            command(client, "helpreport", (message) => {
              var clientEmbed = new Discord.MessageEmbed()
              .setAuthor(client.user.username, client.user.displayAvatarURL())
              .setTitle("KOMANDE ZA REPORTOVE:")
              .setColor("#F8F8FF")
              .setDescription("/report, /prihvatireport, /odbijreport")
              .setFooter(message.author.username, message.author.displayAvatarURL())
              .setTimestamp()
              message.channel.send(clientEmbed);
            })
            }

            {
              command(client, "helpverifikacija", (message) => {
                var clientEmbed = new Discord.MessageEmbed()
                .setAuthor(client.user.username, client.user.displayAvatarURL())
                .setTitle("KOMANDA ZA VERIFIKACIJU:")
                .setColor("#F8F8FF")
                .setDescription("/verifikacija")
                .setFooter(message.author.username, message.author.displayAvatarURL())
                .setTimestamp()
                message.channel.send(clientEmbed);
              })
              }

/*================================================= H E L P  K O M A N D E ================================================================*/

/*================================================= J E D N O S T A V N E CMD ================================================================*/
/* SAMP */
command(client, "samp", (message) => {
  message.channel.send("Pridruži nam se na našem SAMP serveru: samp.balkan-school.com:7778")
})
/* TS3 */
command(client, "ts3", (message) => {
  message.channel.send("Pridruži nam se na našem TS3 serveru: ts3.balkan-school.com:9994")
})
/* Forum */
command(client, "forum", (message) => {
  message.channel.send("Pridruži nam se na našem forumu: https://balkan-school.com/forum/")
})
/* Pitanje */
command(client, "pitanje", (message) => {
  message.channel.send("Imaš pitanje? Postavi ga u ticket kanalu ukoliko je vezano za Discord, ili na forumu ako je vezano za TS3 (https://balkan-school.com/forum/index.php?/forum/479-pitanja-u-vezi-ts3/) ili SAMP (https://balkan-school.com/forum/index.php?/forum/103-pomo%C4%87/).")
})
/* BS */
command(client, "bs", (message) => {
  message.channel.send("Balkan School Republika!")
})
/*================================================= J E D N O S T A V N E CMD ================================================================*/

/*================================================= E M B E D  K O M A N D E ================================================================*/
/* Pravila Komanda */
command(client, "pravila", (message) => {
  const { guild } = message
  const ikonica = guild.iconURL()
  const imeservera = guild.name
  
  const exampleEmbed = new Discord.MessageEmbed()
  .setAuthor(imeservera, ikonica)
  .setTitle("====================== PRAVILA ======================")
  .setDescription("\`1. Zabranjeno je raditi spam u General Chatu!                            \` \n\n \`2. Zabranjeno je vređanje ili provociranje ostalih članova Balkan School zajednice                                                                \` \n\n \`3. Zabranjeno je reklamiranje drugih discord ili samp servera u Glavnom  ćaskanju                                                                 \` \n\n \`4. Zabranjen je bilo kakav oblik MRŽNJE prema drugoj Naciji, Vjeri itd.  \` \n\n \`5. Zabranjeno je puštanje ear rape sadržaja na Music Botovima            \` \n\n \`6. Poštujte rankove veće od vas!                                         \` \n\n \`7. Zabranjeno je traženje admina u vezi samp servera. Za to imate forum. Kazna: Mute                                                              \` \n\n \`8. Zabranjen je bilo kakav hejt ili provokacija. Dozvoljena je lepo      obrazložena i dobronamerna kritika sa rešenjima, ali hejt kao npr. admini ništa ne rade će biti kažnjen Muteom.                                    \` \n\n \`9. Zabranjeno je zaobilaženje filtera za psovke.                        \`\n\n \`10. Obavezno je koriscenje latinicnog pisma.                            \`")
  .setColor("#0099ff")
  .setFooter("Administracija ima pravo promijeniti ili urediti pravila u bilo kojem trenutku! | BALKAN SCHOOL since 2016")

  message.channel.send(exampleEmbed);
})

/* SmecarRate */
client.on("message", (message) => {
  const { member, mentions } = message
  if(message.content.startsWith(`${prefix}smecarrate`)) {
    const target = mentions.users.first()
    if (target) {
      const targetMember = message.guild.members.cache.get(target.id)

    let smecarrate = Math.floor(Math.random() * 101)

    let smecarrateEmbed = new Discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.displayAvatarURL())
      .setTitle("Smećar mašina")
      .setColor("#0099ff")
      .setDescription(`${target} je \`${smecarrate}%\` smećar!`)
    message.channel.send(smecarrateEmbed);
  }

  if (!target) {
    let smecarrate = Math.floor(Math.random() * 101)

    let smecarrateEmbed = new Discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.displayAvatarURL())
      .setTitle("Smećar mašina")
      .setColor("#0099ff")
      .setDescription(`${message.author}, ti si \`${smecarrate}%\` smećar!`)
    message.channel.send(smecarrateEmbed);
  }
}})

/* IQTest */
client.on("message", (message) => {
  const { member, mentions } = message
  if(message.content.startsWith(`${prefix}iqtest`)) {
    const target = mentions.users.first()
    if (target) {
      const targetMember = message.guild.members.cache.get(target.id)

    let brojiqa = Math.floor(Math.random() * 201)

    let iqEmbed = new Discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.displayAvatarURL())
      .setTitle("IQ mašina")
      .setColor("#0099ff")
      .setDescription(`${target} je iq \`${brojiqa}\`!`)
    message.channel.send(iqEmbed);
  }

  if (!target) {
    let smecarrate = Math.floor(Math.random() * 101)

    let smecarrateEmbed = new Discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.displayAvatarURL())
      .setTitle("IQ mašina")
      .setColor("#0099ff")
      .setDescription(`${message.author}, tvoj iq je \`${smecarrate}\`!`)
    message.channel.send(smecarrateEmbed);
  }
}})

/* Smecar Komanda */
{
  command(client, 'smecar', (message) => {
    const { member, mentions } = message
    const avatar = "https://cdn.discordapp.com/avatars/"+message.author.id+"/"+message.author.avatar+".jpeg"
      const target = mentions.users.first()
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id)

    const exampleEmbed = new Discord.MessageEmbed()
    .setThumbnail("https://cdn.discordapp.com/avatars/"+target.id+"/"+target.avatar+".jpeg")
    .setTitle('Tražiš smećara? Mislim da imam propalicu koja je prava za takav posao!')
    .setColor("#0099ff")
    .addFields(
      {name: `Ime i Prezime`, value: target.username+` Smećarić`},
      {name: `Poslodavac`, value: `Komunalac d.o.o`}
    )
  
    message.channel.send(exampleEmbed);
  } else {
    const Embed = new Discord.MessageEmbed()
    .setThumbnail(avatar)
    .setTitle('Tražiš smećara? Mislim da imam propalicu koja je prava za takav posao!')
    .setColor("#0099ff")
    .addFields(
      {name: `Ime i Prezime`, value: message.author.username+` Smećarić`},
      {name: `Poslodavac`, value: `Komunalac d.o.o`}
    )
  
    message.channel.send(Embed);
  }
})
}

/* Avatar Komanda */
{
command(client, 'avatar', (message) => {
  const { member, mentions } = message
  const avatar = "https://cdn.discordapp.com/avatars/"+message.author.id+"/"+message.author.avatar+".jpeg"
    const target = mentions.users.first()
    if (target) {
      const targetMember = message.guild.members.cache.get(target.id)

  const exampleEmbed = new Discord.MessageEmbed()
  .setImage("https://cdn.discordapp.com/avatars/"+target.id+"/"+target.avatar+".jpeg")
  .setTitle(`Avatar od ${target.username}`)
  .setColor("#0099ff")

  
  message.channel.send(exampleEmbed);
} else {
  const Embed = new Discord.MessageEmbed()
  .setImage(avatar)
  .setTitle(`Avatar od ${message.author.username}`)
  .setColor("#0099ff")

  message.channel.send(Embed);
}
})
}

/* Serverinfo komanda */
command(client, 'serverinfo', (message) => {
  const { guild } = message

  const { name, region, memberCount, owner, } = guild
  const icon = guild.iconURL()

  const embed = new Discord.MessageEmbed()
    .setTitle(`Server info za "${name}"`)
    .setThumbnail(icon)
    .setColor("#0099ff")
    .addFields(
      {
        name: 'Vlasnik',
        value: owner.user.tag,
      },
      {
        name: 'Članovi',
        value: memberCount,
      },
      {
        name: 'Regija',
        value: region,
      }
    )

  message.channel.send(embed)
})
/*================================================= E M B E D  K O M A N D E ================================================================*/

/*================================================= P E D J A  K O M A N D E ================================================================*/
/* Reci komanda */
client.on("message", (message) => {
  const { member, mentions } = message
  if(message.content.startsWith(`${prefix}reci`)) {
  
  const args = message.content.split(" ").slice(1).join(" ");

  if(!args.length) {
    return message.channel.send(`${message.author} niste ništa rekli, recite nešto!`);
  }

  if(args) {
  let Embed = new Discord.MessageEmbed()
  .setAuthor(message.author.username, message.author.displayAvatarURL())
  .setDescription(args)
  .setColor("#0099ff")
  .setFooter(client.user.username, client.user.displayAvatarURL())
  if(message.content.startsWith(`${prefix}reci`)) {
    message.delete()
    message.channel.send(Embed);
  }};
}});

/* PitajPedju */
client.on("message", (message) => {
  const { member, mentions } = message
  if(message.content.startsWith(`${prefix}pitajpedju`)) {
    const args = message.content.slice(11);

    if (!args.length) {
      return message.channel.send(
        `${message.author} niste ništa pitali, pitajte nešto.`
      );
    }

    const Odgovori = [
      "da.",
      "ne.",
      "možda.",
      "sigurno.",
      "vjerovatno.",
      "definitivno.",
      "nikako.",
      "nema šanse.",
      "na ovo pitanje ne mogu dati odgovor.",
      "ne odgovaram na pitanjima smećarima kao što si ti!",
      "ne zamaraj me svojim glupim pitanjima, smećaru."
    ];

    const Odgovor = Math.floor(Math.random() * Odgovori.length);

    let odgovaranjeEmbed = new Discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.displayAvatarURL())
      .setColor("#0099ff")
      .setTitle("Pedjin odgovor:")
      .setDescription(`${message.author}, ${Odgovori[Odgovor]}`)
    message.channel.send(odgovaranjeEmbed)
  }
})

/* Pedja Komanda */
client.on("message", (message) => {
  const { member, mentions } = message
  if(message.content.startsWith(`${prefix}pedja`)) {
  message.delete()

    const Odgovori = [
      `${message.author} kako ti mogu pomoći?`,
      `${message.author}, kako se usuđuješ spominjati moje ime?!`,
      `${message.author} što želiš od mene, smećaru?`,
      `${message.author} šta hoćeš?`
    ];

    const Odgovor = Math.floor(Math.random() * Odgovori.length);

    message.channel.send(Odgovori[Odgovor])
  }
})

/* Opedji Komanda */
{
  command(client, "opedji", (message) => {
    const developer = message.guild.members.cache.get("427163736520917011")

    var clientEmbed = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.displayAvatarURL())
    .setColor("#0099ff")
    .addFields(
      {name: 'Development', value:  `${developer.user.username}`},
      {name: 'Kod', value: 'JavaScript'},
      {name: 'Verzija', value: '1.0'},
      {name: 'Poruka Developera', value: 'Dobrodošli u prvu verziju našeg dragog bota Pedje!\nPedja je izkodiran u JavaScriptu, te sve njegove komande i funckije možete pronaći na /help.\n Ukoliko imate bilo kakve ideje za Pedju obavezno ih predložite komandom /prijedlog [prijedlog],\nsve vaše ideje i prijedloge ćemo uzimati u obzir i preko njih ćemo praviti nove apdejte (a bit će ih puno).\n Također, ukoliko ste našli neki bug vezan za Pedju, obavezno mi ga prijavite kako bi ga što prije riješili.\nOvo je prva verzija Pedje te ima dosta zanimljivih komandi,\na na budućim apdejtima ćemo dodavati sve više funkcija i komandi.\n Uživajte!'}
    )
    .setDescription('O Pedji:')
    .setFooter(developer.user.username, developer.user.displayAvatarURL())
  
    message.channel.send(clientEmbed);
  })
  }
/*================================================= P E D J A  K O M A N D E ================================================================*/

/*================================================= ANTI AD, ANTI COM ================================================================*/
antiAd(client)

antiCom(client)
/*================================================= ANTI AD, ANTI COM ================================================================*/

/*================================================= P R I J E D L O Z I ================================================================*/
command(client, 'prijedlog', (message) => {
  const { member, mentions } = message
  const args = message.content.slice(11);
  message.delete();

  if (!args.length) {
    return message.channel.send(
      `${message.author} niste ništa predložili, predložite nešto!`
    );
  }
  const exampleEmbed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .setTitle("PRIJEDLOG")
      .setDescription(args)
      .setFooter("👍 - Svidja mi se | 👎 - Ne svidja mi se | ✅ - Biti će Dodano | ❌ - Neće biti dodano")
      .setTimestamp();
    

      client.channels.cache
      .get("806592714124558357")
      .send(exampleEmbed)
      .then((msg) => {
        msg.react("👍");
        msg.react("👎");
      }
      )
      }
)
/*================================================= P R I J E D L O Z I ================================================================*/
0
/*================================================= V E R I F I K A C I J A ================================================================*/
{
  command(client, 'verifikacija', (message) => {
    const { member, mentions } = message 
    if (
      member.hasPermission('MOVE_MEMBERS')
    ) {
      const target = mentions.users.first()
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
        const bsRole = message.guild.roles.cache.find(
          (role) => role.name === 'BS'
         );
        targetMember.roles.add(bsRole);
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#00FF00")
        .setTitle("VERIFIKACIJA")
        .setDescription(`Uspješno ste verificirani od strane ${message.author.username}.\n Želimo vam lijep provod na našem serveru, ako vam nešto nije jasno ili trebate bilo kakvu pomoć, naš Staff Team je tu za vas.`)
        .setFooter("Čestitke! 🎉")
        .setTimestamp();
        target
        .send(exampleEmbed)
        .catch(() => message.channel.send("Korisnik nije primio poruku za verifikaciju."))
        .then(() => message.channel.send("Korisnik je uspješno primio poruku za verifikaciju."));
        message.channel.send(`Korisnik je uspješno verificiran.`);
      } else {
        message.channel.send(`Navedite koga želite verificirati.`)
      }
      } else {
      message.channel.send(
        `Nemate permisije za korišćenje ove komande.`
      )
  }}
  )
  }
/*================================================= V E R I F I K A C I J A ================================================================*/

/*================================================= R E P O R T ================================================================*/
/* Prihvacanje reportova */
command(client, 'prihvatireport', (message) => {
  const { member, mentions } = message 
  if (
    member.hasPermission('MOVE_MEMBERS')
  ) {
  const target = mentions.users.first()
  if (target) {
    const targetMember = message.guild.members.cache.get(target.id)
    const ime = message.author.username
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#00FF00")
    .setTitle("REPORT PRIHVAĆEN")
    .setDescription(`Vaš report je prihvaćen od strane `+ime+`\n Hvala vam na prijavi, korisnik će biti kažnjen u što skorijem roku od strane članova Staff Teama.`)
    .setFooter("Balkan School Discord Staff Team")
    .setTimestamp();

    targetMember
      .send(exampleEmbed)
      .catch(() => message.channel.send(`Korisnik nije primio odgovor na report.`))
      .then(() => message.channel.send(`Korisnik je uspješno primio odgovor na report.`));
      message.channel.send(`Report je uspješno riješen.`);
    } else {
      message.channel.send(`Navedite kome želite odgovoriti na report.`)
    }
    } else {
    message.channel.send(
      `Nemate permisije za korišćenje ove komande.`
    )
    }}
);

/* Odbijanje reporta */
command(client, 'odbijreport', (message) => {
  const { member, mentions } = message 
  if (
    member.hasPermission('MOVE_MEMBERS')
  ) {
  const args = message.content.substring(prefix.length).split(" ");

  switch (args[0]) {
    case "odbijreport":

    if (!args.length) {
      return message.channel.send(
        `${message.author} niste naveli sve stavke komande (.odbijreport [korisnik] [razlog]).`
      );
    }

    const korisnik  = message.guild.member(mentions.users.first() || message.guild.members.cache.get(args[1]));

    const razlog = args[2]

    const ime = message.author

   if (!korisnik) {
     message.channel.send(`${message.author} niste naveli korisnika kojem odbijate report.`)
   }

   if (!razlog) {
    message.channel.send(`${message.author} niste naveli razlog odbijanja report-a.`)
  }

   if (korisnik, razlog) {
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor("#ff3333")
    .setTitle("REPORT ODBIJEN")
    .setDescription(`Vaš report je odbijen od strane ${ime}\nRazlog: ${razlog}`)
    .setFooter("Balkan School Discord Staff Team")
    .setTimestamp();

    korisnik
      .send(exampleEmbed)
      .catch(() => message.channel.send(`Korisnik nije primio odgovor na report.`))
      message.channel.send(`Report je uspješno riješen.`);
    }}} else {
    message.channel.send(
      `Nemate permisije za korišćenje ove komande.`
    )
    }}
  );

/* Report komanda */
command(client, 'report', (message) => {
const { member, mentions } = message
const args = message.content.substring(prefix.length).split(" ");

switch (args[0]) {
  case "report":

  const korisnik  = message.guild.member(mentions.users.first() || message.guild.members.cache.get(args[1]));

  if(!korisnik) {
    message.delete()
    message.channel.send(`${message.author} niste naveli korisnika kojeg prijavljujete.`)
  }

  const razlog = args[2]

  if(!razlog) {
    message.delete()
    message.channel.send(`${message.author} niste naveli razlog prijavljivanja.`)
  }

  if(korisnik) {
  if(razlog) {
  message.delete()
  const obavijest = new Discord.MessageEmbed()
  .setColor("#0099ff")
  .setTitle("REPORT")
  .setDescription("Vaša prijava je uspiješno poslana,\nte je trenutno u procesu riješavanja.\nNakon riješavanja ćete dobiti privatnu poruku u kojoj\nćete imati sve informacije o riješenju vaše prijave.")
  .setFooter("Balkan School Discord Staff Team")
  .setTimestamp();
  message.author
  .send(obavijest)
  const Embed = new Discord.MessageEmbed()
  .setColor("#0099ff")
  .setAuthor(message.author.username, message.author.displayAvatarURL())
  .setTitle("REPORT")
  .addFields(
    {name: "Korisnik", value: `${korisnik}`},
    {name: "Razlog", value: `${razlog}`}
  )
  .setFooter(client.user.username, client.user.displayAvatarURL())
  .setTimestamp();

  client.channels.cache
  .get("807252180775075890")
  .send(Embed)
}}}}
)
/*================================================= R E P O R T ================================================================*/

/*================================================= K A N A L I =================================================*/

/* Pravljenje kanala
command(client, "napravikanal", (message) => {
  if (message.channel.name.includes("privatni-kanal")) {
    const args = message.content.substring(prefix.length).split(" ");
    const kategorija = "807977652996145183"

    switch (args[0]) {
        case "napravikanal":

    const imekanala = args[1]

    if (!imekanala) {
      return message.channel.send(
        `${message.author} niste naveli ime kanala.`
    )}

    if(imekanala) {
    message.guild.channels
    .create(imekanala, { parent: kategorija }, {
      type: "voice",
    })
    .then((channel) => {
      channel.setUserLimit(10)
    })
  
  message.delete()
  message.channel.send(`${message.author} vaš privatni kanal je uspješno napravljen.`)
}}} else {
  message.channel.send(`${message.author} ovu komandu morate koristiti u kanalu koji je namijenjen za to.`)}
})
*/

/* Brisanje kanala
command(client, "obrisikanal", (message) => {
  const { member, mentions } = message
  const channel = mentions.channels.first()
  if(!channel) {
    message.channel.send(`${message.author} navedite koji kanal želite obrisati.`)
  }
  if (channel) {
    const targetChannel = message.guild.channels.cache.get(channel.id)

  targetChannel.delete();
  
  message.channel.send(`${message.author} kanal uspješno obrisan.`)
}})
*/
/*================================================= K A N A L I =================================================*/

/* ================================================= M O D E R A C I J A ==================================================================*/

/* Mute komanda
command(client, 'mute', async (message) => {
  const { member, mentions } = message
  if (
    member.hasPermission('MUTE_MEMBERS')
  ) {
  const args = message.content.substring(prefix.length).split(" ");

  switch (args[0]) {
      case "mute":
          const korisnik  = message.guild.member(mentions.users.first() || message.guild.members.cache.get(args[1]));
          if(!korisnik) {
            message.channel.send(`${message.author} ne mogu pronaći navedenog korisnika.`)
          }
          const mutedrole = message.guild.roles.cache.find(role => role.name === "Muted");
         

          if(!mutedrole) {
            message.channel.send(`${message.author} ne mogu pronaći muted role.`)
          }


          const vrijeme = args[2];
          if(!vrijeme) {
            message.channel.send(`${message.author} niste naveli vrijeme trajanja mute-a.`);
          }

          if(korisnik) {
          if(vrijeme) {
          korisnik.roles.add(mutedrole);

        let razlog = args[3];
        client.channels.cache
        .get("807978146384052255")
        .send((new Discord.MessageEmbed()
        .setAuthor(korisnik.user.username, korisnik.user.displayAvatarURL())
        .setColor("#FA2828")
        .setTitle("MUTE")
        .addFields(
          {name: "Korisnik", value: `${korisnik}`},
          {name: "Moderator", value: `${message.author}`},
          {name: "Razlog", value: `${razlog}`}
        )))
        message.delete()
        message.channel.send(`${message.author} korisnik je mute-ovan.`)

        setTimeout(function(){
          korisnik.roles.remove(mutedrole.id);
          client.channels.cache
          .get("807978146384052255")
          .send((new Discord.MessageEmbed()
          .setAuthor(korisnik.user.username, korisnik.user.displayAvatarURL())
          .setColor("#00FF00")
          .setTitle("UNMUTE")
          .addFields(
            {name: "Korisnik", value: `${korisnik}`},
            {name: "Moderator", value: `Pedja`},
          )))
          }, ms(vrijeme));
  }}
  try {
    nonExistentFunction();
  } catch (error) {
    console.error(error);
  }
  }} else {
    message.delete()
    message.channel.send(`${message.author} nemate permisije za korišćenje ove komande.`)
  }
});


/* Unmute komanda 
command(client, 'unmute', async (message) => {
  const { member, mentions } = message
  const args = message.content.slice(8);

  if (!args.length) {
    return message.channel.send(
      ` ${message.author} niste naveli sve stavke komande (.unmute [korisnik]).`
    );
  }

  if (
    member.hasPermission('MUTE_MEMBERS')
  ) {
    const target = mentions.users.first()
    if (target) {
      const targetMember = message.guild.members.cache.get(target.id)
      const mutedRole = message.guild.roles.cache.find(
        (role) => role.name === 'Muted'
       );
      targetMember.roles.remove(mutedRole),
      message.channel.send(`${message.author} korisnik je unmute-ovan.`)

      client.channels.cache
      .get("807978146384052255")
      .send((new Discord.MessageEmbed()
      .setAuthor(target.username, target.displayAvatarURL())
      .setColor("#00FF00")
      .setTitle("UNMUTE")
      .addFields(
        {name: "Korisnik", value: `${target}`},
        {name: "Moderator", value: `${message.author}`},
      )))
    }  
    try {
      nonExistentFunction();
    } catch (error) {
      console.error(error);
    }
    } else {
      message.channel.send(`${message.author} nemate permisije za korišćenje ove komande.`)
    }

})

/* Kick Komanda
command(client, "kick", async (message) => {
  const { member, mentions } = message
  const args = message.content.substring(prefix.length).split(" ");

  switch (args[0]) {
      case "kick":
  
  if (
    member.hasPermission("KICK_MEMBERS")
  ) {
    const korisnik  = message.guild.member(mentions.users.first() || message.guild.members.cache.get(args[1]));

    if(!korisnik) {
      message.channel.send(`${message.author} ne mogu pronaći navedenog korisnika.`)
    }

    if(korisnik) {
      korisnik.kick()
      message.channel.send(`${message.author} korisnik je kick-ovan.`)
      
      let razlog = args[2];
      client.channels.cache
      .get("807978146384052255")
      .send((new Discord.MessageEmbed()
      .setAuthor(korisnik.user.username, korisnik.user.displayAvatarURL())
      .setColor("#FA2828")
      .setTitle("KICK")
      .addFields(
        {name: "Korisnik", value: `${korisnik}`},
        {name: "Moderator", value: `${message.author}`},
        {name: "Razlog", value: `${razlog}`}
      )))
    }
}}})

/* Ban Komanda
command(client, "ban", async (message) => {
  const { member, mentions } = message
  const args = message.content.substring(prefix.length).split(" ");

  switch (args[0]) {
      case "ban":
  
  if (
    member.hasPermission("BAN_MEMBERS")
  ) {
    const korisnik  = message.guild.member(mentions.users.first() || message.guild.members.cache.get(args[1]));

    if(!korisnik) {
      message.channel.send(`${message.author} ne mogu pronaći navedenog korisnika.`)
    }

    if(korisnik) {
      korisnik.kick()
      message.channel.send(`${message.author} korisnik je banovan.`)
      
      let razlog = args[2];
      client.channels.cache
      .get("807978146384052255")
      .send((new Discord.MessageEmbed()
      .setAuthor(korisnik.user.username, korisnik.user.displayAvatarURL())
      .setColor("#7f0000")
      .setTitle("BAN")
      .addFields(
        {name: "Korisnik", value: `${korisnik}`},
        {name: "Moderator", value: `${message.author}`},
        {name: "Razlog", value: `${razlog}`}
      )))
    }
}}})

/* Nuke komanda
command(client, "nuke", (message) => {
  if (message.member.hasPermission("ADMINISTRATOR")) {
    message.channel.messages.fetch().then((results) => {
      message.channel.bulkDelete(results)
    })
  }
})

/* Clear komanda
command(client, "clear", (message) => {
  const { member, mentions } = message
  if(member.hasPermission("MANAGE_MESSAGES")) {

  var cmd = message.content.toLowerCase().slice(prefix.length).split(" ")[0]
  var args = message.content.split(" ")
  switch(cmd) {
    case "clear":
      args[1]? message.channel.send(`\`${args[1]}\` poruka je obrisano.`).then(msg => {
        msg.delete()
      })
      : message.channel.send(`${message.author} napišite koliko poruka želite obrisati.`)
      message.channel.bulkDelete(args[1])
    }
  } else {
    message.channel.send(`${message.author} nemate permisije za korišćenje ove komande.`)
  }
})

/* ================================================= M O D E R A C I J A ==================================================================*/

/* ==================================================== .JSON KOMANDE =====================================================================*/
/* Psovanje/vrijeđanje
client.on("message", async message => {
  const { member, mentions, channel } = message
  const tag = `<@${member.id}>`
  const target = message.author
  if (message.author.bot) return;
  if(!message.member.hasPermission("ADMINISTRATOR", "KICK_MEMBERS")) {
  let confirm = false;
   
  var i;
  for(i = 0;i < ruznerijeci.length; i++) {
    
    if(message.content.toLowerCase().includes(ruznerijeci[i].toLowerCase()))
      confirm = true;
    
  } 
  if(confirm) {
    const targetMember = message.guild.members.cache.get(target.id)
    const mutedRole = message.guild.roles.cache.find(
      (role) => role.name === 'Muted'
     );
    targetMember.roles.add(mutedRole);
    message.delete()
    message.channel.send(`${tag} automatski si muteovan na 3h zbog psovanja/vrijeđanja.`)
    client.channels.cache
    .get("807978146384052255")
    .send((new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor("#FA2828")
    .setTitle("MUTE")
    .addFields(
      {name: "Korisnik", value: `${message.author}`},
      {name: "Moderator", value: `Pedja`},
      {name: "Razlog", value: `Psovanje/vrijeđanje`}
    )))

    setTimeout(function(){
      targetMember.roles.remove(mutedRole.id);
      client.channels.cache
      .get("807978146384052255")
      .send((new Discord.MessageEmbed()
      .setAuthor(target.username, target.displayAvatarURL())
      .setColor("#00FF00")
      .setTitle("UNMUTE")
      .addFields(
        {name: "Korisnik", value: `${target}`},
        {name: "Moderator", value: `Pedja`},
      )))
      }, ms("3h"));
  }  
  try {
    nonExistentFunction();
  } catch (error) {
    console.error(error);
  }

/* Ćirilica */
client.on("message", async message => {
  if (message.author.bot) return;
  if(!message.member.hasPermission("ADMINISTRATOR", "KICK_MEMBERS")) {
  let confirm = false;
   
  var i;
  for(i = 0;i < cirilica.length; i++) {
    
    if(message.content.toLowerCase().includes(cirilica[i].toLowerCase()))
      confirm = true;
    
  } 
  if(confirm) {
    message.delete()
    message.channel.send(`${tag} ćirilica je zabranjena! Pročitaj pravila servera.`)
    client.channels.cache
    .get("807978146384052255")
    .send((new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor("#F3FF00")
    .setTitle("WARN")
    .addFields(
      {name: "Korisnik", value: `${message.author}`},
      {name: "Moderator", value: `Pedja`},
      {name: "Razlog", value: `Ćirilica`}
    )))
  }  
  try {
    nonExistentFunction();
  } catch (error) {
    console.error(error);
  }

/* Smijanje */
  if (message.author.bot) return;
  if(!message.member.hasPermission("ADMINISTRATOR", "KICK_MEMBERS")) {
  let confirm = false;
   
  var i;
  for(i = 0;i < smijeh.length; i++) {
    
    if(message.content.toLowerCase().includes(smijeh[i].toLowerCase()))
      confirm = true;
    
  }
  if(confirm) {
    return message.channel.send("Šta je smiješno smećari?")
  }  
  try {
    nonExistentFunction();
  } catch (error) {
    console.error(error);
  }
/* Adnan */
  if (message.author.bot) return;
  if(!message.member.hasPermission("ADMINISTRATOR", "KICK_MEMBERS")) {
  let confirm = false;
   
  var i;
  for(i = 0;i < adnan.length; i++) {
    
    if(message.content.toLowerCase().includes(adnan[i].toLowerCase()))
      confirm = true;
    
  }
  if(confirm) {
    return message.channel.send(`${tag} ne spominji ime tog smećara!`)
  }  
  try {
    nonExistentFunction();
  } catch (error) {
    console.error(error);
  }

/* Traženje Admina
  if (message.author.bot) return;
  if(!message.member.hasPermission("ADMINISTRATOR", "KICK_MEMBERS")) {
  let confirm = false;
   
  var i;
  for(i = 0;i < admin.length; i++) {
    
    if(message.content.toLowerCase().includes(admin[i].toLowerCase()))
      confirm = true;
    
  }
  if(confirm) {
    message.channel.send(`${tag} treba ti Admin? Potraži ga na forumu ili traži pomoć od članova našeg Discord servera! Jest da su smećari, ali siguran sam da će ti probati pomoći. Usput, napiši .pravila te ih pročitaj, kako te ne bih morao kažnjavati. `)
    client.channels.cache
    .get("807978146384052255")
    .send((new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor("#F3FF00")
    .setTitle("WARN")
    .addFields(
      {name: "Korisnik", value: `${message.author}`},
      {name: "Moderator", value: `Pedja`},
      {name: "Razlog", value: `Traženje Admina`}
    )))
  }  
  try {
    nonExistentFunction();
  } catch (error) {
    console.error(error);
  }
{
}
}
}
}
}
}
})
/* ==================================================== .JSON KOMANDE =====================================================================*/
{
}
}
}
}
}
)

/* Client login */
client.login(config.token)