package TestCorreios.Alelo;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class TestRule {

	private static WebDriver driver;

	@Before
	// ABRE A JANELA DO NAVEGADOR E MAXIMIZA //
	public void beforeCenario() throws InterruptedException {

		System.setProperty("webdriver.chrome.driver", "src/main/java/chromedriver/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}

	// MÉTODO PARA RETORNAR O MESMO WEBDRIVER UTILIZDO PARA ABRIR A JANELA DO
	// NAVEGADOR, ASSIM NÃO OCORRE ERRO DE NULLPOINTER //
	public static WebDriver getDriver() {
		return driver;
	}

	@After
	// FECHA O NAVEGADOR //
	public void fecharNavegador() throws InterruptedException {
		driver.quit();
	}
}
