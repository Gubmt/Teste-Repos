import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 20px;
  background: #eee;
  align-items: center;
  justify-content: center;
`;

export const InputFilter = styled.TextInput`
  align-self: stretch;
  padding-left: 20px;
  border: 1px solid #333;
  border-radius: 4px;
  background: #fff;
  margin-bottom: 15px;
`;

export const Box = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  align-self: stretch;
`;

export const Cards = styled.View`
  align-self: stretch;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 4px;
  background: #fff;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #999;
  margin-bottom: 10px;
`;

export const Desc = styled.Text`
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
`;

export const Url = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #00acee;
`;

export const Error = styled.View`
  flex: 1;
`;

export const ErrorBox = styled.View`
  align-self: auto;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 4px;
  background: #fff;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const ErrorText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #999;
  margin-bottom: 10px;
`;
