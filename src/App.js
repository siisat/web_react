// import logo from './logo.svg';
import './App.css'; // js에서 css 추가하는 방법
import Hello from './01/Hello'; // Hello.js 불러오기
import MyDiv from './02/MyDiv';
import CardMain from './03/CardMain';
import BoxOffice from './04/BoxOffice';
import GalMain from './05/GalMain';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; //라우팅

import { RiHome2Line } from "react-icons/ri"; //홈아이콘 삽입

function App() {
  return (
    <BrowserRouter>
    <div className='App-header'>
      <main className='flex flex-col justify-center items-center
                      w-full md:w-4/5
                      h-full'>
        {/* md : 반응형으로 넓이 조절하기. md는 특정 픽셀보다 커지면, w-4/5는 그때의 크기를 지정하는 것 */}
        <header className='w-full h-16 bg-blue-200
                          flex justify-between items-center
                          p-5 text-gray-700'>
          <h1 className='font-bold'>리액트 실습</h1>

          {/* 상단바 선택란-누르면 해당 컴포넌트로 이동 */}
          <ul className='text-lg font-bold flex justify-center items-center'>
            <li className='px-5 hover:text-amber-400 rounded-sm'>
              <Link to='/'>Clock</Link>
            </li>
            <li className='px-5 hover:text-amber-400 rounded-sm'>
              <Link to='/Probs'>Porbs</Link>
              </li>
              <li className='px-5 hover:text-amber-400 rounded-sm'>
              <Link to='/Card'>Card</Link>
              </li>
              <li className='px-5 hover:text-amber-400 rounded-sm'>
              <Link to='/BoxOffice'>BoxOffice</Link>
              </li>
              <li className='px-5 hover:text-amber-400 rounded-sm'>
              <Link to='/GalMain'>Photo</Link>
              </li>
          </ul>
          <div>
            <RiHome2Line />
          </div>
        </header>

        {/* <div className="App-header"> */}
        <div className="w-full grow overflow-y-auto
                    flex flex-col justify-center items-center">
          {/* <Hello /> */}
          {/* <MyDiv /> */}
          {/* <CardMain /> */}
          {/* <BoxOffice /> */}

          {/* 라우팅 되는 부분 수정-path와 컴포넌트를 연결 */}
          <Routes>
            <Route path='/' element={<Hello />} />
            <Route path='/Probs' element={<MyDiv />} />
            <Route path='/Card' element={<CardMain />} />
            <Route path='/BoxOffice' element={<BoxOffice />} />
            <Route path='/GalMain' element={<GalMain />} />
          </Routes>
        </div>

        <footer className='w-full h-16
                        flex justify-center items-center'>
          {/* <p className='font-sm'>2024 여름 소프트웨어융합기초</p> */}
        </footer>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
