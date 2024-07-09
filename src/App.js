// import logo from './logo.svg';
import './App.css'; // js에서 css 추가하는 방법
// import Hello from './01/Hello'; // Hello.js 불러오기
import MyDiv from './02/MyDiv';
import CardMain from './03/CardMain';

import { RiHome2Line } from "react-icons/ri"; //홈아이콘 삽입

function App() {
  return (
    <div className='App-header'>
      <main className='flex flex-col justify-center items-center
                      w-full md:w-4/5
                      h-full'>
        {/* md : 반응형으로 넓이 조절하기. md는 특정 픽셀보다 커지면, w-4/5는 그때의 크기를 지정하는 것 */}
        <header className='w-full h-16 bg-blue-200
                          flex justify-between
                          p-5 text-gray-700'>
          <h1 className='font-bold'>리액트 실습</h1>
          <div>
            <RiHome2Line />
          </div>
        </header>
        {/* <div className="App-header"> */}
        <div className="w-full grow
                    flex flex-col justify-center items-center">
          {/* <Hello /> */}
          {/* <MyDiv /> */}
          <CardMain />
        </div>
        <footer className='w-full h-16
                        flex justify-center items-center
                        '>
          <p className='font-sm font-bold'>2024 여름 소프트웨어융합기초</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
