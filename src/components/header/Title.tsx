import React from 'react';
import { Link } from 'react-router-dom';
function Title() {
  return (
    <div className="bg-white flex text-center font-bold text-lg justify-center">
      <Link
        to={`/`} // 적절한 링크 경로 설정
      >
        MUSINSAWAGON
      </Link>
    </div>
  );
}

export default Title;
