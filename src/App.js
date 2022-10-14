import React ,{ Component }  from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import Tilt from 'react-parallax-tilt';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import Rank from './components/rank/Rank';


class App extends Component {

  constructor(){
    super();
    this.state = {
       input: ''
      }
  }

  onInputChange = (event) => {
    console.log(event.target.value)
    console.log(this.state.input)
  }

  render(){
  return (
    <div className="App">
      <Navigation />
      <Tilt 
            className="tilt-img "
            tiltMaxAngleX={35}
            tiltMaxAngleY={35}
            perspective={900}
            transitionSpeed={2000}
            gyroscope={true}>
        <Logo />
      </Tilt>  
      <Rank /> 
      <ImageLinkForm onInputChange={this.onInputChange}/>
      {/* <FaceRecognition /> */}
    </div>
  );
  }
}


export default App;
