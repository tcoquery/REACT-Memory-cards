import uniqid from "uniqid";
import { useState } from "react";
import aragorn from '../char/aragorn.jpg';
import bilbo from '../char/bilbo.jpg';
import boromir from '../char/boromir.jpg';
import elrond from '../char/elrond.jpg';
import eopwyn from '../char/eowyn.jpg';
import frodo from '../char/frodo.jpg';
import galadriel from '../char/galadriel.jpg';
import gandalf from '../char/gandalf.jpg';
import gimli from '../char/gimli.jpg';
import golum from '../char/golum.jpg';
import legolas from '../char/legolas.jpg';
import merry from '../char/merry.jpg';
import pippin from '../char/pippin.jpg';
import sam from '../char/sam.jpg';
import saruman from '../char/saruman.jpg';
import sauron from '../char/sauron.jpg';
import theoden from '../char/theoden.jpg';


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

    const shuffle = (array) => {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex !== 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }

    const randomChar = shuffle(characters);

    return (
        <div>
            {randomChar.map((character) => {
                return <div key={character.id}>
                    <img alt={character.name} src={character.img} height='450px' width='450px'/>
                </div>
                }
            )}
        </div>
    )
};

export default Card;