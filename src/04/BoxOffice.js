// import React from 'react'
import { useState, useEffect, useRef } from "react";

export default function BoxOffice() {
    const [tdata, setTdata] = useState([]);
    const [tags, setTags] = useState([]);
    const [selMv, setSelMv] = useState(''); //useState의 괄호 안에 든 건 selMv의 초기값
    const inRef = useRef(); //import에도 useRef 추가

    //날짜가 선택되었을 때
    const handleSetDt = (e) => {
        e.preventDefault(); //새로고침 막아줌?
        console.log(inRef.current.value) //inRef의 값을 가져오려면 .current.value 추가
        getData(); //날짜가 선택되면 데이터 가져오기
    }

    //데이터 가져오기-날짜 바꿀 때마다 새로고침 되도록
    const getData = () => {
        let tmDt = inRef.current.value.replaceAll('-','');
        let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?';
        url = url + `key=${process.env.REACT_APP_MV}`;
        url = url + `&targetDt=${tmDt}`;

        //fetch() 함수 이용 : open API 데이터 불러오기, () 내에 API 링크 넣기
        fetch(url)
            .then(resp => resp.json())
            .then(data => setTdata(data.boxOfficeResult.dailyBoxOfficeList))
            ;
    }

    //영화가 선택되었을 때
    const handleSelMv = (mv) => {
        // tm에도 한 개의 태그만 있어야 함. 그 하위에는 태그 여러 개여도 O
        let tm = <>
            <span className="mr-2 text-amber-300">{mv.movieNm}</span>
            <span className="mr-2">개봉일 : {mv.openDt}</span>
            <span className="mr-2">누적 관객수 : {parseInt(mv.audiAcc).toLocaleString()}</span>
        </>
        setSelMv(tm)
    }

    //컴포넌트 생성시
    // useEffect(() => {
    //     let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?';
    //     url = url + `key=${process.env.REACT_APP_MV}`;
    //     url = url + '&targetDt=20240708';
    //     console.log(url);

    //     //fetch() 함수 이용 : open API 데이터 불러오기, () 내에 API 링크 넣기
    //     fetch(url)
    //         .then(resp => resp.json())
    //         .then(data => setTdata(data.boxOfficeResult.dailyBoxOfficeList))
    //         ;
    // }, []);

    //tdata가 변경될 때 실행
    useEffect(() => {
        //맨 처음 초기화될 때 콘솔 창에 빈 리스트 찍히는 거 없애기
        if (tdata.length == 0) {
            return;
        }
        console.log(tdata);

        let tm = tdata.map(item =>
            <tr className="bg-white border-b  hover:bg-gray-50 hover:cursor-pointer"
                onClick={() => handleSelMv(item)}
                // 순위 항목 중 하나(==item)를 선택(클릭)했을 때(==onclick) 실행될 함수 : handleSelMv-우리가 만든 함수
                key={item.movieCd}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {item.rank}
                </th>
                <td className="px-6 py-2">
                    {item.movieNm}
                </td>
                <td className="px-6 py-2 text-right">
                    {/* 세 자리마다 쉼표 넣기-정수형으로 먼저 바꿔야함 */}
                    {parseInt(item.salesAmt).toLocaleString()}
                </td>
                <td className="px-6 py-2 text-right">
                    {parseInt(item.audiCnt).toLocaleString()}
                </td>
                <td className="px-6 py-4 text-right">
                    {parseInt(item.rankInten) > 0 ? <span className="text-red-700">⬆️</span>
                        : parseInt(item.rankInten) < 0 ? <span className="text-blue-700">⬇️</span> : '-'}
                    {parseInt(item.rankInten) != 0 && Math.abs(item.rankInten)}
                </td>
            </tr>
        );

        setTags(tm);
    }, [tdata]);

    return (
        <div className="w-10/12 relative overflow-x-auto shadow-md sm:rounded-lg">

            {/* 날짜 선택란 */}
            <form className="flex justify-end items-center text-lg mb-2">
                <label htmlFor="dt" className="text-sm mr-5 font-bold text-gray-500">
                    날짜 선택
                </label>
                <input type='date' id='dt'
                       ref={inRef}
                       onChange={handleSetDt}
                       className="bg-gray-50 border border-gray-300 text-gray-500 text-sm
                                 rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5"/>
            </form>

            {/* 영화 순위 표 */}
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-sm text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            순위
                        </th>
                        <th scope="col" className="px-6 py-3">
                            영화명
                        </th>
                        <th scope="col" className="px-6 py-3 text-right">
                            매출액
                        </th>
                        <th scope="col" className="px-6 py-3 text-right">
                            관객수
                        </th>
                        <th scope="col" className="px-6 py-3 text-right">
                            증감
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tags}
                </tbody>
            </table>

            {/* 하단 영화정보 표시 */}
            <div className="flex justify-center items-center
                            text-lg bg-blue-400 text-white
                            px-6 py-2">
                {selMv == '' ? '영화정보' : selMv}
                {/* selMv 값이 '' 즉 아무것도 선택하지 않았을 때는 '영화정보'를 표시
                    else : selMv 값을 표시 */}
            </div>
        </div>
    )
}




