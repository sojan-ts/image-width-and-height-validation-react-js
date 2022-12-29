import logo from './logo.svg';
import './App.css';

function App() {
  const handleOnChange = (e) => {
    var reader = new FileReader();

reader.readAsDataURL(e.target.files[0]);
reader.onload = function (e) {

var image = new Image();

image.src = e.target.result;

image.onload = function () {
var height = this.height;
var width = this.width;
if (height > 100 || width > 100) {
  alert("Height and Width must not exceed 100px.");
  return false;
}
alert("Uploaded image has valid Height and Width.");
return true;
};
};
}


  return (
<>
<div className='main-cont'>
    <form>

    <input
    type="file"
    onChange={handleOnChange}></input>

    <button type="submit">
    Submit
    </button>

    </form>
</div>
</>
  );
}

export default App;
