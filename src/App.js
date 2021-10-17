
import './App.css';
import Counter from './components/counter';
import Search from './components/Search';
import StarRating from './components/StarRating';
import { Data } from './components/Data';
function App() {
  return (
    <div>
<Counter/>
<hr/>
<StarRating nbstar={5} />
<hr/>
<Search data={Data}/>

    </div>
   
 
  );
}

export default App;

