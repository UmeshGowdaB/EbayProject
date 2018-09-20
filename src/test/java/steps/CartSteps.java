package steps;

import org.fluentlenium.adapter.cucumber.FluentCucumberTest;
import org.fluentlenium.core.annotation.Page;
import org.openqa.selenium.WebDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Then;
import pages.CartPage;
import providers.DriverFactory;



public class CartSteps extends FluentCucumberTest {

    @Page
    private CartPage cartPage;
  

    @Before
    public void before(Scenario scenario) {
        super.before(scenario);
    }

    @After
    public void after(Scenario scenario) {
        super.after(scenario);
    }

    @Override
    public WebDriver newWebDriver() {
        return new DriverFactory("chrome").getDriver();
    }


    @Then("^the shopping cart should have both the items present$")
    public void the_shopping_cart_should_have_both_the_items_present()  {
        cartPage.validateCartItemOneName();
        cartPage.validateCartItemTwoName();
    }

}


