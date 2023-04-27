import styled from "styled-components";

export const Image = styled.img`
display: block;
height: auto;
width: 150px;
margin-top: 30px;
margin-left: auto;
margin-right: auto;
object-fit: contain;
overflow: hidden;
border-radius: 50%;
background-color: aliceblue;
`

export const ProfileCard = styled.div`
width: 300px;
height: 450px;
border: 1px solid silver;
border-radius: 10px;
position: absolute;
`
export const DescriptionCard = styled.div`
 background-color: #fff;   
 font-family: 'Roboto', sans-serif;
 text-align: center;
`
export const CardName = styled.p`
    font-size: 25px;
    font-weight: 800;
    margin-top: 10px;
    margin-bottom: 0;
`
export const CardTag = styled.p`
    font-size: 20px;
    color: lightgrey;
    margin-top: 10px;
    margin-bottom: 0;
`
export const CardLocation = styled.p`
    font-size: 20px;
    color: lightgrey;
    margin-top: 10px;
    margin-bottom: 0;
`
export const Stats = styled.ul`
    display: flex;
    list-style: none;
    padding-left: 0;
    justify-content: center;
    position: relative;
    bottom: 0;
`
export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% / 3);
    height: 70px;
`
