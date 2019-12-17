package TestCorreios.Alelo;

import cucumber.api.java.en.*;

public class CorreiosSteps {

	CorreiosPage CorreiosPage = new CorreiosPage();

	@Given("^que eu acesse o site dos correios$")
	public void que_eu_acesse_o_site_dos_correios() throws Throwable {

		CorreiosPage.abrir_url();

	}

	@When("^eu realizar a pesquisa do \"([^\"]*)\"$")
	public void eu_realizar_a_pesquisa_do(String cep) throws Throwable {

		CorreiosPage.buscarCep(cep);

	}

	@When("^realizar a pesquisa do \"([^\"]*)\"$")
	public void realizar_a_pesquisa_do(String logradouro) throws Throwable {

		CorreiosPage.buscarLogradouro(logradouro);
	}

	@Then("^irei printar o valor retornado pela pesquisa$")
	public void irei_printar_o_valor_retornado_pela_pesquisa() throws Throwable {

		CorreiosPage.imprimirResultado();

	}

}
