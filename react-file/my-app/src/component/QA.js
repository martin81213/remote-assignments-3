import React from 'react';
import styled from 'styled-components';

const QuestionTitle = styled.h3`
  font-size: 1.15em;
  color: #db1414;
  margin-bottom: 8px;
`;

const AnswerText = styled.h3`
  font-size: 1.15em;
  color: #0066ff;
  margin-bottom: 8px;
`;

const LargeText = styled.span`
  font-size: 1.1em; /* 增大字体大小 */
`;

function QAbox() {
  const questions = [
    "Why do we use Node.js? What does it do?",
    "Explain the Styled-Component you made. What's CSS-in-JS, and how does it help compared to regular CSS?",
    "Discuss useState and useEffect. How did you use them?",
    "Describe Client-Side Rendering vs. Server-Side Rendering. How did you achieve Server-Side Rendering in Next.js? Think about getServerSideProps.",
    "Which coding styles did you follow when coding?"
  ];

  const answers = [
    "Because nodejs runs on the Chrome V8 Javascript runtime engine and it use event-driven, non-blocking I/O archtecture,which makes it efficient and suitable for real-time applications.",
    "styled-component.jpg",
    "useState 可以變數記錄狀態 ,配合prevState語法,還可以根據之前的狀態去改變。  useEffect 則可以在狀態改變的時候去進行操作, 例如可以在按下按鈕時對server發起請求,並且不用重新render, 且可以在useEffect中處理non-synchronize的操作, 也更好去maintain。",
    "Client-Side Rendering -> 表示所有的頁面渲染 (render) 都透過瀏覽器端的 JavaScript 來完成。所有的邏輯、取資料、路由、template 都在客戶端處理。CSR 的優點是頁面更新不需要刷新頁面，非常順暢。缺點是 SEO較差, 載入速度比較慢,因為一開始要載入一大包JS。 Server-Side Rendering -> 表示伺服器收到使用者的請求之後, 在伺服器端生成完整的 HTML。因為生成 HTML 的時候會在伺服器端先取得內部或外部 API 資料, 所以相較CSR, 可以省去多次的來回往返。SSR需要的JS比較少, 所以可以更快開始互動, SEO也會因為一開始就產生完整的HTML所以表現比較好。    可以寫一個module叫做getServerSideProps,去從API獲取數據再props到component那邊。",
    "CamelCase"
  ];

  return (
    <div>
      <h1>This is a sample post.</h1>
      <ul>
        {questions.map((problem, index) => (
          <li key={index}>
            <QuestionTitle>Question:</QuestionTitle>
            <LargeText>{problem}</LargeText>
            <AnswerText>Answer: </AnswerText>
            {index === 1 ? (
              <>
                <img src={answers[1]} alt="Image" />
                <br></br>
                <LargeText>Styled components : 可以更好的管理component跟樣式,因為它會把兩個綁在一起,如此一來可讀性更高,也更容易去維護。也適合跨平台,
                使用成本不高,只需要npm install組件庫就可以直接用,也沒有全域污染的問題! <br/><br/>CSS : 優點是easy to use而且High performance,但缺點是會有overriding, Naming的問題以及瀏覽器支援與否</LargeText>
              </>
            ) : (
              <LargeText>{answers[index]}</LargeText>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
  
}

export default QAbox;
