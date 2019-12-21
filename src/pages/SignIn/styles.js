import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  padding: 20px;
  background: #eee;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 20px;
  padding: 20px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ImageContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const TextError = styled.Text`
  margin: 5px;
  font-size: 12px;
  color: #f00;
`;

export const FormInput = styled.TextInput`
  height: 45px;
  margin-bottom: 10px;
  padding-left: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const FormButton = styled(RectButton)`
  height: 45px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #00acee;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;
