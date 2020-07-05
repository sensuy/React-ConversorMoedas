import React from 'react';
import ReactDom from 'react-dom';
import ListarMoedas from './listar-moedas';

describe('Teste do componente de listagem de moedas', () => {

	it('Deve renderizar o componente sem erros', () => {
		const div = document.createElement('div');
		ReactDom.render(<ListarMoedas />, div);
		ReactDom.unmountComponentAtNode(div);
	});

});