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
        <div class="container mx-auto grid grid-cols-4 grid-rows-4 max-w-fit gap-6">
            {randomChar.map((character) => {
                return <div key={character.id}>
                    <img class="h-80 w-80 border-2 border-amber-600 cursor-pointer" onClick={()=> {props.onClick(character.id)}} alt={character.name} src={character.img}/>
                </div>
                }
            )}
        </div>
    )
};

export default Card;