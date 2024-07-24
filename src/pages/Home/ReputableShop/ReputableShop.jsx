/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable quotes */
/* eslint-disable semi */
// eslint-disable-next-line quotes
import { Card, Col, Flex, List, Row, Typography } from "antd";
import "./index.css";
const dataJacket = [
  {
    url: "https://masoweide.tmall.com/index.htm?spm=a1z10.1-b.w5002-9112559552.2.VIOxLK",
    text: "masoweide.tmall.com",
  },
  {
    url: "https://bokasi.taobao.com/index.htm?spm=2013.1.w10782109-12553032025.4.VL2Vp8",
    text: "bokasi.taobao.com",
  },
  {
    url: "https://shop101312711.taobao.com/index.htm?spm=2013.1.w5002-12270796871.2.CCM0rW",
    text: "shop101312711.taobao.com",
  },
  {
    url: "https://mk178.taobao.com/index.htm?spm=a1z10.1-c.w5002-11634290111.2.vzbn98",
    text: "mk178.taobao.com",
  },
  {
    url: "https://kuegou.tmall.com/?spm=a220o.1000855.w5001-3610250230.11.ACt45v&scene=taobao_shop",
    text: "kuegou.tmall.com",
  },
  {
    url: "http://reallypoint.1688.com/?spm=a2615.2177701.0.0.NLLAf9",
    text: "reallypoint.1688.com",
  },
  {
    url: "https://enjeolon.tmall.com/index.htm?spm=a1z10.1-b.w10952962-10246227346.7.6osy5z",
    text: "enjeolon.tmall.com",
  },
  {
    url: "https://mk178.taobao.com/index.htm?spm=2013.1.w5002-11634290111.2.lFphsJ",
    text: "mk178.taobao.com",
  },
  {
    url: "https://minglifs.tmall.com/shop/view_shop.htm?spm=a1z10.1-b.w10580863-12241802770.4.1ACGF1",
    text: "minglifs.tmall.com",
  },
  {
    url: "https://myfangshao.taobao.com/index.htm?spm=2013.1.w10772994-12723681433.1.xLnebA&scene=taobao_shop",
    text: "myfangshao.taobao.com",
  },
  {
    url: "https://shop137409222.taobao.com/index.htm?spm=2013.1.w5002-13292400464.2.APyeuf",
    text: "shop137409222.taobao.com",
  },
  {
    url: "https://tashangjc.tmall.com/shop/view_shop.htm?spm=a1z10.3-b.w5001-4641447186.2.r5C82C&mytmenu=mdianpu&utkn=g,nbuxg43tmxf7xsoqx3n3hw6xvdbpjnpk1433388483956&user_number_id=1860075399&scm=1028.1.1.20001&scene=taobao_shop",
    text: "tashangjc.tmall.com",
  },
  {
    url: "https://ziyifs.tmall.com/index.htm?spm=a220o.1000855.w5002-7164386102.2.dhvIuM",
    text: "ziyifs.tmall.com",
  },
  {
    url: "http://shop1428598514999.1688.com/?spm=a261y.7663282.0.0.4IdMuF",
    text: "shop1428598514999.1688.com",
  },
  {
    url: "http://tanghuang9588.1688.com/?spm=a261y.7663282.0.0.30m1Ke",
    text: "tanghuang9588.1688.com",
  },
  {
    url: "http://jqds88.1688.com/?spm=a261y.7663282.0.0.Q1wm7A",
    text: "jqds88.1688.com",
  },
];
const dataShoes = [
  {
    url: "https://shop136134516.taobao.com/index.htm?spm=a1z10.1-c.w5002-12386416736.2.nHGz1S",
    text: "shop136134516.taobao.com",
  },
  {
    url: "http://tx791228.1688.com/?spm=a2615.2177701.0.0.ovsEUY",
    text: "tx791228.1688.com",
  },
  {
    url: "https://shop100980702.taobao.com/index.htm?spm=a1z10.1-c.w5002-1113508668.2.KUTMqW",
    text: "shop100980702.taobao.com",
  },
  {
    url: "https://aorllun.tmall.com/index.htm?spm=a1z10.1-b.w5002-9029447204.2.BoTAEE",
    text: "aorllun.tmall.com",
  },
  {
    url: "http://shop1419513895800.1688.com/?spm=a2615.2177701.0.0.hlU2f1",
    text: "shop1419513895800.1688.com",
  },
  {
    url: "https://jtsdxl.tmall.com/search.htm?spm=a220o.1000855.w5001-11795865045.9.yWF851&search=y&scene=taobao_shop",
    text: "jtsdxl.tmall.com",
  },
  {
    url: "https://reddragonfly.tmall.com/?spm=a1z10.1-b.w5001-9289970745.2.9X7EHU&scene=taobao_shop",
    text: "reddragonfly.tmall.com",
  },
  {
    url: "https://mingruoxl.tmall.com/?spm=a220o.1000855.w5001-10046856497.4.90y0Mj&scene=taobao_shop",
    text: "mingruoxl.tmall.com",
  },
  {
    url: "https://shop117643295.taobao.com/index.htm?spm=a1z10.1-c.w5002-13241686870.2.9OjOIb",
    text: "shop117643295.taobao.com",
  },
  {
    url: "https://guyangcity.tmall.com/category.htm?spm=a1z10.4-b.w5001-11678284319.7.W8Z0dI&search=y&scene=taobao_shop",
    text: "guyangcity.tmall.com",
  },
  {
    url: "https://maden.tmall.com/?spm=a1z10.3-b.w5001-9053453975.4.fZ8TG8&scene=taobao_shop",
    text: "maden.tmall.com",
  },
  {
    url: "https://pinshy.taobao.com/index.htm?spm=a1z10.1-c.w5002-283733451.2.xw3p2V",
    text: "pinshy.taobao.com",
  },
  {
    url: "https://vismix.tmall.com/search.htm?spm=a220o.1000855.w5001-9055100079.8.tjOtt8&rn=c281592cb7521522ea9a036203bf65f1&user_number_id=760753200&v=1&scene=taobao_shop",
    text: "vismix.tmall.com",
  },
  {
    url: "https://shop122069277.taobao.com/index.htm?spm=a1z10.1-c.w5002-12355633812.2.xQ0riH",
    text: "shop122069277.taobao.com",
  },
  {
    url: "https://shop117971231.taobao.com/?spm=2013.1.1000126.2.Y4GlLx",
    text: "shop117971231.taobao.com",
  },
  {
    url: "https://shop36458123.taobao.com/?spm=2013.1.w5001-2873146103.4.TLAzOP&scene=taobao_shop",
    text: "shop36458123.taobao.com",
  },
  {
    url: "https://fashion-ife-dl.taobao.com/index.htm?spm=a1z10.1-c.w5002-12606101088.2.gWiu8o",
    text: "fashion-ife-dl.taobao.com",
  },
  {
    url: "http://shop1378832492893.1688.com/?spm=a2615.2177701.0.0.NrFBo7",
    text: "shop1378832492893.1688.com",
  },
  {
    url: "http://tianlexy.1688.com/?spm=a261y.7663282.0.0.N4R56T",
    text: "tianlexy.1688.com",
  },
];
const dataJean = [
  {
    url: "https://shop136134516.taobao.com/index.htm?spm=a1z10.1-c.w5002-12386416736.2.nHGz1S",
    text: "shop136134516.taobao.com",
  },
  {
    url: "http://tx791228.1688.com/?spm=a2615.2177701.0.0.ovsEUY",
    text: "tx791228.1688.com",
  },
  {
    url: "https://shop100980702.taobao.com/index.htm?spm=a1z10.1-c.w5002-1113508668.2.KUTMqW",
    text: "shop100980702.taobao.com",
  },
  {
    url: "https://aorllun.tmall.com/index.htm?spm=a1z10.1-b.w5002-9029447204.2.BoTAEE",
    text: "aorllun.tmall.com",
  },
  {
    url: "http://shop1419513895800.1688.com/?spm=a2615.2177701.0.0.hlU2f1",
    text: "shop1419513895800.1688.com",
  },
  {
    url: "https://jtsdxl.tmall.com/search.htm?spm=a220o.1000855.w5001-11795865045.9.yWF851&search=y&scene=taobao_shop",
    text: "jtsdxl.tmall.com",
  },
  {
    url: "https://reddragonfly.tmall.com/?spm=a1z10.1-b.w5001-9289970745.2.9X7EHU&scene=taobao_shop",
    text: "reddragonfly.tmall.com",
  },
  {
    url: "https://mingruoxl.tmall.com/?spm=a220o.1000855.w5001-10046856497.4.90y0Mj&scene=taobao_shop",
    text: "mingruoxl.tmall.com",
  },
  {
    url: "https://shop117643295.taobao.com/index.htm?spm=a1z10.1-c.w5002-13241686870.2.9OjOIb",
    text: "shop117643295.taobao.com",
  },
  {
    url: "https://guyangcity.tmall.com/category.htm?spm=a1z10.4-b.w5001-11678284319.7.W8Z0dI&search=y&scene=taobao_shop",
    text: "guyangcity.tmall.com",
  },
  {
    url: "https://maden.tmall.com/?spm=a1z10.3-b.w5001-9053453975.4.fZ8TG8&scene=taobao_shop",
    text: "maden.tmall.com",
  },
  {
    url: "https://pinshy.taobao.com/index.htm?spm=a1z10.1-c.w5002-283733451.2.xw3p2V",
    text: "pinshy.taobao.com",
  },
  {
    url: "https://vismix.tmall.com/search.htm?spm=a220o.1000855.w5001-9055100079.8.tjOtt8&rn=c281592cb7521522ea9a036203bf65f1&user_number_id=760753200&v=1&scene=taobao_shop",
    text: "vismix.tmall.com",
  },
  {
    url: "https://shop122069277.taobao.com/index.htm?spm=a1z10.1-c.w5002-12355633812.2.xQ0riH",
    text: "shop122069277.taobao.com",
  },
  {
    url: "https://shop117971231.taobao.com/?spm=2013.1.1000126.2.Y4GlLx",
    text: "shop117971231.taobao.com",
  },
  {
    url: "https://shop36458123.taobao.com/?spm=2013.1.w5001-2873146103.4.TLAzOP&scene=taobao_shop",
    text: "shop36458123.taobao.com",
  },
  {
    url: "https://fashion-ife-dl.taobao.com/index.htm?spm=a1z10.1-c.w5002-12606101088.2.gWiu8o",
    text: "fashion-ife-dl.taobao.com",
  },
  {
    url: "http://shop1378832492893.1688.com/?spm=a2615.2177701.0.0.NrFBo7",
    text: "shop1378832492893.1688.com",
  },
  {
    url: "http://tianlexy.1688.com/?spm=a261y.7663282.0.0.N4R56T",
    text: "tianlexy.1688.com",
  },
];
const dataShirt = [
  {
    text: "shop135478146.taobao.com",
    url: "https://shop135478146.taobao.com/index.htm?spm=a1z10.3-c.w5002-13028386453.2.Opd0g1",
  },
  {
    text: "feidianfz.1688.com",
    url: "http://feidianfz.1688.com/?spm=a2615.2177701.0.0.RiNuzy",
  },
  {
    text: "haiwo2.1688.com",
    url: "http://haiwo2.1688.com/?spm=a261y.7663282.0.0.fpvDfA",
  },
  {
    text: "shop1361876629391.1688.com",
    url: "http://shop1361876629391.1688.com/?spm=a261y.7663282.0.0.IKpAxS",
  },
  {
    text: "danjieshifushi.1688.com",
    url: "http://danjieshifushi.1688.com/?spm=a261y.7663282.0.0.YoSsD6",
  },
  {
    text: "cotream.1688.com",
    url: "http://cotream.1688.com/?spm=a261y.7663282.0.0.EnMYfN",
  },
  {
    text: "jiakdress.1688.com",
    url: "http://jiakdress.1688.com/?spm=a2615.2177701.0.0.7b1Bm1",
  },
  {
    text: "shop1438102456123.1688.com",
    url: "http://shop1438102456123.1688.com/?spm=a261y.7663282.0.0.mGAVLM",
  },
  {
    text: "shop1417106816548.1688.com",
    url: "http://shop1417106816548.1688.com/?spm=a261y.7663282.0.0.Iluuxl",
  },
  {
    text: "wuyanzhiyi.1688.com",
    url: "http://wuyanzhiyi.1688.com/?spm=a261y.7663282.0.0.x8gBB0",
  },
];
const dataShort = [
  {
    text: "saideyu.tmall.com",
    url: "https://saideyu.tmall.com/index.htm?spm=a1z10.1-b.w5002-11990219911.2.1mOLfW",
  },
  {
    text: "tixieboni.tmall.com",
    url: "https://tixieboni.tmall.com/index.htm?spm=a220o.1000855.w5002-12315847726.2.OybMyi",
  },
  {
    text: "shop115157693.taobao.com",
    url: "https://shop115157693.taobao.com/?spm=2013.1.1000126.2.4xL4uS",
  },
  {
    text: "infshop.1688.com",
    url: "http://infshop.1688.com/?spm=a261y.7663282.0.0.Y3rOHc",
  },
  {
    text: "wzgffz.1688.com",
    url: "http://wzgffz.1688.com/?spm=a261y.7663282.0.0.ViAOiv",
  },
  {
    text: "nachuan1818.1688.com",
    url: "http://nachuan1818.1688.com/?spm=a261y.7663282.0.0.FHXjER",
  },
  {
    text: "youzihome.1688.com",
    url: "http://youzihome.1688.com/?spm=a261y.7663282.0.0.bARTRc",
  },
  {
    text: "pengxingshangpin.1688.com",
    url: "http://pengxingshangpin.1688.com/?spm=a261y.7663282.0.0.gw8TXk",
  },
  {
    text: "xiedewen348.1688.com",
    url: "http://xiedewen348.1688.com/?spm=a261y.7663282.0.0.SEninR",
  },
  {
    text: "5mmcompany.taobao.com",
    url: "https://5mmcompany.taobao.com/index.htm?spm=a1z10.1-c.w5002-12791085764.2.MRwrbX",
  },
  {
    text: "ceesee1979.taobao.com",
    url: "https://ceesee1979.taobao.com/index.htm?spm=2013.1.w5001-10265365968.3.57nlTq&scene=taobao_shop",
  },
  {
    text: "dugatpymj.tmall.com",
    url: "https://dugatpymj.tmall.com/index.htm?spm=a1z10.1-b.w5002-7948797544.2.tNpRrY",
  },
  {
    text: "aigebei.taobao.com",
    url: "https://aigebei.taobao.com/search.htm?spm=2013.1.w5002-10404687637.1.0PSnxo&search=y",
  },
  {
    text: "yilian00.taobao.com",
    url: "https://yilian00.taobao.com/?spm=2013.1.1000126.3.OPh2ur",
  },
  {
    text: "cpbinl2013.taobao.com",
    url: "https://cpbinl2013.taobao.com/index.htm?spm=2013.1.w5002-989583652.2.HwDMVh",
  },
  {
    text: "yilian00.taobao.com",
    url: "https://yilian00.taobao.com/index.htm?spm=2013.1.w5002-2845752348.2.pWuGFi",
  },
  {
    text: "qmi1314.taobao.com",
    url: "https://qmi1314.taobao.com/search.htm?spm=a1z10.3-c.w4002-8500140390.108.UHBuw4&_ksTS=1453174402644_617&callback=jsonp618&mid=w-8500140390-0&wid=8500140390&path=%2Fsearch.htm&search=y&pageNo=1#anchor",
  },
  {
    text: "99dora.taobao.com",
    url: "https://99dora.taobao.com/index.htm?spm=2013.1.w5002-6596721656.2.IpO8X0",
  },
  {
    text: "shiningfs.tmall.com",
    url: "https://shiningfs.tmall.com/index.htm?spm=a220o.1000855.w5002-12899421666.2.hzD7oM",
  },
  {
    text: "shop108785004.taobao.com",
    url: "https://shop108785004.taobao.com/index.htm?spm=2013.1.w5002-5705574070.2.AF45Ra",
  },
  {
    text: "moffichina.1688.com",
    url: "http://moffichina.1688.com/?spm=a261y.7663282.0.0.sXTYms",
  },
  {
    text: "halula.tmall.com",
    url: "https://halula.tmall.com/index.htm?spm=a220o.1000855.w5002-11821650090.2.I7IClp",
  },
  {
    text: "shop117290276.taobao.com",
    url: "https://shop117290276.taobao.com/index.htm?spm=2013.1.w11066787-13299553963.2.G87qUw&scene=taobao_shop",
  },
  {
    text: "longqianer.tmall.com",
    url: "https://longqianer.tmall.com/?spm=a220o.1000855.w10886262-12970147090.2.Ghwy1g",
  },
  {
    text: "mishall999.taobao.com",
    url: "https://mishall999.taobao.com/index.htm?spm=2013.1.w5002-12577663251.2.42SLPm",
  },
  {
    text: "mokoo8.1688.com",
    url: "http://mokoo8.1688.com/?spm=a261y.7663282.0.0.MVFsCY",
  },
  {
    text: "moffichina.1688.com",
    url: "http://moffichina.1688.com/?spm=a261y.7663282.0.0.BygW4y",
  },
  {
    text: "ziyipretty.1688.com",
    url: "http://ziyipretty.1688.com/?spm=a261y.7663282.0.0.KmZusb",
  },
  {
    text: "moffichina.1688.com",
    url: "http://moffichina.1688.com/?spm=a261y.7663282.0.0.WGM4r2",
  },
  {
    text: "shop1392865842693.1688.com",
    url: "http://shop1392865842693.1688.com/?spm=a261y.7663282.0.0.ZiIMbZ",
  },
  {
    text: "shuxuer.1688.com",
    url: "http://shuxuer.1688.com/?spm=a261y.7663282.0.0.iy81HN",
  },
  {
    text: "yanshasha888.1688.com",
    url: "http://yanshasha888.1688.com/?spm=a261y.7663282.0.0.21CFdo",
  },
  {
    text: "xinshanfz.1688.com",
    url: "http://xinshanfz.1688.com/?spm=a261y.7663282.0.0.L4vKBC",
  },
  {
    text: "11gong.1688.com",
    url: "http://11gong.1688.com/?spm=a261y.7663282.0.0.pBZkCQ",
  },
  {
    text: "laicailan.1688.com",
    url: "http://laicailan.1688.com/?spm=a261y.7663282.0.0.zlaO9S",
  },
  {
    text: "shop1399999973132.1688.com",
    url: "http://shop1399999973132.1688.com/?spm=a261y.7663282.0.0.sKBOT2",
  },
  {
    text: "shop1394038912754.1688.com",
    url: "http://shop1394038912754.1688.com/?spm=a261y.7663282.0.0.aEfBfU",
  },
  {
    text: "shandafz.1688.com",
    url: "http://shandafz.1688.com/?spm=a261y.7663282.0.0.25a0zW",
  },
  {
    text: "miucomiuco.taobao.com",
    url: "https://miucomiuco.taobao.com/search.htm?spm=a1z10.3-c.w4002-12037246126.94.ni5IfX&_ksTS=1453444621780_656&callback=jsonp657&mid=w-12037246126-0&wid=12037246126&path=%2Fsearch.htm&search=y&pageNo=6#anchor",
  },
  {
    text: "leikafei.tmall.com",
    url: "https://leikafei.tmall.com/search.htm?spm=a220o.1000855.0.0.sQ4lqK&search=y",
  },
  {
    text: "rjfashion.taobao.com",
    url: "https://rjfashion.taobao.com/category-1171866690.htm?spm=a1z10.3-c.w4010-12549863474.7.Lzws7E&search=y&catName=2016%B4%BA%D7%B0%C9%CF%CA%D0#bd",
  },
  {
    text: "detail.tmall.com",
    url: "https://detail.tmall.com/item.htm?spm=a230r.1.999.1.dNNU9X&id=523797604208&ns=1&skuId=3116654706516",
  },
  {
    text: "tongen.tmall.com",
    url: "https://tongen.tmall.com/search.htm?spm=a220o.1000855.w5002-7769932687.1.Xk0mQT&search=y",
  },
  {
    text: "detail.tmall.com",
    url: "https://detail.tmall.com/item.htm?id=524717523458&ali_trackid=2:mm_111284466_10758191_35954927:1453870651_264_813521624&pvid=200_10.98.16.153_456_1453870650383",
  },
];
const dataAccessories = [
  {
    url: "http://fansizhe1688.1688.com/?spm=a261y.7663282.0.0.S9wqKm",
    text: "fansizhe1688.1688.com",
  },
  {
    url: "http://shop1398704360596.1688.com/?spm=a261y.7663282.0.0.nkYvNV",
    text: "shop1398704360596.1688.com",
  },
  {
    url: "http://shop1398704360596.1688.com/?spm=a261y.7663282.0.0.8Orh2x",
    text: "shop1398704360596.1688.com",
  },
  {
    url: "https://georgcount.tmall.com/?spm=a220o.1000855.w5001-9990241550.3.t6uZNc&amp;amp;scene=taobao_shop",
    text: "georgcount.tmall.com",
  },
  {
    url: "http://shop1349532963007.1688.com/?spm=a261y.7663282.0.0.wDgDmk",
    text: "shop1349532963007.1688.com",
  },
  {
    url: "http://fansizhe888.1688.com/?spm=a261y.7663282.0.0.ANqtbS",
    text: "fansizhe888.1688.com",
  },
  {
    url: "http://4000098216.1688.com/?spm=a261y.7663282.0.0.kOtwRZ",
    text: "4000098216.1688.com",
  },
  {
    url: "https://shop140224678.taobao.com/index.htm?spm=2013.1.w5002-12652851602.2.pkZQK8",
    text: "shop140224678.taobao.com",
  },
  {
    url: "https://wuyoufs.tmall.com/shop/view_shop.htm?spm=a220o.1000855.w5001-10861426613.7.HPUybB&amp;amp;scene=taobao_shop",
    text: "wuyoufs.tmall.com",
  },
  {
    url: "https://djmna.tmall.com/index.htm?spm=a220o.1000855.w5002-9157775170.2.XTGijZ",
    text: "djmna.tmall.com",
  },
  {
    url: "https://pidai123.taobao.com/index.htm?spm=2013.1.w5002-12735562204.2.MsbLNx",
    text: "pidai123.taobao.com",
  },
  {
    url: "https://comhats.tmall.com/?spm=a220o.1000855.w10849633-11048204813.1.BQZlAR&amp;amp;scene=taobao_shop",
    text: "comhats.tmall.com",
  },
  {
    url: "http://kaqi1226.1688.com/?spm=a261y.7663282.0.0.31M00c",
    text: "kaqi1226.1688.com",
  },
  {
    url: "http://pjxchen.1688.com/?spm=a261y.7663282.0.0.AlzEbt",
    text: "pjxchen.1688.com",
  },
  {
    url: "http://detail.1688.com/offer/43009997369.html?spm=0.0.0.0.sRhHgf",
    text: "detail.1688.com",
  },
  {
    url: "http://gusepiju.1688.com/?spm=a261y.7663282.0.0.BmrmI3",
    text: "gusepiju.1688.com",
  },
  {
    url: "http://karis1688.1688.com/?spm=a261y.7663282.0.0.neqDFo",
    text: "karis1688.1688.com",
  },
  {
    url: "http://shop1414687274308.1688.com/?spm=a261y.7663282.0.0.5YK27x",
    text: "shop1414687274308.1688.com",
  },
  {
    url: "http://gusepiju.1688.com/?spm=a261y.7663282.0.0.6P23hV",
    text: "gusepiju.1688.com",
  },
  {
    url: "http://shop1426610856222.1688.com/?spm=a261y.7663282.0.0.1PkvIa",
    text: "shop1426610856222.1688.com",
  },
  {
    url: "http://ziyanpiju.1688.com/?spm=a261y.7663282.0.0.51gcDI",
    text: "ziyanpiju.1688.com",
  },
  {
    url: "https://kangarookingdom.tmall.com/search.htm?spm=a220o.1000855.w5001-4468055733.4.vqzT6f&amp;amp;search=y&amp;amp;scene=taobao_shop",
    text: "kangarookingdom.tmall.com",
  },
  {
    url: "https://geniu.tmall.com/shop/view_shop.htm?spm=a220o.1000855.w5001-13232688776.2.h7kPpc&amp;amp;mytmenu=mdianpu&amp;amp;utkn=g%2Cywr33k567tdozpncwxva1452334769897&amp;amp;user_number_id=1916250472&amp;amp;scm=1028.1.1.20001&amp;amp;scene=taobao_shop",
    text: "geniu.tmall.com",
  },
  {
    url: "http://fansizhe1688.1688.com/?spm=a261y.7663282.0.0.4K27SQ",
    text: "fansizhe1688.1688.com",
  },
  {
    url: "http://shop1414687274308.1688.com/?spm=a261y.7663282.0.0.wEyrA7",
    text: "shop1414687274308.1688.com",
  },
  {
    url: "http://guanhao16888.1688.com/?spm=a261y.7663282.0.0.7ElNXA",
    text: "guanhao16888.1688.com",
  },
  {
    url: "http://jinfulcn.1688.com/?spm=a261y.7663282.0.0.J3wIqR",
    text: "jinfulcn.1688.com",
  },
  {
    url: "http://shop1364231227171.1688.com/?spm=a261y.7663282.0.0.Cb6zFB",
    text: "shop1364231227171.1688.com",
  },
  {
    url: "http://debinxiangbao.1688.com/?spm=a261y.7663282.0.0.piXhRq",
    text: "debinxiangbao.1688.com",
  },
  {
    url: "http://fansizhe8888.1688.com/?spm=a261y.7663282.0.0.v5jBhf",
    text: "fansizhe8888.1688.com",
  },
  {
    url: "https://byron8088.taobao.com/index.htm?spm=a1z10.1-c.w5002-1636382686.2.xcJCJz",
    text: "byron8088.taobao.com",
  },
  {
    url: "http://yw71284605.1688.com/?spm=a261y.7663282.0.0.faQkEe",
    text: "yw71284605.1688.com",
  },
  {
    url: "http://togoo888.1688.com/?spm=a261y.7663282.0.0.1snZX6",
    text: "togoo888.1688.com",
  },
  {
    url: "https://dldfushi.tmall.com/index.htm?spm=a1z10.1-b.w9380327-10342000383.12.IpiFHh",
    text: "dldfushi.tmall.com",
  },
  {
    url: "https://septwolvesxb.tmall.com/?spm=a220o.1000855.w10766645-6430821047.1.amqvav&amp;amp;scene=taobao_shop",
    text: "septwolvesxb.tmall.com",
  },
  {
    url: "https://zhoujiang.tmall.com/index.htm?spm=a1z10.1-b.w5002-13007928250.2.5SGykr",
    text: "zhoujiang.tmall.com",
  },
];
const dataDresses = [
  {
    url: "https://shop123244538.taobao.com/index.htm?spm=2013.1.w5002-12797825986.2.xsIcWn",
    text: "shop123244538.taobao.com",
  },
  {
    url: "https://geyini.tmall.com/index.htm?spm=a220o.1000855.w5002-5271216480.2.NrqTPW",
    text: "geyini.tmall.com",
  },
  {
    url: "https://shop105092960.taobao.com/index.htm?spm=2013.1.w5002-10454092237.2.LIh2xt",
    text: "shop105092960.taobao.com",
  },
  {
    url: "https://hlkx.taobao.com/?spm=2013.1.1000126.2.Tn0SNl",
    text: "hlkx.taobao.com",
  },
  {
    url: "https://ytxz2009.taobao.com/index.htm?spm=2013.1.w5002-10840018002.2.wY8iIN",
    text: "ytxz2009.taobao.com",
  },
  {
    url: "https://shop64315077.taobao.com/index.htm?spm=2013.1.w5002-13264976964.2.3d3Jmn",
    text: "shop64315077.taobao.com",
  },
  {
    url: "https://dida68.taobao.com/index.htm?spm=2013.1.w5002-13176861513.2.uENMIc",
    text: "dida68.taobao.com",
  },
  {
    url: "http://spili888.1688.com/?spm=a261y.7663282.0.0.LvjHe3",
    text: "spili888.1688.com",
  },
  {
    url: "http://shop1430137895926.1688.com/?spm=a2615.2177701.0.0.0mLJo3",
    text: "shop1430137895926.1688.com",
  },
  {
    url: "https://shop125017959.taobao.com/index.htm?spm=2013.1.w5002-11813555000.2.KjvdTe",
    text: "shop125017959.taobao.com",
  },
  {
    url: "https://shop108634760.taobao.com/index.htm?spm=2013.1.w5002-11713800764.2.o1wecq",
    text: "shop108634760.taobao.com",
  },
  {
    url: "https://diluzi.tmall.com/index.htm?spm=a220o.1000855.w5001-10758249415.2.hXGEiD&amp;amp;scene=taobao_shop",
    text: "diluzi.tmall.com",
  },
  {
    url: "https://shop114067841.taobao.com/index.htm?spm=2013.1.w5002-8940119166.2.jJGAoC",
    text: "shop114067841.taobao.com",
  },
  {
    url: "https://shop108908493.taobao.com/index.htm?spm=2013.1.w5002-5792767062.2.1yEyTQ",
    text: "shop108908493.taobao.com",
  },
  {
    url: "https://shop108908493.taobao.com/index.htm?spm=2013.1.w5002-5792767062.2.ReMZua",
    text: "shop108908493.taobao.com",
  },
  {
    url: "https://shop109954428.taobao.com/index.htm?spm=2013.1.w5002-12709822123.2.t1vcir",
    text: "shop109954428.taobao.com",
  },
  {
    url: "https://arxiu.taobao.com/index.htm?spm=a1z10.3-c.w5002-11646660437.2.xNsX15",
    text: "arxiu.taobao.com",
  },
  {
    url: "https://fashionwomen85.taobao.com/index.htm?spm=a1z10.3-c.w5002-7479136943.2.OuRxrN",
    text: "fashionwomen85.taobao.com",
  },
  {
    url: "https://0077.taobao.com/?spm=2013.1.w10380503-11870005566.2.WiE3bh",
    text: "0077.taobao.com",
  },
  {
    url: "https://99dora.taobao.com/index.htm?spm=2013.1.w5002-6596721656.2.6lCLkU",
    text: "99dora.taobao.com",
  },
];
const dataJogging = [
  {
    url: "https://shop118835739.taobao.com/index.htm?spm=2013.1.w5002-10649543014.2.2U4eUl",
    text: "shop118835739.taobao.com",
  },
  {
    url: "https://shop101298059.taobao.com/?spm=2013.1.1000126.2.u1tSht",
    text: "shop101298059.taobao.com",
  },
  {
    url: "https://shop124374560.taobao.com/index.htm?spm=2013.1.w5002-13074149450.2.2456C4",
    text: "shop124374560.taobao.com",
  },
  {
    url: "https://shop107117676.taobao.com/index.htm?spm=2013.1.w5002-6666984701.2.698JDx",
    text: "shop107117676.taobao.com",
  },
  {
    url: "https://shop110011364.taobao.com/index.htm?spm=2013.1.w5002-12445104777.2.zUPuvB",
    text: "shop110011364.taobao.com",
  },
  {
    url: "https://shop118835739.taobao.com/index.htm?spm=2013.1.w5002-10649543014.2.GDQb9O",
    text: "shop118835739.taobao.com",
  },
  {
    url: "https://shop73484995.taobao.com/index.htm?spm=2013.1.w5002-1892103017.2.7FrxOM",
    text: "shop73484995.taobao.com",
  },
  {
    url: "https://qazyd.taobao.com/index.htm?spm=2013.1.w5002-2841781720.2.SxT95M",
    text: "qazyd.taobao.com",
  },
  {
    url: "https://shop124639493.taobao.com/index.htm?spm=2013.1.w5002-13112200680.2.dmWULN",
    text: "shop124639493.taobao.com",
  },
  {
    url: "https://weizhufs.tmall.com/index.htm?spm=a220o.1000855.w5002-3429477332.2.BZ9Qx2",
    text: "weizhufs.tmall.com",
  },
  {
    url: "https://fnboled.tmall.com/shop/view_shop.htm?spm=a220o.1000855.w10078035-11995717110.1.8zm9cP&amp;amp;mytmenu=mdianpu&amp;amp;utkn=g%2Cmzxge33mmvsmn3f5uk26u1443141610092&amp;amp;user_number_id=729349464&amp;amp;scm=1028.1.1.20001&amp;amp;scene=taobao_shop",
    text: "fnboled.tmall.com",
  },
  {
    url: "https://shop117701401.taobao.com/index.htm?spm=2013.1.w5002-10489357760.2.VEyd7Y",
    text: "shop117701401.taobao.com",
  },
  {
    url: "https://shop117818076.taobao.com/index.htm?spm=2013.1.w5002-10505967567.2.HwOE5p",
    text: "shop117818076.taobao.com",
  },
  {
    url: "https://pinkdackeb.taobao.com/index.htm?spm=2013.1.w5002-11130853073.2.lCX5Od",
    text: "pinkdackeb.taobao.com",
  },
  {
    url: "https://tangnv.tmall.com/index.htm?spm=a220o.1000855.w10491726-7377637799.2.LRKvPQ",
    text: "tangnv.tmall.com",
  },
  {
    url: "https://lxssyc.taobao.com/index.htm?spm=a1z10.1-c.w5002-12791418226.2.9aPhHU",
    text: "lxssyc.taobao.com",
  },
  {
    url: "https://shop101487924.taobao.com/index.htm?spm=2013.1.w5002-12435993381.2.lZSI7F",
    text: "shop101487924.taobao.com",
  },
  {
    url: "https://shop119946351.taobao.com/index.htm?spm=2013.1.w5002-10760515436.2.dlhhHw",
    text: "shop119946351.taobao.com",
  },
  {
    url: "https://chengni.tmall.com/index.htm?spm=a220o.1000855.w5002-11653802569.2.AhycyR",
    text: "chengni.tmall.com",
  },
  {
    url: "https://23ccc.taobao.com/index.htm?spm=a1z10.1-c.w5002-10295157255.2.YwNeG4",
    text: "23ccc.taobao.com",
  },
  {
    url: "https://shop142993642.taobao.com/index.htm?spm=2013.1.w5002-13025118368.2.MduwT7",
    text: "shop142993642.taobao.com",
  },
  {
    url: "https://shop109227656.taobao.com/index.htm?spm=2013.1.w5002-9064499724.2.UKhrdc",
    text: "shop109227656.taobao.com",
  },
  {
    url: "https://love-xiaokk.taobao.com/index.htm?spm=2013.1.w5002-9267795239.2.9VSA04",
    text: "love-xiaokk.taobao.com",
  },
  {
    url: "https://shop105146630.taobao.com/index.htm?spm=2013.1.w5002-9267795239.2.9VSA04",
    text: "shop105146630.taobao.com",
  },
  {
    url: "https://753232.taobao.com/index.htm?spm=a1z10.1-c.w5002-3649496684.2.QR95jw",
    text: "753232.taobao.com",
  },
  {
    url: "https://xiaofengshome.taobao.com/index.htm?spm=a1z10.1-c.w5002-7915233146.2.42Aqk6",
    text: "xiaofengshome.taobao.com",
  },
  {
    url: "http://hongyibuluo.1688.com/?spm=a2615.2177701.0.0.PJkEJk",
    text: "hongyibuluo.1688.com",
  },
  {
    url: "http://baizifs.1688.com/?spm=a261y.7663282.0.0.m5EaWT",
    text: "baizifs.1688.com",
  },
  {
    url: "https://shop109581743.taobao.com/search.htm?spm=2013.1.0.0.mfJ5Jp&amp;amp;search=y",
    text: "shop109581743.taobao.com",
  },
];
const dataJeanW = [
  {
    url: "https://huangpao.tmall.com/shop/view_shop.htm?spm=a220o.1000855.w5001-12385981503.7.lqddRf&amp;amp;mytmenu=mdianpu&amp;amp;utkn=g%2Cxpfmlw6g5s62fnpk1444224075006&amp;amp;user_number_id=2629086149&amp;amp;scm=1028.1.1.20001&amp;amp;scene=taobao_shop",
    text: "huangpao.tmall.com",
  },
  {
    url: "https://esey.tmall.com/?spm=a220o.1000855.w5001-2637819077.6.UGfJS6&amp;amp;scene=taobao_shop",
    text: "esey.tmall.com",
  },
  {
    url: "https://shop108610857.taobao.com/index.htm?spm=2013.1.w5002-12866941675.2.pFnfUl",
    text: "shop108610857.taobao.com",
  },
  {
    url: "https://shop106106583.taobao.com/?spm=2013.1.1000126.2.sq5sYj",
    text: "shop106106583.taobao.com",
  },
  {
    url: "https://ly139.taobao.com/index.htm?spm=2013.1.w5002-12581069371.2.oRmEJm",
    text: "ly139.taobao.com",
  },
  {
    url: "https://q461318090.taobao.com/index.htm?spm=2013.1.w5002-11258087430.2.agZx3w",
    text: "q461318090.taobao.com",
  },
  {
    url: "https://shop60217595.taobao.com/index.htm?spm=2013.1.w5002-9966112698.2.MTMdhb",
    text: "shop60217595.taobao.com",
  },
  {
    url: "https://shop66232790.taobao.com/index.htm?spm=2013.1.w5002-12695843029.2.OuWOAu",
    text: "shop66232790.taobao.com",
  },
  {
    url: "https://tanqilu.taobao.com/?spm=2013.1.1000126.2.o5YjEi",
    text: "tanqilu.taobao.com",
  },
  {
    url: "https://lanlanhanhan.tmall.com/?spm=a220o.1000855.w10958290-7961194534.2.SJ05p0",
    text: "lanlanhanhan.tmall.com",
  },
  {
    url: "https://shop113073748.taobao.com/index.htm?spm=2013.1.w5002-8464936606.2.ySmtVq",
    text: "shop113073748.taobao.com",
  },
  {
    url: "https://lanlanhanhan.tmall.com/?spm=a220o.1000855.w10958290-7961194534.2.1s034e",
    text: "lanlanhanhan.tmall.com",
  },
  {
    url: "https://aiyootoo.taobao.com/index.htm?spm=2013.1.w5002-10125720652.2.3ukbWQ",
    text: "aiyootoo.taobao.com",
  },
  {
    url: "https://dongli8.taobao.com/?spm=2013.1.1000126.2.ptEXMd",
    text: "dongli8.taobao.com",
  },
];
const dataSortW = [
  {
    url: "https://huangpao.tmall.com/shop/view_shop.htm?spm=a220o.1000855.w5001-12385981503.7.lqddRf&amp;amp;mytmenu=mdianpu&amp;amp;utkn=g%2Cxpfmlw6g5s62fnpk1444224075006&amp;amp;user_number_id=2629086149&amp;amp;scm=1028.1.1.20001&amp;amp;scene=taobao_shop",
    text: "huangpao.tmall.com",
  },
  {
    url: "https://esey.tmall.com/?spm=a220o.1000855.w5001-2637819077.6.UGfJS6&amp;amp;scene=taobao_shop",
    text: "esey.tmall.com",
  },
  {
    url: "https://shop108610857.taobao.com/index.htm?spm=2013.1.w5002-12866941675.2.pFnfUl",
    text: "shop108610857.taobao.com",
  },
  {
    url: "https://shop106106583.taobao.com/?spm=2013.1.1000126.2.sq5sYj",
    text: "shop106106583.taobao.com",
  },
  {
    url: "https://ly139.taobao.com/index.htm?spm=2013.1.w5002-12581069371.2.oRmEJm",
    text: "ly139.taobao.com",
  },
  {
    url: "https://q461318090.taobao.com/index.htm?spm=2013.1.w5002-11258087430.2.agZx3w",
    text: "q461318090.taobao.com",
  },
  {
    url: "https://shop60217595.taobao.com/index.htm?spm=2013.1.w5002-9966112698.2.MTMdhb",
    text: "shop60217595.taobao.com",
  },
  {
    url: "https://shop66232790.taobao.com/index.htm?spm=2013.1.w5002-12695843029.2.OuWOAu",
    text: "shop66232790.taobao.com",
  },
  {
    url: "https://tanqilu.taobao.com/?spm=2013.1.1000126.2.o5YjEi",
    text: "tanqilu.taobao.com",
  },
  {
    url: "https://lanlanhanhan.tmall.com/?spm=a220o.1000855.w10958290-7961194534.2.SJ05p0",
    text: "lanlanhanhan.tmall.com",
  },
  {
    url: "https://shop113073748.taobao.com/index.htm?spm=2013.1.w5002-8464936606.2.ySmtVq",
    text: "shop113073748.taobao.com",
  },
  {
    url: "https://lanlanhanhan.tmall.com/?spm=a220o.1000855.w10958290-7961194534.2.1s034e",
    text: "lanlanhanhan.tmall.com",
  },
  {
    url: "https://aiyootoo.taobao.com/index.htm?spm=2013.1.w5002-10125720652.2.3ukbWQ",
    text: "aiyootoo.taobao.com",
  },
  {
    url: "https://dongli8.taobao.com/?spm=2013.1.1000126.2.ptEXMd",
    text: "dongli8.taobao.com",
  },
  {
    url: "https://yilian00.taobao.com/search.htm?spm=2013.1.0.0.9UUXwa&amp;amp;search=y",
    text: "yilian00.taobao.com",
  },
  {
    url: "https://shop114503269.taobao.com/search.htm?spm=2013.1.w5001-12049903087.4.4YS7dO&amp;amp;search=y&amp;amp;scene=taobao",
    text: "shop114503269.taobao.com",
  },
  {
    url: "https://yanerjia.taobao.com/search.htm?spm=2013.1.w5002-10112822626.1.IlJybo&amp;amp;search=y",
    text: "yanerjia.taobao.com",
  },
  {
    url: "https://yilian00.taobao.com/",
    text: "yilian00.taobao.com",
  },
  {
    url: "https://shop70565966.taobao.com/search.htm?spm=2013.1.w5002-12384349757.1.0XVvzn&amp;amp;search=y",
    text: "shop70565966.taobao.com",
  },
  {
    url: "https://xlxbaby.taobao.com/search.htm?spm=2013.1.w5002-12469487113.1.whf26Z&amp;amp;search=y",
    text: "xlxbaby.taobao.com",
  },
  {
    url: "https://wdfs.taobao.com/search.htm?spm=2 013.1.w5002-12266495899.1.3ZSDi1&amp;amp;search=y",
    text: "wdfs.taobao.com",
  },
  {
    url: "https://atstp.taobao.com/search.htm?spm=2013.1.w5002-82433388.1.90Kkdu&amp;amp;search=y",
    text: "atstp.taobao.com",
  },
  {
    url: "https://hameifs.tmall.com/?spm=a220o.1000855.w5001-9015976621.7.8o6sL6&amp;amp;scene=taobao_shop",
    text: "hameifs.tmall.com",
  },
];
const ReputableShop = () => {
  return (
    <div style={{ margin: "10px 0px" }}>
      <Row justify="center">
        <Col xs={20}>
          <Row gutter={10}>
            <Col xs={12}>
              <Card title="THỜI TRANG NAM">
                <Row gutter={10}>
                  <Col xs={12}>
                    <List
                      header={<div>ÁO KHOÁC, ĐỒ ĐÔNG</div>}
                      bordered
                      dataSource={dataJacket}
                      renderItem={(item) => (
                        <List.Item>
                          <a
                            className="reputation_color_item"
                            target="_blank"
                            href={item.url}
                          >
                            {item.text}
                          </a>
                        </List.Item>
                      )}
                    />
                  </Col>
                  <Col xs={12}>
                    <List
                      header={<div>GIẦY DÉP</div>}
                      bordered
                      dataSource={dataShoes}
                      renderItem={(item) => (
                        <List.Item>
                          <a
                            className="reputation_color_item"
                            target="_blank"
                            href={item.url}
                          >
                            {item.text}
                          </a>
                        </List.Item>
                      )}
                    />
                  </Col>
                </Row>
                <Row gutter={10}>
                  <Col xs={12}>
                    <List
                      header={<div>ÁO SƠ MI</div>}
                      bordered
                      dataSource={dataShirt}
                      renderItem={(item) => (
                        <List.Item>
                          <a
                            className="reputation_color_item"
                            target="_blank"
                            href={item.url}
                          >
                            {item.text}
                          </a>
                        </List.Item>
                      )}
                    />
                  </Col>
                  <Col xs={12}>
                    <List
                      header={<div>QUẦN JEAN</div>}
                      bordered
                      dataSource={dataJean}
                      renderItem={(item) => (
                        <List.Item>
                          <a
                            className="reputation_color_item"
                            target="_blank"
                            href={item.url}
                          >
                            {item.text}
                          </a>
                        </List.Item>
                      )}
                    />
                  </Col>
                </Row>
                <Row gutter={10}>
                  <Col xs={12}>
                    <List
                      header={<div>QUẦN SHORT, ÁO PHÔNG</div>}
                      bordered
                      dataSource={dataShort}
                      renderItem={(item) => (
                        <List.Item>
                          <a
                            className="reputation_color_item"
                            target="_blank"
                            href={item.url}
                          >
                            {item.text}
                          </a>
                        </List.Item>
                      )}
                    />
                  </Col>
                  <Col xs={12}>
                    <List
                      header={<div>PHỤ KIỆN</div>}
                      bordered
                      dataSource={dataAccessories}
                      renderItem={(item) => (
                        <List.Item>
                          <a
                            className="reputation_color_item"
                            target="_blank"
                            href={item.url}
                          >
                            {item.text}
                          </a>
                        </List.Item>
                      )}
                    />
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col xs={12}>
              <Card title="THỜI TRANG NỮ">
                <Row gutter={10}>
                  <Col xs={12}>
                    <List
                      header={<div>VÁY, ĐẦM</div>}
                      bordered
                      dataSource={dataDresses}
                      renderItem={(item) => (
                        <List.Item>
                          <a
                            className="reputation_color_item"
                            target="_blank"
                            href={item.url}
                          >
                            {item.text}
                          </a>
                        </List.Item>
                      )}
                    />
                  </Col>
                  <Col xs={12}>
                    <List
                      header={<div>QUẦN LEGGING, SKINI, KAKI</div>}
                      bordered
                      dataSource={dataJogging}
                      renderItem={(item) => (
                        <List.Item>
                          <a
                            className="reputation_color_item"
                            target="_blank"
                            href={item.url}
                          >
                            {item.text}
                          </a>
                        </List.Item>
                      )}
                    />
                  </Col>
                </Row>
                <Row gutter={10}>
                  <Col xs={12}>
                    <List
                      header={<div>QUẦN JEAN, SHORT JEAN</div>}
                      bordered
                      dataSource={dataJeanW}
                      renderItem={(item) => (
                        <List.Item>
                          <a
                            className="reputation_color_item"
                            target="_blank"
                            href={item.url}
                          >
                            {item.text}
                          </a>
                        </List.Item>
                      )}
                    />
                  </Col>
                  <Col xs={12}>
                    <List
                      header={<div>QUẦN SHORT, ÁO PHÔNG</div>}
                      bordered
                      dataSource={dataSortW}
                      renderItem={(item) => (
                        <List.Item>
                          <a
                            className="reputation_color_item"
                            target="_blank"
                            href={item.url}
                          >
                            {item.text}
                          </a>
                        </List.Item>
                      )}
                    />
                  </Col>
                </Row>
                <Row gutter={10}>
                  <Col xs={12}>
                    <List
                      header={<div>QUẦN SHORT, ÁO PHÔNG</div>}
                      bordered
                      dataSource={dataShort}
                      renderItem={(item) => (
                        <List.Item>
                          <a
                            className="reputation_color_item"
                            target="_blank"
                            href={item.url}
                          >
                            {item.text}
                          </a>
                        </List.Item>
                      )}
                    />
                  </Col>
                  <Col xs={12}>
                    <List
                      header={<div>PHỤ KIỆN</div>}
                      bordered
                      dataSource={dataAccessories}
                      renderItem={(item) => (
                        <List.Item>
                          <a
                            className="reputation_color_item"
                            target="_blank"
                            href={item.url}
                          >
                            {item.text}
                          </a>
                        </List.Item>
                      )}
                    />
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* <div className="row main-row">
        <div className="container">
          <h2 style={{ marginBottom: "30px", textAlign: "center" }}>
            CÁC SHOP TRUNG QUỐC UY TÍN
          </h2>
        </div>
        <div className="container shop_uytin">
          <div className="row">
            <div className="col-md-6">
              <div className="block-categ-hompage">
                <div className="block-title">THỜI TRANG NỮ</div>
                <div className="block-cont">
                  <div className="row clearfix">
                    <div className="col-sm-6">
                      <h4 className="title">BỘ ĐỒ NGỦ</h4>
                      <ul className="list-url">
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop118835739.taobao.com/index.htm?spm=2013.1.w5002-10649543014.2.2U4eUl"
                          >
                            shop118835739.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop101298059.taobao.com/?spm=2013.1.1000126.2.u1tSht"
                          >
                            shop101298059.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop124374560.taobao.com/index.htm?spm=2013.1.w5002-13074149450.2.2456C4"
                          >
                            shop124374560.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop107117676.taobao.com/index.htm?spm=2013.1.w5002-6666984701.2.698JDx"
                          >
                            shop107117676.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop110011364.taobao.com/index.htm?spm=2013.1.w5002-12445104777.2.zUPuvB"
                          >
                            shop110011364.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop118835739.taobao.com/index.htm?spm=2013.1.w5002-10649543014.2.GDQb9O"
                          >
                            shop118835739.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop73484995.taobao.com/index.htm?spm=2013.1.w5002-1892103017.2.7FrxOM"
                          >
                            shop73484995.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://qazyd.taobao.com/index.htm?spm=2013.1.w5002-2841781720.2.SxT95M"
                          >
                            qazyd.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop124639493.taobao.com/index.htm?spm=2013.1.w5002-13112200680.2.dmWULN"
                          >
                            shop124639493.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://weizhufs.tmall.com/index.htm?spm=a220o.1000855.w5002-3429477332.2.BZ9Qx2"
                          >
                            weizhufs.tmall.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://fnboled.tmall.com/shop/view_shop.htm?spm=a220o.1000855.w10078035-11995717110.1.8zm9cP&amp;amp;mytmenu=mdianpu&amp;amp;utkn=g%2Cmzxge33mmvsmn3f5uk26u1443141610092&amp;amp;user_number_id=729349464&amp;amp;scm=1028.1.1.20001&amp;amp;scene=taobao_shop"
                          >
                            fnboled.tmall.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop117701401.taobao.com/index.htm?spm=2013.1.w5002-10489357760.2.VEyd7Y"
                          >
                            shop117701401.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop117818076.taobao.com/index.htm?spm=2013.1.w5002-10505967567.2.HwOE5p"
                          >
                            shop117818076.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://pinkdackeb.taobao.com/index.htm?spm=2013.1.w5002-11130853073.2.lCX5Od"
                          >
                            pinkdackeb.taobao.com
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <h4 className="title">GIẦY DÉP</h4>
                      <ul className="list-url">
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop114265548.taobao.com/index.htm?spm=a1z10.1-c.w5002-12721586672.2.BaUmez"
                          >
                            shop114265548.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop102622014.taobao.com/index.htm?spm=a1z10.5-c.w5002-922808924.2.mKbxPc"
                          >
                            shop102622014.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://shop1402937596764.1688.com/?spm=a2615.2177701.0.0.fcTf2Z"
                          >
                            shop1402937596764.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://wzyouman.1688.com/?spm=a2615.2177701.0.0.KrIwXu"
                          >
                            wzyouman.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://cdbssm.1688.com/?spm=a261y.7663282.0.0.OohRo8"
                          >
                            cdbssm.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://dumooz.taobao.com/?spm=a1z10.1-c.w5001-2076453714.6.GY87CU&amp;amp;scene=taobao_shop"
                          >
                            dumooz.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://chaowwei.1688.com/?spm=a261y.7663282.0.0.q6VgVq"
                          >
                            chaowwei.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://shop975364523123.1688.com/?spm=a261y.7663282.0.0.KwJvLW"
                          >
                            shop975364523123.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://13819664052.1688.com/?spm=a261y.7663282.0.0.lA0EG2"
                          >
                            13819664052.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop107081335.taobao.com/index.htm?spm=2013.1.w5002-10590708380.2.tWzztO"
                          >
                            shop107081335.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop109023589.taobao.com/index.htm?spm=2013.1.w5002-9774230883.2.qy3GKM"
                          >
                            shop109023589.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://fanslady.taobao.com/index.htm?spm=a1z10.1-c.w5002-4704130487.2.jQfAe2"
                          >
                            fanslady.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://dvvd.tmall.com/?spm=a1z10.1-b.w5001-9840532903.5.EyTda4&amp;amp;scene=taobao_shop"
                          >
                            dvvd.tmall.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row clearfix">
                    <div className="col-sm-6">
                      <h4 className="title">PHỤ KIỆN</h4>
                      <ul className="list-url">
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://chuangjue13.1688.com/?spm=a2615.7691456.0.0.4mPD0J"
                          >
                            chuangjue13.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://yqxssh.1688.com/?spm=a261y.7663282.0.0.yjuUUv"
                          >
                            yqxssh.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://hanaosp.1688.com/?spm=a261y.7663282.0.0.GGnDfC"
                          >
                            hanaosp.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://15meizhe.1688.com/?spm=a261y.7663282.0.0.9QVoCP"
                          >
                            15meizhe.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://ywlayue.1688.com/?spm=a261y.7663282.0.0.nBs118"
                          >
                            ywlayue.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://xiezhixing99.1688.com/?spm=a261y.7663282.0.0.Y4ZREZ"
                          >
                            xiezhixing99.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://shop1432746532538.1688.com/?spm=a261y.7663282.0.0.0oClKo"
                          >
                            shop1432746532538.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://kuxiushipin.1688.com/?spm=a261y.7663282.0.0.YngnkZ"
                          >
                            kuxiushipin.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop124789381.taobao.com/?spm=2013.1.w5001-11372395778.5.vtRpNs&amp;amp;scene=taobao_shop"
                          >
                            shop124789381.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop114060689.taobao.com/index.htm?spm=2013.1.w5002-8937682399.2.T31oRV"
                          >
                            shop114060689.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://peidufushi.taobao.com/index.htm?spm=2013.1.w5002-13182680054.2.or0T1T"
                          >
                            peidufushi.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop115793073.taobao.com/index.htm?spm=2013.1.w5002-11306227092.2.3XOoUs"
                          >
                            shop115793073.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://aixin789.taobao.com/index.htm?spm=2013.1.w5002-3823607472.2.00HHLk"
                          >
                            aixin789.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://detail.tmall.com/item.htm?spm=a230r.1.14.38.FE2yC7&amp;amp;id=39932657359&amp;amp;ns=1&amp;amp;abbucket=2"
                          >
                            detail.tmall.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://xinyaxin.taobao.com/index.htm?spm=2013.1.w5002-1536723185.2.AlREVK"
                          >
                            xinyaxin.taobao.com
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <h4 className="title">ÁO KHOÁC , ĐỒ ĐÔNG</h4>
                      <ul className="list-url">
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://bbg-star.taobao.com/index.htm?spm=2013.1.w5002-1786880421.2.JvMTB2"
                          >
                            bbg-star.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://aisaqina.tmall.com/shop/view_shop.htm?spm=a1z10.3-b.w8499844-8562724116.2.vrAj7a&amp;amp;scene=taobao_shop"
                          >
                            aisaqina.tmall.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://yizhilanka.tmall.com/index.htm?spm=a220o.1000855.w5002-7180543914.2.ZScnZZ"
                          >
                            yizhilanka.tmall.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop104395556.taobao.com/index.htm?spm=a1z10.1-c.w5002-2020851162.2.AYs9CW"
                          >
                            shop104395556.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop114349244.taobao.com/index.htm?spm=a1z10.1-c.w5002-12698561328.2.R5hqiC"
                          >
                            shop114349244.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop112642952.taobao.com/index.htm?spm=2013.1.w5002-12867199956.2.YeQW2p"
                          >
                            shop112642952.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://septemwolves.taobao.com/index.htm?spm=a1z10.1-c.w5002-11693630995.2.mlkT6S"
                          >
                            septemwolves.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop117178619.taobao.com/?spm=2013.1.1000126.2.07oQ1e"
                          >
                            shop117178619.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://liggfop.tmall.com/index.htm?spm=a1z10.1-b.w5002-7203278602.2.KvyaWU"
                          >
                            liggfop.tmall.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop116325065.taobao.com/index.htm?spm=a1z10.1-c.w5002-10420819351.2.R5kF0d"
                          >
                            shop116325065.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://yueerziya.tmall.com/?spm=a220o.1000855.w5001-10893189489.6.croyPY&amp;amp;scene=taobao_shop"
                          >
                            yueerziya.tmall.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop103455643.taobao.com/index.htm?spm=2013.1.w5002-7393974881.2.XsqJfC"
                          >
                            shop103455643.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop126469835.taobao.com/index.htm?spm=2013.1.w5002-12463844170.2.2iYkdx"
                          >
                            shop126469835.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://weishifs.tmall.com/?spm=a1z10.1-b.w10849179-12784546964.10.MJfJbt"
                          >
                            weishifs.tmall.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop112216361.taobao.com/index.htm?spm=2013.1.w5002-8012059122.2.IHqTT1"
                          >
                            shop112216361.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://shop1402937596764.1688.com/?spm=a2615.2177701.0.0.fcTf2Z"
                          >
                            shop1402937596764.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://shop1400086480118.1688.com/?spm=a261y.7663282.0.0.VxRnPm"
                          >
                            shop1400086480118.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://diyiyuanfushi.1688.com/?spm=a261y.7663282.0.0.Dtl00c"
                          >
                            diyiyuanfushi.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://iwes.taobao.com/?ali_trackid=9_cd52a448fde0e4c64e23454df628305b"
                          >
                            iwes.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://shop1405933014401.1688.com/?spm=a261y.7663282.0.0.sy3Zmh"
                          >
                            shop1405933014401.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://shop1438966153680.1688.com/?spm=a261y.7663282.0.0.rik2Cg"
                          >
                            shop1438966153680.1688.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row clearfix">
                    <div className="col-sm-6">
                      <h4 className="title">TÚI XÁCH </h4>
                      <ul className="list-url">
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://weishifs.tmall.com/?spm=a220o.1000855.w10849179-12784546964.10.V2qftu"
                          >
                            weishifs.tmall.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://shop1376326610255.1688.com/?spm=a261y.7663282.0.0.SHASOt"
                          >
                            shop1376326610255.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://baginbagout.1688.com/?spm=a261y.7663282.0.0.NEls4X"
                          >
                            baginbagout.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://shop1433490015898.1688.com/?spm=a261y.7663282.0.0.PE4mG6"
                          >
                            shop1433490015898.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://shop1370323080860.1688.com/?spm=a261y.7663282.0.0.6tiWxj"
                          >
                            shop1370323080860.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://shop1399568444549.1688.com/page/offerlist.htm?spm=a261y.7663282.0.0.z2BZ4l"
                          >
                            shop1399568444549.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://shop1370323080860.1688.com/page/offerlist.htm?spm=a261y.7663282.0.0.7sVMuP"
                          >
                            shop1370323080860.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop129227816.taobao.com/index.htm?spm=a1z10.1-c.w5002-11977709307.2.jXOkaG"
                          >
                            shop129227816.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://love13c.taobao.com/index.htm?spm=a1z10.3-c.w5002-12037634070.2.35ZSuU"
                          >
                            love13c.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://lianshangbeibao.taobao.com/index.htm?spm=a1z10.1-c.w5002-7306523775.2.8gcfPD"
                          >
                            lianshangbeibao.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://lianshangbeibao.taobao.com/index.htm?spm=a1z10.1-c.w5002-7306523775.2.lGSXGM"
                          >
                            lianshangbeibao.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://doodoo.tmall.com/category.htm?spm=a1z10.1-b.w5001-9986943660.4.5bQMlQ&amp;amp;search=y&amp;amp;scene=taobao_shop"
                          >
                            doodoo.tmall.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop125167989.taobao.com/index.htm?spm=a1z10.1-c.w5002-11705820350.2.vBNY64"
                          >
                            shop125167989.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://wuhooa.taobao.com/index.htm?spm=2013.1.w5002-2339947446.2.W236TC"
                          >
                            wuhooa.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://suonvbag.taobao.com/index.htm?spm=a1z10.3-c.w5002-8828405005.2.nCfpRi"
                          >
                            suonvbag.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://jenjee8.taobao.com/index.htm?spm=a1z10.1-c.w5002-11749086126.2.ApQDIK"
                          >
                            jenjee8.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop106193006.taobao.com/index.htm?spm=2013.1.w5002-11927546801.2.EzOg6D"
                          >
                            shop106193006.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://mybaofang.taobao.com/index.htm?spm=2013.1.w5002-12417786126.2.PGZtOf"
                          >
                            mybaofang.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop59803166.taobao.com/index.htm?spm=2013.1.w5002-12468554759.2.VMIgGc"
                          >
                            shop59803166.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop73512880.taobao.com/index.htm?spm=2013.1.w5002-11693689803.2.TXoDHL"
                          >
                            shop73512880.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop129541128.taobao.com/index.htm?spm=2013.1.w5002-12445605036.2.zIP35v"
                          >
                            shop129541128.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://qigongzhu.tmall.com/index.htm?spm=a220o.1000855.w5002-2911227285.2.0mC9N7"
                          >
                            qigongzhu.tmall.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://tiancaibag.taobao.com/index.htm?spm=2013.1.w5002-7324013290.2.hfnykc"
                          >
                            tiancaibag.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://piscesgirl.taobao.com/index.htm?spm=a1z10.3-c.w5002-9560057965.2.nu4cKs"
                          >
                            piscesgirl.taobao.com
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <h4 className="title">HÀNG THỜI TRANG FAKE</h4>
                      <ul className="list-url">
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://paimai.taobao.com/pmp_list/3_53856004___1_1.htm?spm=a21bo.7724922.8428.4.UJ23om&amp;amp;needOrgSearch=true#sort-bar"
                          >
                            paimai.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://zybagmvp.taobao.com/index.htm?spm=a1z10.3-c.w5002-7100781168.2.ZXytOg"
                          >
                            zybagmvp.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://s.taobao.com/list?spm=a219r.lm894.14.304.wajbC8&amp;amp;type=similar&amp;amp;app=i2i&amp;amp;rec_type=1&amp;amp;uniqpid=-1691820517&amp;amp;nid=521192219152"
                          >
                            s.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://oumiru.taobao.com/index.htm?spm=2013.1.w5002-12691774250.2.2exjXF"
                          >
                            oumiru.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://xihuagui.taobao.com/index.htm?spm=2013.1.w5002-8747443476.2.ckkjNc"
                          >
                            xihuagui.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://xihuagui.taobao.com/index.htm?spm=2013.1.w5002-8747443476.2.UA7hMV"
                          >
                            xihuagui.taobao.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="block-categ-hompage">
                <div className="block-title">MẸ VÀ BÉ</div>
                <div className="block-cont">
                  <div className="row clearfix">
                    <div className="col-sm-6">
                      <h4 className="title">QUẦN ÁO TRẺ EM</h4>
                      <ul className="list-url">
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop126457015.taobao.com/index.htm?spm=2013.1.w5002-12415668671.2.VIRmCy"
                          >
                            shop126457015.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://afttfa.1688.com/?spm=a261y.7663282.0.0.zMfH42"
                          >
                            afttfa.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://dgkids2014.1688.com/page/offerlist_62418328_48140460.htm?spm=a261y.7663282.0.0.YTOdGW&amp;amp;sortType=showcase"
                          >
                            dgkids2014.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://dgkids2014.1688.com/?spm=a261y.7663282.0.0.hxdUHQ"
                          >
                            dgkids2014.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop64562719.taobao.com/index.htm?spm=2013.1.w5002-842537256.2.VQKk28"
                          >
                            shop64562719.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop64562719.taobao.com/index.htm?spm=2013.1.w5002-842537256.2.w3xv8w"
                          >
                            shop64562719.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop116123894.taobao.com/index.htm?spm=2013.1.w5002-9871525699.2.7K60F3"
                          >
                            shop116123894.taobao.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row clearfix">
                    <div className="col-sm-6">
                      <h4 className="title">GIẦY DÉP TRẺ EM</h4>
                      <ul className="list-url">
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://zhxy188.1688.com/?spm=a261y.7663282.0.0.Z3blDm"
                          >
                            zhxy188.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://shuaiqu.1688.com/?spm=a261y.7663282.0.0.UkSmiE"
                          >
                            shuaiqu.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://yuemingfashion.1688.com/?spm=a261y.7663282.0.0.ixpXAm"
                          >
                            yuemingfashion.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://lwxl.tmall.com/shop/view_shop.htm?spm=a220o.1000855.w10908154-11371369662.1.8SbQ76&amp;amp;v=1&amp;amp;scene=taobao_shop"
                          >
                            lwxl.tmall.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://bb919.taobao.com/index.htm?spm=2013.1.w5002-10330560805.2.G1znK0"
                          >
                            bb919.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://babaya.tmall.com/shop/view_shop.htm?spm=a220o.1000855.w5001-10259190154.14.osDqOn&amp;amp;mytmenu=mdianpu&amp;amp;utkn=g%2Cwdc3brorxtdozpncwxva1445413060331&amp;amp;user_number_id=1773246053&amp;amp;scm=1028.1.1.20001&amp;amp;scene=taobao_shop"
                          >
                            babaya.tmall.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://babaya.tmall.com/shop/view_shop.htm?spm=a220o.1000855.w5001-10259190154.14.SLXIln&amp;amp;mytmenu=mdianpu&amp;amp;utkn=g%2Cwdc3brorxtdozpncwxva1445413060331&amp;amp;user_number_id=1773246053&amp;amp;scm=1028.1.1.20001&amp;amp;scene=taobao_shop"
                          >
                            babaya.tmall.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://wenwentuoxie.taobao.com/index.htm?spm=2013.1.w5002-10063896215.2.tf5NSc"
                          >
                            wenwentuoxie.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://xiongdixieye8.taobao.com/index.htm?spm=2013.1.w5002-10211180323.2.4PBbab"
                          >
                            xiongdixieye8.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://meimei-gongzhu.taobao.com/index.htm?spm=2013.1.w5002-8359056553.2.XWlAd7"
                          >
                            meimei-gongzhu.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://zaizailexieye.1688.com/?spm=a261y.7663282.0.0.FlBL2F"
                          >
                            zaizailexieye.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://tksp61.1688.com/?spm=a261y.7663282.0.0.YehMCW"
                          >
                            tksp61.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://shop1437670034330.1688.com/?spm=a261y.7663282.0.0.zdHD87"
                          >
                            shop1437670034330.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://szyangnuo.1688.com/?spm=a261y.7663282.0.0.vrY9l8"
                          >
                            szyangnuo.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://shop1448383939887.1688.com/?spm=a261y.7663282.0.0.L86d8K"
                          >
                            shop1448383939887.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://kadingtong.1688.com/?spm=a261y.7663282.0.0.WVwqox"
                          >
                            kadingtong.1688.com
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <h4 className="title">ĐỒ CHƠI CHO BÉ</h4>
                      <ul className="list-url">
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://bbs.tmall.com/?spm=a220o.1000855.w5001-10012925590.7.awoswp&amp;amp;scene=taobao_shop"
                          >
                            bbs.tmall.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop116465312.taobao.com/index.htm?spm=2013.1.w5002-12919478251.2.e4Z9it"
                          >
                            shop116465312.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://yuyumiaomiaowu.taobao.com/index.htm?spm=2013.1.w5002-6645918340.2.4SwQyL"
                          >
                            yuyumiaomiaowu.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://ddgwanju.1688.com/?spm=a261y.7663282.0.0.Odmtrp"
                          >
                            ddgwanju.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop122116176.taobao.com/index.htm?spm=2013.1.w5002-10948753334.2.tXTO9f"
                          >
                            shop122116176.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://stmzwj.1688.com/?spm=a261y.7663282.0.0.ij43ym"
                          >
                            stmzwj.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://dayingkt.1688.com/?spm=a261y.7663282.0.0.hQkPOc"
                          >
                            dayingkt.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://excitedli.taobao.com/index.htm?spm=2013.1.w5002-12134983092.2.HZKVj3"
                          >
                            excitedli.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://shop1449680097864.1688.com/?spm=a261y.7663282.0.0.fpPw5d"
                          >
                            shop1449680097864.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://yuerbao.tmall.com/shop/view_shop.htm?spm=a220o.1000855.w5001-9735596407.5.RjE4wM&amp;amp;mytmenu=mdianpu&amp;amp;utkn=g,2p63n6nru3dozpncwxva1421029326606&amp;amp;user_number_id=2092638387&amp;amp;scm=1028.1.1.20001&amp;amp;scene=taobao_shop"
                          >
                            yuerbao.tmall.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://yiwuaohu.1688.com/?spm=a261y.7663282.0.0.p5p4IT"
                          >
                            yiwuaohu.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://tlcmzwj.taobao.com/?spm=2013.1.1000126.2.j6dQtG"
                          >
                            tlcmzwj.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://shop1404320214587.1688.com/?spm=a261y.7663282.0.0.b8YXt6"
                          >
                            shop1404320214587.1688.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row clearfix">
                    <div className="col-sm-6">
                      <h4 className="title">PHỤ KIỆN CHO BÉ</h4>
                      <ul className="list-url">
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop141822537.taobao.com/index.htm?spm=2013.1.w5002-12906825777.2.y05rZ7"
                          >
                            shop141822537.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop63760988.taobao.com/index.htm?spm=2013.1.w5002-13313513233.2.wmxeXg"
                          >
                            shop63760988.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://vivi58.taobao.com/index.htm?spm=2013.1.w5002-9058053491.2.vkw8yc"
                          >
                            vivi58.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop117732247.taobao.com/index.htm?spm=2013.1.w5002-10535522051.2.AiY7AK"
                          >
                            shop117732247.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://huimell.taobao.com/index.htm?spm=2013.1.w5002-823911893.2.05i81M"
                          >
                            huimell.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop117378505.taobao.com/index.htm?spm=2013.1.w5002-10729129401.2.pBO5cH"
                          >
                            shop117378505.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://yanyanshipin.taobao.com/index.htm?spm=2013.1.w5002-11825177355.2.2pqUmI"
                          >
                            yanyanshipin.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://yanyanshipin.taobao.com/index.htm?spm=2013.1.w5002-11825177355.2.RUxwsS"
                          >
                            yanyanshipin.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://lianrenyinghang.tmall.com/search.htm?spm=a220o.1000855.w5001-13258744907.7.OmpEJT&amp;amp;search=y&amp;amp;scene=taobao_shop"
                          >
                            lianrenyinghang.tmall.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://cicigirlfashi.1688.com/?spm=a261y.7663282.0.0.oZdhCe"
                          >
                            cicigirlfashi.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://smilingindustry.1688.com/?spm=a261y.7663282.0.0.HisA6k"
                          >
                            smilingindustry.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://shop1382115286481.1688.com/?spm=a261y.7663282.0.0.tFMSc0"
                          >
                            shop1382115286481.1688.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="http://xufa9891.1688.com/?spm=a261y.7663282.0.0.DpwgiE"
                          >
                            xufa9891.1688.com
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <h4 className="title">THỜI TRANG BÀ BẦU </h4>
                      <ul className="list-url">
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://elusaitter.tmall.com/index.htm?spm=a220o.1000855.w5002-4065034865.2.SBnu4T"
                          >
                            elusaitter.tmall.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://vinanasmile.taobao.com/index.htm?spm=2013.1.w5002-11834236632.2.bBHqQg"
                          >
                            vinanasmile.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop106916487.taobao.com/index.htm?spm=2013.1.w5002-12685252750.2.VuuD0X"
                          >
                            shop106916487.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop124076734.taobao.com/index.htm?spm=2013.1.w5002-12673985915.2.2y8DC6"
                          >
                            shop124076734.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://ioufs.taobao.com/index.htm?spm=2013.1.w5002-12903535575.2.SXoK5b"
                          >
                            ioufs.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop111381129.taobao.com/index.htm?spm=2013.1.w5001-12806276177.2.KyMzRN&amp;amp;scene=taobao_shop"
                          >
                            shop111381129.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop110673629.taobao.com/index.htm?spm=2013.1.w5002-12205393823.2.pX97N7"
                          >
                            shop110673629.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop110898253.taobao.com/?spm=2013.1.w5001-10350599279.5.wNGcYv&amp;amp;scene=taobao_shop"
                          >
                            shop110898253.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://88u8.taobao.com/index.htm?spm=2013.1.w5002-7392960566.2.xOQ8yJ"
                          >
                            88u8.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop118094695.taobao.com/index.htm?spm=2013.1.w5002-12274974200.2.TngHsH"
                          >
                            shop118094695.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop73298275.taobao.com/index.htm?spm=2013.1.w5002-12407934400.2.9diri3"
                          >
                            shop73298275.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://8888386.taobao.com/index.htm?spm=2013.1.w5001-45217376.8.C8n8mj&amp;amp;scene=taobao_shop"
                          >
                            8888386.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://dazhutou0123.taobao.com/index.htm?spm=2013.1.w5002-2808889872.2.rgOwR6"
                          >
                            dazhutou0123.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop117898929.taobao.com/index.htm?spm=2013.1.w5002-12732912327.2.0XqEXY"
                          >
                            shop117898929.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop110673629.taobao.com/index.htm?spm=2013.1.w5002-12205393823.2.aRTAwB"
                          >
                            shop110673629.taobao.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row clearfix"></div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="block-categ-hompage">
                <div className="block-title">NỘI , NGOẠI THẤT</div>
                <div className="block-cont">
                  <div className="row clearfix">
                    <div className="col-sm-6">
                      <h4 className="title">PHÒNG KHÁCH</h4>
                      <ul className="list-url">
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop72812010.taobao.com/search.htm?spm=2013.1.0.0.qKTWa1&amp;amp;search=y"
                          >
                            shop72812010.taobao.com
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <h4 className="title">PHÒNG NGỦ</h4>
                      <ul className="list-url">
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://suyunjiasi.taobao.com/index.htm?spm=2013.1.w5002-10226119308.2.zX0NVf"
                          >
                            suyunjiasi.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop104670568.taobao.com/index.htm?spm=2013.1.w5001-2547433317.2.kSg1XD&amp;amp;scene=taobao_shop"
                          >
                            shop104670568.taobao.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row clearfix">
                    <div className="col-sm-6">
                      <h4 className="title">PHÒNG BẾP</h4>
                      <ul className="list-url">
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shrutijiaju.tmall.com/index.htm?spm=a220o.1000855.w5001-8062956196.4.slMdLM&amp;amp;scene=taobao_shop"
                          >
                            shrutijiaju.tmall.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://papayao.taobao.com/index.htm?spm=2013.1.w5002-10692141397.2.ELQg5Y"
                          >
                            papayao.taobao.com
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <h4 className="title">THIẾT BỊ PHÒNG TẮM , VỆ SINH</h4>
                    </div>
                  </div>
                  <div className="row clearfix">
                    <div className="col-sm-6">
                      <h4 className="title">GIẤY , DECAN DÁN TƯỜNG</h4>
                      <ul className="list-url">
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://tangxuan520.taobao.com/index.htm?spm=2013.1.w5002-2997881794.2.OrjP31"
                          >
                            tangxuan520.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop58558855.taobao.com/index.htm?spm=a1z10.1-c.w5002-11821417639.2.lF4dP8"
                          >
                            shop58558855.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://yi-xi-zhi-di.taobao.com/index.htm?spm=2013.1.w5002-4660978260.2.lGYHzb"
                          >
                            yi-xi-zhi-di.taobao.com
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <h4 className="title">CHĂN GA GỐI NỆM</h4>
                    </div>
                  </div>
                  <div className="row clearfix"></div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="block-categ-hompage">
                <div className="block-title">LINH KIỆN , PHỤ KIỆN ĐIỆN TỬ</div>
                <div className="block-cont">
                  <div className="row clearfix">
                    <div className="col-sm-6">
                      <h4 className="title">LOA VÀ ÂM LI</h4>
                      <ul className="list-url">
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://transwin.tmall.com/index.htm?spm=a220o.1000855.w5002-9213334920.2.7T9t5F"
                          >
                            transwin.tmall.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://xdrsdq.tmall.com/index.htm?spm=a220o.1000855.w5002-10395581616.2.5GTnPo"
                          >
                            xdrsdq.tmall.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://fashao123.taobao.com/index.htm?spm=2013.1.w5002-985858300.2.IVfhls"
                          >
                            fashao123.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://hengxsc.taobao.com/search.htm?spm=2013.1.w5001-1721167155.4.oErDH6&amp;amp;search=y&amp;amp;scene=taobao_shop"
                          >
                            hengxsc.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop107262638.taobao.com/?spm=2013.1.1000126.2.ETqJI6"
                          >
                            shop107262638.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://junjieshuma.tmall.com/?spm=a220o.1000855.w5001-9166932032.4.jXDK8L&amp;amp;scene=taobao_shop"
                          >
                            junjieshuma.tmall.com
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <h4 className="title">PHỤ KIỆN ĐIỆN THOẠI </h4>
                      <ul className="list-url">
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://jinguidasm.tmall.com/index.htm?spm=a220o.1000855.w5002-12376480929.2.1CHxMY"
                          >
                            jinguidasm.tmall.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://bolot.taobao.com/index.htm?spm=2013.1.w5002-3914946191.2.So0WWD"
                          >
                            bolot.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop101598743.taobao.com/index.htm?spm=2013.1.w5002-10530564887.2.vJU0MV"
                          >
                            shop101598743.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://masm.tmall.com/index.htm?spm=a1z10.1-b.w5002-13110465704.87.J8EY2B"
                          >
                            masm.tmall.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://s.taobao.com/search?q=%E6%89%8B%E6%9C%BA%E5%A4%96%E5%A3%B3&amp;amp;s_from=newHeader&amp;amp;ssid=s5-e&amp;amp;search_type=item&amp;amp;sourceId=tb.item"
                          >
                            s.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://hwxwnx.taobao.com/index.htm?spm=2013.1.w5002-9571128249.2.DYOL0I"
                          >
                            hwxwnx.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://item.taobao.com/item.htm?id=40783555461&amp;amp;ali_trackid=2:mm_111284466_10758191_35954927:1452672442_261_1694466830&amp;amp;pvid=200_10.176.141.90_400_1452672442199"
                          >
                            item.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://ruishengshuma.tmall.com/index.htm?spm=a220o.1000855.w5002-9034315569.2.paILEw"
                          >
                            ruishengshuma.tmall.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://edifierht.tmall.com/index.htm?spm=a220o.1000855.w10277967-12767263001.3.r11PAY&amp;amp;scene=taobao_shop"
                          >
                            edifierht.tmall.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://fulism.tmall.com/index.htm?spm=a220o.1000855.w5002-4107776122.2.kJbYcm"
                          >
                            fulism.tmall.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop111352453.taobao.com/index.htm?spm=2013.1.w5002-7505901790.2.mrPVQA"
                          >
                            shop111352453.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://ddyxsm.tmall.com/index.htm?spm=a220o.1000855.w5002-5534574999.2.g6aAzG"
                          >
                            ddyxsm.tmall.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop102435461.taobao.com/index.htm?spm=2013.1.w5002-12750917999.2.5RpC9p"
                          >
                            shop102435461.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop142199022.taobao.com/index.htm?spm=2013.1.w5002-12891154368.2.8IRT1i"
                          >
                            shop142199022.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop105765701.taobao.com/index.htm?spm=2013.1.w5002-3157545415.2.K3d4KM"
                          >
                            shop105765701.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop111677027.taobao.com/index.htm?spm=2013.1.w5002-7725636157.2.TYIZfT"
                          >
                            shop111677027.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop130244482.taobao.com/index.htm?spm=2013.1.w5002-12126583332.2.FvxSHn"
                          >
                            shop130244482.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shandongdexindianzi.taobao.com/index.htm?spm=2013.1.w5002-13252180049.2.m4ACXS"
                          >
                            shandongdexindianzi.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop72332252.taobao.com/index.htm?spm=2013.1.w5002-1478827691.2.eA52ee"
                          >
                            shop72332252.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://gusgu.tmall.com/index.htm?spm=a220o.1000855.w8731859-9975314353.1.EH3F1k&amp;amp;scene=taobao_shop"
                          >
                            gusgu.tmall.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://gushangsm.tmall.com/shop/view_shop.htm?spm=a220o.1000855.w8731859-10299628063.1.NmMIWE&amp;amp;mytmenu=mdianpu&amp;amp;utkn=g,xhc4tugk7xboxv5i2ovll2q1425983037896&amp;amp;user_number_id=1122189753&amp;amp;scm=1028.1.1.20001&amp;amp;scene=taobao_shop"
                          >
                            gushangsm.tmall.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://mygouwu.taobao.com/index.htm?spm=2013.1.w5002-9683093877.2.B7aBGX"
                          >
                            mygouwu.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop122418146.taobao.com/?spm=2013.1.1000126.2.wxG0TT"
                          >
                            shop122418146.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://9730.taobao.com/?spm=2013.1.1000126.3.Sh61HE"
                          >
                            9730.taobao.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row clearfix">
                    <div className="col-sm-6">
                      <h4 className="title">CAMERA ,MÁY ẢNH</h4>
                      <ul className="list-url">
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://jinlong123.taobao.com/index.htm?spm=2013.1.w5001-11193920518.4.ciVtSy&amp;amp;scene=taobao_shop"
                          >
                            jinlong123.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop100793300.taobao.com/index.htm?spm=2013.1.w5002-12506031522.2.K7E6sV"
                          >
                            shop100793300.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop104863917.taobao.com/?spm=2013.1.w5001-9990181908.2.0NX3RU&amp;amp;scene=taobao_shop"
                          >
                            shop104863917.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://nikonyj.tmall.com/index.htm?spm=a220o.1000855.w10633543-12753578036.11.bWHKZm"
                          >
                            nikonyj.tmall.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://maxpj.taobao.com/index.htm?spm=2013.1.w5002-12634006550.2.Z4fsSf"
                          >
                            maxpj.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop33904765.taobao.com/index.htm?spm=2013.1.w5002-2077080495.2.irc5s1"
                          >
                            shop33904765.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop124420887.taobao.com/index.htm?spm=2013.1.w5002-11992656851.2.2WQChs"
                          >
                            shop124420887.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://xiaomi.tmall.com/?spm=a220o.1000855.w10866117-8749713993.5.N7SE9J"
                          >
                            xiaomi.tmall.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://fujifilmhs.tmall.com/index.htm?spm=a220o.1000855.w8422322-12599697840.4.jAUBWd&amp;amp;scene=taobao_shop"
                          >
                            fujifilmhs.tmall.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop64634227.taobao.com/index.htm?spm=2013.1.w5002-11972848196.2.VBoRSx"
                          >
                            shop64634227.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://hainiaowo.taobao.com/?spm=2013.1.0.0.0Aws3p"
                          >
                            hainiaowo.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://china-monkey.taobao.com/?spm=2013.1.1000126.3.fhMD2F"
                          >
                            china-monkey.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://imome.taobao.com/?spm=2013.1.1000126.3.AeXLR3"
                          >
                            imome.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://shop69287129.taobao.com/index.htm?spm=2013.1.w5002-1861146790.2.uSWvyH"
                          >
                            shop69287129.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://hikpszx2.taobao.com/index.htm?spm=2013.1.w5002-11180508979.2.WECa7M"
                          >
                            hikpszx2.taobao.com
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://cosm.taobao.com/index.htm?spm=2013.1.w5002-10573093329.2.MUbW6X"
                          >
                            cosm.taobao.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div> */}
    </div>
  );
};

export default ReputableShop;
