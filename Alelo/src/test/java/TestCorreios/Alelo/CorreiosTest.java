package TestCorreios.Alelo;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith (Cucumber.class)
	@CucumberOptions(plugin = {"pretty", "html:target/cucumber-html-report"},
					 features = "src/test/java/TestCorreios/Alelo/Correios.feature",
					 glue = { "" }, monochrome = true, dryRun = false)

public class CorreiosTest {

}
