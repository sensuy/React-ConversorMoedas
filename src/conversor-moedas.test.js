import React from 'react';
import ReactDOM from 'react-dom'
import ConversorMoedas from './conversor-moedas';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import axiosMock from 'axios';


describe('Teste do componente de conversão de moedas', () => {

  it('Deve renderizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ConversorMoedas />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Deve simular uma conversão de moedas', async () => {
    const { findByTestId, getByTestId } = render(<ConversorMoedas />);
    axiosMock.get.mockResolvedValueOnce({
      data: { success: true, rates: { BRL: 5.97675, USD: 1.12495 } }
    });
    fireEvent.click(getByTestId('btn-converter'));
    const modal = await findByTestId('modal'); // 1 BRL = 0.19 USD
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(modal).toHaveTextContent('1 BRL = 0.19 USD');
  });

});



