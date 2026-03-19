const products = [
  // CANON
  {
    id: 1, brand: "Canon", name: "Canon EOS R5", category: "Mirrorless", price: "PKR 899,000",
    image: "https://bnwcollections.com/uploads/products/1686983998Canon%20R5%20Digital%20Camera%20(Body%20Only)-bnw_11zon.webp",
    badge: "Bestseller",
    details: {
      sensor: "45MP Full-Frame CMOS", video: "8K RAW", iso: "100-51200", fps: "20fps",
      af: "Dual Pixel CMOS AF II", stabilization: "5-Axis IBIS", weight: "738g",
      description: "Canon EOS R5 ek professional mirrorless camera hai jo 45MP full-frame sensor ke saath aata hai. 8K video recording aur 20fps burst shooting isko photographers aur videographers dono ke liye perfect banati hai."
    }
  },
  {
    id: 2, brand: "Canon", name: "Canon EOS R6 Mark II", category: "Mirrorless", price: "PKR 499,000",
    image: "https://bnwcollections.com/uploads/products/1679671086r6-mark-ii-in-pakistan-bnwcollections_1_11zon.webp",
    badge: "New",
    details: {
      sensor: "24.2MP Full-Frame", video: "6K RAW", iso: "100-102400", fps: "40fps",
      af: "Dual Pixel CMOS AF II", stabilization: "5-Axis IBIS", weight: "670g",
      description: "Canon EOS R6 Mark II sports photography aur video ke liye best choice hai. 40fps continuous shooting aur improved autofocus system isko action photography mein unbeatable banata hai."
    }
  },
  {
    id: 3, brand: "Canon", name: "Canon EOS 90D", category: "DSLR", price: "PKR 285,000",
    image: "https://bnwcollections.com/uploads/products/1672816394canon-eos-90d-dslr-camera-price-in-pakistan%20(5)-800x800_59_11zon.webp",
    badge: "",
    details: {
      sensor: "32.5MP APS-C", video: "4K UHD", iso: "100-25600", fps: "10fps",
      af: "45-Point AF", stabilization: "None", weight: "701g",
      description: "Canon EOS 90D entry-to-mid level photographers ke liye ideal DSLR hai. High resolution APS-C sensor aur fast autofocus system iske saath wildlife aur sports photography easy ho jati hai."
    }
  },
  {
    id: 4, brand: "Canon", name: "Canon PowerShot G7X III", category: "Compact", price: "PKR 145,000",
    image: "https://m.media-amazon.com/images/I/61YW156-YoL._AC_UY218_.jpg",
    badge: "Popular",
    details: {
      sensor: "20.1MP 1-inch", video: "4K", iso: "125-12800", fps: "20fps",
      af: "Face Detection AF", stabilization: "Optical IS", weight: "304g",
      description: "Canon PowerShot G7X Mark III vloggers aur content creators ke liye perfect compact camera hai. Live streaming capability aur excellent video quality isko social media ke liye top choice banati hai."
    }
  },
  {
    id: 5, brand: "Canon", name: "Canon EOS M50 Mark II", category: "Mirrorless", price: "PKR 175,000",
    image: "https://m.media-amazon.com/images/I/71mTLn1iYML._AC_UY218_.jpg",
    badge: "",
    details: {
      sensor: "24.1MP APS-C", video: "4K", iso: "100-25600", fps: "10fps",
      af: "Dual Pixel CMOS AF", stabilization: "Digital IS", weight: "387g",
      description: "Canon EOS M50 Mark II beginners aur content creators ke liye best mirrorless camera hai. Lightweight design aur easy-to-use interface isko travel photography ke liye ideal banata hai."
    }
  },
  {
    id: 6, brand: "Canon", name: "Canon EOS R3", category: "Mirrorless", price: "PKR 1,299,000",
    image: "https://m.media-amazon.com/images/I/71SmnbOQ1eL._AC_UY218_.jpg",
    badge: "Pro",
    details: {
      sensor: "24.1MP Full-Frame BSI", video: "6K RAW", iso: "100-102400", fps: "30fps",
      af: "Eye Control AF", stabilization: "5-Axis IBIS", weight: "1015g",
      description: "Canon EOS R3 professional sports aur news photographers ke liye ultimate tool hai. Revolutionary eye control AF aur blazing 30fps shooting speed isko unmatched banata hai."
    }
  },
  {
    id: 7, brand: "Canon", name: "Canon EF 50mm f/1.4", category: "Lens", price: "PKR 65,000",
    image: "https://m.media-amazon.com/images/I/61432iSF2eL._AC_UY218_.jpg",
    badge: "",
    details: {
      sensor: "N/A", video: "N/A", iso: "N/A", fps: "N/A",
      af: "Ring USM AF", stabilization: "None", weight: "290g",
      description: "Canon EF 50mm f/1.4 ek classic portrait lens hai jo beautiful bokeh aur sharp images deliver karta hai. Low light photography mein bhi excellent performance deta hai."
    }
  },

  // NIKON
  {
    id: 8, brand: "Nikon", name: "Nikon Z9", category: "Mirrorless", price: "PKR 1,199,000",
    image: "https://m.media-amazon.com/images/I/61sQZRbPJrL._AC_UY218_.jpg",
    badge: "Pro",
    details: {
      sensor: "45.7MP Full-Frame BSI", video: "8K RAW", iso: "64-25600", fps: "20fps",
      af: "Subject Detection AF", stabilization: "6-Axis VR", weight: "1340g",
      description: "Nikon Z9 Nikon ka flagship mirrorless camera hai jo blackout-free shooting aur 8K video recording ke saath professional photographers ki needs puri karta hai."
    }
  },
  {
    id: 9, brand: "Nikon", name: "Nikon Z6 III", category: "Mirrorless", price: "PKR 449,000",
    image: "https://m.media-amazon.com/images/I/71Ac0SzZt9L._AC_UY218_.jpg",
    badge: "New",
    details: {
      sensor: "24.5MP Partial Stacked", video: "6K N-RAW", iso: "100-64000", fps: "20fps",
      af: "Subject Detection AF", stabilization: "6-Axis VR", weight: "760g",
      description: "Nikon Z6 III hybrid photographers ke liye best camera hai. Partial stacked sensor aur advanced video capabilities isko photo aur video dono ke liye versatile banata hai."
    }
  },
  {
    id: 10, brand: "Nikon", name: "Nikon D850", category: "DSLR", price: "PKR 365,000",
    image: "https://m.media-amazon.com/images/I/61jtYuMKwXL._AC_UY218_.jpg",
    badge: "Classic",
    details: {
      sensor: "45.7MP Full-Frame BSI", video: "4K UHD", iso: "64-25600", fps: "9fps",
      af: "Multi-CAM 20K AF", stabilization: "None", weight: "1015g",
      description: "Nikon D850 landscape aur studio photographers ke liye top DSLR hai. Exceptionally high resolution sensor aur excellent dynamic range isko demanding photography ke liye ideal banata hai."
    }
  },
  {
    id: 11, brand: "Nikon", name: "Nikon Z50 II", category: "Mirrorless", price: "PKR 195,000",
    image: "https://m.media-amazon.com/images/I/71xMnLqa-jL._AC_UY218_.jpg",
    badge: "New",
    details: {
      sensor: "20.9MP APS-C", video: "4K UHD", iso: "100-51200", fps: "11fps",
      af: "Hybrid AF", stabilization: "None", weight: "395g",
      description: "Nikon Z50 II content creators aur travel photographers ke liye compact mirrorless option hai. Lightweight design aur improved video features isko beginners ke liye perfect banata hai."
    }
  },
  {
    id: 12, brand: "Nikon", name: "Nikon Z 24-70mm f/2.8 S", category: "Lens", price: "PKR 285,000",
    image: "https://m.media-amazon.com/images/I/71llMZGtUSL._AC_UY218_.jpg",
    badge: "Popular",
    details: {
      sensor: "N/A", video: "N/A", iso: "N/A", fps: "N/A",
      af: "Stepping Motor AF", stabilization: "None", weight: "805g",
      description: "Nikon Z 24-70mm f/2.8 S professional zoom lens hai jo events, weddings, aur journalism photography ke liye perfect hai. Constant f/2.8 aperture excellent low light performance deta hai."
    }
  },
  {
    id: 13, brand: "Nikon", name: "Nikon Coolpix P1000", category: "Bridge", price: "PKR 115,000",
    image: "https://m.media-amazon.com/images/I/81zMQMHgdXL._AC_UY218_.jpg",
    badge: "Zoom King",
    details: {
      sensor: "16MP 1/2.3-inch", video: "4K UHD", iso: "100-6400", fps: "7fps",
      af: "Contrast Detect AF", stabilization: "Vibration Reduction", weight: "1415g",
      description: "Nikon Coolpix P1000 world ka longest zoom camera hai jo 125x optical zoom offer karta hai. Birds, moon, aur wildlife photography ke liye yeh ek unique option hai."
    }
  },

  // SONY
  {
    id: 14, brand: "Sony", name: "Sony A7R V", category: "Mirrorless", price: "PKR 799,000",
    image: "https://m.media-amazon.com/images/I/81yIgHbPO1L._AC_UY218_.jpg",
    badge: "Bestseller",
    details: {
      sensor: "61MP Full-Frame BSI", video: "4K 120fps", iso: "100-32000", fps: "10fps",
      af: "AI-Powered AF", stabilization: "5-Axis IBIS", weight: "724g",
      description: "Sony A7R V highest resolution mirrorless camera hai jo landscape, fashion, aur commercial photographers ke liye designed hai. 61MP sensor aur AI-powered autofocus isko unique banata hai."
    }
  },
  {
    id: 15, brand: "Sony", name: "Sony A7 IV", category: "Mirrorless", price: "PKR 449,000",
    image: "https://m.media-amazon.com/images/I/71BaBwNek-L._AC_UY218_.jpg",
    badge: "Popular",
    details: {
      sensor: "33MP Full-Frame", video: "4K 60fps", iso: "100-51200", fps: "10fps",
      af: "Real-time Eye AF", stabilization: "5-Axis IBIS", weight: "659g",
      description: "Sony A7 IV all-round performer hai jo photo aur video dono mein excellent results deta hai. 33MP sensor aur 4K 60fps video isko hybrid shooters ke liye top choice banata hai."
    }
  },
  {
    id: 16, brand: "Sony", name: "Sony ZV-E10 II", category: "Mirrorless", price: "PKR 155,000",
    image: "https://m.media-amazon.com/images/I/71+fR6lJgeL._AC_UY218_.jpg",
    badge: "Vlogger",
    details: {
      sensor: "26MP APS-C", video: "4K 120fps", iso: "100-51200", fps: "11fps",
      af: "AI-Powered AF", stabilization: "Active Mode IS", weight: "293g",
      description: "Sony ZV-E10 II vloggers aur content creators ke liye best entry-level mirrorless hai. Flip screen, excellent AF, aur 4K 120fps video isko YouTube aur TikTok creators ki first choice banata hai."
    }
  },
  {
    id: 17, brand: "Sony", name: "Sony A6700", category: "Mirrorless", price: "PKR 285,000",
    image: "https://m.media-amazon.com/images/I/71zHYbwce9L._AC_UY218_.jpg",
    badge: "New",
    details: {
      sensor: "26MP APS-C", video: "4K 120fps", iso: "100-32000", fps: "11fps",
      af: "AI Subject Recognition", stabilization: "5-Axis IBIS", weight: "493g",
      description: "Sony A6700 APS-C segment ka best camera hai jo AI-powered autofocus aur advanced video capabilities ke saath aata hai. Travel aur wildlife photography ke liye perfect."
    }
  },
  {
    id: 18, brand: "Sony", name: "Sony RX100 VII", category: "Compact", price: "PKR 185,000",
    image: "https://m.media-amazon.com/images/I/61sDlyi3d4L._AC_UY218_.jpg",
    badge: "",
    details: {
      sensor: "20.1MP 1-inch", video: "4K HDR", iso: "125-12800", fps: "90fps",
      af: "Phase-Detect AF", stabilization: "Optical SteadyShot", weight: "302g",
      description: "Sony RX100 VII world class pocket camera hai. 90fps burst shooting aur advanced AF system isko travel aur event photography ke liye pocket mein fit karne wala powerhouse banata hai."
    }
  },
  {
    id: 19, brand: "Sony", name: "Sony FE 85mm f/1.4 GM", category: "Lens", price: "PKR 255,000",
    image: "https://m.media-amazon.com/images/I/810yJIN08CL._AC_UY218_.jpg",
    badge: "Award Winner",
    details: {
      sensor: "N/A", video: "N/A", iso: "N/A", fps: "N/A",
      af: "Linear Motor AF", stabilization: "None", weight: "820g",
      description: "Sony FE 85mm f/1.4 GM portrait photography ke liye gold standard lens hai. Creamy bokeh aur razor-sharp optics isko professional portrait photographers ki top choice banata hai."
    }
  },
  {
    id: 20, brand: "Sony", name: "Sony A1", category: "Mirrorless", price: "PKR 1,399,000",
    image: "https://m.media-amazon.com/images/I/61nYvultqaS._AC_UY218_.jpg",
    badge: "Flagship",
    details: {
      sensor: "50.1MP Full-Frame Stacked", video: "8K RAW", iso: "100-32000", fps: "30fps",
      af: "Real-time Tracking AF", stabilization: "5-Axis IBIS", weight: "737g",
      description: "Sony A1 Sony ka ultimate mirrorless camera hai jo 50MP resolution ke saath 30fps shooting aur 8K video combine karta hai. Professional sports, wildlife, aur commercial photographers ke liye designed."
    }
  },

  // FUJIFILM
  {
    id: 21, brand: "Fujifilm", name: "Fujifilm X-T5", category: "Mirrorless", price: "PKR 349,000",
    image: "https://m.media-amazon.com/images/I/51Vok32dnaL._AC_UY218_.jpg",
    badge: "Bestseller",
    details: {
      sensor: "40MP APS-C X-Trans", video: "6.2K", iso: "125-12800", fps: "15fps",
      af: "Intelligent Hybrid AF", stabilization: "7-Stop IBIS", weight: "557g",
      description: "Fujifilm X-T5 photography-first mirrorless camera hai jo 40MP APS-C sensor ke saath aata hai. Film simulations aur retro design isko photography enthusiasts ki favourite choice banata hai."
    }
  },
  {
    id: 22, brand: "Fujifilm", name: "Fujifilm X100VI", category: "Compact", price: "PKR 299,000",
    image: "https://m.media-amazon.com/images/I/71olA3UfFXL._AC_UY218_.jpg",
    badge: "Iconic",
    details: {
      sensor: "40MP APS-C X-Trans", video: "6.2K", iso: "125-12800", fps: "20fps",
      af: "Intelligent Hybrid AF", stabilization: "6-Stop IBIS", weight: "521g",
      description: "Fujifilm X100VI legendary fixed-lens compact camera ka latest version hai. 40MP sensor, IBIS, aur beautiful retro design isko street photography ke liye ultimate camera banata hai."
    }
  },
  {
    id: 23, brand: "Fujifilm", name: "Fujifilm GFX 100S II", category: "Medium Format", price: "PKR 1,099,000",
    image: "https://m.media-amazon.com/images/I/710ZB+dWY9L._AC_UY218_.jpg",
    badge: "Medium Format",
    details: {
      sensor: "102MP Medium Format", video: "4K 60fps", iso: "80-12800", fps: "8fps",
      af: "Phase-Detect AF", stabilization: "8-Stop IBIS", weight: "883g",
      description: "Fujifilm GFX 100S II medium format photography ka most accessible camera hai. 102MP sensor exceptional detail aur dynamic range deliver karta hai jo fashion aur fine art photographers ko pasand aata hai."
    }
  },
  {
    id: 24, brand: "Fujifilm", name: "Fujifilm X-S20", category: "Mirrorless", price: "PKR 199,000",
    image: "https://m.media-amazon.com/images/I/7157PLVIyTL._AC_UY218_.jpg",
    badge: "Vlogger",
    details: {
      sensor: "26.1MP APS-C", video: "6.2K", iso: "160-12800", fps: "30fps",
      af: "Intelligent Hybrid AF", stabilization: "7-Stop IBIS", weight: "491g",
      description: "Fujifilm X-S20 content creators ke liye best Fujifilm camera hai. Long battery life, 6.2K video, aur Fujifilm film simulations isko travel vlogging ke liye perfect banata hai."
    }
  },
  {
    id: 25, brand: "Fujifilm", name: "Fujifilm XF 56mm f/1.2 R WR", category: "Lens", price: "PKR 145,000",
    image: "https://m.media-amazon.com/images/I/71h5giGojgL._AC_UY218_.jpg",
    badge: "Portrait King",
    details: {
      sensor: "N/A", video: "N/A", iso: "N/A", fps: "N/A",
      af: "Stepping Motor AF", stabilization: "None", weight: "445g",
      description: "Fujifilm XF 56mm f/1.2 R WR Fuji system ka best portrait lens hai. Beautiful bokeh aur weather resistance isko outdoor portrait photographers ke liye ideal banata hai."
    }
  },

  // PANASONIC
  {
    id: 26, brand: "Panasonic", name: "Panasonic S5 II", category: "Mirrorless", price: "PKR 349,000",
    image: "https://m.media-amazon.com/images/I/71AAuoRrlvL._AC_UY218_.jpg",
    badge: "Video King",
    details: {
      sensor: "24.2MP Full-Frame", video: "6K", iso: "100-51200", fps: "30fps",
      af: "Phase-Detect AF", stabilization: "5-Axis IBIS", weight: "740g",
      description: "Panasonic S5 II pehla Panasonic full-frame camera hai jo phase-detect autofocus ke saath aata hai. Excellent video capabilities aur affordable price isko video-first shooters ke liye best value banata hai."
    }
  },
  {
    id: 27, brand: "Panasonic", name: "Panasonic GH7", category: "Mirrorless", price: "PKR 299,000",
    image: "https://m.media-amazon.com/images/I/819JGNT7w7L._AC_UY218_.jpg",
    badge: "New",
    details: {
      sensor: "25.2MP MFT", video: "5.7K ProRes", iso: "100-25600", fps: "75fps",
      af: "Phase-Detect AF", stabilization: "5-Axis IBIS", weight: "598g",
      description: "Panasonic GH7 video specialists ke liye ultimate Micro Four Thirds camera hai. ProRes internal recording aur high frame rates isko indie filmmakers ki top choice banata hai."
    }
  },
  {
    id: 28, brand: "Panasonic", name: "Panasonic Lumix G100D", category: "Mirrorless", price: "PKR 119,000",
    image: "https://m.media-amazon.com/images/I/81NVXtMmEZL._AC_UY218_.jpg",
    badge: "Budget",
    details: {
      sensor: "20.3MP MFT", video: "4K", iso: "200-25600", fps: "30fps",
      af: "DFD AF", stabilization: "Hybrid OIS", weight: "352g",
      description: "Panasonic Lumix G100D vloggers ke liye affordable camera hai jo excellent audio aur video quality ke saath aata hai. 360-degree microphone aur lightweight design isko travel vlogging ke liye perfect banata hai."
    }
  },
  {
    id: 29, brand: "Panasonic", name: "Panasonic Leica DG 12mm f/1.4", category: "Lens", price: "PKR 125,000",
    image: "https://m.media-amazon.com/images/I/61ApeDA1UuL._AC_UY218_.jpg",
    badge: "",
    details: {
      sensor: "N/A", video: "N/A", iso: "N/A", fps: "N/A",
      af: "Stepping Motor AF", stabilization: "None", weight: "335g",
      description: "Panasonic Leica DG 12mm f/1.4 wide angle lens hai jo astrophotography aur landscape photography ke liye excellent hai. Leica quality optics aur fast aperture isko low light mein bhi capable banata hai."
    }
  },

  // OLYMPUS / OM SYSTEM
  {
    id: 30, brand: "OM System", name: "OM-1 Mark II", category: "Mirrorless", price: "PKR 399,000",
    image: "https://m.media-amazon.com/images/I/81d63nSTMTL._AC_UY218_.jpg",
    badge: "Weather Proof",
    details: {
      sensor: "20.4MP MFT Stacked", video: "4K 120fps", iso: "200-102400", fps: "120fps",
      af: "AI Subject Detection", stabilization: "8-Stop IBIS", weight: "599g",
      description: "OM System OM-1 Mark II wildlife aur outdoor photographers ke liye best camera hai. IP53 weather sealing, 120fps burst, aur powerful IBIS isko challenging conditions mein perfect companion banata hai."
    }
  },
  {
    id: 31, brand: "OM System", name: "OM-5", category: "Mirrorless", price: "PKR 199,000",
    image: "https://m.media-amazon.com/images/I/81AA2icb4pL._AC_UY218_.jpg",
    badge: "Adventure",
    details: {
      sensor: "20.4MP MFT", video: "4K", iso: "200-25600", fps: "30fps",
      af: "Contrast Detect AF", stabilization: "7.5-Stop IBIS", weight: "413g",
      description: "OM System OM-5 adventure photographers ke liye compact aur rugged mirrorless camera hai. IP53 weather sealing aur 7.5-stop IBIS isko outdoor photography mein reliable partner banata hai."
    }
  },
  {
    id: 32, brand: "OM System", name: "M.Zuiko 150-600mm f/5-6.3", category: "Lens", price: "PKR 285,000",
    image: "https://m.media-amazon.com/images/I/61eQ3ON8G1L._AC_UY218_.jpg",
    badge: "Wildlife",
    details: {
      sensor: "N/A", video: "N/A", iso: "N/A", fps: "N/A",
      af: "Movie & Still AF", stabilization: "Sync IS", weight: "2065g",
      description: "OM System M.Zuiko 150-600mm wildlife aur bird photography ke liye designed telephoto zoom hai. Effective 300-1200mm equivalent range aur weather sealing isko nature photographers ka favourite banata hai."
    }
  },

  // LEICA
  {
    id: 33, brand: "Leica", name: "Leica Q3", category: "Compact", price: "PKR 1,299,000",
    image: "https://m.media-amazon.com/images/I/61JjQtMoruL._AC_UY218_.jpg",
    badge: "Luxury",
    details: {
      sensor: "60MP Full-Frame BSI", video: "4K 60fps", iso: "50-100000", fps: "15fps",
      af: "Contrast Detect AF", stabilization: "5-Axis IBIS", weight: "743g",
      description: "Leica Q3 photography ka Rolls-Royce hai. 60MP full-frame sensor, Summilux 28mm f/1.7 fixed lens, aur handcrafted German quality isko luxury photography ka ultimate symbol banata hai."
    }
  },
  {
    id: 34, brand: "Leica", name: "Leica M11", category: "Rangefinder", price: "PKR 1,599,000",
    image: "https://m.media-amazon.com/images/I/71rsegMjsfL._AC_UY218_.jpg",
    badge: "Iconic",
    details: {
      sensor: "60MP Full-Frame BSI", video: "None", iso: "64-200000", fps: "5fps",
      af: "Manual Focus / Rangefinder", stabilization: "None", weight: "530g",
      description: "Leica M11 classic rangefinder camera hai jo purist photographers ke liye designed hai. Jab bhi photography sirf photography honi chahiye - Leica M11 woh experience deta hai jo koi aur camera nahi de sakta."
    }
  },

  // GOPRO
  {
    id: 35, brand: "GoPro", name: "GoPro HERO13 Black", category: "Action", price: "PKR 89,000",
    image: "https://m.media-amazon.com/images/I/71+pD0anNuL._AC_UY218_.jpg",
    badge: "Action",
    details: {
      sensor: "27MP 1/1.9-inch", video: "5.3K 60fps", iso: "100-6400", fps: "240fps",
      af: "AutoBoost", stabilization: "HyperSmooth 6.0", weight: "154g",
      description: "GoPro HERO13 Black action cameras ka king hai. HyperSmooth 6.0 stabilization, 5.3K video, aur modular accessories isko extreme sports aur adventure photography ke liye perfect banata hai."
    }
  },
  {
    id: 36, brand: "GoPro", name: "GoPro Max 2", category: "Action/360", price: "PKR 115,000",
    image: "https://m.media-amazon.com/images/I/61DSc25AQ2L._AC_UY218_.jpg",
    badge: "360°",
    details: {
      sensor: "27MP Dual", video: "5.6K 360°", iso: "100-1600", fps: "60fps",
      af: "Fixed Focus", stabilization: "Max HyperSmooth", weight: "163g",
      description: "GoPro Max 2 360-degree action camera hai jo immersive content creators ke liye designed hai. 360-degree video aur reframing capabilities isko unique aur versatile banata hai."
    }
  },
  {
    id: 37, brand: "GoPro", name: "GoPro HERO12 Black", category: "Action", price: "PKR 69,000",
    image: "https://m.media-amazon.com/images/I/71p5V8+OnfL._AC_UY218_.jpg",
    badge: "Value",
    details: {
      sensor: "27MP", video: "5.3K 60fps", iso: "100-6400", fps: "240fps",
      af: "AutoBoost", stabilization: "HyperSmooth 5.0", weight: "154g",
      description: "GoPro HERO12 Black previous generation ka excellent action camera hai jo budget-conscious adventure seekers ke liye great value offer karta hai. HERO13 ke comparison mein minimal differences hain."
    }
  },

  // DJI
  {
    id: 38, brand: "DJI", name: "DJI Osmo Pocket 3", category: "Gimbal Camera", price: "PKR 99,000",
    image: "https://m.media-amazon.com/images/I/51d4Esi79-L._AC_UY218_.jpg",
    badge: "Compact",
    details: {
      sensor: "1-inch CMOS", video: "4K 120fps", iso: "100-6400", fps: "120fps",
      af: "3-Axis Gimbal + AF", stabilization: "3-Axis Mechanical Gimbal", weight: "179g",
      description: "DJI Osmo Pocket 3 mein 1-inch sensor aur 3-axis mechanical gimbal ka combination isko run-and-gun videography ke liye perfect banata hai. Content creators aur travel filmmakers ki top pick."
    }
  },
  {
    id: 39, brand: "DJI", name: "DJI Action 5 Pro", category: "Action", price: "PKR 95,000",
    image: "https://m.media-amazon.com/images/I/71DbE2888ZL._AC_UY218_.jpg",
    badge: "New",
    details: {
      sensor: "1/1.3-inch", video: "4K 120fps", iso: "100-6400", fps: "120fps",
      af: "Dual Screen AF", stabilization: "RockSteady 4.0", weight: "145g",
      description: "DJI Action 5 Pro GoPro ka strong competitor hai jo larger sensor aur longer battery life ke saath aata hai. Dual screens aur excellent stabilization isko daily vlogging aur action sports ke liye perfect banata hai."
    }
  },

  // SIGMA
  {
    id: 40, brand: "Sigma", name: "Sigma fp L", category: "Mirrorless", price: "PKR 499,000",
    image: "https://m.media-amazon.com/images/I/71XFqNZ0+EL._AC_UY218_.jpg",
    badge: "Unique",
    details: {
      sensor: "61MP Full-Frame", video: "Cinema DNG RAW", iso: "100-25600", fps: "14fps",
      af: "Contrast Detect AF", stabilization: "None", weight: "422g",
      description: "Sigma fp L world ka smallest full-frame mirrorless camera hai. Cinema DNG RAW recording aur modular design isko cinematographers aur documentary filmmakers ke liye unique choice banata hai."
    }
  },
  {
    id: 41, brand: "Sigma", name: "Sigma 35mm f/1.4 DG DN Art", category: "Lens", price: "PKR 85,000",
    image: "https://m.media-amazon.com/images/I/71b8JRMekLL._AC_UY218_.jpg",
    badge: "Art Series",
    details: {
      sensor: "N/A", video: "N/A", iso: "N/A", fps: "N/A",
      af: "Stepping Motor AF", stabilization: "None", weight: "480g",
      description: "Sigma 35mm f/1.4 Art lens professional photographers ke beech bahut popular hai. Exceptional sharpness aur pleasing bokeh isko street, documentary, aur portrait photography ke liye excellent banata hai."
    }
  },
  {
    id: 42, brand: "Sigma", name: "Sigma 150-600mm f/5-6.3 DG", category: "Lens", price: "PKR 215,000",
    image: "https://m.media-amazon.com/images/I/6147rbt6noL._AC_UY218_.jpg",
    badge: "Wildlife",
    details: {
      sensor: "N/A", video: "N/A", iso: "N/A", fps: "N/A",
      af: "Ultrasonic Motor AF", stabilization: "Optical Stabilization", weight: "2840g",
      description: "Sigma 150-600mm Contemporary lens wildlife aur sports photographers ke liye excellent value telephoto zoom hai. Sharp optics aur fast AF isko demanding telephoto work ke liye reliable choice banata hai."
    }
  },

  // TAMRON
  {
    id: 43, brand: "Tamron", name: "Tamron 28-75mm f/2.8 G2", category: "Lens", price: "PKR 99,000",
    image: "https://m.media-amazon.com/images/I/51s9LLtXvxL._AC_UY218_.jpg",
    badge: "Value",
    details: {
      sensor: "N/A", video: "N/A", iso: "N/A", fps: "N/A",
      af: "Linear Motor AF", stabilization: "None", weight: "540g",
      description: "Tamron 28-75mm G2 Sony E-mount users ke liye best value zoom lens hai. Fast f/2.8 aperture, sharp optics, aur weather sealing isko Sony ecosystem mein most popular third-party lens banata hai."
    }
  },
  {
    id: 44, brand: "Tamron", name: "Tamron 17-50mm f/4 Di III VXD", category: "Lens", price: "PKR 89,000",
    image: "https://m.media-amazon.com/images/I/61f7HD7lX5L._AC_UY218_.jpg",
    badge: "New",
    details: {
      sensor: "N/A", video: "N/A", iso: "N/A", fps: "N/A",
      af: "VXD Linear Motor AF", stabilization: "None", weight: "460g",
      description: "Tamron 17-50mm f/4 ek versatile wide-angle zoom hai jo full-frame Sony cameras ke liye designed hai. Compact size aur excellent image quality isko travel photographers ke liye great option banata hai."
    }
  },

  // ZEISS
  {
    id: 45, brand: "Zeiss", name: "Zeiss Batis 85mm f/1.8", category: "Lens", price: "PKR 185,000",
    image: "https://m.media-amazon.com/images/I/51Ses-ykeXS._AC_UY218_.jpg",
    badge: "Premium",
    details: {
      sensor: "N/A", video: "N/A", iso: "N/A", fps: "N/A",
      af: "Autofocus", stabilization: "Optical Stabilization", weight: "475g",
      description: "Zeiss Batis 85mm f/1.8 Sony FE system ke liye premium portrait lens hai jo legendary Zeiss optical quality deliver karta hai. OLED display aur optical stabilization iske unique features hain."
    }
  },

  // RICOH
  {
    id: 46, brand: "Ricoh", name: "Ricoh GR IIIx", category: "Compact", price: "PKR 125,000",
    image: "https://m.media-amazon.com/images/I/61eljOJXCmL._AC_UY218_.jpg",
    badge: "Street",
    details: {
      sensor: "24.24MP APS-C", video: "Full HD", iso: "100-102400", fps: "4fps",
      af: "Hybrid AF", stabilization: "Shake Reduction", weight: "262g",
      description: "Ricoh GR IIIx street photography ka cult classic camera hai. Pocketable APS-C camera jo exceptionally sharp 40mm equivalent lens ke saath aata hai. Street photographers aur photojournalists ki favourite choice."
    }
  },
  {
    id: 47, brand: "Ricoh", name: "Ricoh GR III", category: "Compact", price: "PKR 105,000",
    image: "https://m.media-amazon.com/images/I/61eljOJXCmL._AC_UY218_.jpg",
    badge: "Classic",
    details: {
      sensor: "24.24MP APS-C", video: "Full HD", iso: "100-102400", fps: "4fps",
      af: "Hybrid AF", stabilization: "Shake Reduction", weight: "257g",
      description: "Ricoh GR III 28mm equivalent lens ke saath aata hai jo street photography aur environmental portraiture ke liye ideal hai. Ultra-compact design aur APS-C quality isko unique category mein rakhta hai."
    }
  },

  // BLACKMAGIC
  {
    id: 48, brand: "Blackmagic", name: "BMPCC 6K G2", category: "Cinema", price: "PKR 399,000",
    image: "https://m.media-amazon.com/images/I/61-+wvZoArL._AC_UY218_.jpg",
    badge: "Cinema",
    details: {
      sensor: "6K Super35", video: "6K RAW", iso: "400-25600", fps: "50fps",
      af: "Contrast AF", stabilization: "None", weight: "900g",
      description: "Blackmagic Pocket Cinema Camera 6K G2 indie filmmakers ke liye professional cinema camera hai. Blackmagic RAW, large Super35 sensor, aur professional connections isko budget cinema production ke liye perfect banata hai."
    }
  },
  {
    id: 49, brand: "Blackmagic", name: "Blackmagic Cinema Camera 6K", category: "Cinema", price: "PKR 549,000",
    image: "https://m.media-amazon.com/images/I/61-+wvZoArL._AC_UY218_.jpg",
    badge: "New",
    details: {
      sensor: "6K Full-Frame", video: "6K RAW", iso: "100-25600", fps: "60fps",
      af: "Phase-Detect AF", stabilization: "None", weight: "840g",
      description: "Blackmagic Cinema Camera 6K new mirrorless cinema camera hai jo L-mount lenses ke saath compatible hai. Phase detect autofocus aur full-frame 6K sensor isko affordable cinema production ke liye game changer banata hai."
    }
  },

  // HASSELBLAD
  {
    id: 50, brand: "Hasselblad", name: "Hasselblad X2D 100C", category: "Medium Format", price: "PKR 2,499,000",
    image: "https://m.media-amazon.com/images/I/51Hg1mcGxiL._AC_UY218_.jpg",
    badge: "Ultra Premium",
    details: {
      sensor: "100MP Medium Format", video: "None", iso: "64-6400", fps: "3fps",
      af: "Phase-Detect AF", stabilization: "7-Stop IBIS", weight: "895g",
      description: "Hasselblad X2D 100C photography ka pinnacle hai. 100MP medium format sensor, exceptional color science, aur Hasselblad ki legendary build quality isko commercial aur fine art photographers ka ultimate tool banata hai."
    }
  },

  // PHASE ONE
  {
    id: 51, brand: "Phase One", name: "Phase One XT IQ4 150MP", category: "Medium Format", price: "PKR 5,999,000",
    image: "https://i0.wp.com/cinephototools.co.za/wp-content/uploads/2021/01/phaseOneXTIQ4cameraSystem150mp50mm.jpg",
    badge: "Ultimate",
    details: {
      sensor: "150MP Medium Format", video: "None", iso: "50-6400", fps: "1fps",
      af: "Manual Focus", stabilization: "None", weight: "1630g",
      description: "Phase One XT IQ4 150MP photography ki duniya ka sabse advanced camera system hai. 150MP resolution, 16-bit color depth, aur field camera design isko commercial, architectural aur fine art photography ke liye designed kiya gaya hai."
    }
  },

  // INSTA360
  {
    id: 52, brand: "Insta360", name: "Insta360 X4", category: "360 Camera", price: "PKR 79,000",
    image: "https://m.media-amazon.com/images/I/61vQyXruqEL._AC_UY218_.jpg",
    badge: "360°",
    details: {
      sensor: "Dual 1/2-inch", video: "8K 360°", iso: "100-6400", fps: "30fps",
      af: "Fixed Focus", stabilization: "FlowState Stabilization", weight: "203g",
      description: "Insta360 X4 latest 360-degree camera hai jo 8K resolution ke saath aata hai. Reframing, invisible selfie stick effect, aur AI editing features isko content creators ke liye innovative tool banata hai."
    }
  },
  {
    id: 53, brand: "Insta360", name: "Insta360 GO 3S", category: "Action", price: "PKR 55,000",
    image: "https://m.media-amazon.com/images/I/61gNQsQ+cUL._AC_UY218_.jpg",
    badge: "Tiny",
    details: {
      sensor: "27MP", video: "4K", iso: "100-3200", fps: "60fps",
      af: "Fixed Focus", stabilization: "FlowState Stabilization", weight: "35g",
      description: "Insta360 GO 3S world ka sabse chhota 4K action camera hai. 35g weight aur magnetic mounting system isko wearable camera ke liye perfect banata hai. First-person perspective ke liye unique option."
    }
  },

  // CANON Accessories
  {
    id: 54, brand: "Canon", name: "Canon Speedlite 600EX II-RT", category: "Flash", price: "PKR 55,000",
    image: "https://m.media-amazon.com/images/I/71PN28OLonL._AC_UY218_.jpg",
    badge: "",
    details: {
      sensor: "N/A", video: "N/A", iso: "N/A", fps: "N/A",
      af: "AF Beam", stabilization: "None", weight: "375g",
      description: "Canon Speedlite 600EX II-RT flagship external flash hai jo wireless radio transmission ke saath aata hai. Professional event aur studio photographers ke liye reliable lighting solution."
    }
  },

  // NIKON Accessories
  {
    id: 55, brand: "Nikon", name: "Nikon SB-5000 Speedlight", category: "Flash", price: "PKR 65,000",
    image: "https://m.media-amazon.com/images/I/61BQpHhTb9L._AC_UY218_.jpg",
    badge: "",
    details: {
      sensor: "N/A", video: "N/A", iso: "N/A", fps: "N/A",
      af: "AF Beam", stabilization: "None", weight: "500g",
      description: "Nikon SB-5000 Nikon ka most advanced Speedlight hai jo built-in radio control ke saath aata hai. Cooling system aur fast recycling time isko high-volume event photography ke liye perfect banata hai."
    }
  },

  // SONY Accessories
  {
    id: 56, brand: "Sony", name: "Sony HVL-F60RM2 Flash", category: "Flash", price: "PKR 59,000",
    image: "https://m.media-amazon.com/images/I/61VxKwg35EL._AC_UY218_.jpg",
    badge: "",
    details: {
      sensor: "N/A", video: "N/A", iso: "N/A", fps: "N/A",
      af: "AF Illuminator", stabilization: "None", weight: "540g",
      description: "Sony HVL-F60RM2 Sony ka top-of-the-line flash hai jo wireless radio control ke saath aata hai. Fast recycling time aur weather sealing isko professional Sony shooters ke liye essential accessory banata hai."
    }
  },

  // TRIPODS & ACCESSORIES
  {
    id: 57, brand: "Manfrotto", name: "Manfrotto MT055CXPRO3", category: "Tripod", price: "PKR 75,000",
    image: "https://m.media-amazon.com/images/I/31E0ovEKifL._AC_UY218_.jpg",
    badge: "Pro",
    details: {
      sensor: "N/A", video: "N/A", iso: "N/A", fps: "N/A",
      af: "N/A", stabilization: "N/A", weight: "2450g",
      description: "Manfrotto MT055CXPRO3 professional carbon fiber tripod hai jo studio aur outdoor photography ke liye ideal hai. 90-degree column mechanism aur excellent stability isko demanding photographers ka favourite banata hai."
    }
  },
  {
    id: 58, brand: "Manfrotto", name: "Manfrotto BEFREE GT", category: "Tripod", price: "PKR 45,000",
    image: "https://m.media-amazon.com/images/I/61kDgnpuwNL._AC_UY218_.jpg",
    badge: "Travel",
    details: {
      sensor: "N/A", video: "N/A", iso: "N/A", fps: "N/A",
      af: "N/A", stabilization: "N/A", weight: "1700g",
      description: "Manfrotto BEFREE GT travel photographers ke liye designed compact carbon fiber tripod hai. Foldable design aur ball head combination isko carry-on luggage mein fit karne wala professional support system banata hai."
    }
  },

  // Godox
  {
    id: 59, brand: "Godox", name: "Godox AD600 Pro", category: "Studio Flash", price: "PKR 85,000",
    image: "https://m.media-amazon.com/images/I/61JlTAy3y+L._AC_UY218_.jpg",
    badge: "Popular",
    details: {
      sensor: "N/A", video: "N/A", iso: "N/A", fps: "N/A",
      af: "N/A", stabilization: "N/A", weight: "2800g",
      description: "Godox AD600 Pro portable studio flash hai jo outdoor location photographers ke liye perfect hai. 600Ws power, TTL metering, aur HSS capability isko budget-friendly professional lighting solution banata hai."
    }
  },
  {
    id: 60, brand: "Godox", name: "Godox V1 Round Head Flash", category: "Flash", price: "PKR 29,000",
    image: "https://m.media-amazon.com/images/I/71Yxr2Da+wL._AC_UY218_.jpg",
    badge: "Popular",
    details: {
      sensor: "N/A", video: "N/A", iso: "N/A", fps: "N/A",
      af: "N/A", stabilization: "N/A", weight: "500g",
      description: "Godox V1 round head speedlight natural-looking circular catchlights aur softer light quality deta hai. Built-in 2.4G wireless system aur TTL support isko on-camera aur off-camera use ke liye versatile banata hai."
    }
  },

  // LOWEPRO / BAGS
  {
    id: 61, brand: "Lowepro", name: "Lowepro ProTactic 450 AW II", category: "Camera Bag", price: "PKR 35,000",
    image: "https://m.media-amazon.com/images/I/71UO91ZDH5L._AC_UY218_.jpg",
    badge: "Best Bag",
    details: {
      sensor: "N/A", video: "N/A", iso: "N/A", fps: "N/A",
      af: "N/A", stabilization: "N/A", weight: "1500g",
      description: "Lowepro ProTactic 450 AW II professional camera backpack hai jo 2 DSLR aur 6 lenses hold kar sakta hai. Side access, laptop sleeve, aur weather cover isko traveling photographers ka most trusted bag banata hai."
    }
  },
  {
    id: 62, brand: "Peak Design", name: "Peak Design Everyday Backpack 20L", category: "Camera Bag", price: "PKR 55,000",
    image: "https://m.media-amazon.com/images/I/71BeJ9kjCmL._AC_UY218_.jpg",
    badge: "Premium",
    details: {
      sensor: "N/A", video: "N/A", iso: "N/A", fps: "N/A",
      af: "N/A", stabilization: "N/A", weight: "1390g",
      description: "Peak Design Everyday Backpack 20L best-looking camera bag hai jo daily carry aur travel dono ke liye perfect hai. FlexFold dividers aur MagLatch system isko photographers ka most desired bag banata hai."
    }
  },

  // MEMORY CARDS
  {
    id: 63, brand: "SanDisk", name: "SanDisk Extreme Pro 256GB CFexpress", category: "Memory Card", price: "PKR 18,000",
    image: "https://m.media-amazon.com/images/I/819+jNyZijL._AC_UY218_.jpg",
    badge: "Fast",
    details: {
      sensor: "N/A", video: "N/A", iso: "N/A", fps: "N/A",
      af: "N/A", stabilization: "N/A", weight: "10g",
      description: "SanDisk Extreme Pro CFexpress Type B card professional cameras ke liye fastest memory card hai. 1700MB/s read speed aur 1400MB/s write speed isko 8K RAW aur high-speed burst photography ke liye essential banata hai."
    }
  },
  {
    id: 64, brand: "SanDisk", name: "SanDisk Extreme Pro 512GB V60", category: "Memory Card", price: "PKR 8,500",
    image: "https://m.media-amazon.com/images/I/81QWEutrCAL._AC_UY218_.jpg",
    badge: "",
    details: {
      sensor: "N/A", video: "N/A", iso: "N/A", fps: "N/A",
      af: "N/A", stabilization: "N/A", weight: "2g",
      description: "SanDisk Extreme Pro V60 SD card professional video photographers ke liye ideal hai. V60 rating 4K aur 6K video recording ke liye reliable performance ensure karta hai bina skipping ke."
    }
  },

  // MONITOR
  {
    id: 65, brand: "BenQ", name: "BenQ SW321C 32-inch", category: "Monitor", price: "PKR 195,000",
    image: "https://m.media-amazon.com/images/I/51d3v9BvlsL._AC_UY218_.jpg",
    badge: "Photo Editing",
    details: {
      sensor: "N/A", video: "N/A", iso: "N/A", fps: "N/A",
      af: "N/A", stabilization: "N/A", weight: "9500g",
      description: "BenQ SW321C professional photo editing monitor hai jo 99% Adobe RGB aur hardware calibration support ke saath aata hai. 32-inch 4K IPS panel aur exceptional color accuracy isko photographers ka preferred editing display banata hai."
    }
  },

  // More lenses
  {
    id: 66, brand: "Canon", name: "Canon RF 70-200mm f/2.8 L IS", category: "Lens", price: "PKR 485,000",
    image: "https://m.media-amazon.com/images/I/61cIBJrigDL._AC_UY218_.jpg",
    badge: "L Series",
    details: {
      sensor: "N/A", video: "N/A", iso: "N/A", fps: "N/A",
      af: "Nano USM AF", stabilization: "Optical IS", weight: "1070g",
      description: "Canon RF 70-200mm f/2.8 L IS telephoto zoom lens hai jo weddings, sports, aur events ke liye perfect hai. Retractable design aur 5-stop IS isko compact aur capable banata hai."
    }
  },
  {
    id: 67, brand: "Nikon", name: "Nikon Z 400mm f/4.5 VR S", category: "Lens", price: "PKR 599,000",
    image: "https://m.media-amazon.com/images/I/61WwmaS-7iL._AC_UY218_.jpg",
    badge: "Wildlife",
    details: {
      sensor: "N/A", video: "N/A", iso: "N/A", fps: "N/A",
      af: "STM Motor AF", stabilization: "VR", weight: "1245g",
      description: "Nikon Z 400mm f/4.5 VR S wildlife photographers ke liye dream lens hai. Relatively lightweight design aur exceptional sharpness isko handheld telephoto use ke liye practical banata hai."
    }
  },
  {
    id: 68, brand: "Sony", name: "Sony FE 16-35mm f/2.8 GM II", category: "Lens", price: "PKR 389,000",
    image: "https://m.media-amazon.com/images/I/71Rw46AQEHL._AC_UY218_.jpg",
    badge: "G Master",
    details: {
      sensor: "N/A", video: "N/A", iso: "N/A", fps: "N/A",
      af: "Linear Motor AF", stabilization: "None", weight: "547g",
      description: "Sony FE 16-35mm GM II updated wide angle zoom hai jo significantly lighter aur sharper hai pehle version se. Architecture, landscape, aur event photography ke liye professional choice."
    }
  },
  {
    id: 69, brand: "Fujifilm", name: "Fujifilm XF 100-400mm OIS WR", category: "Lens", price: "PKR 175,000",
    image: "https://m.media-amazon.com/images/I/518Kt8uB-CL._AC_UY218_.jpg",
    badge: "Telephoto",
    details: {
      sensor: "N/A", video: "N/A", iso: "N/A", fps: "N/A",
      af: "Stepping Motor AF", stabilization: "Optical IS", weight: "1375g",
      description: "Fujifilm XF 100-400mm telephoto zoom Fuji X-mount users ke liye best wildlife lens hai. Weather sealing aur 5-stop stabilization isko outdoor photography mein reliable banata hai."
    }
  },
  {
    id: 70, brand: "Sigma", name: "Sigma 14mm f/1.4 DG DN Art", category: "Lens", price: "PKR 199,000",
    image: "https://m.media-amazon.com/images/I/61oks3xJwqL._AC_UY218_.jpg",
    badge: "Astrophoto",
    details: {
      sensor: "N/A", video: "N/A", iso: "N/A", fps: "N/A",
      af: "Stepping Motor AF", stabilization: "None", weight: "795g",
      description: "Sigma 14mm f/1.4 Art astrophotography ke liye world ka best wide angle lens hai. Exceptionally fast aperture aur minimal coma isko Milky Way aur night sky photography ke liye unparalleled choice banata hai."
    }
  },
  {
    id: 71, brand: "Tamron", name: "Tamron 150-500mm f/5-6.7 Di III VC", category: "Lens", price: "PKR 135,000",
    image: "https://m.media-amazon.com/images/I/61eFKfs001L._AC_UY218_.jpg",
    badge: "Budget Tele",
    details: {
      sensor: "N/A", video: "N/A", iso: "N/A", fps: "N/A",
      af: "VXD Motor AF", stabilization: "VC Stabilization", weight: "1725g",
      description: "Tamron 150-500mm Sony aur Nikon mirrorless users ke liye affordable super telephoto hai. 500mm reach aur VC stabilization isko bird aur wildlife photographers ke liye budget-friendly option banata hai."
    }
  },
  {
    id: 72, brand: "DJI", name: "DJI RS 4 Pro Gimbal", category: "Gimbal", price: "PKR 89,000",
    image: "https://m.media-amazon.com/images/I/61EntUfaTDL._AC_UY218_.jpg",
    badge: "Filmmakers",
    details: {
      sensor: "N/A", video: "N/A", iso: "N/A", fps: "N/A",
      af: "N/A", stabilization: "3-Axis Mechanical", weight: "1300g",
      description: "DJI RS 4 Pro professional 3-axis camera gimbal hai jo mirrorless aur DSLR cameras ke liye designed hai. 4.5kg payload, extended battery, aur 3D Focus System isko serious video production ke liye essential tool banata hai."
    }
  },
  {
    id: 73, brand: "Lowepro", name: "Lowepro Flipside 400 AW III", category: "Camera Bag", price: "PKR 22,000",
    image: "https://m.media-amazon.com/images/I/710I4815s3L._AC_UY218_.jpg",
    badge: "",
    details: {
      sensor: "N/A", video: "N/A", iso: "N/A", fps: "N/A",
      af: "N/A", stabilization: "N/A", weight: "1500g",
      description: "Lowepro Flipside 400 AW III adventure photographers ke liye perfect backpack hai. Back-access design security provide karta hai aur FlipBelt hipbelt side pockets quick gear access allow karte hain."
    }
  }
];

const brands = [...new Set(products.map(p => p.brand))];
