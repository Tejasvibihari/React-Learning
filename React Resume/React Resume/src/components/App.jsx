import Header from './Header';
import '../App.css';
import ProfileImage from './Profile';
function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <ProfileImage />
          </div>
          <div className='col-lg-4'>
            <ProfileImage />
          </div>
          <div className='col-lg-4'>
            <ProfileImage />
          </div>
        </div>
      </div>
    </div >
  )
}

export default App;
