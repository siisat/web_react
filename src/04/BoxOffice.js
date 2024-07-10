// import React from 'react'
import { useState, useEffect } from "react";

export default function BoxOffice() {
    const [tdata, setTdata] = useState([]);
    const [tags, setTags] = useState([]);

    //컴포넌트 생성시
    useEffect(() => {
        let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?';
        url = url + `key=${process.env.REACT_APP_MV}`;
        url = url + '&targetDt=20240708';
        console.log(url);

        //fetch() 함수 이용 : open API 데이터 불러오기, () 내에 API 링크 넣기
        fetch(url)
            .then(resp => resp.json())
            .then(data => setTdata(data.boxOfficeResult.dailyBoxOfficeList))
            ;
    }, []);

    //tdata가 변경될 때 실행
    useEffect(() => {
        //맨 처음 초기화될 때 콘솔 창에 빈 리스트 찍히는 거 없애기
        if (tdata.length == 0) {
            return;
        }
        console.log(tdata);

        let tm = tdata.map(item => 
            <tr className="bg-white border-b  hover:bg-gray-50"
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
                            {parseInt(item.rankInten) !=0 && Math.abs(item.rankInten)}
                        </td>
                    </tr>
        );

        setTags(tm);
    }, [tdata]);

    return (
        <div className="w-10/12 relative overflow-x-auto shadow-md sm:rounded-lg">
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
        </div>
    )
}




