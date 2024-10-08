endpoint = `https://xakibin-fs8d.onrender.com`
apikey = `SAKIBIN-FREE-SY6B4X`
message_list = [{
    icon: 'fa-solid fa-star-exclamation',
    title: 'The website went live',
    timing: '1655701877368'
}];

item_list = [
    {
        event: 'HOT',
        name: 'APIKEY',
        icon: 'fas fa-terminal',
        item: [{
                "url": endpoint + '/apikey?type=register&name=${whatever name you want}',
                "name": "Create APIKEY"
            },
            {
                "url": endpoint + '/apikey?type=checker&apikey=SAKIBIN-FREE-SY6B4X',
                "name": "Check APIKEY"
            }
        ]
    },
{
  event: 'HOT',
        name: 'A.I',
        icon: 'fa-solid fa-ghost',
        item: [{
                "url": endpoint + '/api/blackbox?prompt=hi&apikey=' + apikey,
                "name": "Black A.i"
            },
            {
                "url": endpoint + '/api/gpt?msg=hi&apikey=' + apikey,
                "name": "ChatGPT"
            }
        ]
},
 {
event: 'HOT',
name: 'Text Edit 200+',
icon: 'fa-solid fa-wand-magic-sparkles',
  item: [{
                "url": endpoint + '/api/textpro?number=1&text=Sakibin&apikey=' + apikey,
                "name": "Textpro (replace number)"
            },
            {
                "url": endpoint + '/api/photooxy/4?text=Sakibin&apikey=' + apikey,
                "name": "Photooxy (1-15)"
            }
        ]
},
   {
     event: 'HOT',
     name: 'Image edit via Url',
     icon: 'fa fa-area-chart',
     item: [{
         "url": endpoint + '/api/maker/darkness?url=https://i.imgur.com/V42C9yt.jpg&no=40&apikey=' + apikey,
         "name": "Darkness"
               },
      {
        "url": endpoint + '/api/maker/blur?url=https://i.imgur.com/V42C9yt.jpg&apikey=' + apikey,
        "name": "Blur"
      },
      {

         "url": endpoint + '/api/maker/pixelate?url=https://i.imgur.com/V42C9yt.jpg&no=20&apikey=' + apikey,

         "name": "Pixelate"
               },
               {

         "url": endpoint + '/api/maker/circle?url=https://i.imgur.com/V42C9yt.jpg&apikey=' + apikey,

         "name": "Circle"
               },
               {

         "url": endpoint + '/api/maker/invert?url=https://i.imgur.com/V42C9yt.jpg&apikey=' + apikey,

         "name": "Invert"
               },
               {

         "url": endpoint + '/api/maker/facepalm?url=https://i.imgur.com/V42C9yt.jpg&apikey=' + apikey,

         "name": "Facepalm"
               },
            {
         "url": endpoint + '/api/maker/beautiful?url=https://i.imgur.com/V42C9yt.jpg&apikey=' + apikey,

         "name": "Beautiful"
               },
          {
               
                      "url": endpoint + '/api/maker/rainbow?url=https://i.imgur.com/V42C9yt.jpg&apikey=' + apikey,
               
                      "name": "Rainbow"
                    },
         {
    
           "url": endpoint + '/api/maker/wanted?url=https://i.imgur.com/V42C9yt.jpg&apikey=' + apikey,
    
           "name": "Wanted"
         },
            {
       
              "url": endpoint + '/api/maker/trigger?url=https://i.imgur.com/V42C9yt.jpg&apikey=' + apikey,
       
              "name": "Trigger"
            },
             {
        
               "url": endpoint + '/api/maker/wasted?url=https://i.imgur.com/V42C9yt.jpg&apikey=' + apikey,
        
               "name": "Wasted"
             },
           ]
   },
    {
        event: 'HOT',
        name: 'Create anime avatars',
        icon: 'fa-solid fa-user-tie',
        item: [{
                "url": endpoint + "/taoanhdep/list",
                "name": "List of characters"
            },
            {
                "url": endpoint + "/taoanhdep/search?type=name&name=luffy",
                "name": "Search for characters by name"
            },
            {
                "url": endpoint + "/taoanhdep/search?type=id&id=135",
                "name": "Search for characters by ID"
            },
            {
                "url": endpoint + "/taoanhdep/search?type=movie&movie=One Piece",
                "name": "Search for characters by movie name"
            },
            {
                "url": endpoint + "/taoanhdep/data",
                "name": "Anime image creation data"
            },   
            {
                "url": endpoint + "/taoanhdep/avatarwibu?id=1&chu_nen=Sakibin&chu_ky=Sinha","name": "Create avatars"
            }
        ]
    },
    {
        event: 'HOT',
        name: 'Code',
        icon: 'fa-solid fa-code',
        item: [{
                "url": 'https://deobfuscate.relative.im/',
                "name": "Deobfuscate"
            },
            {
                "url": 'https://obfuscator.io/',
                "name": "Obfuscate"
            }
        ]
    },
    {
        event: 'HOT',
        name: 'Mail 10 minutes',
        icon: 'fas fa-envelope-open-text',
        item: [{
                "url": "https://10minutemail.net/address.api.php?new=1",
                "name": "Create Mail"
            },
            {
                "url": "https://10minutemail.net/address.api.php?more=1",
                "name": "More Mail"
            },
            {
                "url": "https://10minutemail.net/address.api.php",
                "name": "Get Mail"
            },
            {
                "url": "https://10minutemail.net/address.api.php?check=1",
                "name": "Check Mail"
            }   
        ]
    },
    {
        event: 'HOT',
        name: 'Cover & EmojiMix',
        icon: 'fa-solid fa-diagram-lean-canvas',
        item: [
            {
                "url": endpoint + "/fbcover/v1?name=Sakibin&color=red&address=Bangladesh,Comilla&email=mdsinha62@gmail.com&subname=Sinha&sdt=01730944***&uid=100065445284007",
                "name": "Facebook Cover v1"
            },
            {
                "url": endpoint + "/fbcover/v3?name=Sakibin&birthday=26/02&love=Juhi&location=Bangladesh&hometown=Comilla&follow=2591&gender=Male&uid=100065445284007",
                "name": "Facebook Cover v2"
            },
                 {



         "url": endpoint + '/api/maker/emojimix?emoji1=😱&emoji2=👻&apikey=' + apikey,

         "name": "Emoji Mix"
               },
         
        ]
    },
    {
        event: 'HOT',
        name: 'Youtube',
        icon: 'fa-brands fa-youtube',
        item: [{
                "url": endpoint + '/youtube?search=Sơn Tùng',
                "name": "Youtube Search"
            },
            {
                "url": endpoint + '/youtube?GetVideoId=https://www.youtube.com/watch?v=Jk38OqdAQxc',
                "name": "Get Video Id"
            },
            {
                "url": endpoint + '/youtube?GetVideoDetails=Jk38OqdAQxc',
                "name": "Get Video Details"
            },
            {
                "url": endpoint + '/youtube?downloadVideo=Jk38OqdAQxc',
                "name": "Youtube Downloader"
            }
        ]
    },
    {
        event: 'HOT',
        name: 'Banking',
        icon: 'fas fa-university',
        item: [{
                "url": endpoint + "/bank/check?ID=100065445284007",
                "name": "Check Bank ID"
            },
            {
                "url": endpoint + "/bank/register?senderID=100065445284007&name=Nguyễn Hải Đăng ꪜ",
                "name": "Create Bank"
            },
            {
                "url": endpoint + "/bank/find?type=${STK}&${ID}&${name}=${result}",
                "name": "Find Bank (Code)"
            },
            {
                "url": endpoint + "/bank/find?type=ID&ID=100065445284007",
                "name": "Find Bank (Example)"
            },
            {
                "url": endpoint + "/bank/password?bka=get&dka=100065445284007",
                "name": "Get Password"
            },
            {
                "url": endpoint + "/bank/password?bka=recovery&dka=100065445284007&fka=26020712",
                "name": "New Password"
            },   
            {
                "url": endpoint + "/bank/send?senderID=100065445284007&money=99999999999",
                "name": "Recharge Money Bank"
            },
            {
                "url": endpoint + "/bank/top",
                "name": "Top Bank"
            },
            {
                "url": endpoint + "/bank/pay?type=STK&senderID=100065445284007&STK=705751495&money=9999999999&password=26020712",
                "name": "Pay Bank (STK)"
            },
            {
                "url": endpoint + "/bank/pay?type=ID&senderID=100065445284007&userID=100065445284007&money=9999999999&password=26020712",
                "name": "Pay Bank (UID)"
            },
            {
                "url": endpoint + "/bank/get?ID=100065445284007&money=99999999999999&password=26020712",
                "name": "Withdraw Money Bank"
            }   
        ]
    },
    {
        event: 'HOT',
        name: 'Pinterest',
        icon: 'fa-brands fa-pinterest',
        item: [{
            "url": endpoint + '/pinterest?search=Naruto',
            "name": "Search"
        }]
    },
    {
        event: 'HOT',
        name: 'Random Images',
        icon: 'fa-solid fa-images',
        item: [{
                "url": endpoint + '/images/anime?apikey=SAKIBIN-FREE-SY6B4X',
                "name": "Anime"
            },
            {
                "url": endpoint + '/images/chitanda?apikey=SAKIBIN-FREE-SY6B4X',
                "name": "Chitanda"
            },
            {
                "url": endpoint + '/images/cosplay?apikey=SAKIBIN-FREE-SY6B4X',
                "name": "Cosplay"
            },
            {
                "url": endpoint + '/images/gaixinhvn?apikey=SAKIBIN-FREE-SY6B4X',
                "name": "Girl Vietnam"
            },
            {
                "url": endpoint + '/images/girl?apikey=SAKIBIN-FREE-SY6B4X',
                "name": "Girl"
            },
            {
                "url": endpoint + '/images/jimmy?apikey=SAKIBIN-FREE-SY6B4X',
                "name": "Jimmy"
            },
            {
                "url": endpoint + '/images/kana?apikey=SAKIBIN-FREE-SY6B4X',
                "name": "Kana"
            },
            {
                "url": endpoint + '/images/khanhhuyen?apikey=SAKIBIN-FREE-SY6B4X',
                "name": "Khánh Huyền"
            },
            {
                "url": endpoint + '/images/kurumi?apikey=SAKIBIN-FREE-SY6B4X',
                "name": "Kurumi"
            },
            {
                "url": endpoint + '/images/lebong?apikey=SAKIBIN-FREE-SY6B4X',
                "name": "Lê Bống"
            },
            {
                "url": endpoint + '/images/lnd?apikey=SAKIBIN-FREE-SY6B4X',
                "name": "Linh Ngọc Đàm"
            },
            {
                "url": endpoint + '/images/loli?apikey=SAKIBIN-FREE-SY6B4X',
                "name": "Loli"
            },
            {
                "url": endpoint + '/images/ngoctrinh?apikey=SAKIBIN-FREE-SY6B4X',
                "name": "Ngoc Trinh"
            },
            {
                "url": endpoint + '/images/rem?apikey=SAKIBIN-FREE-SY6B4X',
                "name": "Rem"
            },
            {
                "url": endpoint + '/images/sagiri?apikey=SAKIBIN-FREE-SY6B4X',
                "name": "Sagiri"
            },
            {
                "url": endpoint + '/images/siesta?apikey=SAKIBIN-FREE-SY6B4X',
                "name": "Siesta"
            },
            {
                "url": endpoint + '/images/umaru?apikey=SAKIBIN-FREE-SY6B4X',
                "name": "Umaru"
            },
            {
                "url": endpoint + '/images/wallpaper?apikey=SAKIBIN-FREE-SY6B4X',
                "name": "Wallpaper"
            } 
        ]
    },

    {
        event: 'HOT',
        name: 'Simsimi',
        icon: 'fa-solid fa-message-bot',
        item: [{
                "url": endpoint + '/sim?type=ask&ask=who is this server admin?',
                "name": "Ask"
            },
            {
                "url": endpoint + '/sim?type=teach&ask=who is this server admin?&ans=this server admin is Sakibin',
                "name": "Teach"
            }
        ]
    },
    {
        event: 'HOT',
        name: 'Utilities',
        icon: 'fa-solid fa-lamp-street',
        item: [{
                "url": endpoint + '/imgur?link=https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg',
                "name": "Imgur Upload"
            },
            {
                "url": endpoint + '/random/useragent',
                "name": "Random User-Agent"
            },
            {
                "url": endpoint + '/covid?country=viet%20nam',
                "name": "COVID 19 DATA"
            },
            {
                "url": endpoint + '/uptimerobot?url=https://docs-api.jrtxtracy.repl.co&key=jrtxtracy&monitor=JRT',
                "name": "Uptime Robot"
            }  
        ]
    },
    {
        event: 'HOT',
        name: 'ADMIN',
        icon: 'fas fa-user-headset',
        item: [{
            event: 'DO NOT SPAM',
            url: 'https://www.facebook.com/imsakibin007?mibextid=9R9pXO',
            name: 'Facebook'
        },
        {
            event: 'HOT',
            url: 'https://github.com/sakibin/',
            name: 'Github'
        }
        ]
    }
];
