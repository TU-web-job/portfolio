import { Contents, ComFooter, TenpoList } from '../types/MenuItems';

export const content : Contents[] = [
    {
        id:1,
        title:"ご挨拶",
        image:"/image/build001.jpg",
        text:"弊社ホームページをご覧いただきありがとうございます。\n 私たちは、地域に根ざした建設会社として、戸建て住宅、店舗、公共施設、マンションをはじめ、\n リフォーム・耐震補強工事など、多様なご要望にお応えしております。",
        url:""
    },
    {
        id:2,
        title:"これまでの実績",
        image:"/image/build002.jpg",
        text:"実績例 : \n ①カフェ店舗新築工事 \n ②都内ワンルーム型マンション新築工事 \n ③戸建住宅耐震補強リフォーム",
        url:""
    },
    {
        id:3,
        title:"全国各地対応可能",
        image:"/image/build003.jpg",
        text:"各地域に支店を構え全国各地で施工可能にし、お客様のご要望に寄り添い満足いただいています。",
        url:""
    }
]

export const footerList:ComFooter[] = [
    {
        id:1,
        name:"Top",
        url:"/Company"
    },
    {
        id:2,
        name:"Menu",
        url:""
    },
    {
        id:3,
        name:"portfolio",
        url:"/"
    }
]

export const workList: Contents[] = [
    {
        id:1,
        title:"新築戸建住宅",
        image:"/image/buildList2.jpg",
        text:"東京都内の閑静な住宅地に広々とした３階庭付きの戸建て住宅を施工させていただきました。\n お客様と密にコミュニケーションをとりこだわり抜いたお家に仕上がり、とても満足していただけました！",
        url:""
    },
    {
        id:2,
        title:"耐震補強リフォーム",
        image:"/image/buildList5.jpg",
        text: "築30年の木造住宅に耐震補強を行い、安全で安心して住める住環境に生まれ変わりました。\n構造計算から補強工事まで一貫して対応し、お客様に安心をお届けできました。",
        url:""
    },
    {
        id:3,
        title:"中古マンションリフォーム",
        image:"/image/buildList3.jpg",
        text: "築年数の経ったマンションの内装・水回りを全面リフォーム。\n機能性とデザイン性を両立させ、お客様の理想の住まいを実現しました。",
        url:""
    },
    {
        id:4,
        title:"新築ワンルームマンション",
        image:"/image/buildList4.jpg",
        text: "若年層向けのワンルームマンションを新築施工。\n防音性・断熱性を高める施工を行い、快適に過ごせる住環境を提供しました。",
        url:""
    },
    {
        id:5,
        title:"戸建耐震補強リフォーム",
        image:"/image/buildList6.jpg",
        text: "戸建住宅の耐震診断を行い、不足箇所に耐震補強工事を実施。\n災害時にも安心して暮らせる住まいへとリフォームしました。",
        url:""
    },
    {
        id:6,
        title:"賃貸マンション清掃工事",
        image:"/image/buildList1.jpg",
        text: "入居者様が快適に過ごせるよう、共用部・外壁の清掃工事を実施しました。\n建物全体の美観が向上し、管理会社様・入居者様ともに大変喜んでいただけました。",
        url:""
    },
]

export const tenpoList:TenpoList[] = [
    {
        id:1,
        name:"北海道支店",
        area:"北海道全域",
        phone:"01-1234-5678",
        address:"北海道道産子五稜星4869",
        map:""
    },
    {
        id:2,
        name:"東北支店",
        area:"東北地域",
        phone:"02-2222-4444",
        address:"岩手県仙台市ねぶた郡きりたんぽ1122",
        map:""
    },
    {
        id:3,
        name:"日光支店",
        area:"北関東３県",
        phone:"03-1234-9876",
        address:"群馬県水戸市日光10409",
        map:""
    },
    {
        id:4,
        name:"関東支店",
        area:"一都三県",
        phone:"04-1111-1111",
        address:"千葉県さいたま市みなとみらい1-1-1",
        map:""
    },
    {
        id:5,
        name:"東京本店",
        area:"東京都",
        phone:"090-11120-2229",
        address:"東京都23区多摩郡1010",
        map:""
    },
    {
        id:6,
        name:"北越支店",
        area:"新潟県、富山県、石川県、福井県",
        phone:"11-2222-4444",
        address:"福井県富山市かなざわ町コシヒカリ5555",
        map:""
    },
]