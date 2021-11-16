import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSign from './components/WarningSign'
import MyBadge from './components/MyBadge'
import SingleBook from './components/SingleBook'
import BookList from './components/BookList'
import scifi from './scifi.json'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WarningSign text="Watch out again!" />
         <MyBadge text="NEW!!" color="info" />
         <SingleBook book={scifi[0]} />
        <BookList books={scifi} />
      </header>
    </div>
  )
}

export default App
