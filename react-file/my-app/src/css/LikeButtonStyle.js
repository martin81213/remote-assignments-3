import styled from 'styled-components';

//  LikeButton 的 styled-components 組件
export const LikeButton = styled.button`
  background-color: #007bff; /* 背景顏色 */
  border: 1px solid #007bff; /* 邊框樣式 */
  color: #fff; /* 字體顏色 */
  padding: 10px 20px; /* 按鈕裡面的邊框 */
  font-size: 16px; /* 字體大小 */
  cursor: pointer; /* 鼠標的樣式 */

  /* Hover的樣式 */
  &:hover {
    background-color: #0056b3; /* Hover時的顏色 */
  }
`;

