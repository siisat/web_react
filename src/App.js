// import logo from './logo.svg';
import './App.css'; // js에서 css 추가하는 방법
import Hello from './01/Hello'; // Hello.js 불러오기
import MyDiv from './02/MyDiv';
import CardMain from './03/CardMain';
import BoxOffice from './04/BoxOffice';
import GalMain from './05/GalMain';
import Final from './test/Final';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; //라우팅

import { RiHome2Line } from "react-icons/ri"; //홈아이콘 삽입

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col w-full max-w-screen-xl h-screen mx-auto overscroll-y-auto">
        
          {/* md : 반응형으로 넓이 조절하기. md는 특정 픽셀보다 커지면, w-4/5는 그때의 크기를 지정하는 것 */}
          <header className='text-xl font-bold h-20 p-10 bg-blue-200 text-gray-700
                          flex justify-between items-center'>
            <h1 className='text-xl font-bold'>리액트실습</h1>

            {/* 상단바 선택란-누르면 해당 컴포넌트로 이동 */}
            <ul className='text-lg font-bold flex justify-center items-center'>
              <li className='px-5 hover:text-amber-400 hover:cursor-pointer rounded-sm'>
                <Link to='/'>Clock</Link>
              </li>
              <li className='px-5 hover:text-amber-400 hover:cursor-pointer rounded-sm'>
                <Link to='/Probs'>Porbs</Link>
              </li>
              <li className='px-5 hover:text-amber-400 hover:cursor-pointer rounded-sm'>
                <Link to='/Card'>Card</Link>
              </li>
              <li className='px-5 hover:text-amber-400 hover:cursor-pointer rounded-sm'>
                <Link to='/BoxOffice'>BoxOffice</Link>
              </li>
              <li className='px-5 hover:text-amber-400 hover:cursor-pointer rounded-sm'>
                <Link to='/GalMain'>Photo</Link>
              </li>
              <li className='px-5 hover:text-amber-400 hover:cursor-pointer rounded-sm'>
                <Link to='/final'>기말고사</Link>
              </li>
            </ul>
            <div>
              <RiHome2Line />
            </div>
          </header>

          <main className='grow w-full flex justify-center items-center overflow-y-auto '>
            {/* 라우팅 되는 부분 수정-path와 컴포넌트를 연결 */}
            <Routes>
              <Route path='/' element={<Hello />} />
              <Route path='/Probs' element={<MyDiv />} />
              <Route path='/Card' element={<CardMain />} />
              <Route path='/BoxOffice' element={<BoxOffice />} />
              <Route path='/GalMain' element={<GalMain />} />
              <Route path='/final' element={<Final />} />
            </Routes>
          </main>

          <footer className='flex justify-center items-center 
                        h-20 bg-black text-slate-100'>
            <p className='text-sm font-bold'>
              2024 여름 계절학기 소프트웨어융합기초1
            </p>
          </footer>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
