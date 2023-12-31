import styled from "styled-components/native";

export const ContainerDateTime = styled.Text`
    color: black;
    font-size:15px;
    font-weight: bold;
    padding: 10px;
    margin-left: 10px;
    width: 250px;
    align-items: flex-end;
`;

export const Background = styled.SafeAreaView`
flex: 1;
background-color: #F0F4FF;
`;

export const ListBalance = styled.FlatList`
max-height: 160px;

`;
export const LabelData = styled.Text`
color: black;
font-size:15px;
font-weight: bold;
padding: 10px;
margin-left: 10px;
margin-top: 10px;

`;

export const Label = styled.Text`
color: black;
font-size:15px;
font-weight: bold;
padding: 10px;
margin-left: 10px;
`;

export const Area = styled.View`
margin-top: 5px;
background-color: #FFF;
border-top-left-radius: 15px;
border-top-right-radius: 15px;
flex-direction: row;
padding-left: 14px;
padding-right: 14px;
padding-top: 14px;
align-items: baseline;
`;

export const Title = styled.Text`
margin-left: 4px;
color: #121212;
margin-bottom: 14px;
font-weight: bold;
font-size: 18px;
`;

export const List = styled.FlatList`
flex: 1;
background-color: #FFF;
`;

export const Text = styled.Text`
margin-left: 20px;
margin-top: 10px;
color: #121212;
font-weight: bold;
font-size: 18px;
`;
