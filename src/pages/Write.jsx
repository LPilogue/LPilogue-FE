import React, { useState } from 'react';
const Write = () => {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  // 오늘 날짜 및 3일 전 날짜 계산
  const today = new Date();
  const threeDaysAgo = new Date();
  threeDaysAgo.setDate(today.getDate() - 3);
  const todayString = today.toISOString().split('T')[0];
  const threeDaysAgoString = threeDaysAgo.toISOString().split('T')[0];

  return (
    <div
      style={{
        padding: '20px',
        maxWidth: '390px', // 컴포넌트 넓이 고정
        width: '390px',
        margin: '0 auto',
        border: 'none',
        backgroundColor: '#F9F2DF', // 전체 배경 색상 설정
        userSelect: 'none',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column', // 세로로 정렬
          gap: '15px', // 각 행 사이의 간격
        }}
      >
        <button
          onClick={() => alert('일기 저장 완료!')}
          disabled={!date || text.length < 1} // 날짜 선택 및 최소 1글자 입력 시 활성화
          style={{
            backgroundColor: date && text.length > 0 ? '#56B7C4' : '#ccc',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: date && text.length > 0 ? 'pointer' : 'not-allowed',
            width: '40px',
            whiteSpace: 'nowrap',
            alignSelf: 'flex-end',
          }}
        >
          완료
        </button>
        <input
          type="date"
          value={date}
          onChange={handleDateChange}
          max={todayString} // 오늘 날짜까지 선택 가능
          min={threeDaysAgoString} // 3일 전 날짜부터 선택 가능
          onKeyDown={(e) => e.preventDefault()} // 키보드를 통한 입력 방지
          style={{
            width: '100%',
            height: '30px',
            backgroundColor: '#F9F2DF', // 입력 필드 배경 색상
            border: 'none',
            borderRadius: '4px',
            outline: 'none', // 포커스 시 태두리 제거
          }}
        />
      </div>

      <hr style={{ border: '0.5px solid #ccc', margin: '15px 0' }} />

      <textarea
        placeholder="일기를 작성해보세요"
        value={text}
        onChange={handleTextChange}
        spellCheck="false"
        style={{
          width: '100%',
          height: '450px',
          lineHeight: '1.25',
          border: 'none', // 가장자리 제거
          outline: 'none', // 포커스 시 외곽선 제거
          backgroundColor: '#F9F2DF', // 텍스트 영역 배경 색상
          resize: 'none', // 크기 조절 비활성화
        }}
        maxLength={500}
      />
      <div
        style={{ textAlign: 'right', marginBottom: '10px', userSelect: 'none' }}
      >
        <span>{text.length}/500</span>
      </div>
    </div>
  );
};

export default Write;
