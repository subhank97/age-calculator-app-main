import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="bg-gray-100 flex justify-center items-center h-screen ">

      <div id='container'  class="w-7/12 h-4/6 bg-white p-6 rounded-3xl">

        <div id='form' class="flex justify-start space-x-32 border-b-2 border-gray-200">
          <h4 class="">Day</h4>
          <h4 class="">Month</h4>
          <h4 class="">Year</h4>
        </div>

        <div id='display' class="">
          <h1>YEARS</h1>
          <h1>MONTHS</h1>
          <h1>DAYS</h1>
        </div>

      </div>
    </div>
  );
}

export default App;
