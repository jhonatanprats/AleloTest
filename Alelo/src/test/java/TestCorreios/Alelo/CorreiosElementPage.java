package TestCorreios.Alelo;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class CorreiosElementPage {
	
	@FindBy(css = "#Geral > div > div > span:nth-child(3) > label > input")
	protected WebElement inputPesquisa;
	
	@FindBy(css = "#Geral > div > div > span:nth-child(5) > label > select")
	protected WebElement tipoDeBusca;
	
	
	@FindBy(css = "#Geral > div > div > div.btnform > input")
	protected WebElement pesquisar;

}
