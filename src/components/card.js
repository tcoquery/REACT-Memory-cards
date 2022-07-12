function Card(props) {

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

    const randomChar = shuffle(props.characters);

    return (
        <div>
            {randomChar.map((character) => {
                return <div key={character.id}>
                    <img onClick={()=> {props.onClick(character.id)}} alt={character.name} src={character.img} height='450px' width='450px'/>
                </div>
                }
            )}
        </div>
    )
};

export default Card;