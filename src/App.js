
import './App.css';

function App({people}){
  return (
    <>
      {people.map( (person) => {
        const {id,name,age,image} = person
        return (
          <article key={id} className='person'>
            <img src={image} />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </article>
        )
      })}
    </>
  )
}
export default App;
