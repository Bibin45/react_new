import { createSlice } from '@reduxjs/toolkit'
const initialState={
    product:[{        
        name:'SAMSUNG Galaxy S21 FE 5G (Lavender, 256 GB)  (12 GB RAM)',
        image:"https://m.media-amazon.com/images/I/413fd9o3AgL._SX300_SY300_QL70_FMwebp_.jpg",
        brand:'SAMSUNG MOBILE',
        price:"Price - 60,000 Rupees only",
        rate:60000,
        description:"12 GB RAM | 256 GB ROM 17.27 cm (6.8 inch) Quad HD+ Display 108MP + 12MP + 10MP + 10MP | 40MP Front Camera 5000 mAh Lithium-ion Battery Exynos 2100 Processor With the Samsung Galaxy S21 FE, you can experience seamless gaming and mesmerising photography. This device is made to make you smile every time you unlock it. With only a little tap, you can capture amazing moments with this phone's professional-grade camera. Additionally, the 32 MP front camera on this device enables you to take amazing selfies with colourful images. Furthermore, you can make use of this phone's 16.28 cm (6.4) dynamic AMOLED 2X display to significantly improve your multimedia experience. In addition, this phone's 120 Hz Super Smooth Display helps you to play your favourite games smoothly without any stuttering."
        },
        {
          name:"Chama 2021 Coco 3C 3x3 SpeedCube High Speed Smooth Turning Magic Cube Puzzle ",
          image:"https://rukminim1.flixcart.com/image/416/416/kxhvf680/puzzle/x/v/y/1-2021-coco-3c-3x3-speedcube-high-speed-smooth-turning-magic-original-imag9xykftgfjrau.jpeg?q=70",
          brand:'CUBE',
          price:"Price - 400 Rupees only",
          rate:400,
          description:"Material: Plastic Age: 3+ Years Skillset: Problem Solving, Memory Building, Analysis & Critical Thinking, Creativity & Imagination, Time Management, Color & Shape Recognition, Hand & Eye Co-ordination"
          },
          {
            name:"U.S. Polo Assn Men Grey Solid Sneakers Sneakers For Men  (Grey, Red)",
            image:"https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/q/s/j/-original-imagg3abtws3bmya.jpeg?q=70",
            brand:'SHOE',
            price:"Price - 4,000 Rupees only",
            rate:4000,
            description:" A pair of round toe grey solid sneakers ,has regular stylingLace-up detailCanvas upperCushioned footbedTextured and patterned outsoleWarranty: 3 monthsWarranty provided by Brand/Manufacturer. Match this shoe with a casual wear for a great look"
        },
        
        {
          name:'IGNYTE IGN-4 Trever ISI/DOT Certified Full Face Helmet Motorbike Helmet',
          image:"https://rukminim1.flixcart.com/image/416/416/xif0q/helmet/t/5/d/ign-4-trever-isi-dot-certified-full-face-helmet-1-ign-4-trever-original-imaggcywddbatbv8.jpeg?q=70",
          brand:'HELMET',
          price:"Price - 6,000 Rupees only",
          rate:6000,
          description:"Developed utilizing rider input from the world’s top helmet designers and enthusiasts. Dual Certification: DOT (FMVSS No. 218) and BIS ISI (IS 4151:2015) Pinlock 30 Anti-fog shield to prevent fogging. Removable & washable interior padding and cheek pads. Inner Sun Shield for protection against direct sunrays for rides during daytime.World first helmet with NACA Duct air flow technology, this air flow system is also used in aircraft's and super cars."
          },
        {
            name:'ARMAF Club De Nuit Intense Eau de Perfume - 105 ml',
            image:"https://rukminim1.flixcart.com/image/416/416/l2arp8w0/perfume/k/w/a/105-club-de-nuit-intense-eau-de-parfum-armaf-women-original-imagdzftkpcgmfwc.jpeg?q=70",
            brand:'Perfume',
            price:"Price - 3,000 Rupees only",
            rate:3000,
            description:"Engage has introduced a new sub-range in the deodorant space called Engage Sport. These deos have high fragrance concentration that delivers long lasting freshness when you need it the most. ENgAgE Urge Deodorant SprayEngage offers best deodorant, perfume spray, cologne flavors for men & women in India that is gently refreshing & gives great feeling of vitalizing freshness"
         },
        {name:'OPPO F21s Pro 5G (Dawnlight Gold, 128 GB)  (8 GB RAM)',
        image:'https://www.reliancedigital.in/medias/Oppo-F21s-Pro-Mobile-Phone-493177726-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w4NzE0MnxpbWFnZS9qcGVnfGltYWdlcy9oZGMvaDRjLzk4OTQ2MjI5NTM1MDIuanBnfGY0NDg3YzFkMmM1ZmFkMzA4MmUxMGMyMWQyZmYwOTE3OTJmYjhiNWY5Y2ZjNTkxN2M1NjA3ZjhmNGEwMzA2NzA',
        brand:'OPPO MOBILE',
        price:"Price - 50,000 Rupees only",
        rate:50000,
        description:"8 GB RAM | 128 GB ROM | Expandable Upto 1 TB 16.33 cm (6.43 inch) Full HD+ E3 Super AMOLED Display 64MP + 2MP + 2MP | 16MP + 2MP Dual Front Camera 4500 mAh Battery Qualcomm SM6225 Snapdragon 680 4G (6 nm) Processor",
        },
        {
          name:'Cadbury Bournville Cranberry Dark Chocolate Bars  (5 x 80 g)',
          image:"https://rukminim1.flixcart.com/image/416/416/xif0q/chocolate/s/u/x/-original-imagj5w9huh6xkue.jpeg?q=70",
          brand:'CADBOURY CHOCLATE',
          price:"Price - 600 Rupees only",
          rate:600,
          description:"Bournville Cranberry Chocolate is irresistible and specially created to savour the palate with 50% cocoa and an ever so smooth texture, each little chunk is dark and undeniably good! The finest cocoa beans that have the perfect size and aroma go in to the making of the Bournville, offering consumers the sheer luxury and goodness of premium dark chocolate. FSSAI License Number : 10014022002711 Nutritional content information (Per 100 g) : 1. Energy kcal - 534 2. Protein (g) - 7.8 3. Carbohydrate (g) - 58.5 4. Sugar (g) - 55.5 5. Fat (g) - 31.1 6. Saturated fat (g) - 19.0 7. Trans fat (g) - 0.2 8. Sodium (mg) - 151 9. Dietary Fiber (g) - 2.0 This product is a Veg product Manufactuer's Address : Mondelez India Food Pvt. Ltd, Unit No. 2001, 20th Floor, Tower-3 (Wing C), Indiabulls Finance Centre, Parel, Mumbai, Maharashtra - 400013 You may contact us at suggestions@mdlzindia.com or call 1800 22 7080"
          },
        {
        name:"ASUS ROG Strix G15 (2022) with 90Whr Battery Ryzen 7 Octa Core AMD R7-6800H ",
        image:"https://rukminim1.flixcart.com/image/416/416/l0vbukw0/computer/z/o/e/-original-imagckcfz6jgjn3z.jpeg?q=70",
        brand:'ASUS LAPTOP',
        price:"Price - 50,000 Rupees only",
        rate:50000,
        description:"15.6 inch Full HD, IPS Level, 300 Hz Refresh Rate, 3ms Response Time, 170 Degree Viewing Angle, 300nits Brightness, 1:1000 Contrast, 72% NTSC%, 100% SRGB%, 75.35% Adobe%, Anti-glare Display, Adaptive Sync, Supports Dolby Vision HDR Light Laptop without Optical Disk Drive Preloaded with MS Office",
        },
        {
        name:"SONY ILCE-7SM3/BQ IN5 Mirrorless Camera Mirrorless (Black)",
        image:"https://rukminim1.flixcart.com/image/416/416/kihqz680/dslr-camera/g/z/t/alpha-7siii-ilce-7sm3-bq-in5-sony-original-imafya2qhvjjmruh.jpeg?q=70",
        brand:'SONY CAMERA',
        price:"Price - 60,000 Rupees only",
        rate:60000,
        description:"In The Box1 Camera, Rechargeable Battery, Battery Charger, Power Cord, Cable Protector, Shoulder Strap, Body Cap, Accessory Shoe Cap, Eyepiece Cup, USB-A to USB-C Cable (USB 3.2) General Brad SONY Model Number ILCE-7SM3/BQ IN5 Still Images: ISO 80-102400 ( ISO Numbers up from ISO 40 to Iso 409600 Can Be Set as Expanded Iso Range.), Movies: ISO 80-102400 Equivalent (ISO Numbers up to ISO 409600 Can Be Set as Expanded ISO Range.) Multi-segment, Centre-weighted, Spot, Spot Standard/Large, Entire Screen Avg., Highlight Auto, Daylight, Shade, Cloudy, Incandescent, Fluorescent, Flash, Underwater, Colour Temperature (2500 to 9900K) and Color Filter, Custom Flash off, Autoflash, Fill-flash, Slow Sync., Rear Sync., Red-eye reduction (on/off selectable), Wireless10, Hi-speed sync Warranty of the Product Is Limited to Only Manufacturing Defects on Camera Body and Lens Warranty Does Not Cover Any External Accessories (Such As Battery, Cable, Carrying Bag), Damage Caused to the Product Due to Improper Installation by Custome"
        },
        {
        name:"Flipkart SmartBuy 20 LEDs 1.17 m Multicolor Rice Lights  (Pack of 2)",
        image:"https://rukminim1.flixcart.com/image/416/416/kz1lle80/rice-light/y/v/n/20-string-2-20-led-wine-bottle-cork-lights-copper-wire-string-original-imagb5b5qenevfuk.jpeg?q=70",
        brand:'LED LIGHT',
        price:"Price - 150 Rupees only",
        rate:150,
        description:"The led bottle cork light is cute, beautiful and elegant as a perfect gift to your kids, friends and families for any decorative occasion, suitable for party, wedding, christmas, new year, halloween, square, garden, indoor decoration, outdoor decoration,etc - made with flexible bendable silver wire that can conform to any shape you want. Dropping the string of bright led lights inside an empty wine or liquor bottle to create a beautiful and romantic atmosphere for whole space. Low heat emission, saving light power, energy-saving and environmentally friendly -easy to turn on and off the light. Easy to fit into the top of the wine bottle. Just simply switch on the lights, stretch it out a bit and slip it in at the top and the cork part goes right in"
        },
        {
        name:"Men Full Sleeve Printed Sweatshirt",
        image:"https://rukminim1.flixcart.com/image/832/832/xif0q/sweatshirt/p/y/k/l-tnvrnfulsweat-st45-tripr-original-imaghxhh7q7xrw5c.jpeg?q=70",
        brand:'T-SHIRT',
        price:"Price - 700 Rupees only",
        rate:700,
        description:"High quality premium printed round neck full sleeve Sweatshirt direct from the manufacturers. Gives you perfect fit, comfort feel ,stylish and handsome look. Trusted brand online and no compromise on quality"
        },
        {
        name:"SAMSUNG Watch 5 40mmSuper AMOLED display LTE calling & body composition tracking",
        image:"https://rukminim1.flixcart.com/image/416/416/xif0q/smartwatch/m/y/a/-original-imagh93fnvb4wgza.jpeg?q=70",
        brand:'SMART WATCH',
        price:"Price - 40,000 Rupees only",
        rate:40000,
        description:"Whether you are working towards achieving your fitness goals or improving your health, the Samsung Galaxy Watch5 Smartwatch can help you do it all. This smartwatch gives you the ability to monitor multiple parameters ranging from the skeletal muscle weight to your body fat percentage, thanks to its BIA measuring (BIA). This way, it gives you all the data you need to keep track of your progress. Additionally, this smartwatch can monitor your heart rate and cardiovascular health as it has an optical heart rate sensor."
        },
        
        {
        name:"Large 45 L Laptop Backpack HUSTLE 45 Pro with Reflective Logo and Rain Cover  (Black)",
        image:"https://rukminim1.flixcart.com/image/832/832/kqidx8w0/backpack/b/u/s/hustle-45-pro-with-reflective-logo-and-rain-cover-w-033-backpack-original-imag4gcb5dhnkecg.jpeg?q=70",
        brand:'BAG PACK',
        price:"Price - 4,000 Rupees only",
        rate:4000,
        description:"30% Extra Storage We Indians tend to carry a lot of stuff in our backpacks, which is why this WROGN backpack comes with three spacious compartments. Maximized Comfort with Padded, Breathable Back System Its adjustable shoulder straps with padded air mesh and back padding ensure long-lasting comfort while carrying this backpack. Durable Its high-quality fabric and seam strength ensure that this backpack lasts long, even if you use it all day, everyday. Lightweight Eco-friendly Fabric Designed with an eco-friendly, virgin polyester fabric, this bag is lightweight and easy to carry. Water- and Stain-resistant Take this backpack with you everywhere you go, to office or to a trek, without worrying about damage as it’s stain-resistant and fluid-resistant."
        },
        {
        name:"SAMSUNG Crystal 4K 138 cm (55 inch) Ultra HD (4K) LED Smart Tizen TV  (UA55AUE60AKLXL)",
        image:"https://rukminim1.flixcart.com/image/416/416/l3nco7k0/television/d/7/7/-original-imageq5ek3atjgse.jpeg?q=70",
        brand:'TELEVISION',
        price:"Price - 45,000 Rupees only",
        rate:45000,
        description:" Bring home the sleek and powerful SAMSUNG Ultra HD (4K) LED Smart TV (UA55AUE60AKLXL) to enjoy seamless entertainment from all your favourite resources. For high-quality visuals, it has the PurColor, Motion Xcelerator, and Crystal Processor 4K technologies; and to watch content from your smartphone and other devices, it has Tap View and PC on TV features."
        },
        {
        name:"boAt Airdopes 161 with ASAP Charge, 10mm Drivers and 17 Hours Playback Bluetooth Headset",
        image:"https://rukminim1.flixcart.com/image/416/416/xif0q/headphone/p/r/6/-original-imagg8mrdrwgz77v.jpeg?q=70",
        brand:'EAR PODS',
        price:"Price - 2,000 Rupees only",
        rate:2000,
        description:" It's time to Do Your Groove, with Airdopes 161 TWS earbuds. The 10mm drivers in the earbuds are there to deliver an immersive listening time. It comes equipped with Bluetooth v5.1 wireless technology so that you can enjoy all of your sessions lag-free. The IWP tech enabled TWS earbuds power on as soon as the case lid gets opened. Moreover, the ASAP Charge tech helps the earbuds to gather up to 180Min of playtime in only 10 minutes of charging. Airdopes 161 provides a total playback time of up to 17HRS including up to 5.5HRS of playtime per earbud. With an IPX5 marked water resistant build, the earbuds offer flexibility whether you are at the gym or traversing those far terrains. You can command playback, hands-free and activate voice assistant with ease via the instant response touch controls. Now, stay indulged in your playlists and enjoy a truly immersive auditory experience on Airdopes 161."
        },
        
    ],
}
export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {    
  },
})
export const {setCart,setBuy} = productSlice.actions
export default productSlice.reducer