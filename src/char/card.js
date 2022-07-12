import uniqid from "uniqid";
import { useState } from "react";
import aragorn from './aragorn.jpg';
import bilbo from './bilbo.jpg';
import boromir from './boromir.jpg';
import elrond from './elrond.jpg';
import eopwyn from './eowyn.jpg';
import frodo from './frodo.jpg';
import galadriel from './galadriel.jpg';
import gandalf from './gandalf.jpg';
import gimli from './gimli.jpg';
import golum from './golum.jpg';
import legolas from './legolas.jpg';
import merry from './merry.jpg';
import pippin from './pippin.jpg';
import sam from './sam.jpg';
import saruman from './saruman.jpg';
import sauron from './sauron.jpg';
import theoden from './theoden.jpg';


function Card() {
    const [characters, setCharacters] = useState([
       {id:uniqid(), name:'aragorn', img:aragorn},
       {id:uniqid(), name:'bilbo', img:bilbo},
       {id:uniqid(), name:'boromir', img:boromir},
       {id:uniqid(), name:'elrond', img:elrond},
       {id:uniqid(), name:'eopwyn', img:eopwyn},
       {id:uniqid(), name:'frodo', img:frodo},
       {id:uniqid(), name:'galadriel', img:galadriel},
       {id:uniqid(), name:'gandalf', img:gandalf},
       {id:uniqid(), name:'gimli', img:gimli},
       {id:uniqid(), name:'golum', img:golum},
       {id:uniqid(), name:'legolas', img:legolas},
       {id:uniqid(), name:'merry', img:merry},
       {id:uniqid(), name:'pippin', img:pippin},
       {id:uniqid(), name:'sam', img:sam},
       {id:uniqid(), name:'saruman', img:saruman},
       {id:uniqid(), name:'sauron', img:sauron},
       {id:uniqid(), name:'theoden', img:theoden},
    ]);

    return (
        <div>
            {characters.map((character) => {
                return <div key={character.id}>
                    <img alt={character.name} src={character.img} height='450px' width='450px'/>
                </div>
                }
            )}
        </div>
    )
};

export default Card;