import Mbuzi from "../imgs/menu/mbuzi.jpg";
import Gambas from "../imgs/menu/gambas.jpg"
import MeatPlatter from "../imgs/menu/meat-platter.jpg"
import CheeseCake from "../imgs/menu/noni-cheese-cake.jpg"
import Wings from "../imgs/menu/buffulo-wings.jpg"
import Salad from "../imgs/menu/ceaser-salad.jpg"
import Tarte from "../imgs/menu/chocolatetart.jpg"
import Rebye from "../imgs/menu/rebeye.jpg"
// titles
import WingsTitle from "../imgs/menu/titles/buffalowings.png"
import CheeseTitle from "../imgs/menu/titles/cheese.png"
import ChickenTitle from "../imgs/menu/titles/chicken.png"
import GambasTitle from "../imgs/menu/titles/gambas.png"
import PlatterTitle from "../imgs/menu/titles/platter.png"
import PoshoTitle from "../imgs/SVG/posho_text.svg"
import SaladTitle from "../imgs/menu/titles/salad.png"
import SteakTitle from "../imgs/menu/titles/steak.png"
import TarteTitle from "../imgs/menu/titles/tart.png";
import NyamaTitle fro


export default {
    foodData: [

        {
            id: 3,
            foodImage: MeatPlatter,
            titleImage: PlatterTitle,
            desc:" A variety of meats paired with your favorite salad, veggies, sausages, rump steak, english battered tilapia fillet, chicken strips, bbq ,  chicken wings or drum sticks, garlic bread, chips, salad, otato wedeges, onion rings and selectoin of chef's sauces"
        },


        {
            id: 2,
            foodImage: Gambas,
            titleImage: GambasTitle,
            desc:"Spanish insipired prawns cloaked in galric-infused olive oil with smoky hints of paprika a touch of sweetness from mixed bell peppers and garnised with coriander"
        },

    {
        id:4,
        foodImage: CheeseCake,
        titleImage: CheeseTitle,
        desc:"Exotic fruits, strawberry coculis and chocolate soil"
    },

    {
        id:5,
        foodImage: Wings,
        titleImage: WingsTitle,
        desc:"Smokey BBQ sauce mixed leaf salad"
    },

    {
        id:6,
        foodImage: Salad,
        titleImage: SaladTitle,
        desc:"Ginger, Onions, garlic, rockets & coriander tossed in with soya, sesame, dressing & lime"
    },

    {
        id:7,
        foodImage:Tarte,
        titleImage: TarteTitle,
        desc:"Vanilla ice-cream and pistachio crumble"
    },

    {
        id:8,
        foodImage: Rebye,
        titleImage: SteakTitle,
        desc:"Garlic butter, peppercorn sauce, hollandise OR blue cheese sauce"
    },

    
    {
        id:1,
        foodImage: Mbuzi,
        titleImage: PoshoTitle,
        desc: "stir fried and spicy goats meat with mixed bell peppers, pnions, coriander, local veggies with tatmato concasse and ugali"
    },
    ]
}