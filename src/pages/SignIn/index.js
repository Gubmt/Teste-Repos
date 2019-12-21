import React from 'react';
import { Alert, Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { emailAuth, passwordAuth } from '~/services/auth';

import logo from '~/assets/logobig.png';

import {
  Container,
  Form,
  ImageContainer,
  TextError,
  FormInput,
  FormButton,
  TextButton,
} from './styles';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Digite um e-mail válido')
    .required('*Este campo é obrigatório'),

  password: Yup.string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .required('*Este campo é obrigatório'),
});

export default function SignIn({ navigation }) {
  const _handleSubmit = values => {
    if (values.email === emailAuth && values.password === passwordAuth) {
      navigation.navigate('Repositories');
    } else {
      Alert.alert('Erro de autenticação', 'Verifique seus dados');
    }
  };

  return (
    <Container>
      <Form>
        <ImageContainer>
          <Image source={logo} />
        </ImageContainer>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={_handleSubmit}
          validationSchema={validationSchema}
          validateOnChange={false}
        >
          {({ values, handleSubmit, handleChange, isValid, errors }) => (
            <>
              {errors.email && <TextError>{errors.email}</TextError>}
              <FormInput
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Digite seu e-mail"
                value={values.email}
                onChangeText={handleChange('email')}
                name="email"
              />
              {errors.password && <TextError>{errors.password}</TextError>}
              <FormInput
                secureTextEntry
                placeholder="Digite sua senha"
                value={values.password}
                onChangeText={handleChange('password')}
                name="password"
              />
              <FormButton onPress={handleSubmit} disabled={isValid}>
                <TextButton>ENTRAR</TextButton>
              </FormButton>
            </>
          )}
        </Formik>
      </Form>
    </Container>
  );
}
