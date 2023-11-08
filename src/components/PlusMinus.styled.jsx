/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const AnmTransisi = css`
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
`;

export const TombolReuse = css`
  cursor: pointer;
  :hover {
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.3);
  }
`;

export const Tombol = css`
  ${AnmTransisi};
  border: none;
  color: black;
  padding: 0 12px 4px 12px;
  text-align: center;
  border-radius: 50%;
  text-decoration: none;
  display: inline-block;
  font-size: 25px;
  cursor: pointer;
  user-select: none;
  position: relative;
  top: 0;
  left: 0;
`;

export const PlusBiru = styled.div`
  ${Tombol};
  ${TombolReuse};
  background-color: #c6cfff;
`;

export const PlusGray = styled.div`
  ${Tombol};
  background-color: hsl(233.7, 15.5%, 75%);
  color: hsla(0, 0%, 100%, 0.5);
`;

export const MinusMerah = styled.div`
  ${Tombol};
  ${TombolReuse};
  background-color: #ffc6c6;
  padding: 0 15px 4px 15px;
`;
